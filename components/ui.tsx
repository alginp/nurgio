"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  animate, motion, useInView, useMotionValue, useReducedMotion, useSpring,
} from "framer-motion";
import * as Lucide from "lucide-react";
import { ArrowRight } from "lucide-react";
import { EASE, NLink, useLang } from "@/lib/providers";
import { NMark } from "./Logo";
import { company, photo, type L } from "@/lib/content";

/* ───────── Icon by name ───────── */
export function Icon({ name, className, size = 24, strokeWidth = 1.8 }: { name: string; className?: string; size?: number; strokeWidth?: number }) {
  const C = (Lucide as unknown as Record<string, React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>>)[name] ?? Lucide.Circle;
  return <C className={className} size={size} strokeWidth={strokeWidth} aria-hidden />;
}

/* ───────── Reveal: fade + translateY(30) with stagger ───────── */
export function Reveal({
  children, delay = 0, className, as = "div", y = 30,
}: { children: React.ReactNode; delay?: number; className?: string; as?: "div" | "li" | "section" | "article"; y?: number }) {
  const reduce = useReducedMotion();
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}

/* ───────── Heading with line/word mask reveal. Use *word* for electric-blue highlight ───────── */
export function Heading({
  text, as: Tag = "h2", className = "h2", highlight = "text-electric", delay = 0,
}: { text: string; as?: "h1" | "h2" | "h3"; className?: string; highlight?: string; delay?: number }) {
  const reduce = useReducedMotion();
  const parts = text.split("*");
  let i = 0;
  const plain = parts.join("");
  return (
    <Tag className={className} aria-label={plain}>
      {parts.map((part, pi) =>
        part.split(/(\s+)/).map((w, wi) => {
          if (!w) return null;
          if (/^\s+$/.test(w)) return <span key={`${pi}-${wi}`}> </span>;
          const idx = i++;
          return (
            <span key={`${pi}-${wi}`} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-bottom">
              <motion.span
                className={`inline-block ${pi % 2 === 1 ? highlight : ""}`}
                initial={{ y: reduce ? 0 : "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, ease: EASE, delay: delay + idx * 0.05 }}
              >
                {w}
              </motion.span>
            </span>
          );
        })
      )}
    </Tag>
  );
}

/* ───────── Section header ───────── */
export function SectionHead({
  label, title, intro, center = false, light = false,
}: { label: string; title: string; intro?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`mb-12 max-w-3xl md:mb-16 ${center ? "mx-auto text-center" : ""}`}>
      <Reveal><span className={`label ${light ? "!text-[#7fa6ff]" : ""}`}>{label}</span></Reveal>
      <Heading text={title} className={`h2 mt-4 ${light ? "!text-white" : ""}`} highlight={light ? "text-[#7fa6ff]" : "text-electric"} />
      {intro && <Reveal delay={0.15}><p className={`mt-5 text-lg ${light ? "!text-white/70" : ""}`}>{intro}</p></Reveal>}
    </div>
  );
}

/* ───────── Image with brand tint, clip-path wipe, and graceful fallback ───────── */
export function Photo({
  id, alt, w = 1200, sizes = "(min-width:1024px) 50vw, 100vw", className = "", priority = false, wipe = true, tint = true, rounded = "rounded-card",
}: { id: string; alt: string; w?: number; sizes?: string; className?: string; priority?: boolean; wipe?: boolean; tint?: boolean; rounded?: string }) {
  const [failed, setFailed] = useState(false);
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`relative overflow-hidden bg-soft ${rounded} ${tint ? "tint" : ""} ${className}`}
      initial={{ clipPath: wipe && !reduce ? "inset(0 100% 0 0)" : "inset(0 0% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, ease: EASE }}
    >
      {failed ? (
        <div className="absolute inset-0 grid place-items-center" style={{ background: "var(--gradient)" }}>
          <NMark className="w-1/4 opacity-30" mono />
        </div>
      ) : (
        <Image
          src={photo(id, w)} alt={alt} fill sizes={sizes} priority={priority}
          className="object-cover transition-transform duration-[1200ms] ease-nurgio group-hover:scale-[1.06]"
          onError={() => setFailed(true)}
        />
      )}
    </motion.div>
  );
}

/* ───────── Avatar-style portrait ───────── */
export function Portrait({ id, alt, className = "", gray = false }: { id: string; alt: string; className?: string; gray?: boolean }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-soft ${className}`}>
      {failed ? (
        <div className="absolute inset-0 grid place-items-center" style={{ background: "var(--gradient)" }}>
          <NMark className="w-1/3 opacity-30" mono />
        </div>
      ) : (
        <Image
          src={photo(id, 700)} alt={alt} fill sizes="(min-width:1024px) 25vw, 50vw"
          className={`object-cover transition-all duration-700 ease-nurgio ${gray ? "grayscale group-hover:grayscale-0" : ""} group-hover:scale-105`}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

/* ───────── Magnetic wrapper ───────── */
export function Magnetic({ children, strength = 0.35, className = "" }: { children: React.ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 }), sy = useSpring(y, { stiffness: 220, damping: 18 });
  const reduce = useReducedMotion();
  return (
    <motion.div
      ref={ref} className={`inline-block ${className}`} style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.div>
  );
}

/* ───────── Buttons with sliding arrow ───────── */
export function Button({
  href, children, variant = "primary", magnetic = false, external = false, className = "", onClick, type, icon,
}: {
  href?: string; children: React.ReactNode; variant?: "primary" | "outline" | "ghost-light"; magnetic?: boolean; external?: boolean;
  className?: string; onClick?: () => void; type?: "button" | "submit"; icon?: React.ReactNode;
}) {
  const cls = `btn btn-${variant} group overflow-hidden ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <span className="relative inline-flex h-5 w-5 overflow-hidden" aria-hidden>
        {icon ?? (
          <>
            <ArrowRight className="absolute inset-0 transition-transform duration-500 ease-nurgio group-hover:translate-x-6" size={20} />
            <ArrowRight className="absolute inset-0 -translate-x-6 transition-transform duration-500 ease-nurgio group-hover:translate-x-0" size={20} />
          </>
        )}
      </span>
    </>
  );
  let el: React.ReactNode;
  if (href && external) el = <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>;
  else if (href) el = <NLink href={href} className={cls}>{inner}</NLink>;
  else el = <button type={type ?? "button"} onClick={onClick} className={cls}>{inner}</button>;
  return magnetic ? <Magnetic>{el}</Magnetic> : <>{el}</>;
}

/* ───────── Arrow text link ───────── */
export function ArrowLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <NLink href={href} className={`group inline-flex items-center gap-2 font-semibold text-electric ${className}`}>
      {children}
      <ArrowRight size={18} className="transition-transform duration-500 ease-nurgio group-hover:translate-x-1.5" aria-hidden />
    </NLink>
  );
}

/* ───────── Count up ───────── */
export function CountUp({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, { duration, ease: EASE, onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, to, duration, reduce]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* ───────── Page hero + breadcrumb for inner pages ───────── */
export function PageHero({ title, sub, crumbs }: { title: L; sub: L; crumbs: { label: string; href?: string }[] }) {
  const { t } = useLang();
  const ld = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem", position: i + 1, name: c.label,
      ...(c.href ? { item: `${company.url}${c.href === "/" ? "" : c.href}` } : {}),
    })),
  };
  return (
    <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-48" style={{ background: "var(--bg-soft)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="grid-bg absolute inset-0" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-electric/20 blur-[110px]" />
      <NMark className="pointer-events-none absolute -right-10 bottom-[-40px] hidden w-[420px] opacity-[0.12] md:block" />
      <div className="container-site relative">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                {c.href ? <NLink href={c.href} className="hover:text-electric">{c.label}</NLink> : <span aria-current="page" className="font-semibold text-head">{c.label}</span>}
                {i < crumbs.length - 1 && <span aria-hidden className="text-lavender">/</span>}
              </li>
            ))}
          </ol>
        </nav>
        <Heading as="h1" className="h1 max-w-4xl" text={t(title)} />
        <Reveal delay={0.2}><p className="mt-6 max-w-2xl text-lg">{t(sub)}</p></Reveal>
      </div>
    </section>
  );
}

/* generic placeholder for 'no results' */
export function Empty({ text }: { text: string }) {
  return <p className="col-span-full rounded-card border border-dashed border-[var(--border)] p-10 text-center">{text}</p>;
}
