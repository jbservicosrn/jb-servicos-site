import {
  IconeAutomacao,
  IconeDocumento,
  IconeEmail,
  IconeEquipe,
  IconeEscudo,
  IconeJardim,
  IconeLimpeza,
  IconeLocal,
  IconePortaria,
  IconeRonda,
  IconeSeta,
  IconeTransparencia,
} from "@/components/icones";
import {
  EMPRESA_FUNDACAO,
  JB_GESTAO_URL,
  PROPOSTA_EMAIL_LINK,
} from "@/lib/empresa";

const SERVICOS = [
  {
    Icone: IconePortaria,
    titulo: "Porteiros 24h",
    texto:
      "Controle de acesso e atendimento 24h, em escala 12x36, com porteiros bem treinados e adaptados à tecnologia que a JB integra aos serviços.",
  },
  {
    Icone: IconeRonda,
    titulo: "Apoio à portaria em áreas extensas",
    texto:
      "Monitores que percorrem de moto as áreas de lazer e comuns mais distantes, zelando pelo cumprimento do regimento e acionando a portaria quando necessário.",
  },
  {
    Icone: IconeLimpeza,
    titulo: "Limpeza e conservação",
    texto: "Auxiliares de serviços gerais para manter as áreas comuns limpas e organizadas.",
  },
  {
    Icone: IconeJardim,
    titulo: "Jardinagem",
    texto: "Cuidado contínuo dos jardins e das áreas verdes do condomínio.",
  },
];

// Cartões ao lado do título: os três serviços principais + a tecnologia.
const DESTAQUES = [
  { Icone: IconePortaria, titulo: "Portaria", href: "#servicos" },
  { Icone: IconeLimpeza, titulo: "Limpeza e conservação", href: "#servicos" },
  { Icone: IconeJardim, titulo: "Jardinagem", href: "#servicos" },
  { Icone: IconeAutomacao, titulo: "Gestão inteligente e automação", href: "/jb-gestao" },
];

const DIFERENCIAIS = [
  {
    Icone: IconeEscudo,
    titulo: "Segurança jurídica",
    texto:
      "A JB assume toda a responsabilidade trabalhista, previdenciária e fiscal. O condomínio não tem vínculo empregatício com os colaboradores.",
  },
  {
    Icone: IconeDocumento,
    titulo: "Tudo conforme a Convenção Coletiva",
    texto: "Pisos, benefícios e adicionais seguem a CCT vigente dos condomínios do RN.",
  },
  {
    Icone: IconeEquipe,
    titulo: "Posto sempre coberto",
    texto: "Folgas, férias e ausências já estão previstas no contrato.",
  },
  {
    Icone: IconeTransparencia,
    titulo: "Transparência nos custos",
    texto: "Propostas com a composição de custos detalhada.",
  },
];

const RECURSOS_JB_GESTAO = [
  "Ocorrências e encomendas registradas pelo WhatsApp, com fotos — a IA lê até a etiqueta da encomenda",
  "Itens de uso, agenda, orçamentos analisados pela IA e obras (condomínios horizontais novos) no mesmo painel",
  "Relatório de Gestão em PDF e Assistente de IA para o síndico e a administração",
  "Contratação à parte para condomínios de todo o Brasil",
  "Módulo operacional incluído para os condomínios com portaria JB",
];

const botaoPrincipal =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-jb-orange px-5 py-3 font-display text-sm font-bold text-white shadow-jb transition hover:bg-jb-orange-600";

function TituloSecao({ rotulo, titulo, claro }: { rotulo: string; titulo: string; claro?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-jb-orange">{rotulo}</p>
      <h2 className={`mt-2 font-display text-3xl font-extrabold ${claro ? "text-white" : "text-jb-navy"}`}>
        {titulo}
      </h2>
    </div>
  );
}

export default function Inicio() {
  return (
    <main>
      {/* Destaque */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_1fr] md:py-24">
          <div>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-jb-navy sm:text-5xl">
              Empresa de prestação de serviços terceirizados
            </h1>
            <p className="mt-5 text-lg text-jb-ink-soft">
              Porteiros 24h, apoio à portaria em áreas extensas, limpeza e jardinagem com equipe registrada, treinada e supervisionada.
              E o JB Gestão Condominial, nossa plataforma de gestão inteligente: já incluída para os
              condomínios com portaria JB e disponível para contratação à parte por qualquer
              condomínio.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={PROPOSTA_EMAIL_LINK} className={botaoPrincipal}>
                <IconeEmail className="h-5 w-5" />
                Solicitar proposta
              </a>
              <a
                href={JB_GESTAO_URL}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-jb-navy px-5 py-3 font-display text-sm font-bold text-jb-navy transition hover:bg-jb-navy hover:text-white"
              >
                Acessar o JB Gestão
                <IconeSeta className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="hidden overflow-hidden rounded-2xl border border-jb-line bg-jb-ground shadow-jb md:block">
            <div className="h-1.5 bg-gradient-to-r from-jb-navy via-jb-navy to-jb-orange" />
            <div className="grid grid-cols-2 gap-4 p-8">
              {DESTAQUES.map(({ Icone, titulo, href }) => (
                <a
                  key={titulo}
                  href={href}
                  className="rounded-xl bg-white p-4 shadow-jb ring-1 ring-transparent transition hover:ring-jb-orange"
                >
                  <Icone className="h-7 w-7 text-jb-orange" />
                  <p className="mt-3 font-display text-sm font-bold text-jb-navy">{titulo}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <TituloSecao rotulo="Serviços" titulo="Mão de obra completa para o seu condomínio" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICOS.map(({ Icone, titulo, texto }) => (
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

      {/* Por que a JB */}
      <section className="border-y border-jb-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <TituloSecao rotulo="Por que a JB" titulo="Seriedade em cada posto de trabalho" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {DIFERENCIAIS.map(({ Icone, titulo, texto }) => (
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
        </div>
      </section>

      {/* JB Gestão Condominial */}
      <section id="jb-gestao" className="bg-jb-navy">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <TituloSecao rotulo="JB Gestão Condominial" titulo="Mais transparência. Mais controle. Mais confiança." claro />
            <p className="mt-5 leading-relaxed text-white/80">
              A plataforma própria da JB Serviços. Os porteiros registram ocorrências e encomendas
              pelo WhatsApp, com fotos e vídeos. O síndico e a administração acompanham tudo pelo
              painel web, com histórico, indicadores e apoio de inteligência artificial. Para os
              condomínios com portaria JB, o módulo operacional já vem incluído, porque é parte do
              nosso padrão de excelência na portaria. Os demais condomínios, de todo o Brasil, podem
              contratá-lo à parte.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/jb-gestao" className={botaoPrincipal}>
                Conheça como funciona
                <IconeSeta className="h-4 w-4" />
              </a>
              <a
                href={JB_GESTAO_URL}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-5 py-3 font-display text-sm font-bold text-white transition hover:bg-white hover:text-jb-navy"
              >
                Acessar o JB Gestão
              </a>
            </div>
          </div>
          <ul className="space-y-3">
            {RECURSOS_JB_GESTAO.map((r) => (
              <li key={r} className="flex gap-3 rounded-xl bg-white/5 p-4 text-sm text-white/90 ring-1 ring-white/10">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-jb-orange" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
          <TituloSecao rotulo="Sobre" titulo="Uma empresa potiguar, perto de quem administra" />
          <p className="text-lg leading-relaxed text-jb-ink-soft">
            Fundada em {EMPRESA_FUNDACAO} em Natal/RN, a JB Serviços nasceu para oferecer aos
            condomínios uma terceirização séria: gente bem preparada, obrigações em dia e
            proximidade com síndicos e administradoras. Hoje unimos essa operação à tecnologia do JB
            Gestão Condominial.
          </p>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="border-t border-jb-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <TituloSecao rotulo="Contato" titulo="Vamos conversar sobre o seu condomínio?" />
          <p className="mt-3 max-w-2xl text-jb-ink-soft">
            Envie um e-mail contando um pouco sobre o seu condomínio e o que você precisa. Nossa
            equipe responde com uma proposta sob medida.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <a
              href={PROPOSTA_EMAIL_LINK}
              className="group rounded-2xl border border-jb-orange bg-jb-orange-100/40 p-6 transition hover:bg-jb-orange-100"
            >
              <IconeEmail className="h-7 w-7 text-jb-orange" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-jb-ink-soft">
                Solicite sua proposta
              </p>
              {/* O endereço não aparece na página: só no programa de e-mail, ao clicar. */}
              <p className="mt-1 font-display text-lg font-bold text-jb-navy group-hover:text-jb-orange-600">
                Enviar e-mail
              </p>
            </a>
            <div className="rounded-2xl border border-jb-line bg-jb-ground p-6">
              <IconeLocal className="h-7 w-7 text-jb-orange" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-jb-ink-soft">
                Serviços presenciais
              </p>
              <p className="mt-1 font-display text-lg font-bold text-jb-navy">
                Natal e região metropolitana
              </p>
              <p className="mt-2 text-sm text-jb-ink-soft">
                Porteiros 24h, apoio à portaria em áreas extensas, limpeza e jardinagem.
              </p>
            </div>
            <div className="rounded-2xl border border-jb-line bg-jb-ground p-6">
              <IconeAutomacao className="h-7 w-7 text-jb-orange" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-jb-ink-soft">
                Soluções de tecnologia
              </p>
              <p className="mt-1 font-display text-lg font-bold text-jb-navy">Todo o Brasil</p>
              <p className="mt-2 text-sm text-jb-ink-soft">
                Gestão inteligente e automação para condomínios, com atendimento remoto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
