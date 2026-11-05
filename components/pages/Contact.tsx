"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Clock, Instagram, Linkedin, Mail, MapPin, Paperclip, Phone, Twitter, Youtube } from "lucide-react";
import { EASE, useLang } from "@/lib/providers";
import { company, contactForm as cf, pages, services, ui } from "@/lib/content";
import { Button, PageHero, Reveal } from "../ui";

type Vals = { name: string; email: string; phone: string; service: string; message: string };

export default function ContactPage() {
  const { t } = useLang();
  const [v, setV] = useState<Vals>({ name: "", email: "", phone: "", service: "", message: "" });
  const [err, setErr] = useState<Partial<Record<keyof Vals, string>>>({});
  const [file, setFile] = useState<string>("");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  const validate = (x: Vals) => {
    const e: Partial<Record<keyof Vals, string>> = {};
    if (!x.name.trim()) e.name = t(ui.required);
    if (!x.email.trim()) e.email = t(ui.required);
    else if (!/^\S+@\S+\.\S+$/.test(x.email)) e.email = t(ui.invalidEmail);
    if (!x.service) e.service = t(ui.required);
    if (x.message.trim().length < 10) e.message = t(ui.required);
    return e;
  };
  const set = (k: keyof Vals) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const nv = { ...v, [k]: e.target.value };
    setV(nv);
    if (err[k]) setErr(validate(nv)); // live re-validate once an error is showing
  };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er = validate(v);
    setErr(er);
    if (Object.keys(er).length) return;
    setState("sending");
    // POSTs to app/api/contact/route.ts — plug your email/CRM service in there.
    fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(v) })
      .then((r) => {
        if (!r.ok) throw new Error("failed");
        setState("done");
      })
      .catch(() => {
        setState("idle");
        setErr({ message: t({ id: "Gagal mengirim. Coba lagi atau hubungi kami via WhatsApp.", en: "Couldn't send. Please retry or reach us on WhatsApp." }) });
      });
  };

  const info = [
    { I: MapPin, k: { id: "Alamat", en: "Address" }, v: company.address, h: undefined },
    { I: Mail, k: { id: "Email", en: "Email" }, v: company.email, h: `mailto:${company.email}` },
    { I: Phone, k: { id: "Telepon", en: "Phone" }, v: company.phone, h: `tel:${company.phone.replace(/\s/g, "")}` },
    { I: Clock, k: { id: "Jam Kerja", en: "Working Hours" }, v: t(company.hours), h: undefined },
  ];
  const socials = [{ i: Instagram, l: "Instagram", h: company.social.instagram }, { i: Linkedin, l: "LinkedIn", h: company.social.linkedin }, { i: Twitter, l: "X", h: company.social.twitter }, { i: Youtube, l: "YouTube", h: company.social.youtube }];

  const fieldErr = (k: keyof Vals) => err[k] && <p id={`${k}-err`} role="alert" className="mt-1.5 pl-1 text-sm text-[#e5484d]">{err[k]}</p>;

  return (
    <>
      <PageHero title={pages.contact.t} sub={pages.contact.s} crumbs={[{ label: t(ui.home), href: "/" }, { label: t(pages.contact.t) }]} />
      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* form */}
          <div className="card relative overflow-hidden p-6 md:p-10">
            <AnimatePresence mode="wait">
              {state !== "done" ? (
                <motion.form key="form" onSubmit={submit} noValidate exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                  <h2 className="font-display text-2xl font-extrabold md:text-3xl">{t(cf.title)}</h2>
                  <p className="mb-8 mt-2">{t(cf.sub)}</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className={`field ${err.name ? "err" : ""}`}>
                      <input id="name" placeholder=" " value={v.name} onChange={set("name")} autoComplete="name" aria-invalid={!!err.name} aria-describedby={err.name ? "name-err" : undefined} />
                      <label htmlFor="name">{t(cf.name)}</label>{fieldErr("name")}
                    </div>
                    <div className={`field ${err.email ? "err" : ""}`}>
                      <input id="email" type="email" placeholder=" " value={v.email} onChange={set("email")} autoComplete="email" aria-invalid={!!err.email} aria-describedby={err.email ? "email-err" : undefined} />
                      <label htmlFor="email">{t(cf.email)}</label>{fieldErr("email")}
                    </div>
                    <div className="field">
                      <input id="phone" type="tel" placeholder=" " value={v.phone} onChange={set("phone")} autoComplete="tel" />
                      <label htmlFor="phone">{t(cf.phone)}</label>
                    </div>
                    <div className={`field ${err.service ? "err" : ""}`}>
                      <select id="service" value={v.service} onChange={set("service")} aria-invalid={!!err.service} aria-describedby={err.service ? "service-err" : undefined}>
                        <option value="" />
                        {services.map((s) => <option key={s.slug} value={s.slug}>{t(s.title)}</option>)}
                      </select>
                      <label htmlFor="service">{t(cf.service)}</label>{fieldErr("service")}
                    </div>
                    <div className={`field md:col-span-2 ${err.message ? "err" : ""}`}>
                      <textarea id="message" placeholder=" " value={v.message} onChange={set("message")} aria-invalid={!!err.message} aria-describedby={err.message ? "message-err" : undefined} />
                      <label htmlFor="message">{t(cf.message)}</label>{fieldErr("message")}
                    </div>
                  </div>
                  <label className="mt-4 flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-dashed border-[var(--border)] p-4 text-sm transition-colors hover:border-electric">
                    <Paperclip size={18} className="text-electric" />
                    <span>{file || t(cf.file)}</span>
                    <input type="file" className="sr-only" onChange={(e) => setFile(e.target.files?.[0]?.name ?? "")} />
                  </label>
                  <div className="mt-8"><Button type="submit">{state === "sending" ? "…" : t(ui.send)}</Button></div>
                </motion.form>
              ) : (
                <motion.div key="done" role="status" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: EASE }} className="grid min-h-[420px] place-items-center text-center">
                  <div>
                    <motion.span initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.15 }} className="relative mx-auto grid h-24 w-24 place-items-center rounded-full bg-electric text-white">
                      <span aria-hidden className="absolute inset-0 animate-pulseRing rounded-full bg-electric" />
                      <Check size={44} strokeWidth={3} className="relative" />
                    </motion.span>
                    <h2 className="mt-8 font-display text-3xl font-extrabold">{t(ui.sent)}</h2>
                    <p className="mx-auto mt-3 max-w-sm">{t(ui.sentSub)}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* info + map */}
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {info.map(({ I, k, v: val, h }, i) => (
                <Reveal key={i} delay={i * 0.07} className={`card p-6 ${i === 0 ? "sm:col-span-2" : ""}`}>
                  <span className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ background: "var(--gradient)" }}><I size={20} /></span>
                  <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-[0.12em]">{t(k)}</h3>
                  {h ? <a href={h} className="mt-1 block break-words font-medium text-head hover:text-electric">{val}</a> : <p className="mt-1 text-head">{val}</p>}
                </Reveal>
              ))}
            </div>
            <Reveal className="overflow-hidden rounded-card border border-[var(--border)]">
              <iframe title="NURGIO — Google Maps" src={company.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[300px] w-full border-0" allowFullScreen />
            </Reveal>
            <div className="flex items-center gap-3">
              {socials.map(({ i: I, l, h }) => (
                <a key={l} href={h} aria-label={l} className="grid h-12 w-12 place-items-center rounded-full border border-[var(--border)] text-head transition-all duration-500 hover:-translate-y-1 hover:border-electric hover:bg-electric hover:text-white"><I size={20} /></a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
