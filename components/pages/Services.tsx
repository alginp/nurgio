"use client";

import { Check } from "lucide-react";
import { useLang } from "@/lib/providers";
import { pages, process, services, ui } from "@/lib/content";
import { Button, Heading, Icon, PageHero, Photo, Reveal, SectionHead } from "../ui";
import { Accordion, CTABanner, ServiceCard } from "../cards";

export function ServicesPage() {
  const { t } = useLang();
  return (
    <>
      <PageHero title={pages.services.t} sub={pages.services.s} crumbs={[{ label: t(ui.home), href: "/" }, { label: t(pages.services.t) }]} />
      <section className="section">
        <div className="container-site grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => <ServiceCard key={s.slug} s={s} delay={(i % 3) * 0.08} feature />)}
        </div>
      </section>
      <section className="section pt-0">
        <div className="container-site">
          <SectionHead center label={t(process.label)} title={t(process.title)} />
          <ol className="grid gap-5 md:grid-cols-5">
            {process.steps.map((s, i) => (
              <Reveal as="li" key={i} delay={i * 0.08} className="card p-6">
                <span className="font-display text-3xl font-extrabold text-electric">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-lg font-bold">{t(s.t)}</h3>
                <p className="mt-1 text-sm">{t(s.d)}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <CTABanner />
    </>
  );
}

export function ServiceDetail({ slug }: { slug: string }) {
  const { t } = useLang();
  const s = services.find((x) => x.slug === slug)!;
  const others = services.filter((x) => x.slug !== slug).slice(0, 3);
  return (
    <>
      <PageHero title={s.title} sub={s.short} crumbs={[{ label: t(ui.home), href: "/" }, { label: t(pages.services.t), href: "/layanan" }, { label: t(s.title) }]} />

      {/* description */}
      <section className="section">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal><span className="label">{t({ id: "TENTANG LAYANAN", en: "ABOUT THE SERVICE" })}</span></Reveal>
            <Heading className="h2 mt-4" text={t(s.title)} />
            <Reveal delay={0.15}><p className="mt-6 text-lg">{t(s.desc)}</p></Reveal>
            <Reveal delay={0.25} className="mt-8"><Button href="/kontak" magnetic>{t(ui.cta)}</Button></Reveal>
          </div>
          <div className="group"><Photo id={s.image} alt={t(s.title)} w={1200} className="aspect-[4/3] w-full fold-tr" rounded="rounded-[28px]" priority /></div>
        </div>
      </section>

      {/* features */}
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container-site">
          <SectionHead label={t({ id: "FITUR UTAMA", en: "KEY FEATURES" })} title={t({ id: "Apa yang Anda Dapatkan", en: "What You Get" })} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.features.map((f, i) => (
              <Reveal key={i} delay={i * 0.08} className="card p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl text-white" style={{ background: "var(--gradient)" }}><Icon name={s.icon} size={22} /></span>
                <p className="mt-5 font-semibold text-head">{t(f)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* steps */}
      <section className="section">
        <div className="container-site">
          <SectionHead center label={t({ id: "TAHAPAN", en: "STAGES" })} title={t({ id: "Bagaimana Kami Mengerjakannya", en: "How We Deliver It" })} />
          <ol className="grid gap-5 md:grid-cols-4">
            {s.steps.map((st, i) => (
              <Reveal as="li" key={i} delay={i * 0.1} className="relative rounded-card border border-[var(--border)] p-7">
                <span className="font-display text-5xl font-extrabold" style={{ WebkitTextStroke: "1.5px var(--blue-electric)", color: "transparent" }}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-xl font-bold">{t(st.t)}</h3>
                <p className="mt-2 text-[0.95rem]">{t(st.d)}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* packages (optional — remove section if you don't publish pricing) */}
      <section className="section pt-0">
        <div className="container-site">
          <SectionHead center label={t({ id: "PAKET", en: "PACKAGES" })} title={t({ id: "Pilih yang Sesuai", en: "Choose What Fits" })} intro={t({ id: "Harga indikatif. Estimasi final diberikan setelah sesi discovery.", en: "Indicative pricing. Final estimate follows a discovery session." })} />
          <div className="grid gap-5 lg:grid-cols-3">
            {s.packages.map((p, i) => (
              <Reveal key={i} delay={i * 0.1} className={`relative isolate rounded-card p-8 ${p.hot ? "text-white shadow-lift" : "card"}`}>
                {p.hot && <div aria-hidden className="absolute inset-0 -z-10 rounded-card" style={{ background: "var(--gradient)" }} />}
                {p.hot && <span className="absolute right-6 top-6 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">{t({ id: "Populer", en: "Popular" })}</span>}
                <h3 className={`font-display text-xl font-bold ${p.hot ? "!text-white" : ""}`}>{t(p.name)}</h3>
                <p className={`mt-3 font-display text-3xl font-extrabold ${p.hot ? "!text-white" : "text-electric"}`}>{t(p.price)}</p>
                <ul className="mt-6 space-y-3">
                  {p.items.map((it, k) => (
                    <li key={k} className="flex gap-3"><Check size={18} className={`mt-1 shrink-0 ${p.hot ? "text-[#7fa6ff]" : "text-electric"}`} />{t(it)}</li>
                  ))}
                </ul>
                <div className="mt-8"><Button href="/kontak" variant={p.hot ? "ghost-light" : "outline"}>{t(ui.cta)}</Button></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section pt-0">
        <div className="container-site max-w-3xl">
          <SectionHead center label="FAQ" title={t({ id: "Pertanyaan Seputar Layanan", en: "Service Questions" })} />
          <Accordion items={s.faq.map((f, i) => ({ id: `sf${i}`, q: t(f.q), a: <p>{t(f.a)}</p> }))} />
        </div>
      </section>

      {/* other services */}
      <section className="section pt-0">
        <div className="container-site">
          <SectionHead label={t({ id: "LAYANAN LAIN", en: "MORE SERVICES" })} title={t({ id: "Jelajahi Layanan Lainnya", en: "Explore Other Services" })} />
          <div className="grid gap-5 md:grid-cols-3">{others.map((o, i) => <ServiceCard key={o.slug} s={o} delay={i * 0.08} />)}</div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
