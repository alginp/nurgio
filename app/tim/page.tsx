import type { Metadata } from "next";
import { TeamPage } from "@/components/pages/TeamCareers";

export const metadata: Metadata = {
  title: "Tim Kami",
  description: "Kenali tim kepemimpinan, desainer, engineer, dan growth specialist di balik NURGIO.",
  alternates: { canonical: "/tim" },
};
export default function Page() { return <TeamPage />; }
