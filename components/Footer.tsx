"use client";

import { useState } from "react";
import { ArrowRight, Clock, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { NLink, useLang } from "@/lib/providers";
import { company, nav, services, ui, type L } from "@/lib/content";
import { Logo } from "./Logo";

const tagline: L = { id: "Pita digital yang menghubungkan ide, orang, dan pertumbuhan bisnis Anda.", en: "A digital ribbon connecting ideas, people and your business growth." };

export default function Footer() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const socials = [
    { i: Instagram, l: "Instagram", h: company.social.instagram },
    { i: Linkedin, l: "LinkedIn", h: company.social.linkedin },
    { i: Twitter, l: "X / Twitter", h: company.social.twitter },
    { i: Youtube, l: "YouTube", h: company.social.youtube },
  ];
  return (
    <footer className="relative overflow-hidden bg-navy text-white/75" style={{ background: "#031e7a" }}>
      {/* folded-ribbon pattern @ 5% */}
      <div aria-hidden className="ribbon-pattern pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div className="container-site relative pb-0 pt-20 md:pt-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Logo light scale={1.1} />
            <p className="mt-6 max-w-xs text-[0.95rem]">{t(tagline)}</p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ i: I, l, h }) => (
                <a key={l} href={h} aria-label={l} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition-all duration-500 hover:-translate-y-1 hover:border-electric hover:bg-electric hover:text-white"><I size={18} /></a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-display text-sm font-bold uppercase tracking-[0.12em] !text-white">{t({ id: "Perusahaan", en: "Company" })}</h3>
            <ul className="space-y-3">
              {[...nav.filter((n) => n.href !== "/" && n.href !== "/layanan" && n.href !== "/kontak"), { href: "/karir", label: { id: "Karir", en: "Careers" } }].map((n) => (
                <li key={n.href}><NLink href={n.href} className="transition-colors hover:text-white">{t(n.label)}</NLink></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-display text-sm font-bold uppercase tracking-[0.12em] !text-white">{t(nav[2].label)}</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}><NLink href={`/layanan/${s.slug}`} className="transition-colors hover:text-white">{t(s.title)}</NLink></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-display text-sm font-bold uppercase tracking-[0.12em] !text-white">{t(nav[6].label)}</h3>
            <ul className="space-y-3 text-[0.95rem]">
              <li className="flex gap-3"><MapPin size={18} className="mt-1 shrink-0 text-[#7fa6ff]" />{company.address}</li>
              <li className="flex gap-3"><Mail size={18} className="mt-1 shrink-0 text-[#7fa6ff]" /><a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a></li>
              <li className="flex gap-3"><Phone size={18} className="mt-1 shrink-0 text-[#7fa6ff]" /><a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-white">{company.phone}</a></li>
              <li className="flex gap-3"><Clock size={18} className="mt-1 shrink-0 text-[#7fa6ff]" />{t(company.hours)}</li>
            </ul>
          </div>
        </div>

        {/* newsletter */}
        <div className="mt-14 flex flex-col gap-5 rounded-[28px] border border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <p className="max-w-md font-display text-lg font-bold text-white">{t(ui.newsletter)}</p>
          {done ? (
            <p role="status" className="font-semibold text-[#7fa6ff]">✓ {t(ui.sent)}</p>
          ) : (
            <form className="flex w-full max-w-md gap-2" onSubmit={(e) => { e.preventDefault(); if (/^\S+@\S+\.\S+$/.test(email)) setDone(true); }}>
              <label htmlFor="nl" className="sr-only">{t(ui.emailPh)}</label>
              <input id="nl" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t(ui.emailPh)}
                className="min-h-[52px] min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-white placeholder:text-white/50 focus:border-electric focus:outline-none" />
              <button className="btn btn-primary shrink-0 !px-5" aria-label={t(ui.subscribe)}><span className="hidden sm:inline">{t(ui.subscribe)}</span><ArrowRight size={18} /></button>
            </form>
          )}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-sm md:flex-row">
          <p>© {new Date().getFullYear()} {company.legal}. {t(ui.rights)}</p>
          <div className="flex gap-6">
            <NLink href="/kebijakan-privasi" className="hover:text-white">{t(ui.privacy)}</NLink>
            <NLink href="/syarat-ketentuan" className="hover:text-white">{t(ui.terms)}</NLink>
          </div>
        </div>

        {/* giant outlined wordmark, cropped at the bottom */}
        <div aria-hidden className="pointer-events-none relative -mb-[3.2vw] select-none overflow-hidden md:-mb-[2.6vw]">
          <div className="wm mx-auto w-[96%]" style={{ background: "transparent", WebkitMaskImage: "none", maskImage: "none", position: "relative" }}>
            <OutlineWordmark />
          </div>
        </div>
      </div>
    </footer>
  );
}

/** Outlined wordmark made from the wordmark alpha — a lavender stroke effect via layered masks. */
function OutlineWordmark() {
  return (
    <>
      <span className="absolute inset-0" style={{ background: "rgba(200,203,232,0.16)", WebkitMask: "url(/brand/wordmark.png) center / 100% 100% no-repeat", mask: "url(/brand/wordmark.png) center / 100% 100% no-repeat" }} />
      <span className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(7,87,255,0.35), transparent 70%)", WebkitMask: "url(/brand/wordmark.png) center / 100% 100% no-repeat", mask: "url(/brand/wordmark.png) center / 100% 100% no-repeat" }} />
    </>
  );
}
