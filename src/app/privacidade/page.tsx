import type { Metadata } from "next";
import {
  EMPRESA_CNPJ,
  EMPRESA_EMAIL,
  EMPRESA_NOME,
  JB_GESTAO_URL,
} from "@/lib/empresa";

// Política do site institucional apenas. O painel JB Gestão Condominial tem
// política própria (JB_GESTAO_URL/privacidade), que trata dos dados do sistema.
const ATUALIZADA_EM = "27/09/2026";

export const metadata: Metadata = {
  title: "Política de Privacidade — JB Serviços",
};

export default function Privacidade() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-extrabold text-jb-navy">Política de Privacidade</h1>
      <p className="mt-2 text-sm text-jb-ink-soft">Atualizada em {ATUALIZADA_EM}</p>

      <div className="mt-8 space-y-6 leading-relaxed text-jb-ink [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-jb-navy">
        <p>
          Esta política vale para o site institucional da {EMPRESA_NOME} (CNPJ {EMPRESA_CNPJ}) e segue a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, LGPD).
        </p>

        <h2>1. Quais dados coletamos</h2>
        <p>
          Este site não tem formulários, cadastro nem login, e não usa cookies de rastreamento ou
          publicidade. Não coletamos dados pessoais pelo site.
        </p>

        <h2>2. Contato por e-mail</h2>
        <p>
          Quando você fala com a gente por e-mail, recebemos as informações
          que você decidir enviar (como nome, telefone e dados do condomínio). Usamos esses dados
          apenas para responder e preparar propostas, e não os repassamos a terceiros.
        </p>

        <h2>3. Serviços de terceiros</h2>
        <p>
          As fontes do site são carregadas do Google Fonts, e o site é hospedado na Vercel. Esses
          serviços podem registrar dados técnicos de acesso (como endereço IP e navegador),
          conforme as políticas de privacidade deles.
        </p>

        <h2>4. JB Gestão Condominial</h2>
        <p>
          O painel JB Gestão Condominial tem política de privacidade própria, disponível em{" "}
          <a href={`${JB_GESTAO_URL}/privacidade`} className="text-jb-orange-600 underline">
            {JB_GESTAO_URL.replace("https://", "")}/privacidade
          </a>
          .
        </p>

        <h2>5. Seus direitos e contato</h2>
        <p>
          Para pedir acesso, correção ou exclusão dos seus dados, ou para tirar dúvidas sobre esta
          política, escreva para{" "}
          <a href={`mailto:${EMPRESA_EMAIL}`} className="text-jb-orange-600 underline">
            {EMPRESA_EMAIL}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
