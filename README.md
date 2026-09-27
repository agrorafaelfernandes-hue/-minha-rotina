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


## V32 — Otimização de desempenho
- Persistência deixa de redesenhar todas as telas a cada toque.
- Atualiza somente Home/componentes leves e o painel atualmente aberto.
- Evolução, Histórico, Biblioteca e Alimentação só são renderizados quando necessários.
- Evangelho deixa de fazer tentativa de rede a cada alteração de água, leitura, estudo etc.; carrega apenas ao abrir Orações.
- Corrige também o botão Editar livro, que ainda era gerado com onclick inline.
- Adiciona content-visibility aos painéis inativos para reduzir trabalho de layout no iPhone.


## V33 — Histórico dentro das áreas
- Água agora registra cada ajuste com horário.
- Área Água mostra registros de hoje e totais dos últimos 7 dias.
- Estudos agora são registrados por sessão, com horário, minutos e tema.
- Área Estudos mostra sessões do dia e resumo dos últimos 7 dias.
- Sessões de estudo podem ser excluídas individualmente.
- Histórico diário também exibe as sessões de estudo com horário e tema.
- Evolução passa a considerar a soma das sessões quando elas existirem.
- Mantém compatibilidade com registros antigos que só tinham total diário.


## V34 — Auditoria consolidada
- Consolida as melhorias da V33 sem exigir upload intermediário.
- Corrige meta diária de leitura da Home para 10 páginas (70 permanece referência semanal).
- Treinos deixam de reconstruir toda a ficha a cada tecla; cargas, reps e observações são salvas silenciosamente.
- Remove renderizações duplicadas após salvar refeição/livro/páginas.
- Corrige estado visual dos filtros da Biblioteca.
- Mantém históricos próprios de Água e Estudos.
- Adiciona Diagnóstico rápido na Conta para verificar telas, armazenamento local, banco de fotos, estrutura de dados e nuvem.
- Auditoria estática: JavaScript válido, sem IDs duplicados e sem atributos onclick/onchange/oninput inline.


## V35 — Biblioteca online + Perfil & Medidas
- Biblioteca integrada à Open Library para pesquisa de livros por título.
- Busca automática após digitação com debounce para reduzir chamadas.
- Preenche título, autor, capa, páginas, editora, ano, ISBN e descrição quando disponíveis.
- Guarda assuntos/temas do livro para apoiar recomendações.
- Sugestões personalizadas com base em temas, autores, status de leitura e avaliações.
- Sugestões podem ser adicionadas diretamente em “Quero ler”.
- Nova área Perfil & Medidas dentro de Conta.
- Altura e meta de peso opcionais.
- Registro por data de peso, cintura, abdômen, peitoral, braço, coxa e quadril.
- Peso registrado em Perfil também alimenta a evolução diária de peso.
- Histórico de medidas com exclusão individual.


## V36 — Peso diário + Treino 2.0
- Peso do dia agora pode ser registrado diretamente na Home.
- O peso diário alimenta automaticamente Perfil & Medidas, Histórico e Evolução.
- Novo fluxo de treino: escolher ficha A/B/C/D, iniciar sessão, executar exercício por exercício e finalizar.
- Checklist por exercício com progresso visual da sessão.
- Cada exercício mostra prescrição, grupo muscular e instruções de execução.
- Campos de carga, repetições e observação permanecem disponíveis durante a sessão.
- Mostra carga anterior quando disponível.
- Botão “Ver execução” abre uma busca de vídeo do exercício no YouTube.
- Sessão pode ser finalizada como completa ou parcial.
- Treino realizado passa a ser contado pela sessão finalizada, não apenas por uma ficha preenchida.
- Histórico de treinos mostra data, ficha, resultado, exercícios concluídos e duração.
- Mantém acesso às fichas/cargas antigas em um bloco recolhível.


## V37 — Vida espiritual 2.0
- Evangelho do dia passa a exibir o texto completo diretamente na tela.
- O Evangelho pode ser marcado como lido.
- Nova Reflexão do dia, com aplicação prática e marcação de conclusão.
- Meta espiritual diária = Evangelho lido + Reflexão feita (2 itens).
- Removidas da meta: oração da manhã, Angelus e oração da noite.
- Novo módulo de Terço como atividade extra, sem impacto na meta diária.
- Mistérios Gozosos, Luminosos, Dolorosos e Gloriosos disponíveis para consulta.
- O app destaca automaticamente os mistérios tradicionalmente rezados no dia da semana.
- Registro do terço com data, hora e tipo de mistério.
- Histórico diário passa a mostrar Evangelho, Reflexão e Terço.
- Evolução espiritual passa a considerar somente Evangelho + Reflexão.


## V38 — Treino livre
- “Adicionar treino” agora oferece dois caminhos: ficha guiada A/B/C/D ou treino livre.
- Treino livre aceita atividade, duração, distância opcional e observação.
- Exemplo: Esteira · 30 min · 3,2 km.
- Treino livre finalizado conta normalmente na aderência e na Evolução.
- O histórico diferencia sessões guiadas de atividades livres.
- A Home mostra diretamente a atividade livre e a duração.
- Mantidos todos os recursos da V37 (Vida espiritual 2.0).

## V38.1 — correção de inicialização
- Corrige erro da V38 que impedia o app de abrir.
- A função do modo de treino estava sendo executada antes da variável de controle ser inicializada.
- Mantém Treino Livre, Treino guiado e Vida Espiritual 2.0.
