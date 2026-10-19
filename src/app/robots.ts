import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/empresa";

// /robots.txt (18/10/2026): o site inteiro pode ser lido pelos buscadores, e
// aponta onde está o mapa do site.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
