import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const html=fs.readFileSync(new URL("../index.html",import.meta.url),"utf8");

function extractFunction(name){
  const asyncStart=html.indexOf(`async function ${name}(`);
  const start=asyncStart>=0?asyncStart:html.indexOf(`function ${name}(`);
  assert.notEqual(start,-1,`função ${name} não encontrada`);
  const brace=html.indexOf("{",start);
  let depth=0;
  for(let i=brace;i<html.length;i++){
    if(html[i]==="{") depth++;
    else if(html[i]==="}" && --depth===0) return html.slice(start,i+1);
  }
  throw new Error(`função ${name} incompleta`);
}

const protectionBlock=html.match(/\/\/ DATA_PROTECTION_START([\s\S]*?)\/\/ DATA_PROTECTION_END/)?.[1];
assert.ok(protectionBlock,"bloco de proteção não encontrado");

function createStorage(seed={},failKeys=[]){
  const values={...seed};
  const writes=[];
  return {
    values,
    writes,
    api:{
      getItem(key){return Object.hasOwn(values,key)?values[key]:null;},
      setItem(key,value){
        if(failKeys.includes(key)) throw new Error("QuotaExceededError");
        values[key]=String(value);
        writes.push([key,String(value)]);
      },
      removeItem(key){delete values[key];}
    }
  };
}

function createContext(storage){
  const elements={
    syncStatus:{textContent:"",className:""},
    backupMsg:{textContent:""},
    authMsg:{textContent:""},
    mainApp:{classList:{contains:()=>false}}
  };
  const context={
    console,
    alerts:[],
    alert(message){context.alerts.push(message);},
    clearTimeout(){},
    document:{getElementById:id=>elements[id]||null},
    localStorage:storage.api,
    elements
  };
  vm.createContext(context);
  vm.runInContext(protectionBlock,context);
  return context;
}

function createImportHarness({initialState,failMainWrite=false}){
  const originalRaw=JSON.stringify(initialState);
  const storage=createStorage({rotinaV3:originalRaw},failMainWrite?["rotinaV3"]:[]);
  const context=createContext(storage);
  const code=`
    let state=${originalRaw};
    let localStateWriteBlocked=false;
    let localChangesPending=false;
    let syncPausedAfterImport=false;
    let saveTimer=0;
    let syncCalls=0;
    let supabase={from(){syncCalls++;return {upsert:async()=>({error:null})}}};
    let user={id:"user-1"};
    let mode="cloud";
    function ensureStateShape(){
      if(!state.exerciseLogs) state.exerciseLogs={};
      if(!state.goals) state.goals={water:3,meals:3,reading:10,study:30,workoutsWeek:4};
      if(!Array.isArray(state.library)) state.library=[];
      if(!Array.isArray(state.workoutSessions)) state.workoutSessions=[];
      if(!Array.isArray(state.rosaryEntries)) state.rosaryEntries=[];
    }
    function isValidBackupState(value){return isValidStateStructure(value);}
    function createPreImportBackup(){
      const current=readStorageValue("rotinaV3");
      if(current.error) return false;
      return writeStorageValue("rotinaPreImportBackup",current.value??JSON.stringify(state));
    }
    function markLocalSaved(){writeStorageValue("rotinaLastLocalSave","now",{notify:false});}
    ${extractFunction("setLocalChangesPending")}
    ${extractFunction("setImportSyncPaused")}
    function renderBackupStatus(){}
    ${extractFunction("importBackupText")}
    ${extractFunction("syncCloud")}
    globalThis.inspect=()=>({state,localStateWriteBlocked,localChangesPending,syncPausedAfterImport,syncCalls});
  `;
  vm.runInContext(code,context);
  return {context,storage,originalRaw};
}

{
  const raw=JSON.stringify({days:{"2026-10-03":{water:2}},exerciseLogs:{}});
  const storage=createStorage({rotinaV3:raw});
  const context=createContext(storage);
  const result=context.readStoredJson("rotinaV3",{},context.isValidStateStructure);
  assert.equal(result.error,null);
  assert.equal(result.value.days["2026-10-03"].water,2);
}

{
  const raw='{"days":';
  const storage=createStorage({rotinaV3:raw});
  const context=createContext(storage);
  const result=context.readStoredJson("rotinaV3",{days:{}},context.isValidStateStructure);
  assert.ok(result.error);
  assert.equal(result.raw,raw);
  assert.equal(storage.values.rotinaV3,raw,"o conteúdo corrompido deve permanecer intacto");
  assert.equal(storage.writes.length,0,"a leitura não deve sobrescrever o conteúdo original");
}

{
  const raw=JSON.stringify({days:{},library:["item-inválido"]});
  const storage=createStorage({rotinaV3:raw});
  const context=createContext(storage);
  const result=context.readStoredJson("rotinaV3",{days:{}},context.isValidStateStructure);
  assert.equal(result.error,"estrutura inesperada");
  assert.equal(storage.values.rotinaV3,raw);
  assert.equal(storage.writes.length,0);
}

{
  const storage=createStorage({},["rotinaV3"]);
  const context=createContext(storage);
  assert.equal(context.writeStorageValue("rotinaV3","novo"),false);
  assert.equal(storage.values.rotinaV3,undefined);
  assert.match(context.elements.syncStatus.textContent,/Falha ao salvar/);
}

{
  const initial={days:{"2026-10-01":{water:1}},exerciseLogs:{}};
  const imported={days:{"2026-10-02":{water:3}},exerciseLogs:{}};
  const {context,storage,originalRaw}=createImportHarness({initialState:initial});
  const result=context.importBackupText(JSON.stringify({app:"Minha Rotina",state:imported}));
  assert.equal(result.ok,true,result.message);
  assert.equal(storage.values.rotinaPreImportBackup,originalRaw);
  assert.equal(JSON.parse(storage.values.rotinaV3).days["2026-10-02"].water,3);
  const status=context.inspect();
  assert.equal(status.localChangesPending,true);
  assert.equal(status.syncPausedAfterImport,true);
}

{
  const initial={days:{"2026-10-01":{water:1}},exerciseLogs:{}};
  const {context,storage,originalRaw}=createImportHarness({initialState:initial});
  const malformed=context.importBackupText('{"state":');
  assert.equal(malformed.ok,false);
  assert.equal(storage.values.rotinaV3,originalRaw);
  assert.deepEqual(JSON.parse(JSON.stringify(context.inspect().state)),initial);
}

{
  const initial={days:{"2026-10-01":{water:1}},exerciseLogs:{}};
  const {context,storage,originalRaw}=createImportHarness({initialState:initial});
  const invalid=context.importBackupText('{"state":{"days":[]}}');
  assert.equal(invalid.ok,false);
  assert.equal(storage.values.rotinaV3,originalRaw);
  assert.deepEqual(JSON.parse(JSON.stringify(context.inspect().state)),initial);
  assert.equal(storage.values.rotinaPreImportBackup,undefined,"arquivo inválido não deve iniciar substituição");
}

{
  const initial={days:{"2026-10-01":{water:1}},exerciseLogs:{}};
  const imported={days:{"2026-10-02":{water:3}},exerciseLogs:{}};
  const {context,storage,originalRaw}=createImportHarness({initialState:initial,failMainWrite:true});
  const result=context.importBackupText(JSON.stringify({state:imported}));
  assert.equal(result.ok,false);
  assert.equal(storage.values.rotinaV3,originalRaw);
  assert.equal(storage.values.rotinaPreImportBackup,originalRaw,"a cópia anterior deve existir após falha de gravação");
  assert.deepEqual(JSON.parse(JSON.stringify(context.inspect().state)),initial);
}

{
  const initial={days:{"2026-10-01":{water:1}},exerciseLogs:{}};
  const imported={days:{"2026-10-02":{water:3}},exerciseLogs:{}};
  const {context}=createImportHarness({initialState:initial});
  assert.equal(context.importBackupText(JSON.stringify({state:imported})).ok,true);
  await context.syncCloud();
  assert.equal(context.inspect().syncCalls,0,"a sincronização automática deve permanecer bloqueada após importar");
}

console.log("Fase 2A: 9 cenários de proteção local aprovados.");
