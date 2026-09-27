// Ícones de traço 24x24 no mesmo estilo dos SVGs do painel (stroke em
// currentColor, pontas arredondadas) — herdam a cor do texto em volta.

type Props = { className?: string };

function Svg({ className = "h-6 w-6", children }: Props & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function IconePortaria(p: Props) {
  return (
    <Svg {...p}>
      <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      <path d="M2 21h20" />
      <path d="M12 12h.01" />
      <path d="M16 8h4v13" />
    </Svg>
  );
}

export function IconeRonda(p: Props) {
  return (
    <Svg {...p}>
      <circle cx="5.5" cy="17" r="3" />
      <circle cx="18.5" cy="17" r="3" />
      <path d="M8.5 17h5l3-7h-4" />
      <path d="M5.5 17l3-6h5" />
      <path d="M15 6h2.5l1 4" />
    </Svg>
  );
}

export function IconeVigia(p: Props) {
  return (
    <Svg {...p}>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
    </Svg>
  );
}

export function IconeMonitor(p: Props) {
  return (
    <Svg {...p}>
      <rect x="2" y="4" width="15" height="11" rx="2" />
      <path d="m17 8 5-3v10l-5-3" />
      <path d="M7 19h5" />
      <path d="M9.5 15v4" />
    </Svg>
  );
}

export function IconeLimpeza(p: Props) {
  return (
    <Svg {...p}>
      <path d="M12 3v8" />
      <path d="M8 11h8l1 3H7l1-3Z" />
      <path d="M7 14l-1 7h12l-1-7" />
      <path d="M10 18v3M14 18v3" />
    </Svg>
  );
}

export function IconeJardim(p: Props) {
  return (
    <Svg {...p}>
      <path d="M12 21v-8" />
      <path d="M12 13c0-4 3-7 8-7 0 4-3 7-8 7Z" />
      <path d="M12 11C12 7.5 9.5 5 5 5c0 3.5 2.5 6 7 6Z" />
      <path d="M7 21h10" />
    </Svg>
  );
}

export function IconeAutomacao(p: Props) {
  return (
    <Svg {...p}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M10 10h4v4h-4z" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </Svg>
  );
}

export function IconeEscudo(p: Props) {
  return (
    <Svg {...p}>
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  );
}

export function IconeDocumento(p: Props) {
  return (
    <Svg {...p}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </Svg>
  );
}

export function IconeEquipe(p: Props) {
  return (
    <Svg {...p}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 4.5a3.5 3.5 0 0 1 0 7" />
      <path d="M18 14a6.5 6.5 0 0 1 3.5 6" />
    </Svg>
  );
}

export function IconeTransparencia(p: Props) {
  return (
    <Svg {...p}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </Svg>
  );
}

export function IconeWhatsapp(p: Props) {
  return (
    <Svg {...p}>
      <path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 7.7 19.4L3 21Z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.4-2-1-1 .8a4 4 0 0 1-2.1-2.1l.8-1-1-2L9 9.5Z" />
    </Svg>
  );
}

export function IconeEmail(p: Props) {
  return (
    <Svg {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Svg>
  );
}

export function IconeLocal(p: Props) {
  return (
    <Svg {...p}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </Svg>
  );
}

export function IconeSeta(p: Props) {
  return (
    <Svg {...p}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Svg>
  );
}

export function IconeMenu(p: Props) {
  return (
    <Svg {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function IconeFechar(p: Props) {
  return (
    <Svg {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  );
}
