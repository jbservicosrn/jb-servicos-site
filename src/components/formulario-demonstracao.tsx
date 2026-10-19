"use client";

import { DEMONSTRACAO_EMAIL_LINK } from "@/lib/empresa";
import {
  CampoAceite,
  CampoIsca,
  FUNCOES,
  estiloCampo as campo,
  estiloRotulo as rotulo,
  useEnvioPedido,
} from "@/components/envio-pedido";

// Formulário "Agendar demonstração" (18/10/2026). Envio, isca contra robôs e
// aceite da privacidade ficam em envio-pedido.tsx (comuns ao formulário do
// modelo de relatório).

// Mesmas faixas da tabela de preços (CLAUDE.md), para a proposta sair certa.
const FAIXAS_UNIDADES = ["Até 60", "61 a 120", "121 a 250", "251 a 500", "501 a 1.000", "Mais de 1.000"];

const CIDADES = ["Natal", "Parnamirim", "São Gonçalo do Amarante", "Macaíba", "Extremoz", "São José de Mipibu", "Nísia Floresta"];

export function FormularioDemonstracao() {
  const { situacao, erro, enviar } = useEnvioPedido("demonstracao");

  if (situacao === "enviado") {
    return (
      <div className="rounded-2xl bg-white p-6 text-center shadow-jb sm:p-8" role="status">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-jb-ok-100 text-2xl text-jb-ok">
          ✓
        </span>
        <h3 className="mt-4 font-display text-xl font-extrabold text-jb-navy">Pedido enviado!</h3>
        <p className="mt-2 text-sm leading-relaxed text-jb-ink-soft">
          Obrigado. Vamos responder por e-mail para combinar o melhor dia e horário da apresentação
          e, em seguida, liberar os 7 dias de teste grátis com o seu condomínio.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} className="rounded-2xl bg-white p-6 shadow-jb sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="sm:col-span-2">
          <span className={rotulo}>Seu nome *</span>
          <input name="nome" required minLength={2} maxLength={120} autoComplete="name" className={campo} />
        </label>

        <label>
          <span className={rotulo}>Você é</span>
          <select name="funcao" defaultValue="" className={campo}>
            <option value="" disabled>
              Escolha
            </option>
            {FUNCOES.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </label>

        <label>
          <span className={rotulo}>Quantidade de unidades</span>
          <select name="unidades" defaultValue="" className={campo}>
            <option value="" disabled>
              Casas ou apartamentos
            </option>
            {FAIXAS_UNIDADES.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </label>

        <label>
          <span className={rotulo}>Nome do condomínio *</span>
          <input name="condominio" required minLength={2} maxLength={150} className={campo} />
        </label>

        <label>
          <span className={rotulo}>Cidade</span>
          <input name="cidade" list="cidades-demonstracao" maxLength={80} autoComplete="address-level2" className={campo} />
          <datalist id="cidades-demonstracao">
            {CIDADES.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </label>

        <label>
          <span className={rotulo}>E-mail *</span>
          <input name="email" type="email" required maxLength={150} autoComplete="email" className={campo} />
        </label>

        <label>
          <span className={rotulo}>Telefone/WhatsApp</span>
          <input
            name="telefone"
            type="tel"
            maxLength={30}
            autoComplete="tel"
            placeholder="(84) 99999-9999"
            className={campo}
          />
        </label>

        <fieldset className="sm:col-span-2">
          <legend className={rotulo}>O condomínio já tem portaria da JB Serviços?</legend>
          <div className="mt-2 flex gap-6 text-sm text-jb-ink">
            {["sim", "não"].map((v) => (
              <label key={v} className="inline-flex items-center gap-2">
                <input type="radio" name="portaria_jb" value={v} className="h-4 w-4 accent-jb-orange" />
                {v === "sim" ? "Sim" : "Não"}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="sm:col-span-2">
          <span className={rotulo}>Melhores dias e horários</span>
          <input name="horario" maxLength={120} placeholder="Ex.: terça ou quinta, pela manhã" className={campo} />
        </label>

        <label className="sm:col-span-2">
          <span className={rotulo}>Quer contar algo mais?</span>
          <textarea
            name="mensagem"
            rows={3}
            maxLength={1500}
            placeholder="O que mais preocupa hoje: portaria, encomendas, obras, prestação de contas…"
            className={campo}
          />
        </label>

        <CampoIsca />

        <div className="sm:col-span-2">
          <CampoAceite />
        </div>
      </div>

      {situacao === "erro" && (
        <p className="mt-4 rounded-lg bg-jb-orange-100 px-4 py-3 text-sm text-jb-ink" role="alert">
          {erro} Tente de novo em instantes ou{" "}
          <a href={DEMONSTRACAO_EMAIL_LINK} className="font-semibold text-jb-orange-600 underline">
            peça por e-mail
          </a>
          .
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={situacao === "enviando"}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-jb-orange px-5 py-3 font-display text-sm font-bold text-white shadow-jb transition hover:bg-jb-orange-600 disabled:cursor-wait disabled:opacity-70"
        >
          {situacao === "enviando" ? "Enviando…" : "Agendar demonstração"}
        </button>
        <p className="text-xs text-jb-ink-soft">
          Prefere e-mail?{" "}
          <a href={DEMONSTRACAO_EMAIL_LINK} className="text-jb-orange-600 underline">
            Enviar e-mail
          </a>
        </p>
      </div>
    </form>
  );
}
