import Hero from "@/components/home/Hero";
import { AboutPreview, ProcessFlow, ServicesBento, TrustedBy, WhyUs } from "@/components/home/Sections1";
import { BlogPreview, FAQ, FeaturedPortfolio, StatsBand, TeamPreview, Testimonials } from "@/components/home/Sections2";
import { CTABanner } from "@/components/cards";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <AboutPreview />
      <ServicesBento />
      <WhyUs />
      <ProcessFlow />
      <FeaturedPortfolio />
      <StatsBand />
      <Testimonials />
      <TeamPreview />
      <BlogPreview />
      <FAQ />
      <CTABanner />
    </>
  );
}
