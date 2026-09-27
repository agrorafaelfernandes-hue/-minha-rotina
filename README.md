# Minha Rotina — V3 (PWA + sincronização preparada)

## Novidades
- Funciona como PWA instalável
- Cache offline com Service Worker
- Tela de login
- Sincronização preparada para Supabase
- Backup/exportação e importação JSON
- Mantém modo local caso a nuvem ainda não esteja configurada
- Continua com treino, água, alimentação, leitura, inglês, PNL, peso, tela e LinkedIn

## Como publicar gratuitamente
Sugestões: Netlify, Vercel, GitHub Pages ou Cloudflare Pages.

## Como habilitar a nuvem com Supabase
1. Crie um projeto no Supabase.
2. Abra o SQL Editor e execute `supabase_schema.sql`.
3. Em Project Settings > API, copie:
   - Project URL
   - anon public key
4. Cole esses dados em `config.js`.
5. Publique os arquivos em um host HTTPS.
6. Abra o site, crie a conta e faça login.

IMPORTANTE: use apenas a `anon public key` no navegador. Nunca use a `service_role` key no frontend.

## Instalar no iPhone
Depois que o site estiver publicado em HTTPS:
1. Abra no Safari.
2. Toque em Compartilhar.
3. Escolha “Adicionar à Tela de Início”.

## Limitação desta entrega
Como as credenciais do Supabase pertencem ao seu projeto, elas não foram preenchidas automaticamente.


## V4
- Configuração do Supabase diretamente dentro do app
- Arquivo netlify.toml para publicação estática
- Guia DEPLOY.md
- Não é mais necessário editar config.js manualmente para ativar a nuvem


## V5 — Supabase conectado
Configuração embutida:
- Project URL: https://kmpaxqejfbebzdhqsodr.supabase.co
- Publishable key: configurada em `config.js`

### Próximo passo
Suba novamente esta versão no mesmo projeto Netlify para atualizar o site.

Depois:
1. Abra o site publicado.
2. Crie uma conta pelo formulário do app.
3. Faça login.
4. Registre um dado de teste.
5. Recarregue a página para confirmar que o dado persiste.


## V6
- Cache atualizado para garantir carregamento da configuração do Supabase.
- config.js usa network-first.


## V7 — conexão embutida
- Configuração pública do Supabase incorporada diretamente ao `index.html`.
- O app não depende mais de `config.js` para iniciar o Supabase.
- Service Worker atualizado para evitar versões antigas em cache.
- O selo `V7 · Cloud` confirma visualmente o deploy correto.

## V8 — correção de sincronização
- Status agora muda explicitamente entre Carregando, Sincronizando, Sincronizado e Erro de sync.
- Carregar dados da nuvem não dispara uma nova gravação automaticamente.
- Adicionado tratamento de erro para leitura e gravação no Supabase.


## V12 — versão estável
- Reconstruída sobre a V8 estável para eliminar duplicações e HTML quebrado.
- Login corrigido e validado.
- Atalhos rápidos sem duplicação.
- Progresso diário.
- Resumo semanal.
- Última carga do exercício.
- Layout mobile limpo.
