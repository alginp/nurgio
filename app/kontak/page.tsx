import type { Metadata } from "next";
import ContactPage from "@/components/pages/Contact";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi NURGIO untuk konsultasi proyek digital Anda — form, WhatsApp, email, dan lokasi kantor di Jakarta.",
  alternates: { canonical: "/kontak" },
};
export default function Page() { return <ContactPage />; }
