import type { Metadata } from "next";
import {
  IconeAlerta,
  IconeChave,
  IconeObra,
  IconeOrcamento,
  IconeAutomacao,
  IconeCadeado,
  IconeCaixa,
  IconeCalendario,
  IconeConversa,
  IconeDocumento,
  IconeEmail,
  IconeEquipe,
  IconeGrafico,
  IconeIA,
  IconeNuvem,
  IconePortaria,
  IconePredio,
  IconeRelogio,
  IconeSeta,
  IconeTransparencia,
} from "@/components/icones";
import {
  AvisoMorador,
  CartaoOcorrencia,
  ConversaEncomenda,
  ConversaPortaria,
  ConversaSindico,
  PainelInicio,
} from "@/components/ilustracoes";
import { DEMONSTRACAO_EMAIL_LINK, JB_GESTAO_URL } from "@/lib/empresa";

const descricao =
  "A portaria registra pelo WhatsApp, o sistema organiza e o síndico acompanha tudo em tempo real: ocorrências, encomendas, itens de uso, agenda, orçamentos e inteligência artificial.";

// Prévia própria ao compartilhar o link (WhatsApp, redes sociais): título
// "JB Gestão Condominial" em vez do da página inicial (pedido de 27/09/2026).
// O openGraph da página substitui o do layout inteiro, por isso repete
// siteName, locale e type.
export const metadata: Metadata = {
  title: "Como funciona o JB Gestão Condominial — JB Serviços",
  description: descricao,
  alternates: { canonical: "/jb-gestao" },
  openGraph: {
    title: "JB Gestão Condominial",
    description: descricao,
    url: "/jb-gestao",
    siteName: "JB Serviços",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og-jb-gestao.jpg", width: 1200, height: 630, alt: "JB Gestão Condominial" }],
  },
};

// Selo "Já em uso em um condomínio em Parnamirim/RN" desligado em 27/09/2026:
// o sistema está pronto e testado, mas aguarda a liberação do WhatsApp oficial
// pela Meta (implantação prevista para a 2ª semana de outubro/2026). Voltar
// para true quando estiver em uso de verdade.
const MOSTRAR_SELO_EM_USO = false;

const PROBLEMAS = [
  {
    Icone: IconeDocumento,
    titulo: "Livro de ocorrências em papel",
    texto: "Rasga, some, ninguém lê. E quando precisa comprovar algo, não há foto nem horário confiável.",
  },
  {
    Icone: IconeCaixa,
    titulo: "Encomendas sem rastreio",
    texto: "“Chegou minha encomenda? Quem recebeu? Onde está?” — perguntas que tomam o dia da portaria.",
  },
  {
    Icone: IconeConversa,
    titulo: "Informação perdida em grupos",
    texto: "Avisos importantes se misturam a conversas e se perdem no histórico do WhatsApp.",
  },
  {
    Icone: IconeAlerta,
    titulo: "Síndico sem visão da rotina",
    texto: "Os problemas só chegam quando já viraram reclamação de morador ou assunto de assembleia.",
  },
];

const MODULOS = [
  {
    Icone: IconeAlerta,
    titulo: "Ocorrências",
    texto:
      "Classificadas automaticamente por categoria, local e prioridade (inclusive achados e perdidos), com fotos, histórico, prazo de atendimento e sugestão da IA para resolver.",
  },
  {
    Icone: IconeCaixa,
    titulo: "Encomendas",
    texto:
      "A IA lê a foto da etiqueta e preenche tudo. O morador é avisado pelo WhatsApp e a portaria vê se o aviso foi entregue e lido. Encomenda repetida é barrada. Na retirada, o morador assina com o dedo no celular da portaria ou no protocolo de papel.",
  },
  {
    Icone: IconeChave,
    titulo: "Itens de uso",
    texto:
      "Tacos, bolas, grelhas e chaves emprestados com prazo de devolução e assinatura de quem retira, com o dedo na tela do celular. Atrasou, fica em vermelho e avisa; avaria vira ocorrência com um clique.",
  },
  {
    Icone: IconeCalendario,
    titulo: "Agenda administrativa",
    texto:
      "Manutenções e compromissos com recorrência automática, responsável e custo previsto × realizado. Nada de prazo esquecido.",
  },
  {
    Icone: IconeOrcamento,
    titulo: "Orçamentos e fornecedores",
    texto:
      "Envie o PDF de cada empresa: a IA lê preço, prazo, garantia e pagamento, destaca o mais barato e o melhor custo-benefício e analisa as propostas. O síndico(a) aprova pelo painel. Cadastro de fornecedores com histórico e avaliação.",
  },
  {
    Icone: IconeObra,
    titulo: "Obras (condomínios horizontais novos)",
    texto:
      "Modalidade específica para condomínios horizontais novos, que ainda têm lotes a construir: cada obra com documentos, vistorias, notificações e multas. Obra embargada gera alerta para toda a equipe, inclusive a portaria.",
  },
  {
    Icone: IconePredio,
    titulo: "Unidades e moradores",
    texto:
      "Cada unidade com seus moradores (nos condomínios horizontais, também a situação: lote, em obra ou casa) e cada pessoa com seu vínculo: proprietário, inquilino, morador ou dependente. Importação por planilha.",
  },
  {
    Icone: IconeGrafico,
    titulo: "Relatórios e Relatório de Gestão",
    texto:
      "Listas detalhadas de cada módulo, com filtros e período, análise da IA e o Relatório de Gestão em PDF, pronto para a prestação de contas e a assembleia.",
  },
  {
    Icone: IconeIA,
    titulo: "Assistente JB (IA)",
    texto:
      "Pergunte em português, como numa conversa: “o que ficou pendente este mês?”. A assistente responde com base nos dados do seu condomínio.",
  },
];

const PERFIS = [
  {
    Icone: IconeTransparencia,
    quem: "Síndico(a)",
    frase: "Prestação de contas com dados, não com memória.",
    texto:
      "Veja o que acontece no condomínio em tempo real, aprove orçamentos pelo painel, receba avisos do que é urgente e chegue à assembleia com o Relatório de Gestão em PDF.",
  },
  {
    Icone: IconeDocumento,
    quem: "Administradora",
    frase: "Histórico confiável de cada condomínio.",
    texto:
      "Ocorrências numeradas, evidências e custos organizados por período. Menos telefonema, mais informação na mão.",
  },
  {
    Icone: IconePortaria,
    quem: "Portaria e equipe",
    frase: "Nenhum aplicativo novo para aprender.",
    texto:
      "É o WhatsApp que a equipe já usa. Manda texto e foto — e, na encomenda, só a foto da etiqueta. O sistema pergunta o que faltar. No celular da portaria, o painel mostra só o que o porteiro precisa: ocorrências, encomendas e itens de uso.",
  },
  {
    Icone: IconeEquipe,
    quem: "Moradores",
    frase: "Aviso de encomenda direto no WhatsApp.",
    texto: "O morador fica sabendo assim que a encomenda chega, retira sem desencontro e assina com o dedo, no celular da portaria.",
  },
];

const SEGURANCA = [
  { Icone: IconeCadeado, titulo: "Perfis de acesso configuráveis", texto: "O síndico(a) define o que cada função vê e faz em cada tela: administração, portaria, conselho, zelador. Por padrão, a portaria vê só ocorrências, encomendas e itens de uso." },
  { Icone: IconeRelogio, titulo: "Histórico e auditoria por 10 anos", texto: "Toda criação, alteração ou exclusão fica registrada, com data, hora e autor, e os registros de gestão são guardados por 10 anos." },
  { Icone: IconePredio, titulo: "Dados separados por condomínio", texto: "As informações de um condomínio nunca aparecem para outro." },
  { Icone: IconeNuvem, titulo: "Backup diário e LGPD", texto: "Cópia de segurança todos os dias e prazos de guarda definidos na política de privacidade." },
];

const NIVEIS = [
  {
    numero: "01",
    nome: "JB Gestão Operacional",
    disponivel: true,
    texto:
      "Ocorrências, encomendas, itens de uso, agenda com orçamentos, obras (para condomínios horizontais novos), unidades e moradores, relatórios com o Relatório de Gestão em PDF, painel do síndico e Assistente JB. Incluído para os condomínios com portaria JB Serviços; para os demais condomínios, sob consulta.",
  },
  {
    numero: "02",
    nome: "JB Gestão Condomínio Conectado",
    disponivel: false,
    texto: "Canal digital oficial com os moradores: solicitações, comunicados, enquetes e reserva de áreas comuns.",
  },
  {
    numero: "03",
    nome: "JB Gestão Inteligente Avançado",
    disponivel: false,
    texto: "Análises mais profundas, manutenção preventiva e acompanhamento do desempenho operacional.",
  },
];

const PERGUNTAS = [
  {
    p: "Preciso instalar algum programa?",
    r: "Não. O painel abre no navegador do computador, tablet ou celular, e a portaria usa o WhatsApp que já tem.",
  },
  {
    p: "E se o porteiro não tiver familiaridade com tecnologia?",
    r: "Se ele sabe mandar uma mensagem no WhatsApp, sabe usar o sistema. Quando falta alguma informação, o próprio sistema pergunta. E a JB acompanha a equipe durante a implantação.",
  },
  {
    p: "O condomínio precisa ser cliente da JB Serviços?",
    r: "Não. Qualquer condomínio pode contratar o sistema, com valores sob consulta conforme o porte. Para os condomínios com portaria JB Serviços, o módulo operacional já vem incluído: é a ferramenta que eleva o padrão de excelência do nosso serviço de portaria.",
  },
  {
    p: "Sou síndico(a) ou administradora de mais de um condomínio. Funciona?",
    r: "Sim. Com o mesmo login você troca de condomínio no topo do painel, com o perfil de acesso próprio de cada um. Os dados de um condomínio nunca aparecem no outro.",
  },
  {
    p: "Atende condomínios fora de Natal?",
    r: "Sim. As soluções de tecnologia atendem condomínios de todo o Brasil, com implantação e suporte remotos. Os serviços presenciais (portaria, limpeza, jardinagem etc.) são para Natal e região metropolitana.",
  },
  {
    p: "Os dados do condomínio ficam seguros?",
    r: "Sim. O acesso é por perfil e cada condomínio só enxerga os próprios dados, com backup diário e tratamento conforme a LGPD.",
  },
  {
    p: "Como começamos?",
    r: "Mande um e-mail pedindo uma demonstração. Mostramos o sistema funcionando, tiramos as dúvidas e, se fizer sentido, fazemos a configuração, o cadastro dos moradores e a orientação da equipe.",
  },
];

const botaoPrincipal =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-jb-orange px-5 py-3 font-display text-sm font-bold text-white shadow-jb transition hover:bg-jb-orange-600";

function Titulo({ rotulo, titulo, texto, claro }: { rotulo: string; titulo: string; texto?: string; claro?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-jb-orange">{rotulo}</p>
      <h2 className={`mt-2 font-display text-3xl font-extrabold ${claro ? "text-white" : "text-jb-navy"}`}>{titulo}</h2>
      {texto && <p className={`mt-3 ${claro ? "text-white/75" : "text-jb-ink-soft"}`}>{texto}</p>}
    </div>
  );
}

function Passo({
  numero,
  titulo,
  texto,
  ilustracao,
  invertido,
}: {
  numero: string;
  titulo: string;
  texto: string;
  ilustracao: React.ReactNode;
  invertido?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div className={invertido ? "md:order-2" : ""}>
        <span className="font-display text-5xl font-extrabold text-jb-orange/30">{numero}</span>
        <h3 className="mt-1 text-2xl font-extrabold text-jb-navy">{titulo}</h3>
        <p className="mt-3 text-lg leading-relaxed text-jb-ink-soft">{texto}</p>
      </div>
      <div className={invertido ? "md:order-1" : ""}>{ilustracao}</div>
    </div>
  );
}

export default function ComoFunciona() {
  return (
    <main>
      {/* Abertura */}
      <section className="bg-jb-navy">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-8 pt-12 sm:px-6 md:grid-cols-[1.15fr_1fr] md:pt-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-jb-orange">JB Gestão Condominial</p>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-[2.6rem]">
              Tudo o que acontece no seu condomínio, registrado, organizado e na palma da sua mão.
            </h1>
            <p className="mt-5 text-lg text-white/80">
              A portaria registra pelo WhatsApp. O sistema organiza sozinho. O síndico e a administração acompanham
              tudo em tempo real, com histórico, indicadores e inteligência artificial.
            </p>
            {MOSTRAR_SELO_EM_USO && (
              <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white ring-1 ring-white/15">
                <span className="h-2 w-2 rounded-full bg-jb-ok" />
                Já em uso em um condomínio em Parnamirim/RN
              </p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#video" className={botaoPrincipal}>
                Veja como funciona
                <IconeSeta className="h-4 w-4 rotate-90" />
              </a>
              <a
                href={JB_GESTAO_URL}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-5 py-3 font-display text-sm font-bold text-white transition hover:bg-white hover:text-jb-navy"
              >
                Acessar o sistema
                <IconeSeta className="h-4 w-4" />
              </a>
            </div>
          </div>
          <PainelInicio />
        </div>
        <a
          href="#video"
          className="flex flex-col items-center gap-1 pb-5 text-xs font-semibold uppercase tracking-widest text-white/60 transition hover:text-white"
        >
          Role para conhecer o sistema
          <span className="animate-bounce">
            <IconeSeta className="h-5 w-5 rotate-90" />
          </span>
        </a>
      </section>

      {/* Vídeo demonstrativo — gravado em 04/10/2026 (versão 0.25) no painel real, com o
          "Condomínio Demonstração" (dados 100% fictícios). */}
      <section id="video" className="border-b border-jb-line bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-jb-orange">Demonstração</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-jb-navy">Veja o JB Gestão em 3 minutos</h2>
            <p className="mx-auto mt-3 max-w-2xl text-jb-ink-soft">
              A portaria registrando pelo WhatsApp, a retirada de encomendas e o empréstimo de itens no celular, com
              assinatura na tela, e a gestão no computador: ocorrências, agenda, orçamentos analisados pela IA e a
              assistente de IA. No painel de verdade, com um condomínio de demonstração.
            </p>
          </div>
          <video
            className="mt-8 aspect-video w-full rounded-2xl border border-jb-line bg-jb-navy shadow-jb"
            controls
            preload="none"
            playsInline
            poster="/jb-gestao-em-3-minutos-capa.jpg"
          >
            <source src="/jb-gestao-em-3-minutos.mp4" type="video/mp4" />
            Seu navegador não reproduz vídeos.{" "}
            <a href="/jb-gestao-em-3-minutos.mp4" className="underline">
              Baixe o vídeo
            </a>
            .
          </video>
          <p className="mt-3 text-center text-xs text-jb-ink-soft">
            Dados fictícios. O atendimento pelo WhatsApp oficial está em implantação.
          </p>
        </div>
      </section>

      {/* O problema */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Titulo
          rotulo="O desafio"
          titulo="Sem registro, a rotina do condomínio vira ruído"
          texto="Todo síndico conhece essas situações. Elas custam tempo, geram desconfiança e desgastam a relação com os moradores."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMAS.map(({ Icone, titulo, texto }) => (
            <div key={titulo} className="rounded-2xl border border-jb-line bg-white p-6">
              <Icone className="h-7 w-7 text-jb-ink-soft" />
              <h3 className="mt-4 font-bold text-jb-navy">{titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-jb-ink-soft">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="border-y border-jb-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Titulo rotulo="Como funciona" titulo="Do portão até a decisão da gestão" />
          <div className="mt-14 space-y-20">
            <Passo
              numero="1"
              titulo="A portaria registra pelo WhatsApp"
              texto="O porteiro manda uma mensagem de texto ou uma foto, do jeito que já faz hoje. Não tem aplicativo novo, formulário ou senha para decorar no celular da portaria."
              ilustracao={<ConversaPortaria />}
            />
            <Passo
              numero="2"
              titulo="O sistema organiza sozinho"
              texto="A inteligência artificial entende a mensagem e cria uma ocorrência ou encomenda numerada, com categoria, local, prioridade, prazo e a foto anexada. Se faltar alguma informação, ela pergunta."
              ilustracao={<CartaoOcorrencia />}
              invertido
            />
            <Passo
              numero="3"
              titulo="A encomenda chega e o morador é avisado na hora"
              texto="O porteiro fotografa a etiqueta e manda pelo WhatsApp (ou registra pelo painel). A inteligência artificial lê destinatário, unidade, remetente e rastreio, confere com ele e registra — encomenda repetida é barrada. O morador recebe o aviso pelo WhatsApp e a portaria vê se ele foi entregue e lido. Na retirada, o morador assina com o dedo na tela do celular da portaria ou no protocolo de papel, e fica tudo registrado."
              ilustracao={
                <div className="grid gap-6 sm:grid-cols-2">
                  <ConversaEncomenda />
                  <AvisoMorador />
                </div>
              }
            />
            <Passo
              numero="4"
              titulo="O síndico(a) ou administrador(a) acompanha e decide"
              texto="Pelo painel web, no computador ou no celular, ou perguntando direto no WhatsApp. Os avisos do que é urgente chegam na hora, e o histórico fica guardado para consulta e prestação de contas."
              ilustracao={<ConversaSindico />}
              invertido
            />
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Titulo
          rotulo="Módulos"
          titulo="Tudo o que a gestão do dia a dia precisa, em um só lugar"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODULOS.map(({ Icone, titulo, texto }) => (
            <article key={titulo} className="rounded-2xl border border-jb-line bg-white p-6 shadow-jb">
              <div className="inline-flex rounded-xl bg-jb-orange-100 p-3 text-jb-orange-600">
                <Icone />
              </div>
              <h3 className="mt-4 text-lg font-bold text-jb-navy">{titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-jb-ink-soft">{texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Para quem */}
      <section className="bg-jb-navy">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Titulo rotulo="Para quem" titulo="Cada pessoa do condomínio ganha com o sistema" claro />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {PERFIS.map(({ Icone, quem, frase, texto }) => (
              <div key={quem} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <Icone className="h-6 w-6 text-jb-orange" />
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/60">{quem}</p>
                </div>
                <h3 className="mt-3 text-xl font-bold text-white">{frase}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segurança */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Titulo
          rotulo="Segurança e LGPD"
          titulo="Informação do condomínio tratada com seriedade"
          texto="Os dados ficam protegidos por regras de acesso no próprio banco de dados, e não só na tela."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {SEGURANCA.map(({ Icone, titulo, texto }) => (
            <div key={titulo} className="flex gap-4">
              <div className="h-fit rounded-xl bg-jb-navy-100 p-3 text-jb-navy">
                <Icone />
              </div>
              <div>
                <h3 className="text-lg font-bold text-jb-navy">{titulo}</h3>
                <p className="mt-1 text-sm leading-relaxed text-jb-ink-soft">{texto}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-jb-ink-soft">
          Leia a{" "}
          <a href={`${JB_GESTAO_URL}/privacidade`} className="text-jb-orange-600 underline">
            política de privacidade do JB Gestão Condominial
          </a>
          .
        </p>
      </section>

      {/* Níveis */}
      <section className="border-y border-jb-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Titulo
            rotulo="Evolução"
            titulo="Uma plataforma que cresce com o seu condomínio"
            texto="O JB Gestão começa pela operação e já tem as próximas etapas desenhadas."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {NIVEIS.map(({ numero, nome, disponivel, texto }) => (
              <div
                key={numero}
                className={`rounded-2xl p-6 ${
                  disponivel ? "border-2 border-jb-orange bg-white shadow-jb" : "border border-jb-line bg-jb-ground"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-display text-3xl font-extrabold ${disponivel ? "text-jb-orange" : "text-jb-ink-soft/40"}`}>
                    {numero}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      disponivel ? "bg-jb-ok-100 text-jb-ok" : "bg-jb-orange-100 text-jb-orange-600"
                    }`}
                  >
                    {disponivel ? "Disponível" : "Em breve"}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-jb-navy">{nome}</h3>
                <p className="mt-2 text-sm leading-relaxed text-jb-ink-soft">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perguntas frequentes */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <Titulo rotulo="Perguntas frequentes" titulo="Ficou alguma dúvida?" />
        <div className="mt-8 divide-y divide-jb-line rounded-2xl border border-jb-line bg-white">
          {PERGUNTAS.map(({ p, r }) => (
            <details key={p} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-jb-navy">
                {p}
                <span className="text-xl text-jb-orange transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-jb-ink-soft">{r}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Chamada final */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-jb-navy shadow-jb">
          <div className="h-1.5 bg-gradient-to-r from-jb-navy via-jb-navy to-jb-orange" />
          <div className="flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="flex items-start gap-4">
              <IconeAutomacao className="hidden h-10 w-10 shrink-0 text-jb-orange sm:block" />
              <div>
                <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                  Veja o JB Gestão funcionando no seu condomínio
                </h2>
                <p className="mt-2 text-white/75">
                  Peça uma demonstração por e-mail. Atendemos condomínios de todo o Brasil.
                </p>
              </div>
            </div>
            <a href={DEMONSTRACAO_EMAIL_LINK} className={`${botaoPrincipal} shrink-0`}>
              <IconeEmail className="h-5 w-5" />
              Solicitar demonstração
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
