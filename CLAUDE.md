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
