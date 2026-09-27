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

export function IconeCaixa(p: Props) {
  return (
    <Svg {...p}>
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
      <path d="M3 8l9 5 9-5" />
      <path d="M12 13v8" />
    </Svg>
  );
}

export function IconeCalendario(p: Props) {
  return (
    <Svg {...p}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M8 14h3v3H8z" />
    </Svg>
  );
}

export function IconeGrafico(p: Props) {
  return (
    <Svg {...p}>
      <path d="M3 3v18h18" />
      <path d="M8 17v-5M13 17V8M18 17v-8" />
    </Svg>
  );
}

export function IconeIA(p: Props) {
  return (
    <Svg {...p}>
      <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
    </Svg>
  );
}

export function IconeCadeado(p: Props) {
  return (
    <Svg {...p}>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <path d="M12 15v2" />
    </Svg>
  );
}

export function IconeRelogio(p: Props) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Svg>
  );
}

export function IconeNuvem(p: Props) {
  return (
    <Svg {...p}>
      <path d="M7 18a5 5 0 0 1-.5-10A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9H7Z" />
      <path d="m9.5 13 2 2 3.5-3.5" />
    </Svg>
  );
}

export function IconeAlerta(p: Props) {
  return (
    <Svg {...p}>
      <path d="M10.3 4 2.5 18a2 2 0 0 0 1.7 3h15.6a2 2 0 0 0 1.7-3L13.7 4a2 2 0 0 0-3.4 0Z" />
      <path d="M12 10v4M12 17.5h.01" />
    </Svg>
  );
}

export function IconeConversa(p: Props) {
  return (
    <Svg {...p}>
      <path d="M4 5h16v11H9l-5 4V5Z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </Svg>
  );
}

export function IconePredio(p: Props) {
  return (
    <Svg {...p}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      <path d="M10.5 21v-3h3v3" />
    </Svg>
  );
}
