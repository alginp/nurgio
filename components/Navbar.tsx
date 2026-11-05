"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Instagram, Linkedin, Menu, Moon, Sun, Twitter, X, Youtube } from "lucide-react";
import { EASE, NLink, useLang, useTheme } from "@/lib/providers";
import { company, nav, ui } from "@/lib/content";
import { Logo } from "./Logo";
import { Button } from "./ui";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const last = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
    if (y > last.current && y > 400 && !open) setHidden(true);
    else if (y < last.current) setHidden(false);
    last.current = y;
  });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (open) { lenis?.stop(); document.body.style.overflow = "hidden"; }
    else { lenis?.start(); document.body.style.overflow = ""; }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const socials = [
    { i: Instagram, l: "Instagram", h: company.social.instagram },
    { i: Linkedin, l: "LinkedIn", h: company.social.linkedin },
    { i: Twitter, l: "X / Twitter", h: company.social.twitter },
    { i: Youtube, l: "YouTube", h: company.social.youtube },
  ];

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-[100] transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          scrolled ? "shadow-[0_8px_32px_rgba(7,87,255,0.10)] backdrop-blur-xl" : ""
        }`}
        style={{ backgroundColor: scrolled ? "color-mix(in srgb, var(--bg) 84%, transparent)" : "transparent" }}
        animate={{ y: hidden ? "-110%" : 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div className="container-site flex h-[76px] items-center justify-between gap-4 md:h-[84px]">
          <Logo scale={0.95} />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {nav.map((n) => (
                <li key={n.href}>
                  <NLink href={n.href} aria-current={isActive(n.href) ? "page" : undefined}
                    className="nav-link text-[0.95rem] font-medium text-head transition-colors hover:text-electric">
                    {t(n.label)}
                  </NLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <div role="group" aria-label="Language" className="flex rounded-full border border-[var(--border)] p-1 text-xs font-bold">
              {(["id", "en"] as const).map((l) => (
                <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
                  className={`min-h-[34px] min-w-[38px] rounded-full px-2 uppercase transition-colors ${lang === l ? "bg-electric text-white" : "text-head hover:text-electric"}`}>
                  {l}
                </button>
              ))}
            </div>
            <button onClick={toggle} aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
              className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] text-head transition-colors hover:border-electric hover:text-electric">
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <div className="hidden md:block"><Button href="/kontak" magnetic>{t(ui.cta)}</Button></div>
            <button onClick={() => setOpen(true)} aria-label="Menu" aria-expanded={open} aria-controls="mobile-menu"
              className="grid h-11 w-11 place-items-center rounded-full bg-electric text-white lg:hidden">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu"
            className="fixed inset-0 z-[200] flex flex-col overflow-y-auto bg-navy px-6 pb-8 pt-6 text-white"
            initial={{ clipPath: "circle(0% at 92% 4%)" }} animate={{ clipPath: "circle(150% at 92% 4%)" }} exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.7, ease: EASE }}>
            <div className="flex items-center justify-between">
              <Logo scale={0.95} light />
              <button onClick={() => setOpen(false)} aria-label="Close" className="grid h-11 w-11 place-items-center rounded-full border border-white/30"><X size={20} /></button>
            </div>
            <ul className="mt-10 flex flex-1 flex-col justify-center gap-1">
              {nav.map((n, i) => (
                <motion.li key={n.href} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.07, duration: 0.7, ease: EASE }}>
                  <NLink href={n.href} className={`block py-2 font-display text-[2rem] font-extrabold uppercase leading-tight ${isActive(n.href) ? "text-[#7fa6ff]" : "text-white"}`}>
                    {t(n.label)}
                  </NLink>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-6">
              <div className="flex gap-3">
                {socials.map(({ i: I, l, h }) => (
                  <a key={l} href={h} aria-label={l} className="grid h-11 w-11 place-items-center rounded-full border border-white/25 hover:bg-white/10"><I size={18} /></a>
                ))}
              </div>
              <Button href="/kontak">{t(ui.cta)}</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
