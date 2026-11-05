import type { Metadata } from "next";
import { BlogPage } from "@/components/pages/Blog";

export const metadata: Metadata = {
  title: "Blog & Insight",
  description: "Artikel dan panduan seputar teknologi, desain, dan pertumbuhan bisnis digital dari tim NURGIO.",
  alternates: { canonical: "/blog" },
};
export default function Page() { return <BlogPage />; }
