import type { Metadata } from "next";
import { PortfolioPage } from "@/components/pages/Portfolio";

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Studi kasus dan proyek pilihan NURGIO: web, mobile, dan UI/UX untuk berbagai industri.",
  alternates: { canonical: "/portofolio" },
};
export default function Page() { return <PortfolioPage />; }
