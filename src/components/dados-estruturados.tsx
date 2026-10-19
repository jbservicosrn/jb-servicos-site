import { EMPRESA_CNPJ, EMPRESA_FUNDACAO, EMPRESA_NOME, SITE_URL } from "@/lib/empresa";

// Dados estruturados (schema.org, JSON-LD) para o Google entender quem é a
// empresa e o que é o JB Gestão (18/10/2026). Invisíveis para quem visita.
// Sem telefone e sem e-mail (decisão do dono: contato só pelos botões e
// formulários) e sem avaliações inventadas.

const CIDADES_ATENDIDAS = [
  "Natal",
  "Parnamirim",
  "São Gonçalo do Amarante",
  "Macaíba",
  "Extremoz",
  "São José de Mipibu",
  "Nísia Floresta",
];

export const ORGANIZACAO = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organizacao`,
  name: EMPRESA_NOME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-jb-servicos.jpg`,
  foundingDate: String(EMPRESA_FUNDACAO),
  taxID: EMPRESA_CNPJ,
  description:
    "Terceirização para condomínios em Natal/RN (porteiros 24h, apoio à portaria, limpeza e jardinagem) e o sistema de gestão JB Gestão Condominial.",
  address: { "@type": "PostalAddress", addressLocality: "Natal", addressRegion: "RN", addressCountry: "BR" },
  areaServed: CIDADES_ATENDIDAS.map((nome) => ({ "@type": "City", name: `${nome}, RN` })),
};

export const JB_GESTAO = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "JB Gestão Condominial",
  url: `${SITE_URL}/jb-gestao`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  inLanguage: "pt-BR",
  description:
    "Sistema de gestão para condomínios: a portaria registra ocorrências e encomendas pelo WhatsApp e o síndico(a) acompanha tudo pelo painel, com agenda, comunicados, orçamentos, compras, obras, relatórios e inteligência artificial.",
  publisher: { "@id": `${SITE_URL}/#organizacao` },
};

export function DadosEstruturados({ dados }: { dados: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }} />;
}
