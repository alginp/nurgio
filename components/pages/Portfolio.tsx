"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import { EASE, NLink, useLang } from "@/lib/providers";
import { categories, pages, projects, ui, type Cat } from "@/lib/content";
import { Empty, Heading, PageHero, Photo, Portrait, Reveal, SectionHead } from "../ui";
import { CTABanner, ProjectCard } from "../cards";

export function PortfolioPage() {
  const { t } = useLang();
  const [f, setF] = useState<"all" | Cat>("all");
  const [q, setQ] = useState("");
  const list = useMemo(
    () => projects.filter((p) => (f === "all" || p.cat === f) && `${t(p.title)} ${p.client} ${p.tools.join(" ")}`.toLowerCase().includes(q.toLowerCase())),
    [f, q, t]
  );
  const tabs: { key: "all" | Cat; label: string }[] = [{ key: "all", label: t(ui.all) }, ...categories.map((c) => ({ key: c.key, label: t(c.label) }))];
  return (
    <>
      <PageHero title={pages.portfolio.t} sub={pages.portfolio.s} crumbs={[{ label: t(ui.home), href: "/" }, { label: t(pages.portfolio.t) }]} />
      <section className="section">
        <div className="container-site">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div role="tablist" aria-label="Filter" className="flex flex-wrap gap-2">
              {tabs.map((tb) => (
                <button key={tb.key} role="tab" aria-selected={f === tb.key} onClick={() => setF(tb.key)}
                  className={`min-h-[44px] rounded-full border px-5 text-sm font-semibold transition-all duration-500 ease-nurgio ${f === tb.key ? "border-electric bg-electric text-white shadow-soft" : "border-[var(--border)] text-head hover:border-electric hover:text-electric"}`}>{tb.label}</button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" aria-hidden />
              <label htmlFor="pq" className="sr-only">{t(ui.search)}</label>
              <input id="pq" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t(ui.search)}
                className="min-h-[48px] w-full rounded-full border border-[var(--border)] bg-surface pl-11 pr-4 text-head focus:border-electric focus:outline-none" />
            </div>
          </div>
          <LayoutGroup>
            <motion.div layout className="grid items-start gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {list.map((p, i) => (
                  <motion.div key={p.slug} layout initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.6, ease: EASE }}>
                    <ProjectCard p={p} aspect={i % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"} />
                  </motion.div>
                ))}
              </AnimatePresence>
              {list.length === 0 && <Empty text={t(ui.nothing)} />}
            </motion.div>
          </LayoutGroup>
        </div>
      </section>
      <CTABanner />
    </>
  );
}

export function ProjectDetail({ slug }: { slug: string }) {
  const { t } = useLang();
  const idx = projects.findIndex((p) => p.slug === slug);
  const p = projects[idx];
  const next = projects[(idx + 1) % projects.length];
  const cat = categories.find((c) => c.key === p.cat)!;
  const gallery = [
    ["photo-1551288049-bebda4e38f71", "aspect-[16/10]"],
    ["photo-1522202176988-66273c2fd55f", "aspect-[4/3]"],
    ["photo-1517245386807-bb43f82c33c4", "aspect-[4/3]"],
  ];
  return (
    <>
      <PageHero title={p.title} sub={p.summary} crumbs={[{ label: t(ui.home), href: "/" }, { label: t(pages.portfolio.t), href: "/portofolio" }, { label: t(p.title) }]} />

      <section className="pb-8">
        <div className="container-site">
          <div className="group"><Photo id={p.image} alt={t(p.title)} w={1800} priority sizes="100vw" className="aspect-[16/9] w-full" rounded="rounded-[32px]" /></div>
          <dl className="mt-8 grid grid-cols-2 gap-6 rounded-card border border-[var(--border)] bg-surface p-6 md:grid-cols-4 md:p-8">
            {[
              [t({ id: "Klien", en: "Client" }), p.client],
              [t({ id: "Kategori", en: "Category" }), t(cat.label)],
              [t({ id: "Tahun", en: "Year" }), String(p.year)],
              [t({ id: "Teknologi", en: "Stack" }), p.tools.slice(0, 2).join(", ")],
            ].map(([k, v]) => (
              <div key={k}><dt className="text-xs font-bold uppercase tracking-[0.12em] text-electric">{k}</dt><dd className="mt-1 font-semibold text-head">{v}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      {/* Challenge → Solution → Result */}
      <section className="section">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          {[
            [t({ id: "Tantangan", en: "Challenge" }), p.challenge, "01"],
            [t({ id: "Solusi", en: "Solution" }), p.solution, "02"],
          ].map(([h, body, n], i) => (
            <Reveal key={i} delay={i * 0.1} className="card fold-tr p-8 md:p-10">
              <span className="font-display text-5xl font-extrabold" style={{ WebkitTextStroke: "1.5px var(--blue-electric)", color: "transparent" }}>{n as string}</span>
              <h2 className="mt-3 font-display text-2xl font-extrabold">{h as string}</h2>
              <p className="mt-3 text-lg">{t(body as { id: string; en: string })}</p>
            </Reveal>
          ))}
        </div>
        <div className="container-site mt-6">
          <Reveal className="relative isolate overflow-hidden rounded-[28px] p-8 text-white md:p-12">
            <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient)" }} />
            <h2 className="font-display text-2xl font-extrabold !text-white"><span className="mr-3 text-[#7fa6ff]">03</span>{t({ id: "Hasil", en: "Result" })}</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {p.results.map((r, i) => (
                <div key={i}><div className="font-display text-4xl font-extrabold md:text-5xl">{r.v}</div><div className="mt-1 !text-white/75">{t(r.l)}</div></div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* gallery */}
      <section className="section pt-0">
        <div className="container-site">
          <SectionHead label={t({ id: "GALERI", en: "GALLERY" })} title={t({ id: "Cuplikan Proyek", en: "Project Snapshots" })} />
          <div className="grid gap-5 md:grid-cols-2">
            <div className="group md:col-span-2"><Photo id={gallery[0][0]} alt="" w={1600} className={`${gallery[0][1]} w-full`} sizes="100vw" /></div>
            {gallery.slice(1).map(([id, a]) => <div key={id} className="group"><Photo id={id} alt="" w={1000} className={`${a} w-full`} /></div>)}
          </div>
        </div>
      </section>

      {/* tools & testimonial */}
      <section className="section pt-0">
        <div className="container-site grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="card p-8">
            <h2 className="font-display text-xl font-extrabold">{t({ id: "Teknologi & Tools", en: "Tech & Tools" })}</h2>
            <div className="mt-5 flex flex-wrap gap-2">{p.tools.map((x) => <span key={x} className="rounded-full bg-soft px-4 py-2 text-sm font-semibold text-electric">{x}</span>)}</div>
          </Reveal>
          <Reveal delay={0.1} className="card relative p-8 md:p-10">
            <blockquote className="font-display text-xl font-semibold leading-snug text-head md:text-2xl">“{t(p.quote.text)}”</blockquote>
            <figcaption className="mt-6"><div className="font-bold text-head">{p.quote.name}</div><div className="text-sm">{p.quote.role}</div></figcaption>
          </Reveal>
        </div>
      </section>

      {/* next project */}
      <section className="border-t border-[var(--border)] py-16">
        <div className="container-site">
          <NLink href={`/portofolio/${next.slug}`} className="group flex items-center justify-between gap-6">
            <div><span className="label">{t(ui.nextProject)}</span><h2 className="mt-3 font-display text-3xl font-extrabold transition-colors group-hover:text-electric md:text-5xl">{t(next.title)}</h2></div>
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-electric text-white transition-transform duration-500 ease-nurgio group-hover:rotate-45 md:h-24 md:w-24"><ArrowUpRight size={32} /></span>
          </NLink>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
