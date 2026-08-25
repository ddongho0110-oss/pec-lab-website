import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://pec-lab-website-five.vercel.app";
  return ["", "/research", "/professor", "/publications", "/patents", "/presentations", "/members", "/news", "/gallery", "/alumni"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/news" || path === "/publications" ? "monthly" : "yearly",
    priority: path === "" ? 1 : 0.7,
  }));
}
