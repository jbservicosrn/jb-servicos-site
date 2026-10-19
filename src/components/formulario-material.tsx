"use client";

import {
  CampoAceite,
  CampoIsca,
  FUNCOES,
  estiloCampo as campo,
  estiloRotulo as rotulo,
  useEnvioPedido,
} from "@/components/envio-pedido";

// "Baixe grátis o modelo de relatório para assembleia" (18/10/2026). Formulário
// curto: o contato entra na mesma tabela do n8n com tipo "material" e a JB é
// avisada por e-mail; o botão de download aparece depois do envio. O PDF fica em
// public/ (fonte editável no Drive › Comercial › "Modelo de relatório para
// assembleia — arquivos de edição").
export const MODELO_RELATORIO_PDF = "/modelo-relatorio-assembleia.pdf";

export function FormularioMaterial() {
  const { situacao, erro, enviar } = useEnvioPedido("material");

  if (situacao === "enviado") {
    return (
      <div className="rounded-2xl border border-jb-line bg-white p-6 text-center shadow-jb sm:p-8" role="status">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-jb-ok-100 text-2xl text-jb-ok">
          ✓
        </span>
        <h3 className="mt-4 font-display text-xl font-extrabold text-jb-navy">Pronto, o modelo é seu!</h3>
        <p className="mt-2 text-sm leading-relaxed text-jb-ink-soft">
          Baixe o PDF, imprima e preencha. Se quiser ver o relatório saindo pronto, agende uma demonstração.
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={MODELO_RELATORIO_PDF}
            download
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-jb-orange px-5 py-3 font-display text-sm font-bold text-white shadow-jb transition hover:bg-jb-orange-600"
          >
            Baixar o modelo (PDF)
          </a>
          <a href="#demonstracao" className="text-sm font-semibold text-jb-orange-600 underline">
            Agendar demonstração
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} className="rounded-2xl border border-jb-line bg-white p-6 shadow-jb sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label>
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
          <span className={rotulo}>Nome do condomínio *</span>
          <input name="condominio" required minLength={2} maxLength={150} className={campo} />
        </label>

        <label>
          <span className={rotulo}>E-mail *</span>
          <input name="email" type="email" required maxLength={150} autoComplete="email" className={campo} />
        </label>

        <CampoIsca />

        <div className="sm:col-span-2">
          <CampoAceite finalidade="para liberar o modelo e entrar em contato sobre o JB Gestão Condominial" />
        </div>
      </div>

      {situacao === "erro" && (
        <p className="mt-4 rounded-lg bg-jb-orange-100 px-4 py-3 text-sm text-jb-ink" role="alert">
          {erro} Tente de novo em instantes.
        </p>
      )}

      <button
        type="submit"
        disabled={situacao === "enviando"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-jb-orange px-5 py-3 font-display text-sm font-bold text-white shadow-jb transition hover:bg-jb-orange-600 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {situacao === "enviando" ? "Enviando…" : "Quero o modelo grátis"}
      </button>
    </form>
  );
}
