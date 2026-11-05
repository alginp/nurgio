"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Award, Target } from "lucide-react";
import { useLang } from "@/lib/providers";
import { about, awards, depts, history, pages, team, ui, values, vision } from "@/lib/content";
import { Heading, Icon, PageHero, Photo, Reveal, SectionHead } from "../ui";
import { CTABanner, TeamCard } from "../cards";

export default function AboutPage() {
  const { t } = useLang();
  const tl = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: tl, offset: ["start 70%", "end 60%"] });
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  return (
    <>
      <PageHero title={pages.about.t} sub={pages.about.s} crumbs={[{ label: t(ui.home), href: "/" }, { label: t(pages.about.t) }]} />

      {/* intro */}
      <section className="section">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <div className="group"><Photo id="photo-1522071820081-009f0129c71c" alt="Tim NURGIO" w={1100} className="aspect-[4/3] w-full fold-tr" rounded="rounded-[28px]" /></div>
          <div>
            <Reveal><span className="label">{t(about.label)}</span></Reveal>
            <Heading className="h2 mt-4" text={t(about.title)} />
            <Reveal delay={0.15}><p className="mt-6 text-lg">{t(about.body)}</p></Reveal>
          </div>
        </div>
      </section>

      {/* history timeline */}
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container-site">
          <SectionHead center label={t({ id: "SEJARAH", en: "OUR HISTORY" })} title={t({ id: "Perjalanan Satu Dekade Lebih", en: "A Journey of Over a Decade" })} />
          <ol ref={tl} className="relative mx-auto max-w-4xl">
            <span aria-hidden className="absolute bottom-0 left-4 top-0 w-[3px] rounded bg-[var(--border)] md:left-1/2 md:-translate-x-1/2">
              <motion.span className="block h-full origin-top rounded bg-electric" style={{ scaleY: line }} />
            </span>
            {history.map((h, i) => (
              <Reveal as="li" key={h.y} className={`relative mb-12 pl-14 md:w-1/2 md:pl-0 ${i % 2 ? "md:ml-auto md:pl-14" : "md:pr-14 md:text-right"}`}>
                <span aria-hidden className={`absolute top-2 h-5 w-5 rounded-full border-4 border-electric bg-surface left-[6px] ${i % 2 ? "md:-left-[10px]" : "md:left-auto md:-right-[10px]"}`} />
                <span className="font-display text-3xl font-extrabold text-electric">{h.y}</span>
                <h3 className="mt-1 font-display text-xl font-bold text-head">{t(h.t)}</h3>
                <p className="mt-1">{t(h.d)}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* vision & mission */}
      <section className="section">
        <div className="container-site grid gap-6 md:grid-cols-2">
          <Reveal className="fold-tr rounded-[28px] bg-[image:var(--gradient)] p-8 text-white md:p-12">
            <Target size={36} className="text-[#7fa6ff]" aria-hidden />
            <h2 className="mt-6 font-display text-3xl font-extrabold !text-white">{t(vision.vision.t)}</h2>
            <p className="mt-4 text-lg !text-white/80">{t(vision.vision.d)}</p>
          </Reveal>
          <Reveal delay={0.1} className="card fold-tr p-8 md:p-12">
            <Award size={36} className="text-electric" aria-hidden />
            <h2 className="mt-6 font-display text-3xl font-extrabold">{t(vision.mission.t)}</h2>
            <ul className="mt-4 space-y-3">
              {vision.mission.items.map((m, i) => (
                <li key={i} className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-electric" />{t(m)}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* values */}
      <section className="section pt-0">
        <div className="container-site">
          <SectionHead label={t({ id: "NILAI PERUSAHAAN", en: "COMPANY VALUES" })} title={t({ id: "Prinsip yang Kami Pegang", en: "Principles We Live By" })} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08} className="card group p-7 transition-all duration-500 ease-nurgio hover:-translate-y-2 hover:border-electric hover:shadow-lift">
                <span className="grid h-14 w-14 place-items-center rounded-2xl text-white" style={{ background: "var(--gradient)" }}><Icon name={v.icon} size={26} /></span>
                <h3 className="mt-5 font-display text-xl font-bold">{t(v.t)}</h3>
                <p className="mt-2">{t(v.d)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* certifications */}
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container-site">
          <SectionHead center label={t({ id: "SERTIFIKASI & PENGHARGAAN", en: "CERTIFICATIONS & AWARDS" })} title={t({ id: "Standar yang Diakui", en: "Recognised Standards" })} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((a, i) => (
              <Reveal key={i} delay={i * 0.08} className="card p-7 text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-soft text-electric"><Award size={30} /></span>
                <h3 className="mt-5 font-display text-lg font-bold">{a.t}</h3>
                <p className="mt-1 text-sm">{t(a.d)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* team structure */}
      <section className="section">
        <div className="container-site">
          <SectionHead label={t({ id: "STRUKTUR TIM", en: "TEAM STRUCTURE" })} title={t({ id: "Dipimpin oleh Praktisi", en: "Led by Practitioners" })} />
          <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {depts.map((d, i) => (
              <Reveal key={d.key} delay={i * 0.07} className="card p-6">
                <div className="font-display text-4xl font-extrabold text-electric">{team.filter((m) => m.dept === d.key).length * 6}+</div>
                <div className="mt-1 font-semibold text-head">{t(d.label)}</div>
              </Reveal>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-8">
            {team.filter((m) => m.dept === "leadership" || m.role.en.startsWith("C")).slice(0, 4).map((m, i) => <TeamCard key={m.name} m={m} delay={i * 0.08} />)}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
