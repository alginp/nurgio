"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import type { Lang, L } from "./content";

/* ───────────── LANGUAGE ───────────── */
type LangCtx = { lang: Lang; setLang: (l: Lang) => void; t: (l: L) => string };
const LangContext = createContext<LangCtx>({ lang: "id", setLang: () => {}, t: (l) => l.id });
export const useLang = () => useContext(LangContext);

/* ───────────── THEME ───────────── */
type Theme = "light" | "dark";
type ThemeCtx = { theme: Theme; toggle: () => void };
const ThemeContext = createContext<ThemeCtx>({ theme: "light", toggle: () => {} });
export const useTheme = () => useContext(ThemeContext);

/* ───────────── PAGE TRANSITION ───────────── */
type NavCtx = { go: (href: string) => void };
const NavContext = createContext<NavCtx>({ go: () => {} });
export const useNav = () => useContext(NavContext);

export const EASE = [0.22, 1, 0.36, 1] as const;

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");
  const [theme, setTheme] = useState<Theme>("light");
  const router = useRouter();
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const panel = useAnimationControls();
  const covering = useRef(false);
  const lenisRef = useRef<Lenis | null>(null);

  /* restore saved preferences */
  useEffect(() => {
    try {
      const l = localStorage.getItem("nurgio-lang") as Lang | null;
      if (l === "id" || l === "en") setLangState(l);
      const th = document.documentElement.getAttribute("data-theme");
      if (th === "dark") setTheme("dark");
    } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("nurgio-lang", l); } catch {}
  }, []);
  const t = useCallback((l: L) => l[lang], [lang]);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("nurgio-theme", next); } catch {}
      return next;
    });
  }, []);

  /* smooth scroll (Lenis) */
  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ duration: 1.1, easing: (x: number) => Math.min(1, 1.001 - Math.pow(2, -10 * x)) });
    lenisRef.current = lenis;
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    let raf = 0;
    const loop = (time: number) => { lenis.raf(time); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); lenisRef.current = null; };
  }, [reduced]);

  /* reveal after route change */
  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
    if (covering.current) {
      covering.current = false;
      panel.start({ x: "120%", transition: { duration: 0.6, ease: EASE, delay: 0.08 } }).then(() => panel.set({ x: "-120%" }));
    }
  }, [pathname, panel]);

  const go = useCallback(
    async (href: string) => {
      if (href === pathname || href.startsWith("#")) return;
      if (reduced) { router.push(href); return; }
      covering.current = true;
      await panel.start({ x: "0%", transition: { duration: 0.5, ease: EASE } });
      router.push(href);
      // safety: if the route doesn't change, uncover
      setTimeout(() => {
        if (covering.current) {
          covering.current = false;
          panel.start({ x: "120%", transition: { duration: 0.5, ease: EASE } }).then(() => panel.set({ x: "-120%" }));
        }
      }, 3000);
    },
    [pathname, reduced, router, panel]
  );

  const langValue = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  const themeValue = useMemo(() => ({ theme, toggle }), [theme, toggle]);
  const navValue = useMemo(() => ({ go }), [go]);

  return (
    <LangContext.Provider value={langValue}>
      <ThemeContext.Provider value={themeValue}>
        <NavContext.Provider value={navValue}>
          {children}
          {/* ribbon-shaped route transition panel */}
          <motion.div
            aria-hidden
            initial={{ x: "-120%" }}
            animate={panel}
            className="pointer-events-none fixed inset-y-0 -left-[15%] z-[150] w-[130%] -skew-x-[14deg]"
            style={{ background: "linear-gradient(135deg, #0757ff 0%, #031e7a 100%)" }}
          >
            <div className="absolute inset-y-0 right-0 w-[12%] bg-white/15" />
            <div className="absolute inset-y-0 right-[14%] w-[3%] bg-white/10" />
          </motion.div>
        </NavContext.Provider>
      </ThemeContext.Provider>
    </LangContext.Provider>
  );
}

/* Link that triggers the ribbon page transition for internal routes */
export function NLink({ href, onClick, children, ...rest }: React.ComponentProps<typeof Link>) {
  const { go } = useNav();
  const h = typeof href === "string" ? href : href.pathname ?? "/";
  return (
    <Link
      href={href}
      {...rest}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        if (!h.startsWith("/")) return;
        e.preventDefault();
        go(h);
      }}
    >
      {children}
    </Link>
  );
}
