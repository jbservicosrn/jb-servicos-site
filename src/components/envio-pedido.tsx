"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { PEDIDO_DEMONSTRACAO_URL } from "@/lib/empresa";

// Envio comum aos formulários do site (18/10/2026): "Agendar demonstração" e
// "Baixar o modelo de relatório". O site continua estático: o pedido vai direto
// para o webhook do n8n ("JB Serviços — Site — Pedidos de demonstração"), que
// guarda na tabela (coluna `tipo`) e avisa a JB pelo Gmail. Vai como formulário
// simples (x-www-form-urlencoded) para o navegador não precisar da consulta
// prévia de CORS.

export const FUNCOES = [
  "Síndico(a) morador(a)",
  "Síndico(a) profissional",
  "Administradora",
  "Conselho do condomínio",
  "Morador(a)",
  "Outra",
];

export const estiloCampo =
  "mt-1 w-full rounded-lg border border-jb-line bg-white px-3 py-2.5 text-sm text-jb-ink outline-none transition focus:border-jb-orange focus:ring-2 focus:ring-jb-orange/30";
export const estiloRotulo = "block text-sm font-semibold text-jb-navy";

// Quem envia mais rápido que isto é robô: finge que deu certo e não manda nada.
const TEMPO_MINIMO_MS = 3000;

export type SituacaoEnvio = "preenchendo" | "enviando" | "enviado" | "erro";

export function useEnvioPedido(tipo: "demonstracao" | "material") {
  const [situacao, setSituacao] = useState<SituacaoEnvio>("preenchendo");
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
    corpo.set("tipo", tipo);
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

  return { situacao, erro, enviar };
}

// Isca para robôs: escondida de quem usa o site; se vier preenchida, o pedido é descartado.
export function CampoIsca() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        Site
        <input name="site" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

// O texto da autorização diz exatamente para que os dados servem (LGPD).
export function CampoAceite({
  finalidade = "só para responder a este pedido",
}: {
  finalidade?: string;
}) {
  return (
    <label className="flex items-start gap-3 text-sm text-jb-ink-soft">
      <input type="checkbox" name="aceite" required className="mt-0.5 h-4 w-4 shrink-0 accent-jb-orange" />
      <span>
        Autorizo a JB Serviços a usar estes dados {finalidade}, conforme a{" "}
        <a href="/privacidade" className="text-jb-orange-600 underline">
          Política de Privacidade
        </a>
        . *
      </span>
    </label>
  );
}
