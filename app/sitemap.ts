import type { MetadataRoute } from "next";
import { company, posts, projects, services } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = company.url;
  const fixed = ["", "/tentang", "/layanan", "/portofolio", "/tim", "/karir", "/blog", "/kontak"].map((p) => ({
    url: `${base}${p}`, lastModified: now, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8,
  }));
  return [
    ...fixed,
    ...services.map((s) => ({ url: `${base}/layanan/${s.slug}`, lastModified: now, priority: 0.7 })),
    ...projects.map((p) => ({ url: `${base}/portofolio/${p.slug}`, lastModified: now, priority: 0.6 })),
    ...posts.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: new Date(p.date), priority: 0.6 })),
  ];
}
