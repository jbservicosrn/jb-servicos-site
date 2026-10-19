import type { Metadata } from "next";
import {
  EMPRESA_CNPJ,
  EMPRESA_EMAIL,
  EMPRESA_NOME,
  JB_GESTAO_URL,
} from "@/lib/empresa";

// Política do site institucional apenas. O painel JB Gestão Condominial tem
// política própria (JB_GESTAO_URL/privacidade), que trata dos dados do sistema.
const ATUALIZADA_EM = "18/10/2026";

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
          Este site não tem cadastro nem login e não usa cookies de rastreamento ou publicidade. O
          único lugar em que pedimos dados pessoais é o formulário de demonstração do JB Gestão
          Condominial, preenchido só por quem quiser.
        </p>

        <h2>2. Formulário de demonstração e contato por e-mail</h2>
        <p>
          No formulário de demonstração recebemos o que você preencher: nome, função no condomínio,
          nome e cidade do condomínio, quantidade de unidades, e-mail, telefone (opcional), melhores
          horários e mensagem, além da página do site e do anúncio ou link de onde você veio. Quando
          você fala com a gente por e-mail, recebemos as informações que decidir enviar.
        </p>
        <p>
          Usamos esses dados apenas para responder ao seu pedido, combinar a demonstração e preparar
          propostas, com base no seu pedido e na autorização que você marca no formulário. Não os
          vendemos nem repassamos a terceiros. Os pedidos ficam no e-mail da JB Serviços (Google) e
          na nossa ferramenta de automação (n8n), e os de quem não fechar contrato são apagados em
          até 12 meses.
        </p>

        <h2>3. Serviços de terceiros</h2>
        <p>
          As fontes do site são carregadas do Google Fonts, o site é hospedado na Vercel e o
          formulário de demonstração é recebido pelo n8n, que nos avisa pelo Gmail. Esses serviços
          podem registrar dados técnicos de acesso (como endereço IP e navegador), conforme as
          políticas de privacidade deles.
        </p>
        <p>
          Para saber quantas pessoas visitam cada página, usamos o Vercel Web Analytics, que conta
          as visitas de forma anônima e agregada (página, origem do acesso, tipo de aparelho e
          país), sem cookies e sem identificar quem visitou.
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
