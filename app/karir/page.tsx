import type { Metadata } from "next";
import { CareersPage } from "@/components/pages/TeamCareers";

export const metadata: Metadata = {
  title: "Karir",
  description: "Bergabung dengan NURGIO — budaya kolaboratif, belajar berkelanjutan, dan proyek berdampak.",
  alternates: { canonical: "/karir" },
};
export default function Page() { return <CareersPage />; }
