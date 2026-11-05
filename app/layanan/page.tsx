import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/Services";

export const metadata: Metadata = {
  title: "Layanan",
  description: "Web development, mobile app, UI/UX design, digital marketing, IT consulting, dan maintenance & support dari NURGIO.",
  alternates: { canonical: "/layanan" },
};
export default function Page() { return <ServicesPage />; }
