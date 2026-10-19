import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/empresa";

// Mapa do site para o Google (18/10/2026), servido em /sitemap.xml e enviado no
// Google Search Console. Página nova no site = linha nova aqui.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/jb-gestao`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/privacidade`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
