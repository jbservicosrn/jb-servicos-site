"use client";

import { useState } from "react";
import { IconeFechar, IconeMenu } from "@/components/icones";
import { JB_GESTAO_URL } from "@/lib/empresa";

const LINKS = [
  { href: "/#servicos", rotulo: "Serviços" },
  { href: "/jb-gestao", rotulo: "JB Gestão" },
  { href: "/#sobre", rotulo: "Sobre" },
  { href: "/#contato", rotulo: "Contato" },
];

export default function Cabecalho() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-jb-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center" aria-label="JB Serviços — início">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-jb-servicos.jpg" alt="JB Serviços" className="h-10 w-auto object-contain" />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-jb-ink-soft transition hover:text-jb-navy"
            >
              {l.rotulo}
            </a>
          ))}
          <a
            href={JB_GESTAO_URL}
            className="rounded-lg bg-jb-orange px-4 py-2 font-display text-sm font-bold text-white shadow-jb transition hover:bg-jb-orange-600"
          >
            Acessar o JB Gestão
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          className="rounded-lg p-2 text-jb-navy md:hidden"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
        >
          {aberto ? <IconeFechar /> : <IconeMenu />}
        </button>
      </div>

      {aberto && (
        <nav className="border-t border-jb-line bg-white px-4 pb-4 md:hidden" aria-label="Principal">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setAberto(false)}
              className="block border-b border-jb-line py-3 text-sm font-medium text-jb-ink"
            >
              {l.rotulo}
            </a>
          ))}
          <a
            href={JB_GESTAO_URL}
            className="mt-4 block rounded-lg bg-jb-orange px-4 py-2.5 text-center font-display text-sm font-bold text-white"
          >
            Acessar o JB Gestão
          </a>
        </nav>
      )}
    </header>
  );
}
