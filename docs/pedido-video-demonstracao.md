# Pedido: vídeo demonstrativo do JB Gestão (para colar numa sessão nova)

Combinado com o usuário em 27/09/2026. Cole o texto abaixo numa sessão nova do
Claude Code com este repositório, depois de liberar a rede do ambiente.

---

Quero um vídeo demonstrativo do JB Gestão Condominial para a página
https://www.jbservicosrn.com.br/jb-gestao (arquivo `src/app/jb-gestao/page.tsx`
deste repositório). Já está tudo combinado e autorizado:

**Contexto**
- Sistema: painel em https://jb-gestao-cond.jbservicosrn.com.br, código no
  repositório `jbservicosrn/jb-gestao-painel-web` (adicione à sessão e leia o
  CLAUDE.md e o `docs/manual-tecnico.md` antes de tudo). Banco: Supabase,
  projeto `jb-gestao-cond` (id `ieccmoscedqdexogytkv`), acessível pelas
  ferramentas do Supabase desta sessão.
- O site é publicado pela Vercel a partir da branch
  `claude/great-shannon-5jvovl`. **Autorizo enviar as mudanças do site para essa
  branch** (é ela que vai ao ar).

**1. Condomínio de demonstração (autorizado)**
- Criar no banco um condomínio "Condomínio Demonstração" com dados 100%
  fictícios: ~15 moradores, ocorrências variadas (categorias, prioridades,
  status, algumas com prazo estourado), encomendas (aguardando e retiradas),
  itens de agenda administrativa (recorrentes, com responsável e custo
  previsto × realizado) e cerca de 1 mês de histórico, para os gráficos e o
  relatório ficarem bonitos.
- **Nunca** tocar nos dados do Condomínio Clube Montreal I.
- **Antes de inserir qualquer coisa**, verifique gatilhos, pg_cron e o motor de
  notificações: os dados fictícios não podem disparar WhatsApp nem e-mail de
  verdade. Use telefones e e-mails claramente fictícios (ex.: e-mails
  `…@login.jbservicosrn.com.br`, que nunca são enviados).
- Siga as regras de registro do CLAUDE.md do painel (roteiro/manual), se
  exigirem anotar esse tipo de mudança.

**2. Login de demonstração (autorizado)**
- Criar o usuário "Síndico(a) Demonstração", perfil Síndico, vinculado **só**
  ao Condomínio Demonstração. Se não der para criar o login do Supabase Auth
  com segurança pelas ferramentas da sessão, me guie para criá-lo no painel do
  Supabase (Authentication → Add user, "Auto Confirm User").
- O condomínio e o usuário **ficam guardados** depois da gravação: vão servir
  também de acesso demonstrativo para futuros clientes.

**3. Gravação**
- Vídeo de 60 a 90 segundos, 1280×720, gravado pelo navegador (Playwright)
  navegando no painel logado como o síndico de demonstração, com legendas
  curtas na tela em cada cena. Sem narração e sem música.
- Roteiro: tela Início (indicadores e gráficos) → uma ocorrência (foto,
  prioridade, prazo, sugestão da IA) → Encomendas (registro e retirada) →
  **Agenda administrativa** (item recorrente, responsável, custo previsto ×
  realizado, calendário) → Relatórios do mês → **Assistente IA** respondendo a
  "o que ficou pendente este mês?".
- A parte do WhatsApp entra como animação, reaproveitando o visual das
  conversas de `src/components/ilustracoes.tsx` (o WhatsApp oficial ainda
  aguarda a Meta).
- Conferir quadro a quadro que não aparece nenhum dado real.

**4. Publicação**
- **Me mande o vídeo para aprovação antes de publicar.**
- Depois de aprovado: colocar em `public/` (arquivo leve, de preferência
  < 15 MB) e incluir na página do JB Gestão, logo abaixo do topo, com o título
  "Veja o JB Gestão em 1 minuto", com controles e imagem de capa.

---

**Rede do ambiente:** liberar em Acesso à rede → Personalizado os domínios
`jb-gestao-cond.jbservicosrn.com.br`, `ieccmoscedqdexogytkv.supabase.co`,
`fonts.googleapis.com` e `fonts.gstatic.com`.
