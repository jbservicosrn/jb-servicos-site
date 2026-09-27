import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

// Mesmos tokens de cor e fonte do painel JB Gestão Condominial
// (jbservicosrn/jb-gestao-painel-web, tailwind.config.ts) — o site e o painel
// precisam parecer a mesma marca. Mudou lá, muda aqui.
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "jb-navy": {
          DEFAULT: "#0f2a4a",
          50: "#f4f7fb",
          100: "#e7edf5",
          700: "#1f4b7d",
          800: "#163a63",
          900: "#0f2a4a",
          950: "#0b1f38",
        },
        "jb-orange": {
          DEFAULT: "#f5821f",
          100: "#fde9d5",
          500: "#f5821f",
          600: "#e8660f",
        },
        "jb-ok": {
          DEFAULT: "#2f8f5b",
          100: "#e1f4e9",
        },
        "jb-ink": "#101826",
        "jb-ink-soft": "#4c586b",
        "jb-line": "#dde4ee",
        "jb-ground": "#f4f6fa",
      },
      fontFamily: {
        display: ["Manrope", ...defaultTheme.fontFamily.sans],
        sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        jb: "0 1px 2px rgba(15,42,74,.06), 0 8px 24px -12px rgba(15,42,74,.18)",
      },
    },
  },
  plugins: [],
};

export default config;
