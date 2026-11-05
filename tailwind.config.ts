import type { Config } from "tailwindcss";

/**
 * NURGIO theme — edit colors here AND in app/globals.css (CSS variables).
 */
const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    screens: { xs: "360px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" },
    extend: {
      colors: {
        electric: "var(--blue-electric)",
        navy: "var(--navy-deep)",
        ink: "var(--navy-ink)",
        lavender: "var(--lavender)",
        soft: "var(--bg-soft)",
        surface: "var(--surface)",
        page: "var(--bg)",
        body: "var(--text-body)",
        head: "var(--text-head)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Montserrat", "sans-serif"],
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: { card: "24px", xl2: "28px" },
      boxShadow: {
        soft: "0 20px 60px rgba(7,87,255,0.12)",
        lift: "0 30px 80px rgba(7,87,255,0.22)",
      },
      transitionTimingFunction: { nurgio: "cubic-bezier(0.22, 1, 0.36, 1)" },
      maxWidth: { site: "1280px" },
      keyframes: {
        marquee: { to: { transform: "translateX(-50%)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        pulseRing: { "0%": { transform: "scale(1)", opacity: ".5" }, "100%": { transform: "scale(1.8)", opacity: "0" } },
        scrollDot: { "0%": { transform: "translateY(0)", opacity: "1" }, "100%": { transform: "translateY(14px)", opacity: "0" } },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        pulseRing: "pulseRing 2s ease-out infinite",
        scrollDot: "scrollDot 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
