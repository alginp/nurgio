"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { Activity, Play, Star } from "lucide-react";
import { EASE, useLang } from "@/lib/providers";
import { hero, stats } from "@/lib/content";
import { Button, CountUp, Heading, Reveal } from "../ui";
import { N_RATIO, layerCls } from "../Logo";

export default function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 18 }), sy = useSpring(my, { stiffness: 70, damping: 18 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 40]); // subtle, max 40px

  // different depth per layer → pseudo-3D parallax
  const lx = useTransform(sx, (v) => v * -22), ly = useTransform(sy, (v) => v * -16);
  const bx = useTransform(sx, (v) => v * 18), by = useTransform(sy, (v) => v * 14);
  const rx = useTransform(sx, (v) => v * -34), ry = useTransform(sy, (v) => v * -26);
  const tiltY = useTransform(sx, (v) => v * 14), tiltX = useTransform(sy, (v) => v * -10);

  return (
    <section
      ref={ref} aria-labelledby="hero-title"
      className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-32 md:pt-36"
      onMouseMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
    >
      {/* background: grid + blurred radial blobs */}
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div aria-hidden className="pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-electric/25 blur-[130px]" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 h-[560px] w-[560px] rounded-full bg-navy/25 blur-[140px]" />

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* left */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-surface px-4 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-head"
          >
            <span className="relative flex h-2.5 w-2.5"><span className="absolute inset-0 animate-pulseRing rounded-full bg-electric" /><span className="relative h-2.5 w-2.5 rounded-full bg-electric" /></span>
            {t(hero.chip)}
          </motion.span>

          <Heading as="h1" className="h1 mt-7" text={t(hero.title)} delay={0.2} />
          <span id="hero-title" className="sr-only">{t(hero.title).replace(/\*/g, "")}</span>

          <Reveal delay={0.5}><p className="mt-7 max-w-xl text-lg">{t(hero.sub)}</p></Reveal>

          <Reveal delay={0.65} className="mt-9 flex flex-wrap gap-4">
            <Button href="/kontak" magnetic>{t(hero.primary)}</Button>
            <Button href="/portofolio" variant="outline" icon={<Play size={16} fill="currentColor" />}>{t(hero.secondary)}</Button>
          </Reveal>

          <Reveal delay={0.8} className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-[var(--border)] pt-8">
            {stats.slice(0, 3).map((s, i) => (
              <div key={i}>
                <div className="font-display text-[1.75rem] font-extrabold text-head md:text-[2.25rem]"><CountUp to={s.value} suffix={s.suffix} /></div>
                <div className="mt-1 text-[0.8rem] leading-snug md:text-sm">{t(s.label)}</div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* right: floating, parallaxing ribbon N */}
        <motion.div style={{ y: scrollY, perspective: 1200 }} className="relative mx-auto w-full max-w-[560px]" aria-hidden>
          <motion.div
            className="relative"
            style={{ rotateY: tiltY, rotateX: tiltX, transformStyle: "preserve-3d" }}
            animate={reduce ? undefined : { rotateZ: [-2, 2, -2] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-[8%] rounded-full bg-electric/30 blur-[90px]" />
            <div className="relative animate-float" style={{ aspectRatio: N_RATIO }}>
              <motion.span className={layerCls.left} style={{ x: lx, y: ly, translateZ: -20, filter: "drop-shadow(0 30px 40px rgba(3,30,122,.35))" }} initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: EASE, delay: 0.3 }} />
              <motion.span className={layerCls.right} style={{ x: rx, y: ry, translateZ: 10, filter: "drop-shadow(0 30px 40px rgba(3,30,122,.35))" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: EASE, delay: 0.45 }} />
              <motion.span className={layerCls.band} style={{ x: bx, y: by, translateZ: 60, filter: "drop-shadow(0 40px 50px rgba(7,87,255,.45))" }} initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }} transition={{ duration: 1.3, ease: EASE, delay: 0.6 }} />
            </div>
          </motion.div>

          {/* floating glass cards */}
          <motion.div className="glass absolute -left-2 top-[6%] flex items-center gap-3 px-4 py-3 md:-left-8" animate={reduce ? undefined : { y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-electric text-white"><Activity size={20} /></span>
            <span><span className="block text-[0.7rem] font-semibold uppercase tracking-wider text-body">{t(hero.cardA)}</span><span className="font-display text-xl font-extrabold text-head">24</span></span>
          </motion.div>
          <motion.div className="glass absolute -right-2 bottom-[8%] flex items-center gap-3 px-4 py-3 md:-right-6" animate={reduce ? undefined : { y: [0, 12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy text-white" style={{ background: "#031e7a" }}><Star size={20} fill="currentColor" /></span>
            <span><span className="block text-[0.7rem] font-semibold uppercase tracking-wider text-body">{t(hero.cardB)}</span><span className="font-display text-xl font-extrabold text-head">4.9 / 5</span></span>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <div aria-hidden className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="flex h-10 w-6 justify-center rounded-full border-2 border-head/40 pt-2"><span className="h-2 w-1 animate-scrollDot rounded-full bg-electric" /></span>
      </div>
    </section>
  );
}
