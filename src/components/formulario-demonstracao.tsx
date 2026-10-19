"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { DEMONSTRACAO_EMAIL_LINK, PEDIDO_DEMONSTRACAO_URL } from "@/lib/empresa";

// Formulário "Agendar demonstração" (18/10/2026). O site continua estático: o
// pedido vai direto para um webhook do n8n ("JB Serviços — Site — Pedidos de
// demonstração"), que guarda numa tabela e avisa a JB pelo Gmail. Vai como
// formulário simples (x-www-form-urlencoded) para o navegador não precisar
// da consulta prévia de CORS.

const FUNCOES = [
  "Síndico(a) morador(a)",
  "Síndico(a) profissional",
  "Administradora",
  "Conselho do condomínio",
  "Morador(a)",
  "Outra",
];

// Mesmas faixas da tabela de preços (CLAUDE.md), para a proposta sair certa.
const FAIXAS_UNIDADES = ["Até 60", "61 a 120", "121 a 250", "251 a 500", "501 a 1.000", "Mais de 1.000"];

const CIDADES = ["Natal", "Parnamirim", "São Gonçalo do Amarante", "Macaíba", "Extremoz", "São José de Mipibu", "Nísia Floresta"];

// Quem envia mais rápido que isto é robô: finge que deu certo e não manda nada.
const TEMPO_MINIMO_MS = 3000;

type Situacao = "preenchendo" | "enviando" | "enviado" | "erro";

const campo =
  "mt-1 w-full rounded-lg border border-jb-line bg-white px-3 py-2.5 text-sm text-jb-ink outline-none transition focus:border-jb-orange focus:ring-2 focus:ring-jb-orange/30";
const rotulo = "block text-sm font-semibold text-jb-navy";

export function FormularioDemonstracao() {
  const [situacao, setSituacao] = useState<Situacao>("preenchendo");
  const [erro, setErro] = useState("");
  const abertoEm = useRef(Date.now());
  const origem = useRef({ pagina: "", utm_source: "", utm_medium: "", utm_campaign: "" });

  useEffect(() => {
    const busca = new URLSearchParams(window.location.search);
    origem.current = {
      pagina: window.location.pathname,
      utm_source: busca.get("utm_source") ?? "",
      utm_medium: busca.get("utm_medium") ?? "",
      utm_campaign: busca.get("utm_campaign") ?? "",
    };
  }, []);

  async function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const dados = new FormData(evento.currentTarget);

    if (dados.get("site") || Date.now() - abertoEm.current < TEMPO_MINIMO_MS) {
      setSituacao("enviado");
      return;
    }

    const corpo = new URLSearchParams();
    dados.forEach((valor, chave) => {
      if (typeof valor === "string") corpo.append(chave, valor);
    });
    corpo.set("aceite", dados.get("aceite") ? "sim" : "não");
    Object.entries(origem.current).forEach(([chave, valor]) => corpo.set(chave, valor));

    setSituacao("enviando");
    setErro("");
    try {
      const resposta = await fetch(PEDIDO_DEMONSTRACAO_URL, { method: "POST", body: corpo });
      const json = (await resposta.json().catch(() => null)) as { ok?: boolean; erro?: string } | null;
      if (resposta.ok && json?.ok) {
        setSituacao("enviado");
        return;
      }
      setErro(json?.erro ?? "Não conseguimos enviar agora.");
    } catch {
      setErro("Não conseguimos enviar agora. Confira sua conexão com a internet.");
    }
    setSituacao("erro");
  }

  if (situacao === "enviado") {
    return (
      <div className="rounded-2xl bg-white p-6 text-center shadow-jb sm:p-8" role="status">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-jb-ok-100 text-2xl text-jb-ok">
          ✓
        </span>
        <h3 className="mt-4 font-display text-xl font-extrabold text-jb-navy">Pedido enviado!</h3>
        <p className="mt-2 text-sm leading-relaxed text-jb-ink-soft">
          Obrigado. Vamos responder por e-mail para combinar o melhor dia e horário da apresentação
          e, em seguida, liberar os 7 dias de teste com o seu condomínio.
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

        {/* Isca para robôs: escondida de quem usa o site; se vier preenchida, o pedido é descartado. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Site
            <input name="site" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <label className="flex items-start gap-3 text-sm text-jb-ink-soft sm:col-span-2">
          <input type="checkbox" name="aceite" required className="mt-0.5 h-4 w-4 shrink-0 accent-jb-orange" />
          <span>
            Autorizo a JB Serviços a usar estes dados só para responder a este pedido, conforme a{" "}
            <a href="/privacidade" className="text-jb-orange-600 underline">
              Política de Privacidade
            </a>
            . *
          </span>
        </label>
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
