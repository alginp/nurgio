"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useLang } from "@/lib/providers";
import { ui, waLink } from "@/lib/content";

/* 3px scroll progress bar */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const sx = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return <motion.div aria-hidden className="fixed inset-x-0 top-0 z-[250] h-[3px] origin-left bg-electric" style={{ scaleX: sx }} />;
}

/* Floating WhatsApp + scroll-to-top with circular progress ring */
export function FloatingActions() {
  const { t } = useLang();
  const { scrollYProgress, scrollY } = useScroll();
  const [show, setShow] = useState(false);
  const [p, setP] = useState(0);
  useEffect(() => scrollY.on("change", (y) => setShow(y > 600)), [scrollY]);
  useEffect(() => scrollYProgress.on("change", (v) => setP(v)), [scrollYProgress]);
  const C = 2 * Math.PI * 22;
  const top = () => {
    const l = (window as unknown as { __lenis?: { scrollTo: (n: number, o?: object) => void } }).__lenis;
    if (l) l.scrollTo(0, { duration: 1.4 }); else window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="fixed bottom-5 right-4 z-[90] flex flex-col items-center gap-3 md:bottom-7 md:right-7">
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}
            onClick={top} aria-label={t(ui.backTop)}
            className="relative grid h-[52px] w-[52px] place-items-center rounded-full bg-surface text-head shadow-soft"
          >
            <svg className="absolute inset-0 -rotate-90" viewBox="0 0 52 52" aria-hidden>
              <circle cx="26" cy="26" r="22" fill="none" stroke="var(--border)" strokeWidth="3" />
              <circle cx="26" cy="26" r="22" fill="none" stroke="var(--blue-electric)" strokeWidth="3" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - p)} />
            </svg>
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
      <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform duration-500 hover:scale-110">
        <span aria-hidden className="absolute inset-0 animate-pulseRing rounded-full bg-[#25D366]" />
        <MessageCircle className="relative" size={26} />
      </a>
    </div>
  );
}

/* Custom cursor: blue dot + trailing ring; enlarges on links, "Lihat" on [data-cursor="view"] */
export function Cursor() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [on, setOn] = useState(false);
  const [mode, setMode] = useState<"idle" | "link" | "view">("idle");
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 160, damping: 20, mass: 0.4 });
  const ry = useSpring(y, { stiffness: 160, damping: 20, mass: 0.4 });

  useEffect(() => {
    if (reduce || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setOn(true);
    document.documentElement.classList.add("has-cursor");
    const move = (e: MouseEvent) => {
      x.set(e.clientX); y.set(e.clientY);
      const el = (e.target as HTMLElement)?.closest?.('[data-cursor="view"], a, button, [role="button"], input, textarea, select, summary');
      if (!el) setMode("idle");
      else if (el.getAttribute("data-cursor") === "view") setMode("view");
      else setMode("link");
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => { window.removeEventListener("mousemove", move); document.documentElement.classList.remove("has-cursor"); };
  }, [reduce, x, y]);

  if (!on) return null;
  return (
    <>
      <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[400] h-2 w-2 rounded-full bg-electric" style={{ x, y, translateX: "-50%", translateY: "-50%" }} />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[399] grid place-items-center rounded-full border border-electric text-[0.7rem] font-bold uppercase tracking-wider text-white"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: mode === "view" ? 84 : mode === "link" ? 56 : 34,
          height: mode === "view" ? 84 : mode === "link" ? 56 : 34,
          backgroundColor: mode === "view" ? "rgba(7,87,255,0.95)" : mode === "link" ? "rgba(7,87,255,0.12)" : "rgba(7,87,255,0)",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {mode === "view" && t(ui.view)}
      </motion.div>
    </>
  );
}
