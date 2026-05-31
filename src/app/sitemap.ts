import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/donar`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/transparencia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/terminos`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacidad`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/muro`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
  ];
}
