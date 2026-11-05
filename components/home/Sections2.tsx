"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle, Quote, Star } from "lucide-react";
import { EASE, useLang } from "@/lib/providers";
import { band, categories, faq, portfolioSection, posts, projects, team, testimonials, ui, type Cat } from "@/lib/content";
import { ArrowLink, Button, CountUp, Portrait, Reveal, SectionHead, Heading } from "../ui";
import { Accordion, PostCard, ProjectCard, TeamCard } from "../cards";

/* ───────── 7. FEATURED PORTFOLIO — filter tabs + masonry; swipe carousel on mobile ───────── */
export function FeaturedPortfolio() {
  const { t } = useLang();
  const [f, setF] = useState<"all" | Cat>("all");
  const list = projects.filter((p) => f === "all" || p.cat === f);
  const tabs: { key: "all" | Cat; label: string }[] = [{ key: "all", label: t(ui.all) }, ...categories.map((c) => ({ key: c.key, label: t(c.label) }))];
  return (
    <section className="section" aria-labelledby="port-title">
      <div className="container-site">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHead label={t(portfolioSection.label)} title={t(portfolioSection.title)} />
          <div role="tablist" aria-label="Filter" className="-mt-6 flex flex-wrap gap-2 md:mb-16">
            {tabs.map((tb) => (
              <button key={tb.key} role="tab" aria-selected={f === tb.key} onClick={() => setF(tb.key)}
                className={`min-h-[44px] rounded-full border px-5 text-sm font-semibold transition-all duration-500 ease-nurgio ${f === tb.key ? "border-electric bg-electric text-white shadow-soft" : "border-[var(--border)] text-head hover:border-electric hover:text-electric"}`}>
                {tb.label}
              </button>
            ))}
          </div>
        </div>
        <LayoutGroup>
          <motion.div layout className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-2 md:items-start md:gap-x-8 md:gap-y-12 md:overflow-visible md:px-0 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <motion.div key={p.slug} layout initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.6, ease: EASE }}
                  className="w-[82%] shrink-0 snap-center md:w-auto">
                  <ProjectCard p={p} aspect={i % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
        <Reveal className="mt-14 text-center"><Button href="/portofolio" variant="outline">{t({ id: "Lihat Semua Proyek", en: "View All Projects" })}</Button></Reveal>
      </div>
    </section>
  );
}

/* ───────── 8. STATS BAND ───────── */
export function StatsBand() {
  const { t } = useLang();
  return (
    <section aria-label="Statistics" className="relative overflow-hidden py-16 text-white md:py-20" style={{ background: "var(--gradient)" }}>
      <div aria-hidden className="ribbon-pattern pointer-events-none absolute inset-0 opacity-[0.08]" />
      <div className="container-site relative grid grid-cols-2 gap-y-10 lg:grid-cols-4">
        {band.map((b, i) => (
          <Reveal key={i} delay={i * 0.1} className={`px-4 text-center ${i > 0 ? "lg:border-l lg:border-white/20" : ""}`}>
            <div className="font-display text-[2.5rem] font-extrabold md:text-[4rem]"><CountUp to={b.value} suffix={b.suffix} /></div>
            <div className="mt-1 text-sm font-medium !text-white/80 md:text-base">{t(b.label)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ───────── 9. TESTIMONIALS — autoplay, pause on hover, arrows + progress dots ───────── */
export function Testimonials() {
  const { t } = useLang();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;
  const go = useCallback((d: number) => setI((v) => (v + d + n) % n), [n]);
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => go(1), 6000);
    return () => clearTimeout(id);
  }, [i, paused, go]);
  const tm = testimonials[i];
  return (
    <section className="section overflow-hidden" style={{ background: "var(--bg-soft)" }} aria-roledescription="carousel" aria-label={t({ id: "Testimoni klien", en: "Client testimonials" })}>
      <div className="container-site relative">
        <SectionHead center label={t({ id: "TESTIMONI", en: "TESTIMONIALS" })} title={t({ id: "Kata Mereka tentang Kami", en: "What Clients Say About Us" })} />
        <div className="relative mx-auto max-w-4xl" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
          <Quote aria-hidden className="absolute -left-2 -top-10 h-24 w-24 text-lavender md:-left-14 md:-top-14 md:h-36 md:w-36" fill="currentColor" strokeWidth={0} />
          <div className="relative min-h-[340px] md:min-h-[300px]" aria-live={paused ? "polite" : "off"}>
            <AnimatePresence mode="wait">
              <motion.figure key={i} role="group" aria-roledescription="slide" aria-label={`${i + 1} / ${n}`}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.6, ease: EASE }}
                className="relative text-center">
                <div className="mb-6 flex justify-center gap-1 text-electric" aria-label={`${tm.rating} / 5`}>
                  {Array.from({ length: tm.rating }).map((_, k) => <Star key={k} size={20} fill="currentColor" />)}
                </div>
                <blockquote className="font-display text-[1.35rem] font-semibold leading-snug text-head md:text-[1.9rem]">“{t(tm.text)}”</blockquote>
                <figcaption className="mt-9 flex flex-col items-center gap-3">
                  <Portrait id={tm.photo} alt={tm.name} className="h-16 w-16 rounded-full ring-4 ring-white" />
                  <div><div className="font-display font-bold text-head">{tm.name}</div><div className="text-sm">{tm.role}, {tm.company}</div></div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6">
            <button onClick={() => go(-1)} aria-label={t(ui.prev)} className="grid h-12 w-12 place-items-center rounded-full border border-[var(--border)] bg-surface text-head transition-all hover:border-electric hover:bg-electric hover:text-white"><ChevronLeft size={20} /></button>
            <div className="flex items-center gap-2" role="tablist">
              {testimonials.map((_, k) => (
                <button key={k} role="tab" aria-selected={k === i} aria-label={`${k + 1}`} onClick={() => setI(k)}
                  className="relative grid h-6 place-items-center"><span className={`block h-2 overflow-hidden rounded-full transition-all duration-500 ease-nurgio ${k === i ? "w-10 bg-lavender" : "w-2 bg-lavender"}`}>
                    {k === i && <motion.span key={`${i}-${paused}`} className="block h-full bg-electric" initial={{ width: paused ? "100%" : 0 }} animate={{ width: "100%" }} transition={{ duration: paused ? 0 : 6, ease: "linear" }} />}
                  </span></button>
              ))}
            </div>
            <button onClick={() => go(1)} aria-label={t(ui.next)} className="grid h-12 w-12 place-items-center rounded-full border border-[var(--border)] bg-surface text-head transition-all hover:border-electric hover:bg-electric hover:text-white"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── 10. TEAM PREVIEW ───────── */
export function TeamPreview() {
  const { t } = useLang();
  return (
    <section className="section" aria-labelledby="team-title">
      <div className="container-site">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHead label={t({ id: "TIM KAMI", en: "OUR TEAM" })} title={t({ id: "Orang-Orang di Balik NURGIO", en: "The People Behind NURGIO" })} />
          <Reveal className="md:mb-16"><ArrowLink href="/tim">{t({ id: "Lihat Seluruh Tim", en: "Meet the Whole Team" })}</ArrowLink></Reveal>
        </div>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-8">
          {team.slice(0, 4).map((m, i) => <TeamCard key={m.name} m={m} delay={i * 0.08} />)}
        </div>
      </div>
    </section>
  );
}

/* ───────── 11. BLOG PREVIEW ───────── */
export function BlogPreview() {
  const { t } = useLang();
  return (
    <section className="section" style={{ background: "var(--bg-soft)" }} aria-labelledby="blog-title">
      <div className="container-site">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHead label="INSIGHTS" title={t({ id: "Wawasan Terbaru dari Tim Kami", en: "Latest Insights from Our Team" })} />
          <Reveal className="md:mb-16"><ArrowLink href="/blog">{t({ id: "Semua Artikel", en: "All Articles" })}</ArrowLink></Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((p, i) => <Reveal key={p.slug} delay={i * 0.1}><PostCard p={p} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}

/* ───────── 12. FAQ ───────── */
export function FAQ() {
  const { t } = useLang();
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal><span className="label">{t(faq.label)}</span></Reveal>
          <Heading className="h2 mt-4" text={t(faq.title)} />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-sm text-lg">{t(faq.prompt)}</p>
            <div className="mt-8"><Button href="/kontak" icon={<MessageCircle size={18} />}>{t(ui.cta)}</Button></div>
          </Reveal>
        </div>
        <Reveal>
          <Accordion items={faq.items.map((f, i) => ({ id: `faq${i}`, q: t(f.q), a: <p>{t(f.a)}</p> }))} />
        </Reveal>
      </div>
    </section>
  );
}
