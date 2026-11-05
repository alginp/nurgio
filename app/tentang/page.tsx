import type { Metadata } from "next";
import AboutPage from "@/components/pages/About";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kisah, visi, misi, dan nilai perusahaan NURGIO — mitra solusi digital di Jakarta sejak 2014.",
  alternates: { canonical: "/tentang" },
};
export default function Page() { return <AboutPage />; }
