import type { MetadataRoute } from "next";
import { SITE, NAV } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV.map((l) => ({
    url: `${SITE.url}${l.href === "/" ? "" : l.href}`,
    changeFrequency: "monthly",
    priority: l.href === "/" ? 1 : 0.8,
  }));
}
