import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Cabecalho from "@/components/cabecalho";
import Rodape from "@/components/rodape";
import { SITE_URL } from "@/lib/empresa";
import "./globals.css";

const descricao =
  "Terceirização de porteiros 24h, apoio à portaria, limpeza e jardinagem para condomínios em Natal/RN, com a tecnologia do JB Gestão Condominial.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Verificação do Google Search Console (propriedade https://www.jbservicosrn.com.br,
  // conta Google da JB, 19/10/2026). Não apagar: sem ela o Search Console perde o acesso.
  verification: { google: "iFwcpYwHHSLEy2P0hxwq8m1vqWEbxsMilR3_WZ5Ev4c" },
  title: "JB Serviços — Terceirização para condomínios em Natal/RN",
  description: descricao,
  openGraph: {
    title: "JB Serviços",
    description: descricao,
    url: SITE_URL,
    siteName: "JB Serviços",
    locale: "pt_BR",
    type: "website",
    images: ["/logo-jb-servicos.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Cabecalho />
        {children}
        <Rodape />
        {/* Contagem anônima de visitas (Vercel Web Analytics, sem cookies). */}
        <Analytics />
      </body>
    </html>
  );
}
