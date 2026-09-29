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
- **O endereço de e-mail não aparece escrito na página**: os botões dizem
  "Enviar e-mail" e abrem o programa de e-mail com assunto e um roteiro para o
  cliente completar (`linkEmail` em `empresa.ts`).
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

## Antes de dar uma mudança por pronta

1. `npm run lint` e `npm run build` sem erros.
2. Mudança visual: conferir em 1280px e 390px (sem rolagem horizontal).
3. Commit em português e push na branch de produção acima.

## Vídeo e demonstração

- Vídeo "JB Gestão em 2 minutos" (`public/jb-gestao-em-2-minutos.mp4` + capa),
  gravado em 27/09/2026 no painel real com o **Condomínio Demonstração**
  (dados fictícios) e o login "Síndico(a) Demonstração". Os dois ficam
  guardados para acessos demonstrativos de futuros clientes. Pedido original:
  `docs/pedido-video-demonstracao.md`.
- `/jb-gestao` tem prévia própria ao compartilhar o link (`public/og-jb-gestao.jpg`).
- Antes de o selo voltar: o login de demonstração teve um acesso pelo celular em
  28/09/2026 14:20 que o dono ainda não confirmou se foi dele. Se não foi,
  trocar a senha desse login.

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

## Projeto em andamento: integração Superlógica → Intelbras (InControl)

Discutido em 28–29/09/2026. **Não é código deste site**: vai para o painel
(`jb-gestao-painel-web`) e para um repositório novo do agente. Anotado aqui
para não se perder.

**Problema:** no condomínio com contrato, a administração cadastra o morador
na Superlógica e a portaria redigita tudo no InControl Web (Intelbras) para o
cadastro facial. Objetivo: dados digitados **uma vez só**, na Superlógica; a
portaria só tira a foto no 1º acesso.

Decisões:

- **O InControl continua sendo o dono dos leitores.** Gravar no InControl
  (pela API dele), nunca direto nos leitores, senão o InControl sobrescreve.
  Substituir o InControl por sistema próprio fica para depois (etapa 3), se
  um dia.
- **Arquitetura:** Superlógica → JB Gestão (nuvem) → agente Windows no PC do
  condomínio → InControl → leitores.
  - **Agente Windows** no PC que já existe lá só para o InControl: roda como
    serviço, sem tela, só conexões de saída (sem abrir porta no roteador).
  - **Aba "Integrações" no JB Gestão**: chaves da Superlógica (não ficam no
    PC), status do agente, histórico, botão "Sincronizar agora".
  - Ordem: primeiro o agente (testado neste condomínio), depois a aba.
- **Sincronização por demanda:** webhook da Superlógica se a versão
  Condomínios oferecer gatilho de novo morador (a confirmar); senão, consulta
  a cada 1–2 min. O agente fica conectado ao JB Gestão e recebe na hora.
  Conferência completa diária de madrugada.
- **Fonte da verdade = Superlógica.** A portaria não cria morador no
  InControl, só adiciona a foto. Visitantes e prestadores seguem cadastrados
  na portaria. Morador desativado na Superlógica → desativado no InControl.
- **Acesso à Superlógica:** a conta é do condomínio (contratou direto). A
  síndica autoriza; ideal é um login só de consulta para a JB. Tokens em
  Superlógica: Todos os usuários → API (Integração com outros sistemas) →
  Aplicativos → Novo App Token. Plano B sem API: planilha exportada.
- **LGPD:** biometria facial é dado sensível. Termo de autorização assinado
  pela síndica (condomínio = controlador, JB = operador) e consentimento do
  morador.
- Pode virar recurso do JB Gestão para outros condomínios com portaria JB.

Pendências: resposta da síndica (dono falou por WhatsApp); modelo dos leitores
e versão do InControl (conferir por acesso remoto ao PC); documentação da API
do InControl Web (pedir ao suporte Intelbras ou instalador); confirmar webhook
de novo morador na Superlógica Condomínios.
