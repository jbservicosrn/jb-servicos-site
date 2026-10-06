# JB Serviços — Site institucional

Site público da JB Serviços (terceirização para condomínios) e da plataforma
JB Gestão Condominial. Next.js 14 (App Router) + TypeScript + Tailwind, 100%
estático (sem banco, login ou variáveis de ambiente).

- Produção: https://www.jbservicosrn.com.br (Vercel, domínio no Registro.br)
- **A Vercel publica a partir da branch `claude/great-shannon-5jvovl`** (é a
  branch padrão do repositório). Push nela = site no ar em 1–2 min. Não existe
  `main`; o dono preferiu não criar.
- Sistema (painel): https://jb-gestao-cond.jbservicosrn.com.br — outro
  repositório, `jbservicosrn/jb-gestao-painel-web`.

## Quem trabalha neste projeto

O dono (JB Serviços) está começando com Git/GitHub e desenvolvimento. Explique
em linguagem simples, em português, e mande passo a passo quando ele precisar
mexer em Vercel, Registro.br ou Supabase. Ele costuma mandar prints; responda
em cima deles.

## Onde fica cada coisa

| O quê | Arquivo |
|---|---|
| Dados da empresa, e-mail, links | `src/lib/empresa.ts` |
| Página inicial | `src/app/page.tsx` |
| Página "Como funciona o JB Gestão" | `src/app/jb-gestao/page.tsx` |
| Ilustrações (celulares, cartão, painel) | `src/components/ilustracoes.tsx` |
| Ícones (SVG de traço) | `src/components/icones.tsx` |
| Menu / rodapé | `src/components/cabecalho.tsx`, `src/components/rodape.tsx` |
| Política de privacidade | `src/app/privacidade/page.tsx` |

## Identidade visual

Mesmos tokens do painel (`tailwind.config.ts` copiado de lá): `jb-navy`
#0f2a4a, `jb-orange` #f5821f, Manrope nos títulos, IBM Plex Sans no texto, logo
`public/logo-jb-servicos.jpg`. Se mudar no painel, mude aqui também.

## Decisões do dono (não reverter sem ele pedir)

- **Sem WhatsApp no site** por enquanto: propostas e demonstrações só por
  e-mail. O número (84) 99638-5174 está anotado em `empresa.ts`, fora do site,
  até existir atendimento automatizado.
- **O endereço de e-mail não aparece escrito na página** (cartão "Solicite sua
  proposta" e rodapé): os botões dizem "Enviar e-mail" e abrem o programa de
  e-mail com assunto e um roteiro para o cliente completar (`linkEmail` em
  `empresa.ts`: um roteiro para proposta, outro para demonstração). Exceção:
  a Política de Privacidade mantém o e-mail escrito (a LGPD pede um canal de
  contato claro).
- **Sem razão social** em nenhum lugar (vai mudar). Rodapé mostra só nome e CNPJ.
- **Nenhum cliente citado** pelo nome (nem o Montreal).
- Endereço: só "Natal/RN". Serviços presenciais: Natal e região metropolitana.
  Soluções de tecnologia: todo o Brasil.
- JB Gestão **incluído só para condomínios com portaria JB**; os demais
  contratam à parte (sob consulta). Nunca escrever "grátis para clientes JB"
  de forma genérica.
- Selo "Já em uso em um condomínio em Parnamirim/RN" **desligado**
  (`MOSTRAR_SELO_EM_USO` em `src/app/jb-gestao/page.tsx`) até o WhatsApp
  oficial ser liberado pela Meta (previsão: 2ª semana de out/2026). Religar só
  quando o dono pedir.
- Ilustrações e vídeos usam **somente dados fictícios**, nunca prints com dados
  reais de moradores.
- Níveis 02 e 03 do JB Gestão aparecem como "Em breve", sem prometer data.
- **Obras** só aparece como modalidade específica para **condomínios
  horizontais novos, que ainda têm lotes a construir** (card "Obras
  (condomínios horizontais novos)" em `/jb-gestao`). Pode ser citado nas
  listas de módulos, sempre com essa ressalva (04/10/2026).
- **A página `/jb-gestao` acompanha as versões do painel** (atualizada até a
  0.25 em 03–04/10/2026). Ao sair uma versão nova, conferir o que mudou e
  manter coerentes: módulos (hoje 9: Ocorrências, Encomendas, Itens de uso,
  Agenda, Orçamentos e fornecedores, Obras, Unidades e moradores, Relatórios e
  Relatório de Gestão, Assistente JB), perfis, segurança, Nível 01, FAQ, a
  linha de recursos da página inicial e o texto acima do vídeo. Mudança de
  texto do site pode ir ao ar direto; vídeo novo só depois de aprovado.
- **Serviços presenciais (04/10/2026): Porteiros 24h, Apoio à portaria em
  áreas extensas, Limpeza e conservação, Jardinagem.** Nunca usar "vigia
  noturno", "monitoramento"/"videomonitoramento" nem "ronda patrimonial":
  vigilância e monitoramento passaram a ser segurança privada regulamentada
  (Estatuto da Segurança Privada, exige autorização estatal). O "apoio à
  portaria" é o Monitor (registrado como Monitor na CLT) que percorre de moto
  as áreas de lazer e comuns distantes, zelando pelo regimento e acionando a
  portaria — descrever assim, sem "segurança", "vigilância" ou "patrulha".
  Porteiros: "bem treinados e adaptados à tecnologia que a JB integra aos
  serviços". O Instagram segue o mesmo texto.
- Como o site descreve a operação (04/10/2026):
  - Encomenda: a IA lê a **foto da etiqueta**; encomenda repetida é barrada;
    na retirada o morador **assina com o dedo no celular da portaria ou no
    protocolo de papel**.
  - Itens de uso: assinatura de quem retira **com o dedo, no celular**.
  - **Assinatura na tela é sempre no celular**, nunca "no computador".
  - Portaria: **por padrão vê só Ocorrências, Encomendas e Itens de uso**
    (dito em "Portaria e equipe" e em "Perfis de acesso configuráveis").
  - Orçamentos: o PDF de cada empresa é lido pela IA, que destaca o mais
    barato e o melhor custo-benefício e analisa as propostas; o síndico(a)
    aprova pelo painel.
  - WhatsApp da portaria: **só texto e foto** (04/10/2026). Nunca citar
    áudio/mensagem de voz: o dono não testou a transcrição e prefere não usar
    (dicção varia e a transcrição pode sair errada).

## Antes de dar uma mudança por pronta

1. `npm run lint` e `npm run build` sem erros.
2. Mudança visual: conferir em 1280px e 390px (sem rolagem horizontal).
3. Commit em português e push na branch de produção acima.

## Vídeo e demonstração

- Vídeo "Veja o JB Gestão em 3 minutos" (`public/jb-gestao-em-3-minutos.mp4` +
  `-capa.jpg`, 2min54s, H.264, **narrado**; a versão sem som ficou em
  `public/jb-gestao-em-3-minutos-sem-som.mp4`, sem link na página), gravado em 04/10/2026 (painel 0.25)
  no painel real com o **Condomínio Demonstração** (dados fictícios,
  `condominios.id = 5` no Supabase) e o login `demonstracao` (perfil Síndico,
  só nesse condomínio; a senha fica com o dono, nunca no repositório). Os dois
  ficam guardados para acessos demonstrativos de futuros clientes. Substituiu
  o vídeo de 2 minutos (27/09). Pedido original: `docs/pedido-video-demonstracao.md`.
- Fica numa seção logo abaixo do topo de `/jb-gestao` (`id="video"`); o botão
  "Veja como funciona" e a seta "Role para conhecer o sistema" levam até ele.
  Carrega só ao dar play (`preload="none"`).
- Decisões do dono sobre o vídeo:
  - **Mandar para aprovação antes de publicar** qualquer versão nova.
  - **Ritmo:** o de "0,75×" (pausas longas para dar tempo de ler legendas e
    telas); digitação e cursor em ritmo natural.
  - Legendas curtas em cada cena + **narração** (06/10/2026, pedido de um
    administrador de condomínio). Voz gerada pelo dono no ElevenLabs (voz
    "Mário", português do Brasil) a partir de um roteiro de 9 trechos, um
    arquivo por cena; os áudios ficam com o dono. No roteiro, "JB" vai
    escrito "Jota Bê" para a voz não ler errado. **Sem música** (fundo
    musical testado em 04/10 e recusado). Vozes robóticas (geradas aqui no
    ambiente) não servem; a rede da sessão bloqueia os serviços de voz, então
    o áudio sempre vem do dono.
  - Montagem da narração: cada trecho começa no início da sua cena; a tela
    vazia do WhatsApp fica parada 3,5 s no começo para a foto aparecer junto
    com "o porteiro manda a foto"; a fala dos itens de uso é dividida em três
    partes (formulário / prazo e assinatura / "se atrasar") e o desenho da
    assinatura passa em 2×; a tela final é esticada para caber a última fala.
    Se o vídeo for regravado, o áudio precisa ser reencaixado (ou o roteiro
    regerado com os novos tempos).
  - Roteiro (04/10/2026), contado como "portaria → síndico":
    1. Animação do WhatsApp da portaria (selo "WhatsApp oficial em
       implantação"): ocorrência com foto → encomenda pela **foto da
       etiqueta** (o bot lê e pede "1 Sim · 2 Corrigir · 0 Cancelar") → aviso
       no WhatsApp da moradora.
    2. **Celular da portaria** (painel em tela de celular, com legenda ao
       lado): retirada da mesma encomenda (mesmo código da animação) com a
       moradora **assinando com o dedo** → comprovante.
    3. Celular: empréstimo de item de uso com assinatura com o dedo → atrasados.
    4. Computador (administração): Início → a mesma ocorrência com foto, prazo
       e Sugestão da IA → agenda (recorrência, custo previsto × realizado,
       calendário) → **orçamentos lidos pela IA** (Reforma do playground: 3
       propostas, "Mais barato", "★ Melhor custo-benefício", análise da IA;
       **nunca clicar "Aprovar este"**) → Assistente IA → tela final.
    Relatórios ficaram fora (custo de tempo).
  - **Assinatura na tela é sempre no celular**, com o dedo (encomendas, quando
    a portaria usa esse recurso, e itens de uso) — nunca mostrar assinando com
    mouse no computador.
  - **Porteiro vê por padrão só Ocorrências, Encomendas e Itens de uso.** Nas
    cenas de celular aparecem só essas abas e o usuário "Paulo Portaria
    (fictício)". O condomínio 5 não tem login de porteiro fictício (o "Teste
    Porteiro" é de outra pessoa): a gravação usou o login do síndico e
    escondeu as outras abas/trocou o nome só na tela.
  - Na gravação também ficam escondidos o aviso "Obra embargada" e o alerta
    de obras (o módulo de obras não entra no vídeo) e os avisos de WhatsApp
    "não entregue" (a moradora fictícia Sofia Martins não tem telefone, de
    propósito: **nenhum WhatsApp real é enviado**; nunca usar números reais).
  - Tela final: "Incluso para condomínios com portaria da JB Serviços" +
    "✓ Também disponível para contratação avulsa por qualquer condomínio" +
    "Solicite uma demonstração".
  - Fotos e etiquetas do vídeo são ilustrações geradas, nunca fotos reais.
- Ao trocar o arquivo do vídeo mantendo o nome, acrescente/suba um `?v=N` no
  endereço dele em `jb-gestao/page.tsx`, senão o navegador de quem já visitou
  mostra a versão antiga.
- Os scripts de gravação (Playwright + ffmpeg) ficaram fora do repositório.
  Numa regravação: cada tentativa registra mais uma encomenda fictícia da
  Sofia (gerar etiqueta com rastreio novo, senão é barrada como repetida; ao
  final marcar as sobras como retiradas) e um empréstimo da Camila Rezende
  (marcar como devolvido, senão as raquetes ficam indisponíveis); conferir
  quadro a quadro que só aparecem dados fictícios. O Chromium desta sessão não
  toca H.264 — confirmar o play num navegador de verdade.
- Bugs do painel notados na gravação (tratar no repositório do painel): em
  Relatórios, "Atualizar análise" sobre uma análise existente quebra a tela
  ("Application error"); o código da encomenda usa a data em UTC (EN-20261004…
  registrada em 03/10 às 21h de Brasília). Em 04/10 o dono recebeu um pedido pronto
  para colar numa sessão do painel corrigindo os dois (e os códigos `OC-` e
  `EM-`, que seguem o mesmo padrão); conferir lá se já foi feito.
- **Ilustrações da página iguais ao vídeo:** o passo 3 do "Como funciona"
  (`ConversaEncomenda` e `AvisoMorador` em `ilustracoes.tsx`) mostra a mesma
  encomenda do vídeo: foto da etiqueta fictícia
  (`public/etiqueta-encomenda-exemplo.jpg`), Sofia Martins, Quadra B - Casa 5,
  Livraria Página Nova, rastreio QH548322698BR, código EN-20261004-0075. Se o
  vídeo mudar, atualizar as ilustrações junto (o dono notou a diferença).
- Ferramentas de voz: o NotebookLM **não serve** para narrar o vídeo (gera
  conversa estilo podcast, sem texto nem tempo controlados); serviria só para
  um áudio à parte sobre o JB Gestão. Para narração, usar ElevenLabs (o que o
  dono usou), CapCut ou TTSMaker, um arquivo por trecho do roteiro.
- `/jb-gestao` tem prévia própria ao compartilhar o link (WhatsApp/redes):
  título "JB Gestão Condominial", descrição da página e imagem
  `public/og-jb-gestao.jpg` (1200×630). O link raiz continua com a prévia
  "JB Serviços". O `openGraph` de uma página substitui o do layout inteiro, por
  isso repete `siteName`, `locale` e `type`.
- Dados do Condomínio Demonstração usados no vídeo (manter assim, os clientes
  acessam pelo login de demonstração): a moradora fictícia **Sofia Martins
  (Quadra B - Casa 5) não tem telefone**, de propósito, para nenhum aviso de
  WhatsApp sair de verdade; o item "Reforma do playground" da agenda fica com
  os 3 orçamentos **aguardando aprovação** (não aprovar). Há moradores no
  condomínio 5 com telefone real cadastrado: **nunca usar números reais** em
  gravações ou testes.
- O dono **passou a senha do login de demonstração a clientes** (29/09/2026) e
  quer acompanhar os acessos. Todos usam o mesmo login, então só dá para
  distinguir pelas sessões (`auth.sessions` do usuário "Síndico(a)
  Demonstração": data, aparelho/navegador pelo user_agent, IP). Sessões com
  user_agent "node" ou "Vercel Edge Functions" são scripts/automação, não
  clientes. O acesso Android de 28/09 14:20 foi de cliente.

## Visitas do site (Vercel Web Analytics)

- Ativado em 29/09/2026: componente `<Analytics />` em `src/app/layout.tsx`
  (pacote `@vercel/analytics`) + aba Analytics ligada no projeto da Vercel.
  Contagem anônima, sem cookies; a política de privacidade já avisa.
- Não há dados de visitas antes dessa data (o site não contava nada antes).
- Para consultar: Vercel → projeto `jb-servicos-site` → Analytics → quadro
  "Pages" (ex.: `/jb-gestao`) e "Referrers" (de onde vieram). Não há acesso a
  esses números por aqui: peça um print ao dono.

## Domínio e DNS (Registro.br, modo avançado)

Zona `jbservicosrn.com.br` usa o DNS do Registro.br. Entradas:
- `TXT` na raiz: verificação da empresa na Meta (`facebook-domain-verification`).
  **Nunca apagar** — o WhatsApp oficial do JB Gestão depende dela.
- `A` na raiz e `CNAME www` → Vercel (projeto do site). A raiz redireciona (308)
  para `www`.
- `CNAME jb-gestao-cond` → Vercel (projeto do painel).
Novos subdomínios: adicionar o domínio no projeto certo da Vercel (Settings →
Domains) e copiar o valor que ela mostrar para uma entrada nova no Registro.br.

## Painel JB Gestão — o que foi feito a partir daqui (27–29/09/2026)

- Domínio próprio `jb-gestao-cond.jbservicosrn.com.br` ligado ao projeto do
  painel na Vercel; variável `NEXT_PUBLIC_SITE_URL` criada (tipo Config) com
  esse endereço e redeploy feito; Supabase → Authentication → URL
  Configuration com Site URL e Redirect URL do domínio novo (o `.vercel.app`
  continua funcionando). Testado pelo dono: links de senha saem com o domínio novo.
- Banco (Supabase) do painel: projeto `jb-gestao-cond`, id
  `ieccmoscedqdexogytkv`.
- Logins: o sistema só guarda o **último login** de cada usuário
  (`auth.users.last_sign_in_at`) e as sessões abertas (`auth.sessions`); o
  registro de auditoria do Supabase está vazio, então **não existe histórico
  completo de acessos**. Se o dono quiser isso, é funcionalidade nova, a pedir
  no repositório do painel.
- Pendências do painel (tratar lá, não aqui):
  - Desativar os 5 usuários "Teste…" ainda ativos no Montreal antes do piloto.
  - Razão social: ainda aparece nas páginas legais do painel (Política,
    Termos, Exclusão de Dados). Trocar só quando a razão social nova estiver
    registrada, igual ao cadastro da Meta Business.
  - Reorganizar a documentação para gastar menos tokens (dividir o roteiro em
    atual + histórico, regra de não ler os documentos inteiros, CLAUDE.md com
    o domínio novo). O dono recebeu um pedido pronto para colar numa sessão
    do painel.

## Preços e condições do JB Gestão (tabela por unidade, escolhida em 04/10/2026)

O dono trocou a tabela por porte de 28–29/09 (R$ 290 a R$ 1.690/mês) pela
tabela por unidade do "Plano Comercial — JB Gestão Condominial" (02/10/2026),
"mais atualizada e coerente com as mudanças atuais". A tabela antiga não vale
mais. Valores a confirmar com o custo real medido no piloto (tela Métricas do
piloto, no painel). O site continua dizendo "sob consulta": só mostrar preço
quando o dono pedir.

| Plano | Inclui | Por unidade/mês | Mínimo/mês |
|---|---|---|---|
| Operacional | WhatsApp da portaria, ocorrências, encomendas, itens de uso, relatórios | R$ 3,50 | R$ 199 |
| Gestão | Operacional + agenda, orçamentos, obras, Assistente de IA, Relatório de Gestão em PDF | R$ 5,50 | R$ 349 |

- **Implantação** (uma vez): R$ 800 a R$ 1.500, conforme o porte (cadastro de
  unidades e moradores, configuração, treinamento da portaria). Não é
  devolvida depois de concluída.
- **Condomínios com portaria JB** (decisão de 04/10/2026): Operacional **e**
  Gestão inclusos no contrato da portaria, sem cobrança à parte.
- **Módulo futuro "Atendimento ao morador"** (ainda não desenvolvido): interação
  com os moradores — segunda via de boleto, reserva de áreas comuns e
  atendimento em geral. **Cobrado de todos, inclusive de quem tem portaria JB**
  (mais complexo, eleva custos de WhatsApp e IA). Preço a definir. Segunda via
  por integração com o sistema financeiro do condomínio, sem a JB emitir
  boletos. Não anunciar no site antes de existir.
- As condições abaixo (lançamento, pagamento, reajuste, cancelamento, atraso,
  dados) foram definidas junto com a tabela antiga e seguem valendo até o dono
  dizer o contrário; os descontos do plano anual valem sobre a nova tabela.
- **Lançamento**: primeiros 10 condomínios com 20% de desconto por 12 meses,
  não cumulativo com os descontos do plano anual.
- **Pagamento**: boleto ou Pix, vencimento dia 10; nota fiscal a cada
  pagamento; contrato no CNPJ do condomínio (troca de síndico não altera).
- **Reajuste** anual pelo IPCA; plano anual renova sozinho por 12 meses, salvo
  aviso de 30 dias.
- **Cancelamento**: mensal sem multa, com aviso de 30 dias. Anual parcelado:
  devolve o desconto já recebido. Anual à vista: devolvemos os meses não
  usados, descontada a diferença dos meses usados (pelo preço mensal). Sem
  multa se houver falha grave não resolvida em 10 dias após o aviso.
- **Atraso**: multa 2% + juros 1% ao mês; acesso suspenso a partir de 30 dias
  (dados preservados); contrato pode ser encerrado a partir de 60 dias.
- **Dados após cancelar**: 30 dias para exportar, depois apagados (LGPD).
- Documento para clientes: "JB Gestão — Planos, preços e condições
  comerciais" (PDF + Word). A planilha interna de custos e margens
  (`precificacao-jb-gestao.xlsx`) fica com o dono, **fora do repositório**:
  nunca publicar custos nem margens.
- Pendências do dono: contrato revisado por advogado; confirmar imposto e nota
  fiscal de software com o contador; trocar as estimativas da planilha pelos
  valores reais das faturas e do 1º mês do piloto.
- Antes de vender para fora (tratar no repositório do painel): Vercel do
  painel sair do Hobby (não permite uso comercial) para o Pro; Supabase Free →
  Pro (fotos de encomendas enchem 1 GB); conferir se o plano do n8n aguenta o
  "03 Processador" rodando a cada minuto (~43 mil execuções/mês).

## Sessões na nuvem (Claude Code)

- A rede do ambiente é limitada. Para uma sessão acessar o painel ou o banco,
  o dono libera em Ambiente → Editar → Acesso à rede → Personalizado os
  domínios `jb-gestao-cond.jbservicosrn.com.br`,
  `ieccmoscedqdexogytkv.supabase.co`, `fonts.googleapis.com` e
  `fonts.gstatic.com`. Mudanças no ambiente só valem para sessões novas.
- Nunca pedir senhas no chat nem em variáveis de ambiente.

## Economia de tokens (combinado com o dono)

- Uma conversa por assunto; `/clear` ao terminar uma tarefa (as decisões ficam
  aqui no CLAUDE.md), `/compact` no meio de tarefas longas, `/resume` só quando
  precisar de uma conversa antiga.
- Ao fim de conversas com decisões importantes, registrar neste arquivo.
