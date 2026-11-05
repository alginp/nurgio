import type { Metadata } from "next";
import { ProjectDetail } from "@/components/pages/Portfolio";
import { projects } from "@/lib/content";

export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return {};
  return { title: `${p.title.id} — ${p.client}`, description: p.summary.id, alternates: { canonical: `/portofolio/${p.slug}` } };
}
export default function Page({ params }: { params: { slug: string } }) { return <ProjectDetail slug={params.slug} />; }
