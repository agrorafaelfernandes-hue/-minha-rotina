# Publicação da V4 — caminho mais simples

## Etapa 1 — publicar o site
A forma mais simples é usar um serviço de hospedagem estática gratuito, como Netlify.

1. Descompacte `minha_rotina_v4_deploy.zip`.
2. No painel do serviço, crie um novo site por upload/drag-and-drop.
3. Envie a pasta completa da V4.
4. Aguarde a geração do endereço HTTPS.
5. Abra o endereço no iPhone pelo Safari.

## Etapa 2 — instalar no iPhone
No Safari:
1. Compartilhar
2. Adicionar à Tela de Início

O aplicativo abrirá em modo standalone como um app.

## Etapa 3 — habilitar sincronização
1. Crie um projeto gratuito no Supabase.
2. No SQL Editor, execute `supabase_schema.sql`.
3. Em Project Settings > API, copie:
   - Project URL
   - anon public key
4. No app, abra Conta > Configurar sincronização em nuvem.
5. Cole os dois dados e salve.
6. Crie sua conta e faça login.

Nunca use a `service_role key` no navegador.

## Resultado
A partir daí, os dados poderão ser sincronizados pelo login e continuarão tendo backup local/exportação JSON.
