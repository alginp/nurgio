"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, Link2, Linkedin, MessageCircle, Search, Twitter } from "lucide-react";
import { NLink, useLang } from "@/lib/providers";
import { blogCats, company, pages, posts, ui } from "@/lib/content";
import { Empty, PageHero, Photo, Reveal } from "../ui";
import { CTABanner, PostCard } from "../cards";

const PAGE_SIZE = 3;

export function BlogPage() {
  const { t, lang } = useLang();
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const featured = posts[0];
  const filtered = useMemo(
    () => posts.slice(1).filter((p) => (cat === "all" || p.cat === cat) && `${t(p.title)} ${t(p.excerpt)}`.toLowerCase().includes(q.toLowerCase())),
    [cat, q, t]
  );
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const cur = Math.min(page, pageCount);
  const slice = filtered.slice((cur - 1) * PAGE_SIZE, cur * PAGE_SIZE);
  const tabs = [{ key: "all", label: t(ui.all) }, ...blogCats.map((c) => ({ key: c.key, label: t(c.label) }))];
  const fdate = new Date(featured.date).toLocaleDateString(lang === "id" ? "id-ID" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
  return (
    <>
      <PageHero title={pages.blog.t} sub={pages.blog.s} crumbs={[{ label: t(ui.home), href: "/" }, { label: t(pages.blog.t) }]} />
      <section className="section">
        <div className="container-site">
          {/* featured */}
          <Reveal>
            <NLink href={`/blog/${featured.slug}`} className="group grid overflow-hidden rounded-[32px] border border-[var(--border)] bg-surface transition-shadow duration-500 hover:shadow-lift lg:grid-cols-2">
              <div className="relative min-h-[280px]"><Photo id={featured.image} alt={t(featured.title)} w={1400} rounded="rounded-none" className="absolute inset-0 h-full w-full" priority /></div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="label">{t({ id: "ARTIKEL UNGGULAN", en: "FEATURED ARTICLE" })}</span>
                <h2 className="mt-4 font-display text-2xl font-extrabold transition-colors group-hover:text-electric md:text-4xl">{t(featured.title)}</h2>
                <p className="mt-4 text-lg">{t(featured.excerpt)}</p>
                <div className="mt-6 flex items-center gap-4 text-sm"><span>{fdate}</span><span>·</span><span>{featured.read} {t(ui.readTime)}</span></div>
              </div>
            </NLink>
          </Reveal>

          <div className="my-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div role="tablist" aria-label="Kategori" className="flex flex-wrap gap-2">
              {tabs.map((tb) => (
                <button key={tb.key} role="tab" aria-selected={cat === tb.key} onClick={() => { setCat(tb.key); setPage(1); }}
                  className={`min-h-[44px] rounded-full border px-5 text-sm font-semibold transition-all duration-500 ease-nurgio ${cat === tb.key ? "border-electric bg-electric text-white shadow-soft" : "border-[var(--border)] text-head hover:border-electric hover:text-electric"}`}>{tb.label}</button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" aria-hidden />
              <label htmlFor="bq" className="sr-only">{t(ui.search)}</label>
              <input id="bq" value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} placeholder={t(ui.search)}
                className="min-h-[48px] w-full rounded-full border border-[var(--border)] bg-surface pl-11 pr-4 text-head focus:border-electric focus:outline-none" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {slice.map((p, i) => <Reveal key={p.slug} delay={i * 0.08}><PostCard p={p} /></Reveal>)}
            {slice.length === 0 && <Empty text={t(ui.nothing)} />}
          </div>

          {pageCount > 1 && (
            <nav aria-label="Pagination" className="mt-14 flex items-center justify-center gap-2">
              <button onClick={() => setPage(Math.max(1, cur - 1))} disabled={cur === 1} aria-label={t(ui.prev)} className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] text-head disabled:opacity-40"><ChevronLeft size={18} /></button>
              {Array.from({ length: pageCount }).map((_, i) => (
                <button key={i} onClick={() => setPage(i + 1)} aria-current={cur === i + 1 ? "page" : undefined}
                  className={`h-11 w-11 rounded-full text-sm font-bold ${cur === i + 1 ? "bg-electric text-white" : "border border-[var(--border)] text-head hover:border-electric"}`}>{i + 1}</button>
              ))}
              <button onClick={() => setPage(Math.min(pageCount, cur + 1))} disabled={cur === pageCount} aria-label={t(ui.next)} className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] text-head disabled:opacity-40"><ChevronRight size={18} /></button>
            </nav>
          )}
        </div>
      </section>
      <CTABanner />
    </>
  );
}

export function PostDetail({ slug }: { slug: string }) {
  const { t, lang } = useLang();
  const p = posts.find((x) => x.slug === slug)!;
  const cat = blogCats.find((c) => c.key === p.cat)!;
  const related = posts.filter((x) => x.slug !== slug && x.cat === p.cat).concat(posts.filter((x) => x.slug !== slug && x.cat !== p.cat)).slice(0, 3);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 40%"] });
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  const [copied, setCopied] = useState(false);
  const url = `${company.url}/blog/${p.slug}`;
  const date = new Date(p.date).toLocaleDateString(lang === "id" ? "id-ID" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
  const jump = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  const share = [
    { l: "LinkedIn", I: Linkedin, h: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { l: "X", I: Twitter, h: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(t(p.title))}` },
    { l: "WhatsApp", I: MessageCircle, h: `https://wa.me/?text=${encodeURIComponent(`${t(p.title)} ${url}`)}` },
  ];
  return (
    <>
      {/* reading progress for this article */}
      <motion.div aria-hidden className="fixed inset-x-0 top-[3px] z-[240] h-1 origin-left bg-electric/70" style={{ scaleX: bar }} />
      <PageHero title={p.title} sub={p.excerpt} crumbs={[{ label: t(ui.home), href: "/" }, { label: t(pages.blog.t), href: "/blog" }, { label: t(cat.label) }]} />
      <article ref={ref} className="section pt-12">
        <div className="container-site">
          <div className="mb-10 flex flex-wrap items-center gap-4 text-sm">
            <span className="rounded-full bg-soft px-3 py-1 font-bold uppercase tracking-wider text-electric">{t(cat.label)}</span>
            <span>{p.author}</span><span>·</span><span>{date}</span><span>·</span><span>{p.read} {t(ui.readTime)}</span>
          </div>
          <div className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <nav aria-label={t(ui.toc)} className="rounded-card border border-[var(--border)] p-6">
                <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em]">{t(ui.toc)}</h2>
                <ol className="mt-4 space-y-3 text-sm">
                  {p.body.map((s, i) => (
                    <li key={i}><button onClick={() => jump(`s${i}`)} className="text-left transition-colors hover:text-electric">{i + 1}. {t(s.h)}</button></li>
                  ))}
                </ol>
              </nav>
              <div className="mt-6">
                <h2 className="mb-3 font-display text-sm font-bold uppercase tracking-[0.12em]">{t(ui.share)}</h2>
                <div className="flex gap-2">
                  {share.map(({ l, I, h }) => (
                    <a key={l} href={h} target="_blank" rel="noopener noreferrer" aria-label={l} className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] text-head transition-all hover:border-electric hover:bg-electric hover:text-white"><I size={18} /></a>
                  ))}
                  <button aria-label="Copy link" onClick={() => { navigator.clipboard?.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1800); }}
                    className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] text-head transition-all hover:border-electric hover:bg-electric hover:text-white">{copied ? <Check size={18} /> : <Link2 size={18} />}</button>
                </div>
              </div>
            </aside>
            <div className="prose-n max-w-3xl">
              <div className="group mb-10"><Photo id={p.image} alt={t(p.title)} w={1400} priority sizes="(min-width:1024px) 60vw, 100vw" className="aspect-[16/9] w-full" rounded="rounded-[28px]" /></div>
              {p.body.map((s, i) => (
                <section key={i}>
                  <h2 id={`s${i}`}>{t(s.h)}</h2>
                  <p>{t(s.p)}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="section pt-0">
        <div className="container-site">
          <h2 className="mb-8 font-display text-3xl font-extrabold">{t(ui.related)}</h2>
          <div className="grid gap-6 md:grid-cols-3">{related.map((r, i) => <Reveal key={r.slug} delay={i * 0.08}><PostCard p={r} /></Reveal>)}</div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
