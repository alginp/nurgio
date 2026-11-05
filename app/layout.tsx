import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Unbounded } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { Cursor, FloatingActions, ScrollProgress } from "@/components/Overlays";
import { company } from "@/lib/content";

const display = Unbounded({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display", display: "swap" });
const body = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: { default: "NURGIO — Digital Solutions Partner", template: "%s | NURGIO" },
  description:
    "NURGIO adalah mitra solusi digital di Jakarta: web development, mobile app, UI/UX, digital marketing, IT consulting, dan maintenance.",
  keywords: ["NURGIO", "web development", "mobile app", "UI/UX", "digital agency Jakarta", "IT consulting"],
  openGraph: {
    type: "website", locale: "id_ID", siteName: "NURGIO", url: company.url,
    title: "NURGIO — Digital Solutions Partner",
    description: "Membangun masa depan bisnis Anda, bersama NURGIO.",
  },
  twitter: { card: "summary_large_image", title: "NURGIO — Digital Solutions Partner", description: "Membangun masa depan bisnis Anda, bersama NURGIO." },
  alternates: { canonical: "/" },
};
export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }, { media: "(prefers-color-scheme: dark)", color: "#040b2a" }],
  width: "device-width", initialScale: 1,
};

const jsonLd = [
  {
    "@context": "https://schema.org", "@type": "Organization", name: "NURGIO", legalName: company.legal, url: company.url,
    logo: `${company.url}/brand/n-mark-512.png`, foundingDate: String(company.founded),
    sameAs: Object.values(company.social).filter((s) => s !== "#"),
    contactPoint: [{ "@type": "ContactPoint", telephone: company.phone, email: company.email, contactType: "customer service", availableLanguage: ["Indonesian", "English"] }],
  },
  {
    "@context": "https://schema.org", "@type": "LocalBusiness", name: "NURGIO", image: `${company.url}/opengraph-image.png`, url: company.url,
    telephone: company.phone, email: company.email, priceRange: "$$",
    address: { "@type": "PostalAddress", streetAddress: company.address, addressLocality: company.city, addressCountry: "ID" },
    geo: { "@type": "GeoCoordinates", latitude: company.geo.lat, longitude: company.geo.lng },
    openingHours: "Mo-Fr 09:00-17:30",
  },
];

/* set theme before first paint to avoid a flash */
const themeScript = `try{var t=localStorage.getItem('nurgio-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches&&false)){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Providers>
          <a href="#main" className="skip-link">Skip to content</a>
          <ScrollProgress />
          <Preloader />
          <Cursor />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <FloatingActions />
        </Providers>
      </body>
    </html>
  );
}
