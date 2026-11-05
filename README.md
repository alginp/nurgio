# NURGIO — Company Profile Website

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lenis · Lucide.
Bilingual (ID default / EN), light + dark mode.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Routes

`/` · `/tentang` · `/layanan` · `/layanan/[slug]` · `/portofolio` · `/portofolio/[slug]` · `/tim` · `/karir` · `/blog` · `/blog/[slug]` · `/kontak`
plus `sitemap.xml`, `robots.txt`, and `POST /api/contact`.

## Edit content

Everything lives in **`lib/content.ts`** — every text is `{ id: "...", en: "..." }`.

| Want to change | Edit |
|---|---|
| Company name, city, founded year, address, phone, email, WhatsApp, socials, map | `company` (top of file) |
| Business field / tagline | `company.industry`, `hero` |
| Hero headline, stats, about, why-us, process, FAQ | `hero`, `stats`, `about`, `why`, `process`, `faq` |
| Services (+ detail pages, packages, FAQ) | `services` |
| Portfolio / case studies | `projects` |
| Team, blog posts, jobs, testimonials, clients | `team`, `posts`, `jobs`, `testimonials`, `clients` |

**Placeholders to replace before launch:** company legal name, URL (`company.url`), address/geo/phone/email/WhatsApp,
all statistics, client names, testimonials, team members, certifications, prices, and Unsplash photo IDs (`photo-…`).
Photos fall back to a branded gradient if an image fails to load.

## Colors & fonts

* Palette: CSS variables at the top of `app/globals.css` (`--blue-electric`, `--navy-deep`, `--navy-ink`, `--lavender`, dark-mode overrides under `[data-theme="dark"]`). `tailwind.config.ts` maps them to utilities (`bg-electric`, `text-head`, …).
* Fonts: `app/layout.tsx` (`next/font/google`: Unbounded for display, Plus Jakarta Sans for body).

## Logo

Brand files are in `public/brand/` and `app/` (`icon.png`, `apple-icon.png`, `opengraph-image.png`).
The animated N (preloader, hero, patterns) is built from `n-left.png`, `n-right.png`, `n-band.png` and `letter-*.png`; swap those files to change the logo. `components/Logo.tsx` renders the navbar/footer lockup.

## Contact form

`components/pages/Contact.tsx` posts to `app/api/contact/route.ts`, which currently validates and logs.
Connect it to Resend / SendGrid / Formspree / a Slack webhook there.

## Accessibility & motion

Keyboard-navigable, visible 2px focus rings, ARIA on menu/accordion/carousel, skip link.
`prefers-reduced-motion` disables parallax, marquee, smooth scroll and page transitions.
