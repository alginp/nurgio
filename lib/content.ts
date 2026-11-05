/**
 * NURGIO — single source of truth for all copy & data.
 * Every user-facing string is { id, en }. Edit here; components never hard-code copy.
 * Placeholder content is marked [PLACEHOLDER] in comments — replace with real data.
 */

export type Lang = "id" | "en";
export type L = { id: string; en: string };
export const tx = (l: L, lang: Lang) => l[lang];

/* ───────────── COMPANY ───────────── */
export const company = {
  name: "NURGIO",
  legal: "PT Nurgio Digital Nusantara", // [PLACEHOLDER]
  industry: { id: "Digital Solutions & Technology", en: "Digital Solutions & Technology" } as L, // ← [BIDANG USAHA]
  city: "Jakarta", // ← [KOTA]
  founded: 2014, // ← [TAHUN]
  url: "https://www.nurgio.co.id", // [PLACEHOLDER]
  email: "halo@nurgio.co.id",
  phone: "+62 21 5090 1234",
  whatsapp: "6281234567890",
  address: "Gedung Nurgio Hub, Jl. Jend. Sudirman Kav. 52, Jakarta Selatan 12190",
  hours: { id: "Senin – Jumat, 09.00 – 17.30 WIB", en: "Mon – Fri, 09:00 – 17:30 WIB (GMT+7)" } as L,
  geo: { lat: -6.2255, lng: 106.8094 },
  mapEmbed: "https://www.google.com/maps?q=-6.2255,106.8094&z=15&output=embed",
  social: { instagram: "#", linkedin: "#", twitter: "#", youtube: "#" },
};

/* ───────────── NAV ───────────── */
export const nav = [
  { href: "/", label: { id: "Beranda", en: "Home" } as L },
  { href: "/tentang", label: { id: "Tentang", en: "About" } as L },
  { href: "/layanan", label: { id: "Layanan", en: "Services" } as L },
  { href: "/portofolio", label: { id: "Portofolio", en: "Portfolio" } as L },
  { href: "/tim", label: { id: "Tim", en: "Team" } as L },
  { href: "/blog", label: { id: "Blog", en: "Blog" } as L },
  { href: "/kontak", label: { id: "Kontak", en: "Contact" } as L },
];

/* ───────────── UI STRINGS ───────────── */
export const ui = {
  cta: { id: "Hubungi Kami", en: "Contact Us" } as L,
  readMore: { id: "Selengkapnya", en: "Learn more" } as L,
  learn: { id: "Pelajari", en: "Explore" } as L,
  viewProject: { id: "Lihat Proyek", en: "View Project" } as L,
  view: { id: "Lihat", en: "View" } as L,
  all: { id: "Semua", en: "All" } as L,
  trustedBy: { id: "Dipercaya oleh", en: "Trusted by" } as L,
  scroll: { id: "Gulir", en: "Scroll" } as L,
  home: { id: "Beranda", en: "Home" } as L,
  send: { id: "Kirim Pesan", en: "Send Message" } as L,
  sent: { id: "Pesan terkirim!", en: "Message sent!" } as L,
  sentSub: { id: "Terima kasih. Tim kami akan membalas dalam 1×24 jam kerja.", en: "Thank you. Our team will reply within 1 business day." } as L,
  required: { id: "Wajib diisi", en: "Required" } as L,
  invalidEmail: { id: "Format email tidak valid", en: "Invalid email format" } as L,
  newsletter: { id: "Dapatkan insight terbaru langsung di inbox Anda.", en: "Get the latest insights straight to your inbox." } as L,
  emailPh: { id: "Alamat email Anda", en: "Your email address" } as L,
  subscribe: { id: "Berlangganan", en: "Subscribe" } as L,
  privacy: { id: "Kebijakan Privasi", en: "Privacy Policy" } as L,
  terms: { id: "Syarat & Ketentuan", en: "Terms" } as L,
  rights: { id: "Hak cipta dilindungi.", en: "All rights reserved." } as L,
  prev: { id: "Sebelumnya", en: "Previous" } as L,
  next: { id: "Berikutnya", en: "Next" } as L,
  search: { id: "Cari…", en: "Search…" } as L,
  nothing: { id: "Tidak ada hasil ditemukan.", en: "No results found." } as L,
  nextProject: { id: "Proyek Berikutnya", en: "Next Project" } as L,
  readTime: { id: "menit baca", en: "min read" } as L,
  apply: { id: "Lamar Sekarang", en: "Apply Now" } as L,
  share: { id: "Bagikan", en: "Share" } as L,
  toc: { id: "Daftar Isi", en: "Contents" } as L,
  related: { id: "Artikel Terkait", en: "Related Articles" } as L,
  whatsapp: { id: "Kirim via WhatsApp", en: "Chat on WhatsApp" } as L,
  backTop: { id: "Kembali ke atas", en: "Back to top" } as L,
};

/* ───────────── HERO ───────────── */
export const hero = {
  chip: { id: "Digital Solutions Partner", en: "Digital Solutions Partner" } as L,
  // Use *asterisks* to highlight a word in electric blue
  title: { id: "Membangun Masa Depan Bisnis Anda, Bersama *NURGIO*", en: "Building Your Business Future, Together with *NURGIO*" } as L,
  sub: {
    id: "Kami merancang dan membangun produk digital yang menghubungkan strategi, desain, dan teknologi, agar bisnis Anda bergerak lebih cepat dan tumbuh berkelanjutan.",
    en: "We design and build digital products that connect strategy, design and technology, so your business moves faster and grows sustainably.",
  } as L,
  primary: { id: "Mulai Konsultasi", en: "Start a Consultation" } as L,
  secondary: { id: "Lihat Portofolio", en: "View Portfolio" } as L,
  cardA: { id: "Proyek Aktif", en: "Active Projects" } as L,
  cardB: { id: "Rating Klien", en: "Client Rating" } as L,
};

export const stats = [
  { value: 10, suffix: "+", label: { id: "Tahun Pengalaman", en: "Years of Experience" } as L },
  { value: 150, suffix: "+", label: { id: "Proyek Selesai", en: "Projects Delivered" } as L },
  { value: 98, suffix: "%", label: { id: "Klien Puas", en: "Client Satisfaction" } as L },
  { value: 60, suffix: "+", label: { id: "Talenta Profesional", en: "Professionals" } as L },
];

/* ───────────── CLIENTS (placeholders) ───────────── */
export const clients = ["Arunika Bank", "Lintasniaga", "Sagara Energi", "Bumantara", "Kopi Senandung", "Medika Prima", "Tirtayasa Group", "Ruang Edu"];

/* ───────────── ABOUT ───────────── */
export const about = {
  label: { id: "TENTANG KAMI", en: "ABOUT US" } as L,
  title: { id: "Mitra Teknologi yang Tumbuh Bersama Bisnis Anda", en: "A Technology Partner That Grows With Your Business" } as L,
  body: {
    id: "Sejak 2014, NURGIO membantu perusahaan dari berbagai skala mengubah ide menjadi produk digital yang bekerja. Kami percaya teknologi terbaik adalah yang terhubung dengan manusia, proses, dan tujuan bisnis, seperti satu pita yang terus mengalir tanpa putus.",
    en: "Since 2014, NURGIO has helped companies of every size turn ideas into digital products that work. We believe the best technology connects people, process and business goals, like one ribbon that flows without a break.",
  } as L,
  strengths: [
    { id: "Tim multidisiplin: strategi, desain, engineering", en: "Multidisciplinary team: strategy, design, engineering" },
    { id: "Proses transparan dengan laporan progres berkala", en: "Transparent process with regular progress reports" },
    { id: "Standar keamanan & kualitas kode terukur", en: "Measurable security and code-quality standards" },
    { id: "Dukungan purna-proyek yang responsif", en: "Responsive post-launch support" },
  ] as L[],
  badge: { id: "Sejak", en: "Since" } as L,
};

/* ───────────── SERVICES ───────────── */
export type Service = {
  slug: string; icon: string; title: L; short: L; desc: L; image: string;
  features: L[]; steps: { t: L; d: L }[]; packages: { name: L; price: L; items: L[]; hot?: boolean }[]; faq: { q: L; a: L }[];
};

const stdSteps = [
  { t: { id: "Discovery", en: "Discovery" }, d: { id: "Memahami tujuan, pengguna, dan batasan proyek.", en: "Understanding goals, users and constraints." } },
  { t: { id: "Desain & Rencana", en: "Design & Plan" }, d: { id: "Wireframe, prototipe, dan roadmap yang disepakati.", en: "Wireframes, prototype and an agreed roadmap." } },
  { t: { id: "Pengembangan", en: "Build" }, d: { id: "Sprint dua mingguan dengan demo rutin.", en: "Two-week sprints with regular demos." } },
  { t: { id: "Uji & Peluncuran", en: "Test & Launch" }, d: { id: "QA menyeluruh, optimasi performa, go-live.", en: "Thorough QA, performance tuning, go-live." } },
] as { t: L; d: L }[];

const stdPackages = (hot = 1): Service["packages"] => [
  { name: { id: "Starter", en: "Starter" }, price: { id: "Mulai Rp 25 jt", en: "From IDR 25M" }, items: [{ id: "Lingkup terdefinisi", en: "Defined scope" }, { id: "1 putaran revisi", en: "1 revision round" }, { id: "Dukungan 1 bulan", en: "1 month support" }] },
  { name: { id: "Growth", en: "Growth" }, price: { id: "Mulai Rp 75 jt", en: "From IDR 75M" }, hot: hot === 1, items: [{ id: "Lingkup fleksibel", en: "Flexible scope" }, { id: "3 putaran revisi", en: "3 revision rounds" }, { id: "Dukungan 3 bulan", en: "3 months support" }] },
  { name: { id: "Enterprise", en: "Enterprise" }, price: { id: "Hubungi kami", en: "Contact us" }, items: [{ id: "Tim khusus", en: "Dedicated team" }, { id: "SLA kustom", en: "Custom SLA" }, { id: "Dukungan 12 bulan", en: "12 months support" }] },
];

export const services: Service[] = [
  {
    slug: "web-development", icon: "Globe",
    title: { id: "Web Development", en: "Web Development" },
    short: { id: "Situs & platform web cepat, aman, dan siap tumbuh.", en: "Fast, secure web platforms built to scale." },
    desc: { id: "Dari company profile hingga platform kompleks, kami membangun web modern dengan performa tinggi, SEO kuat, dan arsitektur yang mudah dikembangkan.", en: "From corporate sites to complex platforms, we build modern web products with top performance, strong SEO and an architecture that is easy to extend." },
    image: "photo-1498050108023-c5249f4df085",
    features: [{ id: "Next.js & React, performa 90+ Lighthouse", en: "Next.js & React, 90+ Lighthouse performance" }, { id: "CMS headless yang mudah dikelola", en: "Easy-to-manage headless CMS" }, { id: "Integrasi API, pembayaran, dan ERP", en: "API, payment and ERP integrations" }, { id: "Keamanan & aksesibilitas AA", en: "Security & AA accessibility" }],
    steps: stdSteps, packages: stdPackages(),
    faq: [{ q: { id: "Berapa lama pengerjaan sebuah website?", en: "How long does a website take?" }, a: { id: "Umumnya 4–10 minggu tergantung kompleksitas dan jumlah halaman.", en: "Typically 4–10 weeks depending on complexity and page count." } }, { q: { id: "Apakah saya bisa mengubah konten sendiri?", en: "Can I edit content myself?" }, a: { id: "Ya. Kami menyiapkan CMS dan pelatihan singkat untuk tim Anda.", en: "Yes. We set up a CMS and a short training for your team." } }],
  },
  {
    slug: "mobile-app", icon: "Smartphone",
    title: { id: "Mobile App", en: "Mobile App" },
    short: { id: "Aplikasi iOS & Android yang mulus dan andal.", en: "Smooth, reliable iOS & Android apps." },
    desc: { id: "Aplikasi native dan cross-platform dengan pengalaman pengguna halus, offline-first, dan siap dirilis ke App Store serta Play Store.", en: "Native and cross-platform apps with a smooth experience, offline-first design, and ready for the App Store and Play Store." },
    image: "photo-1512941937669-90a1b58e7e9c",
    features: [{ id: "React Native & Flutter", en: "React Native & Flutter" }, { id: "Push notification & analytics", en: "Push notifications & analytics" }, { id: "Mode offline & sinkronisasi", en: "Offline mode & sync" }, { id: "Pengelolaan rilis store", en: "Store release management" }],
    steps: stdSteps, packages: stdPackages(),
    faq: [{ q: { id: "iOS dan Android sekaligus?", en: "iOS and Android together?" }, a: { id: "Ya, dengan basis kode bersama sehingga lebih efisien.", en: "Yes, with a shared codebase for efficiency." } }],
  },
  {
    slug: "ui-ux-design", icon: "PenTool",
    title: { id: "UI/UX Design", en: "UI/UX Design" },
    short: { id: "Desain yang memikat dan mudah digunakan.", en: "Design that delights and is easy to use." },
    desc: { id: "Riset pengguna, sistem desain, dan prototipe interaktif yang menerjemahkan strategi bisnis menjadi pengalaman yang intuitif.", en: "User research, design systems and interactive prototypes that translate business strategy into intuitive experiences." },
    image: "photo-1561070791-2526d30994b5",
    features: [{ id: "Riset & pengujian pengguna", en: "User research & testing" }, { id: "Design system terdokumentasi", en: "Documented design system" }, { id: "Prototipe interaktif", en: "Interactive prototypes" }, { id: "Audit aksesibilitas", en: "Accessibility audit" }],
    steps: stdSteps, packages: stdPackages(),
    faq: [{ q: { id: "Apakah mendapat file Figma?", en: "Do I get the Figma files?" }, a: { id: "Ya, seluruh file dan design system diserahkan penuh kepada Anda.", en: "Yes, all files and the design system are handed over to you." } }],
  },
  {
    slug: "digital-marketing", icon: "TrendingUp",
    title: { id: "Digital Marketing", en: "Digital Marketing" },
    short: { id: "Strategi pertumbuhan berbasis data.", en: "Data-driven growth strategy." },
    desc: { id: "SEO, performance ads, dan konten yang terukur, dipantau lewat dashboard transparan agar setiap rupiah berdampak.", en: "SEO, performance ads and measurable content, tracked on a transparent dashboard so every rupiah counts." },
    image: "photo-1460925895917-afdab827c52f",
    features: [{ id: "SEO teknis & konten", en: "Technical SEO & content" }, { id: "Google & Meta Ads", en: "Google & Meta Ads" }, { id: "Analitik & pelaporan", en: "Analytics & reporting" }, { id: "Optimasi konversi (CRO)", en: "Conversion optimisation (CRO)" }],
    steps: stdSteps, packages: stdPackages(),
    faq: [{ q: { id: "Kapan hasil mulai terlihat?", en: "When will results show?" }, a: { id: "Ads dalam hitungan minggu; SEO umumnya 3–6 bulan.", en: "Ads within weeks; SEO typically 3–6 months." } }],
  },
  {
    slug: "it-consulting", icon: "Compass",
    title: { id: "IT Consulting", en: "IT Consulting" },
    short: { id: "Arah teknologi yang tepat untuk bisnis Anda.", en: "The right technology direction for your business." },
    desc: { id: "Transformasi digital, arsitektur sistem, dan roadmap teknologi yang selaras dengan target bisnis dan anggaran.", en: "Digital transformation, system architecture and a technology roadmap aligned with business goals and budget." },
    image: "photo-1552664730-d307ca884978",
    features: [{ id: "Audit sistem & keamanan", en: "System & security audit" }, { id: "Arsitektur cloud", en: "Cloud architecture" }, { id: "Roadmap transformasi digital", en: "Digital transformation roadmap" }, { id: "Pendampingan tim internal", en: "Internal team coaching" }],
    steps: stdSteps, packages: stdPackages(),
    faq: [{ q: { id: "Apakah ada sesi awal gratis?", en: "Is there a free first session?" }, a: { id: "Ya, konsultasi 45 menit tanpa biaya.", en: "Yes, a free 45-minute consultation." } }],
  },
  {
    slug: "maintenance-support", icon: "ShieldCheck",
    title: { id: "Maintenance & Support", en: "Maintenance & Support" },
    short: { id: "Sistem Anda tetap prima, 24/7.", en: "Keep your systems healthy, 24/7." },
    desc: { id: "Pemantauan, pembaruan keamanan, dan bantuan teknis dengan SLA jelas supaya produk digital Anda selalu stabil.", en: "Monitoring, security updates and technical help with clear SLAs so your digital products stay stable." },
    image: "photo-1518770660439-4636190af475",
    features: [{ id: "Monitoring uptime 24/7", en: "24/7 uptime monitoring" }, { id: "Patch keamanan berkala", en: "Regular security patches" }, { id: "Backup & pemulihan", en: "Backup & recovery" }, { id: "Helpdesk dengan SLA", en: "Helpdesk with SLA" }],
    steps: stdSteps, packages: stdPackages(),
    faq: [{ q: { id: "Bisakah mendukung sistem buatan vendor lain?", en: "Can you support systems built by others?" }, a: { id: "Bisa, setelah audit awal.", en: "Yes, after an initial audit." } }],
  },
];

export const servicesSection = {
  label: { id: "LAYANAN KAMI", en: "OUR SERVICES" } as L,
  title: { id: "Solusi Digital End-to-End", en: "End-to-End Digital Solutions" } as L,
  intro: { id: "Satu tim untuk seluruh perjalanan produk digital Anda, dari ide hingga operasional.", en: "One team for your entire digital product journey, from idea to operations." } as L,
};

/* ───────────── WHY US ───────────── */
export const why = {
  label: { id: "KENAPA NURGIO", en: "WHY NURGIO" } as L,
  title: { id: "Alasan Mereka Memilih Kami", en: "Why Clients Choose Us" } as L,
  sub: { id: "Empat nilai yang kami pegang di setiap proyek.", en: "Four values we hold on every project." } as L,
  items: [
    { t: { id: "Inovasi", en: "Innovation" }, d: { id: "Kami terus menguji teknologi dan pendekatan baru agar solusi Anda selalu selangkah di depan.", en: "We keep testing new technology and approaches so your solution stays a step ahead." } },
    { t: { id: "Kualitas", en: "Quality" }, d: { id: "Code review, pengujian otomatis, dan standar desain ketat di setiap rilis.", en: "Code review, automated testing and strict design standards on every release." } },
    { t: { id: "Transparansi", en: "Transparency" }, d: { id: "Anggaran, progres, dan risiko dibahas terbuka lewat laporan dan demo rutin.", en: "Budget, progress and risks discussed openly through regular reports and demos." } },
    { t: { id: "Dukungan", en: "Support" }, d: { id: "Kami tetap mendampingi setelah peluncuran dengan SLA yang jelas.", en: "We stay with you after launch with a clear SLA." } },
  ] as { t: L; d: L }[],
};

/* ───────────── PROCESS ───────────── */
export const process = {
  label: { id: "CARA KERJA", en: "HOW WE WORK" } as L,
  title: { id: "Proses yang Mengalir, Hasil yang Terukur", en: "A Flowing Process, Measurable Results" } as L,
  steps: [
    { t: { id: "Discovery", en: "Discovery" }, d: { id: "Menggali tujuan, pengguna, dan peluang.", en: "Exploring goals, users and opportunities." } },
    { t: { id: "Strategy", en: "Strategy" }, d: { id: "Menyusun roadmap, arsitektur, dan prioritas.", en: "Shaping roadmap, architecture and priorities." } },
    { t: { id: "Execution", en: "Execution" }, d: { id: "Desain dan pengembangan dalam sprint singkat.", en: "Design and development in short sprints." } },
    { t: { id: "Delivery", en: "Delivery" }, d: { id: "Pengujian, peluncuran, dan serah terima.", en: "Testing, launch and handover." } },
    { t: { id: "Support", en: "Support" }, d: { id: "Pemantauan dan penyempurnaan berkelanjutan.", en: "Ongoing monitoring and refinement." } },
  ] as { t: L; d: L }[],
};

/* ───────────── PORTFOLIO ───────────── */
export type Cat = "web" | "mobile" | "uiux";
export const categories: { key: Cat; label: L }[] = [
  { key: "web", label: { id: "Web", en: "Web" } },
  { key: "mobile", label: { id: "Mobile", en: "Mobile" } },
  { key: "uiux", label: { id: "UI/UX", en: "UI/UX" } },
];
export type Project = {
  slug: string; title: L; client: string; cat: Cat; year: number; image: string; summary: L;
  challenge: L; solution: L; results: { v: string; l: L }[]; tools: string[]; quote: { text: L; name: string; role: string };
};
export const projects: Project[] = [
  { slug: "arunika-mobile-banking", title: { id: "Arunika Mobile Banking", en: "Arunika Mobile Banking" }, client: "Arunika Bank", cat: "mobile", year: 2025, image: "photo-1563986768609-322da13575f3",
    summary: { id: "Super-app perbankan dengan onboarding digital 3 menit.", en: "A banking super-app with 3-minute digital onboarding." },
    challenge: { id: "Proses pembukaan rekening memakan waktu lama dan tingkat drop-off mencapai 62%.", en: "Account opening was slow and drop-off reached 62%." },
    solution: { id: "Kami merancang ulang alur dengan eKYC, biometrik, dan desain modular yang konsisten.", en: "We redesigned the flow with eKYC, biometrics and a consistent modular design." },
    results: [{ v: "3 min", l: { id: "Waktu onboarding", en: "Onboarding time" } }, { v: "+184%", l: { id: "Pengguna aktif", en: "Active users" } }, { v: "4.8★", l: { id: "Rating store", en: "Store rating" } }],
    tools: ["React Native", "Node.js", "PostgreSQL", "AWS"], quote: { text: { id: "NURGIO memahami regulasi dan pengguna kami sekaligus.", en: "NURGIO understood both our regulations and our users." }, name: "Dewi Anggraini", role: "Head of Digital, Arunika Bank" } },
  { slug: "lintasniaga-logistics", title: { id: "Lintasniaga Logistics Portal", en: "Lintasniaga Logistics Portal" }, client: "Lintasniaga", cat: "web", year: 2025, image: "photo-1494412574643-ff11b0a5c1c3",
    summary: { id: "Portal pelacakan & manajemen armada real-time.", en: "A real-time tracking and fleet-management portal." },
    challenge: { id: "Data armada tersebar di banyak sistem sehingga keputusan terlambat.", en: "Fleet data was scattered across systems, delaying decisions." },
    solution: { id: "Dashboard terpadu dengan peta live, alert otomatis, dan API ke sistem gudang.", en: "A unified dashboard with live map, automatic alerts and APIs to warehouse systems." },
    results: [{ v: "-37%", l: { id: "Keterlambatan kirim", en: "Late deliveries" } }, { v: "12 jam", l: { id: "Hemat/minggu per admin", en: "Saved/week per admin" } }, { v: "99.9%", l: { id: "Uptime", en: "Uptime" } }],
    tools: ["Next.js", "Mapbox", "Go", "Redis"], quote: { text: { id: "Visibilitas armada kami berubah total.", en: "Our fleet visibility changed completely." }, name: "Rudi Hartono", role: "COO, Lintasniaga" } },
  { slug: "sagara-energi-brand", title: { id: "Sagara Energi Brand System", en: "Sagara Energi Brand System" }, client: "Sagara Energi", cat: "uiux", year: 2024, image: "photo-1559028012-481c04fa702d",
    summary: { id: "Design system lintas produk untuk perusahaan energi terbarukan.", en: "A cross-product design system for a renewable-energy company." },
    challenge: { id: "Antarmuka tiap divisi tidak seragam dan lambat dikembangkan.", en: "Each division's UI was inconsistent and slow to build." },
    solution: { id: "Kami membangun design system 120+ komponen dengan token dan dokumentasi.", en: "We built a 120+ component design system with tokens and documentation." },
    results: [{ v: "120+", l: { id: "Komponen", en: "Components" } }, { v: "-45%", l: { id: "Waktu desain", en: "Design time" } }, { v: "6", l: { id: "Produk terhubung", en: "Products unified" } }],
    tools: ["Figma", "Storybook", "Tokens Studio"], quote: { text: { id: "Tim kami kini bicara dalam satu bahasa desain.", en: "Our teams now speak one design language." }, name: "Maya Kusuma", role: "VP Product, Sagara Energi" } },
  { slug: "bumantara-erp", title: { id: "Bumantara ERP Cloud", en: "Bumantara ERP Cloud" }, client: "Bumantara", cat: "web", year: 2024, image: "photo-1551288049-bebda4e38f71",
    summary: { id: "ERP berbasis cloud untuk 14 anak usaha.", en: "A cloud ERP for 14 subsidiaries." },
    challenge: { id: "Laporan keuangan konsolidasi memakan 3 minggu tiap bulan.", en: "Consolidated reporting took 3 weeks every month." },
    solution: { id: "Platform ERP modular dengan konsolidasi otomatis dan kontrol akses ketat.", en: "A modular ERP with automatic consolidation and strict access control." },
    results: [{ v: "3 hari", l: { id: "Penutupan buku", en: "Month-end close" } }, { v: "14", l: { id: "Entitas terhubung", en: "Entities connected" } }, { v: "0", l: { id: "Insiden keamanan", en: "Security incidents" } }],
    tools: ["React", "NestJS", "PostgreSQL", "Kubernetes"], quote: { text: { id: "Penutupan buku kini jadi rutinitas, bukan krisis.", en: "Month-end is now routine, not a crisis." }, name: "Hendra Wijaya", role: "CFO, Bumantara" } },
  { slug: "kopi-senandung-app", title: { id: "Kopi Senandung Loyalty App", en: "Kopi Senandung Loyalty App" }, client: "Kopi Senandung", cat: "mobile", year: 2024, image: "photo-1447933601403-0c6688de566e",
    summary: { id: "Aplikasi pesan-antar & loyalti untuk 80 gerai.", en: "An order-ahead and loyalty app for 80 outlets." },
    challenge: { id: "Pelanggan setia tidak terukur dan antrean gerai panjang.", en: "Loyal customers weren't measured and queues were long." },
    solution: { id: "Aplikasi pesan di muka dengan poin, promo personal, dan integrasi kasir.", en: "An order-ahead app with points, personalised promos and POS integration." },
    results: [{ v: "250K", l: { id: "Unduhan", en: "Downloads" } }, { v: "+41%", l: { id: "Transaksi berulang", en: "Repeat orders" } }, { v: "-28%", l: { id: "Waktu antre", en: "Queue time" } }],
    tools: ["Flutter", "Firebase", "Midtrans"], quote: { text: { id: "Pelanggan kami kini memesan sebelum tiba di gerai.", en: "Customers now order before they reach the shop." }, name: "Sari Pratiwi", role: "Marketing Director, Kopi Senandung" } },
  { slug: "medika-prima-telehealth", title: { id: "Medika Prima Telehealth", en: "Medika Prima Telehealth" }, client: "Medika Prima", cat: "uiux", year: 2023, image: "photo-1576091160399-112ba8d25d1d",
    summary: { id: "Pengalaman konsultasi dokter online yang menenangkan.", en: "A calming online doctor-consultation experience." },
    challenge: { id: "Pasien lansia kesulitan memakai aplikasi telemedis yang ada.", en: "Elderly patients struggled with existing telehealth apps." },
    solution: { id: "Riset lapangan dan desain aksesibel dengan alur tiga langkah.", en: "Field research and accessible design with a three-step flow." },
    results: [{ v: "AAA", l: { id: "Kontras aksesibilitas", en: "Contrast rating" } }, { v: "+63%", l: { id: "Konsultasi selesai", en: "Completed consults" } }, { v: "4.9★", l: { id: "Kepuasan pasien", en: "Patient satisfaction" } }],
    tools: ["Figma", "Maze", "WebRTC"], quote: { text: { id: "Orang tua kami akhirnya nyaman berkonsultasi online.", en: "Our parents finally feel comfortable consulting online." }, name: "dr. Anita Salim", role: "Medical Director, Medika Prima" } },
];

export const portfolioSection = {
  label: { id: "PORTOFOLIO", en: "PORTFOLIO" } as L,
  title: { id: "Karya Pilihan Kami", en: "Selected Work" } as L,
};

/* ───────────── STATS BAND ───────────── */
export const band = [
  { value: 150, suffix: "+", label: { id: "Proyek Selesai", en: "Projects Delivered" } as L },
  { value: 80, suffix: "+", label: { id: "Klien Aktif", en: "Active Clients" } as L },
  { value: 12, suffix: "", label: { id: "Penghargaan", en: "Awards" } as L },
  { value: 24, suffix: "/7", label: { id: "Dukungan Teknis", en: "Technical Support" } as L },
];

/* ───────────── TESTIMONIALS ───────────── */
export const testimonials = [
  { name: "Dewi Anggraini", role: "Head of Digital", company: "Arunika Bank", photo: "photo-1580489944761-15a19d654956", rating: 5,
    text: { id: "NURGIO bukan sekadar vendor. Mereka berpikir seperti bagian dari tim kami dan menjaga kualitas sampai detail terkecil.", en: "NURGIO isn't just a vendor. They think like part of our team and protect quality down to the smallest detail." } as L },
  { name: "Rudi Hartono", role: "COO", company: "Lintasniaga", photo: "photo-1560250097-0b93528c311a", rating: 5,
    text: { id: "Proyek selesai tepat waktu dengan laporan progres yang jelas. Dampaknya ke operasional langsung terasa.", en: "The project landed on time with clear progress reports. The operational impact was immediate." } as L },
  { name: "Maya Kusuma", role: "VP Product", company: "Sagara Energi", photo: "photo-1573497019940-1c28c88b4f3e", rating: 5,
    text: { id: "Design system yang mereka bangun mempercepat seluruh tim produk kami dan terasa sangat konsisten.", en: "The design system they built sped up our whole product team and feels deeply consistent." } as L },
  { name: "Hendra Wijaya", role: "CFO", company: "Bumantara", photo: "photo-1507003211169-0a1dd7228f2d", rating: 5,
    text: { id: "Komunikasi transparan, solusi teknis matang. Kami tidak ragu memperpanjang kerja sama.", en: "Transparent communication and mature technical solutions. We didn't hesitate to extend our partnership." } as L },
];

/* ───────────── TEAM ───────────── */
export type Dept = "leadership" | "design" | "engineering" | "growth";
export const depts: { key: Dept; label: L }[] = [
  { key: "leadership", label: { id: "Pimpinan", en: "Leadership" } },
  { key: "design", label: { id: "Desain", en: "Design" } },
  { key: "engineering", label: { id: "Engineering", en: "Engineering" } },
  { key: "growth", label: { id: "Growth", en: "Growth" } },
];
export const team: { name: string; role: L; dept: Dept; photo: string }[] = [
  { name: "Nur Gio Pratama", role: { id: "Founder & CEO", en: "Founder & CEO" }, dept: "leadership", photo: "photo-1560250097-0b93528c311a" },
  { name: "Amanda Kirana", role: { id: "Chief Design Officer", en: "Chief Design Officer" }, dept: "design", photo: "photo-1494790108377-be9c29b29330" },
  { name: "Bagas Wicaksono", role: { id: "CTO", en: "CTO" }, dept: "engineering", photo: "photo-1507003211169-0a1dd7228f2d" },
  { name: "Citra Maharani", role: { id: "Head of Growth", en: "Head of Growth" }, dept: "growth", photo: "photo-1580489944761-15a19d654956" },
  { name: "Dimas Aryo", role: { id: "Lead Engineer", en: "Lead Engineer" }, dept: "engineering", photo: "photo-1472099645785-5658abf4ff4e" },
  { name: "Elisa Putri", role: { id: "Senior UX Designer", en: "Senior UX Designer" }, dept: "design", photo: "photo-1573497019940-1c28c88b4f3e" },
  { name: "Farhan Alamsyah", role: { id: "Project Director", en: "Project Director" }, dept: "leadership", photo: "photo-1519085360753-af0119f7cbe7" },
  { name: "Gita Ramadhani", role: { id: "SEO & Content Lead", en: "SEO & Content Lead" }, dept: "growth", photo: "photo-1438761681033-6461ffad8d80" },
];

/* ───────────── BLOG ───────────── */
export const blogCats: { key: string; label: L }[] = [
  { key: "tech", label: { id: "Teknologi", en: "Technology" } },
  { key: "design", label: { id: "Desain", en: "Design" } },
  { key: "business", label: { id: "Bisnis", en: "Business" } },
];
export type Post = { slug: string; cat: string; title: L; excerpt: L; date: string; read: number; image: string; author: string; body: { h: L; p: L }[] };
const lorem = (id: string, en: string) => ({ id, en });
export const posts: Post[] = [
  { slug: "transformasi-digital-umkm", cat: "business", date: "2026-10-12", read: 6, image: "photo-1553877522-43269d4ea984", author: "Citra Maharani",
    title: { id: "Transformasi Digital untuk UMKM: Mulai dari Mana?", en: "Digital Transformation for SMEs: Where to Start?" },
    excerpt: { id: "Langkah praktis memulai digitalisasi tanpa membebani anggaran.", en: "Practical steps to start digitising without straining your budget." },
    body: [
      { h: lorem("Mulai dari masalah, bukan alat", "Start with the problem, not the tool"), p: lorem("Banyak inisiatif digital gagal karena dimulai dari teknologi. Mulailah dengan satu proses yang paling memakan waktu dan ukur dampaknya.", "Many digital initiatives fail because they start from technology. Begin with the one process that costs the most time and measure its impact.") },
      { h: lorem("Bangun fondasi data", "Build a data foundation"), p: lorem("Data yang rapi membuat keputusan lebih cepat. Pastikan penjualan, stok, dan pelanggan tercatat di satu tempat.", "Clean data makes decisions faster. Make sure sales, stock and customers live in one place.") },
      { h: lorem("Iterasi kecil, hasil cepat", "Small iterations, fast results"), p: lorem("Rilis versi sederhana dalam 6 minggu, pelajari perilaku pengguna, lalu kembangkan.", "Ship a simple version in 6 weeks, learn from user behaviour, then expand.") },
    ] },
  { slug: "design-system-skala-besar", cat: "design", date: "2026-09-28", read: 5, image: "photo-1561070791-2526d30994b5", author: "Amanda Kirana",
    title: { id: "Membangun Design System yang Bertahan Lama", en: "Building a Design System That Lasts" },
    excerpt: { id: "Token, komponen, dan tata kelola: tiga pilar design system sehat.", en: "Tokens, components and governance: three pillars of a healthy design system." },
    body: [
      { h: lorem("Token sebagai bahasa bersama", "Tokens as a shared language"), p: lorem("Warna, tipografi, dan jarak yang didefinisikan sebagai token menjembatani desainer dan engineer.", "Colour, type and spacing defined as tokens bridge designers and engineers.") },
      { h: lorem("Komponen yang bisa dikomposisi", "Composable components"), p: lorem("Komponen kecil yang fokus lebih mudah dipakai ulang daripada komponen raksasa serba bisa.", "Small, focused components are easier to reuse than giant do-everything ones.") },
      { h: lorem("Tata kelola ringan", "Lightweight governance"), p: lorem("Tetapkan siapa yang boleh mengubah apa, dan catat setiap perubahan.", "Decide who can change what, and record every change.") },
    ] },
  { slug: "nextjs-performa-90", cat: "tech", date: "2026-09-10", read: 7, image: "photo-1555066931-4365d14bab8c", author: "Bagas Wicaksono",
    title: { id: "Next.js: Mencapai Skor Lighthouse 90+", en: "Next.js: Reaching a 90+ Lighthouse Score" },
    excerpt: { id: "Optimasi gambar, font, dan JavaScript yang benar-benar berdampak.", en: "Image, font and JavaScript optimisations that actually matter." },
    body: [
      { h: lorem("Gambar & font", "Images & fonts"), p: lorem("Gunakan format AVIF/WebP, ukuran responsif, dan subset font untuk memangkas ratusan KB.", "Use AVIF/WebP, responsive sizes and font subsetting to cut hundreds of KB.") },
      { h: lorem("Kurangi JavaScript", "Ship less JavaScript"), p: lorem("Pindahkan logika ke server component dan lazy-load bagian interaktif yang berat.", "Move logic to server components and lazy-load heavy interactive parts.") },
      { h: lorem("Cegah layout shift", "Prevent layout shift"), p: lorem("Selalu tetapkan dimensi media dan cadangkan ruang untuk konten dinamis.", "Always set media dimensions and reserve space for dynamic content.") },
    ] },
  { slug: "ux-fintech-kepercayaan", cat: "design", date: "2026-08-19", read: 4, image: "photo-1551650975-87deedd944c3", author: "Elisa Putri",
    title: { id: "UX Fintech: Merancang Rasa Percaya", en: "Fintech UX: Designing for Trust" },
    excerpt: { id: "Detail kecil yang membuat pengguna nyaman memindahkan uang.", en: "Small details that make users comfortable moving money." },
    body: [
      { h: lorem("Kejelasan di atas segalanya", "Clarity above all"), p: lorem("Tampilkan biaya, status, dan langkah berikutnya secara eksplisit.", "Show fees, status and next steps explicitly.") },
      { h: lorem("Umpan balik instan", "Instant feedback"), p: lorem("Setiap aksi finansial perlu konfirmasi visual yang jelas.", "Every financial action needs clear visual confirmation.") },
    ] },
  { slug: "keamanan-aplikasi-web", cat: "tech", date: "2026-07-30", read: 8, image: "photo-1563013544-824ae1b704d3", author: "Dimas Aryo",
    title: { id: "Checklist Keamanan Aplikasi Web 2026", en: "2026 Web Application Security Checklist" },
    excerpt: { id: "Sepuluh pemeriksaan wajib sebelum aplikasi Anda go-live.", en: "Ten essential checks before your app goes live." },
    body: [
      { h: lorem("Autentikasi & sesi", "Authentication & sessions"), p: lorem("Terapkan MFA, rotasi token, dan batas percobaan login.", "Enforce MFA, token rotation and login attempt limits.") },
      { h: lorem("Validasi input", "Input validation"), p: lorem("Jangan percaya data dari klien; validasi dan sanitasi di server.", "Never trust client data; validate and sanitise on the server.") },
    ] },
  { slug: "roi-website-perusahaan", cat: "business", date: "2026-07-05", read: 5, image: "photo-1454165804606-c3d57bc86b40", author: "Farhan Alamsyah",
    title: { id: "Mengukur ROI Website Perusahaan", en: "Measuring the ROI of a Corporate Website" },
    excerpt: { id: "Metrik yang relevan untuk menilai kontribusi website pada bisnis.", en: "Metrics that matter for judging a website's contribution to business." },
    body: [
      { h: lorem("Tentukan tujuan konversi", "Define conversion goals"), p: lorem("Lead, permintaan demo, atau unduhan: tentukan satu tujuan utama per halaman.", "Leads, demo requests or downloads: set one primary goal per page.") },
      { h: lorem("Pantau secara konsisten", "Track consistently"), p: lorem("Gunakan dashboard bulanan dan bandingkan dengan target kuartalan.", "Use a monthly dashboard and compare against quarterly targets.") },
    ] },
];

/* ───────────── FAQ ───────────── */
export const faq = {
  label: { id: "FAQ", en: "FAQ" } as L,
  title: { id: "Pertanyaan yang Sering Diajukan", en: "Frequently Asked Questions" } as L,
  prompt: { id: "Tidak menemukan jawaban? Tim kami siap membantu.", en: "Can't find your answer? Our team is happy to help." } as L,
  items: [
    { q: { id: "Berapa lama proses pengerjaan proyek?", en: "How long does a project take?" }, a: { id: "Tergantung lingkup. Website biasanya 4–10 minggu, aplikasi mobile 3–6 bulan. Estimasi pasti kami berikan setelah sesi discovery.", en: "Depends on scope. Websites usually take 4–10 weeks, mobile apps 3–6 months. We give a firm estimate after discovery." } },
    { q: { id: "Bagaimana model harga Anda?", en: "How is pricing structured?" }, a: { id: "Kami menawarkan harga tetap per fase atau time-and-material. Semua dijelaskan di proposal yang transparan.", en: "We offer fixed price per phase or time-and-material, all laid out in a transparent proposal." } },
    { q: { id: "Apakah kode sumber menjadi milik kami?", en: "Do we own the source code?" }, a: { id: "Ya. Seluruh kode dan aset diserahkan penuh setelah pembayaran final.", en: "Yes. All code and assets are fully handed over after final payment." } },
    { q: { id: "Apakah ada dukungan setelah peluncuran?", en: "Is there support after launch?" }, a: { id: "Ada. Setiap proyek mencakup masa garansi, dan tersedia paket maintenance dengan SLA.", en: "Yes. Every project includes a warranty period, with maintenance plans and SLAs available." } },
    { q: { id: "Bagaimana kami memantau progres?", en: "How do we track progress?" }, a: { id: "Anda mendapat akses papan proyek, demo dua mingguan, dan laporan ringkas tiap sprint.", en: "You get access to the project board, bi-weekly demos and a short report each sprint." } },
    { q: { id: "Apakah NURGIO melayani klien di luar Jakarta?", en: "Do you serve clients outside Jakarta?" }, a: { id: "Tentu. Kami bekerja jarak jauh dengan klien di seluruh Indonesia dan Asia Tenggara.", en: "Absolutely. We work remotely with clients across Indonesia and Southeast Asia." } },
  ] as { q: L; a: L }[],
};

/* ───────────── CTA ───────────── */
export const ctaBanner = {
  title: { id: "Siap Mewujudkan Proyek Anda?", en: "Ready to Bring Your Project to Life?" } as L,
  text: { id: "Ceritakan kebutuhan Anda. Kami akan membalas dengan rekomendasi awal dalam 1×24 jam.", en: "Tell us what you need. We'll reply with an initial recommendation within one business day." } as L,
};

/* ───────────── ABOUT PAGE ───────────── */
export const history = [
  { y: "2014", t: { id: "NURGIO berdiri", en: "NURGIO is founded" } as L, d: { id: "Dimulai dari tim 4 orang di Jakarta Selatan.", en: "Started as a team of 4 in South Jakarta." } as L },
  { y: "2017", t: { id: "Klien korporasi pertama", en: "First enterprise client" } as L, d: { id: "Meluncurkan platform untuk grup ritel nasional.", en: "Launched a platform for a national retail group." } as L },
  { y: "2019", t: { id: "Studio desain dibuka", en: "Design studio opens" } as L, d: { id: "Divisi UI/UX dan riset pengguna terbentuk.", en: "UI/UX and user-research division formed." } as L },
  { y: "2021", t: { id: "Sertifikasi ISO 27001", en: "ISO 27001 certified" } as L, d: { id: "Standar keamanan informasi diterapkan di seluruh proyek.", en: "Information security standard applied to all projects." } as L },
  { y: "2024", t: { id: "50+ talenta", en: "50+ professionals" } as L, d: { id: "Ekspansi tim engineering dan growth.", en: "Engineering and growth teams expanded." } as L },
  { y: "2026", t: { id: "Menuju regional", en: "Going regional" } as L, d: { id: "Melayani klien di Asia Tenggara.", en: "Serving clients across Southeast Asia." } as L },
];
export const vision = {
  vision: { t: { id: "Visi", en: "Vision" } as L, d: { id: "Menjadi mitra teknologi paling tepercaya di Asia Tenggara dalam menghubungkan bisnis dengan masa depan digital.", en: "To be the most trusted technology partner in Southeast Asia, connecting businesses to a digital future." } as L },
  mission: { t: { id: "Misi", en: "Mission" } as L, items: [
    { id: "Menghadirkan produk digital berkualitas dan berdampak.", en: "Deliver high-quality, high-impact digital products." },
    { id: "Membangun hubungan jangka panjang berbasis transparansi.", en: "Build long-term relationships grounded in transparency." },
    { id: "Mengembangkan talenta dan budaya belajar berkelanjutan.", en: "Grow talent and a culture of continuous learning." },
  ] as L[] },
};
export const values = [
  { icon: "Lightbulb", t: { id: "Inovasi", en: "Innovation" } as L, d: { id: "Berani mencoba dan belajar cepat.", en: "Dare to try and learn fast." } as L },
  { icon: "Gem", t: { id: "Kualitas", en: "Quality" } as L, d: { id: "Detail kecil, dampak besar.", en: "Small details, big impact." } as L },
  { icon: "Eye", t: { id: "Transparansi", en: "Transparency" } as L, d: { id: "Terbuka dalam proses dan angka.", en: "Open about process and numbers." } as L },
  { icon: "Handshake", t: { id: "Kolaborasi", en: "Collaboration" } as L, d: { id: "Klien adalah bagian dari tim.", en: "Clients are part of the team." } as L },
  { icon: "Leaf", t: { id: "Keberlanjutan", en: "Sustainability" } as L, d: { id: "Solusi yang tahan lama.", en: "Solutions built to last." } as L },
  { icon: "Zap", t: { id: "Ketangkasan", en: "Agility" } as L, d: { id: "Cepat beradaptasi, tetap terarah.", en: "Adapt fast, stay on course." } as L },
];
export const awards = [
  { t: "ISO 27001:2022", d: { id: "Manajemen Keamanan Informasi", en: "Information Security Management" } as L },
  { t: "ISO 9001:2015", d: { id: "Manajemen Mutu", en: "Quality Management" } as L },
  { t: "Top Digital Agency 2025", d: { id: "Penghargaan Industri (placeholder)", en: "Industry award (placeholder)" } as L },
  { t: "Google Partner", d: { id: "Status Mitra Resmi (placeholder)", en: "Official partner status (placeholder)" } as L },
];

/* ───────────── CAREERS ───────────── */
export const culture = {
  title: { id: "Tumbuh Bersama di NURGIO", en: "Grow Together at NURGIO" } as L,
  body: { id: "Kami membangun lingkungan tempat orang-orang berbakat belajar, bereksperimen, dan menghasilkan karya yang mereka banggakan.", en: "We build an environment where talented people learn, experiment and make work they're proud of." } as L,
};
export const benefits = [
  { icon: "HeartPulse", t: { id: "Asuransi Kesehatan", en: "Health Insurance" } as L },
  { icon: "GraduationCap", t: { id: "Anggaran Belajar", en: "Learning Budget" } as L },
  { icon: "Laptop", t: { id: "Kerja Hibrida", en: "Hybrid Work" } as L },
  { icon: "Plane", t: { id: "Cuti Fleksibel", en: "Flexible Leave" } as L },
  { icon: "Coffee", t: { id: "Pantry & Makan Siang", en: "Pantry & Lunch" } as L },
  { icon: "Trophy", t: { id: "Bonus Kinerja", en: "Performance Bonus" } as L },
];
export const jobs = [
  { id: "fe", title: { id: "Frontend Engineer (Next.js)", en: "Frontend Engineer (Next.js)" } as L, type: { id: "Penuh waktu · Jakarta / Hibrida", en: "Full-time · Jakarta / Hybrid" } as L,
    d: { id: "Membangun antarmuka performa tinggi dengan React, TypeScript, dan Tailwind. Pengalaman 3+ tahun.", en: "Build high-performance interfaces with React, TypeScript and Tailwind. 3+ years' experience." } as L },
  { id: "ux", title: { id: "Senior UI/UX Designer", en: "Senior UI/UX Designer" } as L, type: { id: "Penuh waktu · Jakarta", en: "Full-time · Jakarta" } as L,
    d: { id: "Memimpin riset dan desain produk lintas platform. Mahir Figma dan design system.", en: "Lead research and cross-platform product design. Strong in Figma and design systems." } as L },
  { id: "pm", title: { id: "Project Manager", en: "Project Manager" } as L, type: { id: "Penuh waktu · Jakarta", en: "Full-time · Jakarta" } as L,
    d: { id: "Mengelola proyek digital end-to-end dengan metodologi agile dan komunikasi klien yang kuat.", en: "Manage end-to-end digital projects with agile methods and strong client communication." } as L },
  { id: "seo", title: { id: "SEO & Content Specialist", en: "SEO & Content Specialist" } as L, type: { id: "Kontrak · Remote", en: "Contract · Remote" } as L,
    d: { id: "Merancang strategi organik dan konten yang mendatangkan lead berkualitas.", en: "Craft organic and content strategies that bring in quality leads." } as L },
];

/* ───────────── CONTACT ───────────── */
export const contactForm = {
  title: { id: "Mari Ngobrol", en: "Let's Talk" } as L,
  sub: { id: "Isi formulir berikut dan kami akan menghubungi Anda secepatnya.", en: "Fill in the form and we'll get back to you shortly." } as L,
  name: { id: "Nama lengkap", en: "Full name" } as L,
  email: { id: "Email", en: "Email" } as L,
  phone: { id: "Telepon", en: "Phone" } as L,
  service: { id: "Layanan", en: "Service" } as L,
  message: { id: "Pesan", en: "Message" } as L,
  file: { id: "Lampiran (opsional)", en: "Attachment (optional)" } as L,
  choose: { id: "Pilih layanan", en: "Choose a service" } as L,
};

/* ───────────── PAGE HERO COPY ───────────── */
export const pages = {
  about: { t: { id: "Tentang NURGIO", en: "About NURGIO" } as L, s: { id: "Kisah, nilai, dan orang-orang di balik pita yang terhubung.", en: "The story, values and people behind the connected ribbon." } as L },
  services: { t: { id: "Layanan Kami", en: "Our Services" } as L, s: { id: "Solusi digital menyeluruh untuk setiap tahap pertumbuhan.", en: "End-to-end digital solutions for every stage of growth." } as L },
  portfolio: { t: { id: "Portofolio", en: "Portfolio" } as L, s: { id: "Proyek-proyek yang kami banggakan dan dampaknya.", en: "Projects we're proud of and the impact they made." } as L },
  team: { t: { id: "Tim Kami", en: "Our Team" } as L, s: { id: "Orang-orang kreatif di balik setiap produk.", en: "The creative people behind every product." } as L },
  careers: { t: { id: "Karir", en: "Careers" } as L, s: { id: "Bergabung dan bangun masa depan digital bersama kami.", en: "Join us and build the digital future together." } as L },
  blog: { t: { id: "Blog & Insight", en: "Blog & Insights" } as L, s: { id: "Pemikiran dan panduan dari tim NURGIO.", en: "Thinking and guides from the NURGIO team." } as L },
  contact: { t: { id: "Kontak", en: "Contact" } as L, s: { id: "Kami senang mendengar ide Anda.", en: "We'd love to hear your idea." } as L },
};

/* helpers */
export const photo = (id: string, w = 1200, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=70`;
export const waLink = (msg = "Halo NURGIO, saya ingin berkonsultasi.") => `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(msg)}`;
