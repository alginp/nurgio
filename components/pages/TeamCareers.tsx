"use client";

import { useState } from "react";
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { EASE, useLang } from "@/lib/providers";
import { benefits, culture, depts, jobs, pages, team, ui, type Dept } from "@/lib/content";
import { Button, Heading, Icon, PageHero, Photo, Reveal, SectionHead } from "../ui";
import { Accordion, CTABanner, TeamCard } from "../cards";

export function TeamPage() {
  const { t } = useLang();
  const [d, setD] = useState<"all" | Dept>("all");
  const list = team.filter((m) => d === "all" || m.dept === d);
  const tabs: { key: "all" | Dept; label: string }[] = [{ key: "all", label: t(ui.all) }, ...depts.map((x) => ({ key: x.key, label: t(x.label) }))];
  return (
    <>
      <PageHero title={pages.team.t} sub={pages.team.s} crumbs={[{ label: t(ui.home), href: "/" }, { label: t(pages.team.t) }]} />
      <section className="section">
        <div className="container-site">
          <div role="tablist" aria-label="Departemen" className="mb-12 flex flex-wrap gap-2">
            {tabs.map((tb) => (
              <button key={tb.key} role="tab" aria-selected={d === tb.key} onClick={() => setD(tb.key)}
                className={`min-h-[44px] rounded-full border px-5 text-sm font-semibold transition-all duration-500 ease-nurgio ${d === tb.key ? "border-electric bg-electric text-white shadow-soft" : "border-[var(--border)] text-head hover:border-electric hover:text-electric"}`}>{tb.label}</button>
            ))}
          </div>
          <LayoutGroup>
            <motion.div layout className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-8">
              <AnimatePresence mode="popLayout">
                {list.map((m) => (
                  <motion.div key={m.name} layout initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.5, ease: EASE }}>
                    <TeamCard m={m} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        </div>
      </section>
      <CTABanner />
    </>
  );
}

export function CareersPage() {
  const { t } = useLang();
  const [job, setJob] = useState(jobs[0].id);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const [err, setErr] = useState<Record<string, boolean>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er = { name: !form.name.trim(), email: !/^\S+@\S+\.\S+$/.test(form.email) };
    setErr(er);
    if (!er.name && !er.email) setSent(true); // TODO: connect to your API / email service
  };

  return (
    <>
      <PageHero title={pages.careers.t} sub={pages.careers.s} crumbs={[{ label: t(ui.home), href: "/" }, { label: t(pages.careers.t) }]} />

      <section className="section">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal><span className="label">{t({ id: "BUDAYA KAMI", en: "OUR CULTURE" })}</span></Reveal>
            <Heading className="h2 mt-4" text={t(culture.title)} />
            <Reveal delay={0.15}><p className="mt-6 text-lg">{t(culture.body)}</p></Reveal>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="group"><Photo id="photo-1522071820081-009f0129c71c" alt="" w={700} className="aspect-[4/5] w-full" /></div>
            <div className="group mt-8"><Photo id="photo-1519389950473-47ba0277781c" alt="" w={700} className="aspect-[4/5] w-full" /></div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-site">
          <SectionHead center label={t({ id: "BENEFIT", en: "BENEFITS" })} title={t({ id: "Yang Kami Tawarkan", en: "What We Offer" })} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {benefits.map((b, i) => (
              <Reveal key={i} delay={i * 0.06} className="card group p-6 text-center transition-all duration-500 ease-nurgio hover:-translate-y-2 hover:border-electric hover:shadow-lift">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-soft text-electric transition-colors group-hover:bg-electric group-hover:text-white"><Icon name={b.icon} size={26} /></span>
                <p className="mt-4 text-sm font-semibold text-head">{t(b.t)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="lowongan" className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container-site grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHead label={t({ id: "LOWONGAN", en: "OPEN ROLES" })} title={t({ id: "Posisi yang Dibuka", en: "Open Positions" })} />
            <Accordion
              defaultOpen={0}
              items={jobs.map((j) => ({
                id: `job-${j.id}`, q: t(j.title),
                a: (
                  <div>
                    <p className="text-sm font-semibold text-electric">{t(j.type)}</p>
                    <p className="mt-2">{t(j.d)}</p>
                    <button onClick={() => { setJob(j.id); document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "center" }); }}
                      className="btn btn-primary mt-5 !min-h-[44px]">{t(ui.apply)}</button>
                  </div>
                ),
              }))}
            />
          </div>

          <div id="apply" className="card h-fit p-7 lg:sticky lg:top-28">
            <h3 className="font-display text-xl font-extrabold">{t(ui.apply)}</h3>
            {sent ? (
              <div role="status" className="py-10 text-center">
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 16 }} className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-electric text-white"><Check size={32} /></motion.span>
                <p className="mt-4 font-display text-lg font-bold">{t(ui.sent)}</p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="mt-5 space-y-4">
                <div className="field">
                  <select id="job" value={job} onChange={(e) => setJob(e.target.value)}>{jobs.map((j) => <option key={j.id} value={j.id}>{t(j.title)}</option>)}</select>
                  <label htmlFor="job">{t({ id: "Posisi", en: "Position" })}</label>
                </div>
                <div className={`field ${err.name ? "err" : ""}`}>
                  <input id="cname" placeholder=" " value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} aria-invalid={!!err.name} />
                  <label htmlFor="cname">{t({ id: "Nama lengkap", en: "Full name" })}</label>
                  {err.name && <p className="mt-1 text-sm text-[#e5484d]" role="alert">{t(ui.required)}</p>}
                </div>
                <div className={`field ${err.email ? "err" : ""}`}>
                  <input id="cmail" type="email" placeholder=" " value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} aria-invalid={!!err.email} />
                  <label htmlFor="cmail">Email</label>
                  {err.email && <p className="mt-1 text-sm text-[#e5484d]" role="alert">{t(ui.invalidEmail)}</p>}
                </div>
                <label className="block cursor-pointer rounded-2xl border-2 border-dashed border-[var(--border)] p-4 text-center text-sm transition-colors hover:border-electric">
                  <input type="file" accept=".pdf,.doc,.docx" className="sr-only" />
                  CV / Portfolio (PDF)
                </label>
                <Button type="submit">{t(ui.apply)}</Button>
              </form>
            )}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
