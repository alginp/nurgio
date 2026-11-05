"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { EASE, useLang } from "@/lib/providers";
import { about, clients, company, process, services, servicesSection, ui, why } from "@/lib/content";
import { ArrowLink, Heading, Photo, Reveal, SectionHead } from "../ui";
import { ServiceCard } from "../cards";

/* ───────── 2. TRUSTED BY — infinite grayscale marquee ───────── */
export function TrustedBy() {
  const { t } = useLang();
  const list = [...clients, ...clients];
  return (
    <section aria-label={t(ui.trustedBy)} className="relative border-y border-[var(--border)] py-10" style={{ background: "var(--bg-soft)" }}>
      <p className="mb-7 text-center text-[0.8rem] font-semibold uppercase tracking-[0.12em]">{t(ui.trustedBy)}</p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee gap-14 pr-14" role="list">
          {list.map((c, i) => (
            <div key={i} role="listitem" aria-hidden={i >= clients.length}
              className="group flex shrink-0 items-center gap-3 opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">
              {/* placeholder logo mark — replace with <Image src="/clients/xxx.svg" /> */}
              <span className="grid h-10 w-10 place-items-center rounded-xl font-display text-sm font-extrabold text-white" style={{ background: i % 3 === 0 ? "#0757ff" : i % 3 === 1 ? "#031e7a" : "#4a6cf0" }}>{c[0]}</span>
              <span className="whitespace-nowrap font-display text-lg font-bold text-head">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── 3. ABOUT PREVIEW ───────── */
export function AboutPreview() {
  const { t } = useLang();
  return (
    <section className="section" aria-labelledby="about-title">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto grid w-full max-w-[560px] grid-cols-6 grid-rows-6 gap-4" style={{ aspectRatio: "1 / 1.05" }}>
          <div className="group col-span-4 row-span-4 fold-tr rounded-[28px]"><Photo id="photo-1522071820081-009f0129c71c" alt="Tim NURGIO berdiskusi" w={900} className="h-full w-full" rounded="rounded-[28px]" sizes="(min-width:1024px) 30vw, 70vw" /></div>
          <div className="group col-span-2 col-start-5 row-span-3 rounded-[28px]"><Photo id="photo-1497366216548-37526070297c" alt="Kantor NURGIO" w={600} className="h-full w-full" rounded="rounded-[28px]" sizes="20vw" /></div>
          <div className="group col-span-3 col-start-3 row-span-2 row-start-5 fold-bl rounded-[28px]"><Photo id="photo-1531297484001-80022131f5a1" alt="Pengembangan produk" w={700} className="h-full w-full" rounded="rounded-[28px]" sizes="25vw" /></div>
          <motion.div
            className="glass absolute -bottom-4 left-0 z-10 flex items-center gap-3 px-5 py-4 md:-left-6"
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
          >
            <span className="font-display text-3xl font-extrabold text-electric">{company.founded}</span>
            <span className="text-sm font-semibold leading-tight text-head">{t(about.badge)}<br />{company.founded}</span>
          </motion.div>
        </div>

        <div>
          <Reveal><span className="label">{t(about.label)}</span></Reveal>
          <Heading className="h2 mt-4" text={t(about.title)} />
          <Reveal delay={0.15}><p className="mt-6 text-lg">{t(about.body)}</p></Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {about.strengths.map((s, i) => (
              <Reveal as="li" key={i} delay={0.1 + i * 0.08} className="flex gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-electric text-white"><Check size={14} strokeWidth={3} /></span>
                <span className="text-head">{t(s)}</span>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.5} className="mt-10"><ArrowLink href="/tentang">{t(ui.readMore)}</ArrowLink></Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────── 4. SERVICES — bento grid ───────── */
export function ServicesBento() {
  const { t } = useLang();
  // varied sizes on a 6-col desktop grid
  const spans = ["lg:col-span-3 lg:row-span-1", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-6"];
  return (
    <section className="section" style={{ background: "var(--bg-soft)" }} aria-labelledby="svc-title">
      <div className="container-site">
        <SectionHead label={t(servicesSection.label)} title={t(servicesSection.title)} intro={t(servicesSection.intro)} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} s={s} delay={i * 0.08} className={spans[i]} feature={i === 0 || i === 5} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── 5. WHY CHOOSE US — dark section, sticky title, accordion, cursor glow ───────── */
export function WhyUs() {
  const { t } = useLang();
  const [open, setOpen] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const gx = useMotionValue(-400), gy = useMotionValue(-400);
  const sx = useSpring(gx, { stiffness: 120, damping: 22 }), sy = useSpring(gy, { stiffness: 120, damping: 22 });
  return (
    <section
      ref={ref} className="section overflow-hidden text-white" style={{ background: "#031e7a" }} aria-labelledby="why-title"
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        gx.set(e.clientX - r.left - 250); gy.set(e.clientY - r.top - 250);
      }}
    >
      <motion.div aria-hidden className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-electric/40 blur-[110px]" style={{ x: sx, y: sy }} />
      <div aria-hidden className="ribbon-pattern pointer-events-none absolute inset-0 opacity-[0.04]" />
      <div className="container-site relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal><span className="label !text-[#7fa6ff]">{t(why.label)}</span></Reveal>
          <Heading className="h2 mt-4 !text-white" highlight="text-[#7fa6ff]" text={t(why.title)} />
          <Reveal delay={0.2}><p className="mt-6 max-w-sm text-lg !text-white/70">{t(why.sub)}</p></Reveal>
        </div>
        <div role="list" className="relative">
          <span aria-hidden className="absolute bottom-6 left-[34px] top-6 hidden w-px bg-white/15 md:block" />
          {why.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div role="listitem" className="relative border-b border-white/10 last:border-0">
                  <h3>
                    <button aria-expanded={isOpen} aria-controls={`why-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex min-h-[44px] w-full items-center gap-5 py-7 text-left md:gap-8">
                      <span className={`font-display text-5xl font-extrabold transition-colors duration-500 md:text-6xl ${isOpen ? "text-[#7fa6ff]" : "outline-text text-white/40"}`} style={isOpen ? undefined : { WebkitTextStroke: "1.5px rgba(255,255,255,.4)", color: "transparent" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`font-display text-2xl font-bold transition-colors md:text-3xl ${isOpen ? "!text-white" : "!text-white/60"}`}>{t(it.t)}</span>
                    </button>
                  </h3>
                  <motion.div id={`why-${i}`} initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.6, ease: EASE }} className="overflow-hidden">
                    <p className="pb-8 pl-0 text-lg !text-white/70 md:pl-[104px]">{t(it.d)}</p>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────── 6. PROCESS — line draws itself on scroll ───────── */
export function ProcessFlow() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const w = useTransform(progress, [0, 1], ["0%", "100%"]);
  const h = useTransform(progress, [0, 1], ["0%", "100%"]);
  return (
    <section className="section" aria-labelledby="proc-title">
      <div className="container-site">
        <SectionHead center label={t(process.label)} title={t(process.title)} />
        <div ref={ref} className="relative">
          {/* horizontal line (desktop) */}
          <div aria-hidden className="absolute left-[10%] right-[10%] top-8 hidden h-[3px] rounded bg-[var(--border)] lg:block">
            <motion.div className="h-full rounded bg-electric" style={{ width: reduce ? "100%" : w }} />
          </div>
          {/* vertical line (mobile) */}
          <div aria-hidden className="absolute bottom-8 left-8 top-8 w-[3px] rounded bg-[var(--border)] lg:hidden">
            <motion.div className="w-full rounded bg-electric" style={{ height: reduce ? "100%" : h }} />
          </div>
          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
            {process.steps.map((s, i) => (
              <Reveal as="li" key={i} delay={i * 0.1} className="relative flex gap-6 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                <span className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-full border-[3px] border-electric bg-surface font-display text-lg font-extrabold text-electric shadow-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="lg:mt-6">
                  <h3 className="font-display text-xl font-bold text-head">{t(s.t)}</h3>
                  <p className="mt-2 text-[0.95rem]">{t(s.d)}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
