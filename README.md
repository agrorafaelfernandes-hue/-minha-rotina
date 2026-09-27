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


## V13 — layout aprovado
- Home reconstruída conforme o layout aprovado.
- Destaques: versículo do dia, progresso, água, alimentação, treino, leitura, estudo e orações.
- Nova aba Áreas da Rotina com detalhes por categoria.
- Alimentação com registro de refeições e composição.
- Leitura preparada para evoluir para biblioteca.
- Estudo unificado.
- Orações com checklist diário.


## V14 — correção de runtime/login
- Corrigido erro JavaScript causado por campos removidos da Home V13.
- Listeners de elementos antigos agora são opcionais.
- Login volta a responder normalmente.
- Mantido integralmente o layout aprovado da V13.
- Cache atualizado para V14.


## V15 — Biblioteca
- Biblioteca pessoal integrada ao app.
- Categorias: Lendo, Quero ler, Concluídos e Pausados.
- Cadastro de título, autor, capa, páginas, datas, nota e observações.
- Livro atual integrado à Home.
- Registro rápido de +10 páginas.
- Conclusão automática ao atingir o total de páginas.
- Dados da biblioteca sincronizados junto com o estado do usuário no Supabase.


## V16 — correção dos botões da interface
- Corrigida a abertura da Biblioteca e dos demais botões que usam ações inline.
- O JavaScript continua como módulo, mas as funções necessárias agora são expostas explicitamente para a interface.
- Mantida toda a Biblioteca da V15.
- Cache atualizado para V16.


## V18 — Alimentação com fotos
- Módulo completo de alimentação diária.
- Registro de tipo, horário, descrição e observações.
- Marcação de proteína, carboidrato, vegetais e gordura boa.
- Foto opcional da refeição usando câmera ou biblioteca do aparelho.
- Fotos comprimidas e armazenadas localmente em IndexedDB para não inflar o JSON do Supabase.
- Dados textuais continuam sincronizados normalmente.
- Próxima evolução planejada: Supabase Storage para sincronização das fotos entre dispositivos.


## V19 — Orações
- Módulo diário de oração integrado à Home.
- Oração da manhã, Angelus e oração da noite com checklist.
- Campo para intenção de oração do dia.
- Progresso 0/3, 1/3, 2/3 e 3/3.
- Versículo diário rotativo por data, exibido também na Home.
- Dados salvos no mesmo estado sincronizado pelo Supabase.


## V20 — Evangelho do dia
- Bloco Evangelho do dia dentro de Orações.
- Busca online da liturgia por data na API pública liturgia.up.railway.app/v2.
- Mostra referência, dia litúrgico, texto do Evangelho, resumo curto, mensagem central e aplicação prática.
- Botão para atualizar a leitura.
- Botão “Marcar como lido”.
- Cache local da liturgia do dia para funcionar melhor quando a conexão oscilar.
- Se a fonte não responder e não houver cache, o app informa claramente que não conseguiu confirmar a leitura em vez de inventar conteúdo.


## V21 — Evolução
- Filtros de 7 dias, 30 dias e histórico geral.
- Indicadores de aderência média, treinos, estudo e leitura.
- Gráficos simples de consistência e hidratação.
- Métricas de alimentação, orações e Evangelho lido.
- Sequência atual baseada em dias com pelo menos 60% da rotina concluída.
- Evolução de peso com último registro e variação no período.


## V22 — Correção Evolução
- Corrige os filtros de 30 dias e Geral.
- Valida as chaves de data antes de montar o histórico.
- 7 e 30 dias agora incluem corretamente os dias sem registro, evitando inconsistências de período.
- O histórico Geral usa apenas dias com data válida.
- Gráficos longos são compactados visualmente para caber melhor no celular, sem alterar os cálculos dos indicadores.


## V23 — Filtros de Evolução robustos
- Troca os filtros 7/30/Geral para event listeners diretos no módulo JavaScript.
- Remove dependência de onclick inline nos botões de período.
- Corrige chamada indevida de renderEvolution ao abrir qualquer painel.
- Adiciona rótulo visível do período selecionado para facilitar a validação.
- Mantém a V22 como base de cálculo e tratamento das datas.


## V24 — Histórico diário
- Nova área Histórico diário.
- Navegação por data com seletor e botões de dia anterior/próximo.
- Resumo de água, refeições, leitura, estudo, treino e peso.
- Lista das refeições do dia com foto local quando disponível.
- Exibe oração da manhã, Angelus, oração da noite, Evangelho lido e intenção do dia.
- Mostra observações registradas no dia.


## V25 — Correção de acesso ao Histórico
- Corrige a abertura do Histórico diário com listeners diretos em JavaScript.
- Adiciona acesso ao Histórico tanto na Home quanto em Áreas.
- Controles de data anterior, próxima data e seletor de data também usam listeners diretos.
- Reforça showPanel para evitar falha silenciosa de navegação.


## V26 — Conta, Backup e revisão de estabilidade
- Acesso direto a Dados & Backup pela aba Conta.
- Mostra quantidade de dias registrados, livros, último salvamento local e última sincronização na nuvem.
- Exportação gera arquivo JSON datado com metadados da versão.
- Importação valida a estrutura do arquivo antes de substituir dados.
- Antes de importar, preserva automaticamente uma cópia local do estado anterior.
- Sincronização manual informa sucesso ou erro com mais clareza.
- Fotos das refeições continuam locais e não entram no backup JSON nesta versão.


## V27 — Correção de navegação Alimentação/Orações
- Remove onclick inline de todos os atalhos para Alimentação e Orações.
- Adiciona listeners diretos via data-open-panel.
- showPanel agora abre o painel antes de qualquer renderização e isola erros de render para não bloquear a navegação.
- Mantém todos os recursos da V26.


## V28 — Correção do registro de alimentação
- Remove dependência de onclick inline para abrir, salvar e fechar o formulário de refeição.
- Usa listener delegado para todos os botões de alimentação, inclusive os renderizados dinamicamente.
- openMealForm força a exibição do formulário e rola a tela até ele.
- Mantém fotos, dados e sincronização da versão anterior.


## V29 — Correção para excluir refeição
- Remove onclick inline do botão Excluir.
- Usa listener delegado para excluir refeições renderizadas dinamicamente.
- Adiciona confirmação antes da exclusão.
- Remove também a foto local associada à refeição quando existir.


## V30 — Pacote de estabilidade
- Consolida correções de navegação e ações em um pacote maior.
- Alimentação: abrir, salvar, foto e excluir via listener delegado.
- Biblioteca: abrir formulário, salvar, filtrar, adicionar páginas e excluir livro sem depender de onclick inline.
- Orações: checklist, intenção e ações do Evangelho por listeners diretos.
- Navegação de áreas e painéis centralizada.
- Confirmação antes de excluir livros e refeições.
- Tratamento defensivo do carregamento do Evangelho.
- Ajustes de resposta ao toque no iPhone.
- Mantém Histórico, Evolução e Backup da V26+.


## V31 — Auditoria das áreas Água, Leitura e Estudos
- Água: abertura da área, +0,5 L, -0,5 L, atualização do indicador e persistência.
- Leitura: atalhos passam diretamente para a Biblioteca; incremento de páginas aceita valores corretamente.
- Estudos: formulário de minutos e tema salvo por listener direto, sem onclick inline.
- Progresso diário atualizado para usar os campos atuais: treino, água, refeições, páginas, estudo e oração.
- Remove dependências legadas de English/Leadership no cálculo do progresso.
- Auditoria confirma ausência de onclick/onchange inline.
