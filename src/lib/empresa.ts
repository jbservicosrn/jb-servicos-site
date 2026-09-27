// Dados da empresa exibidos no site. Um lugar só, pra atualizar sem caçar
// texto nas páginas.
export const EMPRESA_NOME = "JB Serviços";
export const EMPRESA_RAZAO_SOCIAL = "José Ivanildo Vicente Barbosa LTDA";
export const EMPRESA_CNPJ = "36.878.025/0001-30";
export const EMPRESA_EMAIL = "jbservicosrn@gmail.com";
export const EMPRESA_CIDADE = "Natal/RN";
export const EMPRESA_FUNDACAO = 2020;

// Propostas só por e-mail por enquanto (27/09/2026): o WhatsApp comercial,
// (84) 99638-5174, fica fora do site até existir uma rotina de atendimento
// automatizado para novos clientes.
const PROPOSTA_ASSUNTO = "Solicitação de proposta — JB Serviços";
export const PROPOSTA_EMAIL_LINK = `mailto:${EMPRESA_EMAIL}?subject=${encodeURIComponent(PROPOSTA_ASSUNTO)}`;

export const JB_GESTAO_URL = "https://jb-gestao-cond.jbservicosrn.com.br";
export const SITE_URL = "https://jbservicosrn.com.br";
