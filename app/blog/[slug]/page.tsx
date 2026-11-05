import type { Metadata } from "next";
import { PostDetail } from "@/components/pages/Blog";
import { posts } from "@/lib/content";

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: p.title.id, description: p.excerpt.id, alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", publishedTime: p.date, title: p.title.id, description: p.excerpt.id },
  };
}
export default function Page({ params }: { params: { slug: string } }) { return <PostDetail slug={params.slug} />; }
