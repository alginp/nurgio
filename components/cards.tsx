"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, Minus, Plus, Twitter } from "lucide-react";
import { EASE, NLink, useLang } from "@/lib/providers";
import { categories, ctaBanner, ui, waLink, type L, type Post, type Project, type Service, blogCats } from "@/lib/content";
import { Button, Icon, Photo, Portrait, Reveal } from "./ui";

/* ───────── Service card (bento) ───────── */
export function ServiceCard({ s, className = "", delay = 0, feature = false }: { s: Service; className?: string; delay?: number; feature?: boolean }) {
  const { t } = useLang();
  return (
    <Reveal delay={delay} className={className}>
      <NLink href={`/layanan/${s.slug}`}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-card border border-[var(--border)] bg-surface p-7 transition-all duration-500 ease-nurgio hover:-translate-y-2 hover:border-electric hover:shadow-lift md:p-8">
        {/* ribbon sweep */}
        <span aria-hidden className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-[24deg] bg-gradient-to-r from-transparent via-electric/15 to-transparent opacity-0 transition-all duration-[900ms] ease-nurgio group-hover:left-[130%] group-hover:opacity-100" />
        <span aria-hidden className="absolute right-0 top-0 h-11 w-11 bg-soft [clip-path:polygon(0_0,100%_0,100%_100%)] transition-colors group-hover:bg-electric" />
        <div>
          <span className="grid h-14 w-14 place-items-center rounded-2xl text-white transition-transform duration-500 ease-nurgio group-hover:-rotate-6 group-hover:scale-110" style={{ background: "var(--gradient)" }}>
            <Icon name={s.icon} size={26} />
          </span>
          <h3 className="h3 mt-6">{t(s.title)}</h3>
          <p className={`mt-3 ${feature ? "max-w-md text-[1.05rem]" : "line-clamp-2"}`}>{t(feature ? s.desc : s.short)}</p>
        </div>
        <span className="mt-8 inline-flex items-center gap-2 font-semibold text-electric">
          {t(ui.learn)} <span aria-hidden className="transition-transform duration-500 ease-nurgio group-hover:translate-x-2">→</span>
        </span>
      </NLink>
    </Reveal>
  );
}

/* ───────── Project card ───────── */
export function ProjectCard({ p, className = "", aspect = "aspect-[4/3]" }: { p: Project; className?: string; aspect?: string }) {
  const { t } = useLang();
  const cat = categories.find((c) => c.key === p.cat)!;
  return (
    <NLink href={`/portofolio/${p.slug}`} data-cursor="view" className={`group block ${className}`}>
      <div className={`relative overflow-hidden rounded-card ${aspect}`}>
        <Photo id={p.image} alt={t(p.title)} w={1000} className="absolute inset-0 h-full w-full" sizes="(min-width:1024px) 33vw, 90vw" />
        <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-ink backdrop-blur">{t(cat.label)}</span>
        {/* overlay slides in */}
        <div className="absolute inset-0 z-10 flex translate-y-full items-end justify-between bg-gradient-to-t from-navy/95 via-navy/70 to-transparent p-6 transition-transform duration-700 ease-nurgio group-hover:translate-y-0" style={{ backgroundColor: "transparent" }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-electric px-5 py-2.5 text-sm font-semibold text-white">{t(ui.viewProject)} <ArrowUpRight size={16} /></span>
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-bold text-head transition-colors group-hover:text-electric">{t(p.title)}</h3>
          <p className="mt-1 text-sm">{p.client}</p>
        </div>
        <span className="rounded-full border border-[var(--border)] px-3 py-1 text-sm font-semibold text-head">{p.year}</span>
      </div>
    </NLink>
  );
}

/* ───────── Blog card ───────── */
export function PostCard({ p, className = "" }: { p: Post; className?: string }) {
  const { t, lang } = useLang();
  const cat = blogCats.find((c) => c.key === p.cat)!;
  const date = new Date(p.date).toLocaleDateString(lang === "id" ? "id-ID" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
  return (
    <NLink href={`/blog/${p.slug}`} className={`group flex h-full flex-col overflow-hidden rounded-card border border-[var(--border)] bg-surface transition-all duration-500 ease-nurgio hover:-translate-y-2 hover:shadow-lift ${className}`}>
      <div className="relative aspect-[16/10]"><Photo id={p.image} alt={t(p.title)} w={900} rounded="rounded-none" className="absolute inset-0 h-full w-full" sizes="(min-width:1024px) 33vw, 90vw" /></div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-[0.8rem]">
          <span className="rounded-full bg-soft px-3 py-1 font-bold uppercase tracking-wider text-electric">{t(cat.label)}</span>
          <span>{date}</span>
        </div>
        <h3 className="mt-4 font-display text-[1.15rem] font-bold leading-snug text-head transition-colors group-hover:text-electric">{t(p.title)}</h3>
        <div className="mt-auto flex items-center justify-between pt-6 text-sm">
          <span>{p.read} {t(ui.readTime)}</span>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-soft text-electric transition-all duration-500 group-hover:bg-electric group-hover:text-white"><ArrowUpRight size={18} /></span>
        </div>
      </div>
    </NLink>
  );
}

/* ───────── Team card ───────── */
export function TeamCard({ m, delay = 0 }: { m: { name: string; role: L; photo: string }; delay?: number }) {
  const { t } = useLang();
  return (
    <Reveal delay={delay}>
      <div className="group">
        <div className="relative aspect-[4/5] overflow-hidden rounded-card fold-tr">
          <Portrait id={m.photo} alt={m.name} gray className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center gap-2 bg-gradient-to-t from-navy/90 to-transparent p-4 pt-10 transition-transform duration-500 ease-nurgio group-hover:translate-y-0 group-focus-within:translate-y-0">
            {[Linkedin, Twitter, Instagram].map((I, i) => (
              <a key={i} href="#" aria-label={`${m.name} social ${i + 1}`} className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-electric"><I size={16} /></a>
            ))}
          </div>
        </div>
        <h3 className="mt-4 font-display text-lg font-bold text-head">{m.name}</h3>
        <p className="text-sm">{t(m.role)}</p>
      </div>
    </Reveal>
  );
}

/* ───────── Accessible accordion with smooth height + rotating plus/minus ───────── */
export function Accordion({ items, dark = false, defaultOpen = 0 }: { items: { id: string; q: string; a: React.ReactNode }[]; dark?: boolean; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <div className="divide-y divide-[var(--border)] overflow-hidden rounded-card border border-[var(--border)] bg-surface">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.id}>
            <h3>
              <button id={`acc-${it.id}`} aria-expanded={isOpen} aria-controls={`panel-${it.id}`} onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-[64px] w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-[1rem] font-bold text-head transition-colors hover:text-electric md:text-[1.1rem]">
                <span>{it.q}</span>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.4, ease: EASE }}
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${isOpen ? "bg-electric text-white" : "bg-soft text-electric"}`}>
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div id={`panel-${it.id}`} role="region" aria-labelledby={`acc-${it.id}`}
                  initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }} className="overflow-hidden">
                  <div className="px-6 pb-6 pr-16">{it.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ───────── CTA banner: large navy card with ribbon graphic ───────── */
export function CTABanner() {
  const { t } = useLang();
  return (
    <section className="section pt-0" aria-labelledby="cta-title">
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] p-8 text-white md:p-16" style={{ background: "linear-gradient(135deg,#031e7a 0%, #021451 100%)" }}>
            <div aria-hidden className="ribbon-pattern pointer-events-none absolute inset-0 opacity-[0.06]" />
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-electric/50 blur-[100px]" />
            <div aria-hidden className="pointer-events-none absolute -bottom-16 right-[-60px] hidden w-[480px] md:block md:w-[520px]" style={{ aspectRatio: "1400/1057" }}>
              <span className="mask-layer mask-left" style={{ background: "#3a5be0", opacity: 0.55 }} />
              <span className="mask-layer mask-right" style={{ background: "#4a6cf0", opacity: 0.55 }} />
              <span className="mask-layer mask-band" />
            </div>
            <div className="relative max-w-xl">
              <h2 id="cta-title" className="h2 !text-white">{t(ctaBanner.title)}</h2>
              <p className="mt-5 text-lg !text-white/75">{t(ctaBanner.text)}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="/kontak" magnetic>{t(ui.cta)}</Button>
                <Button href={waLink()} external variant="ghost-light">{t(ui.whatsapp)}</Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
