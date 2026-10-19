// Dados da empresa exibidos no site. Um lugar só, pra atualizar sem caçar
// texto nas páginas.
export const EMPRESA_NOME = "JB Serviços";
// Razão social omitida no site por enquanto (pedido de 27/09/2026): será alterada.
export const EMPRESA_CNPJ = "36.878.025/0001-30";
export const EMPRESA_EMAIL = "jbservicosrn@gmail.com";
export const EMPRESA_CIDADE = "Natal/RN";
export const EMPRESA_FUNDACAO = 2020;

// Propostas só por e-mail por enquanto (27/09/2026): o WhatsApp comercial,
// (84) 99638-5174, fica fora do site até existir uma rotina de atendimento
// automatizado para novos clientes.
// Os links já abrem o e-mail com assunto e um roteiro para o cliente só
// completar (pedido de 27/09/2026). Quebras de linha como \r\n, que é o que
// o padrão de links mailto pede.
function linkEmail(assunto: string, linhas: string[]) {
  return `mailto:${EMPRESA_EMAIL}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(linhas.join("\r\n"))}`;
}

export const PROPOSTA_EMAIL_LINK = linkEmail("Solicitação de proposta — JB Serviços", [
  "Olá, equipe JB Serviços!",
  "",
  "Gostaria de receber uma proposta para o meu condomínio.",
  "",
  "Nome do condomínio: ",
  "Bairro e cidade: ",
  "Quantidade de unidades (casas ou apartamentos): ",
  "Serviços de interesse (portaria 24h, apoio à portaria em áreas extensas, limpeza, jardinagem, JB Gestão): ",
  "Meu nome e função (síndico(a), administradora, conselho…): ",
  "Telefone/WhatsApp para contato: ",
  "",
  "Observações: ",
  "",
  "Obrigado(a)!",
]);

export const DEMONSTRACAO_EMAIL_LINK = linkEmail("Demonstração do JB Gestão Condominial", [
  "Olá, equipe JB Serviços!",
  "",
  "Gostaria de agendar uma demonstração do JB Gestão Condominial.",
  "",
  "Nome do condomínio: ",
  "Bairro e cidade: ",
  "Quantidade de unidades (casas ou apartamentos): ",
  "O condomínio já tem portaria da JB Serviços? (sim/não): ",
  "Meu nome e função (síndico(a), administradora, conselho…): ",
  "Telefone/WhatsApp para contato: ",
  "Melhores dias e horários para a demonstração: ",
  "",
  "Obrigado(a)!",
]);

// Formulário "Agendar demonstração" de /jb-gestao (18/10/2026): webhook do
// workflow "JB Serviços — Site — Pedidos de demonstração" no n8n (guarda na
// tabela "Site — Pedidos de demonstração" e avisa a JB pelo Gmail). O endereço
// é público por natureza; o filtro contra spam fica no próprio webhook.
export const PEDIDO_DEMONSTRACAO_URL = "https://jbservicos.app.n8n.cloud/webhook/site-pedido-demonstracao";

export const JB_GESTAO_URL ="https://jb-gestao-cond.jbservicosrn.com.br";
// Endereço principal com "www" (18/10/2026): a raiz redireciona (308) para o
// www, então canonical, mapa do site e dados estruturados usam este, para o
// Google não receber dois endereços para a mesma página.
export const SITE_URL = "https://www.jbservicosrn.com.br";
