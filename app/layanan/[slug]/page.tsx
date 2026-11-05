import type { Metadata } from "next";
import { ServiceDetail } from "@/components/pages/Services";
import { services } from "@/lib/content";

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return {};
  return { title: s.title.id, description: s.short.id, alternates: { canonical: `/layanan/${s.slug}` } };
}
export default function Page({ params }: { params: { slug: string } }) { return <ServiceDetail slug={params.slug} />; }
