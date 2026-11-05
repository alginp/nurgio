"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/providers";
import { N_RATIO, layerCls } from "./Logo";

/* wordmark letter slices exported from the logo: x offset / width within 1200×188 */
const LETTERS = [
  { x: 0, w: 205 }, { x: 227, w: 200 }, { x: 454, w: 195 },
  { x: 678, w: 204 }, { x: 906, w: 48 }, { x: 985, w: 215 },
];
const WM_W = 1200, WM_H = 188;

/**
 * First-visit preloader (~2.5s):
 * 1) navy pillars slide in, 2) blue band sweeps diagonally & folds in,
 * 3) wordmark letters reveal one by one, 4) screen wipes upward.
 */
export default function Preloader() {
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("nurgio-pre") === "1"; } catch {}
    if (seen || reduce) return;
    setShow(true);
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      document.documentElement.style.overflow = "";
      try { sessionStorage.setItem("nurgio-pre", "1"); } catch {}
    }, 2900);
    return () => { clearTimeout(t); document.documentElement.style.overflow = ""; };
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="pre" role="status" aria-label="Loading NURGIO"
          className="fixed inset-0 z-[300] grid place-items-center bg-white"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: EASE } }}
        >
          <div className="flex flex-col items-center gap-8">
            {/* ribbon N */}
            <div className="relative w-[150px] md:w-[190px]" style={{ aspectRatio: N_RATIO }}>
              <motion.span className={layerCls.left} initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7, ease: EASE }} />
              <motion.span className={layerCls.right} initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7, ease: EASE, delay: 0.12 }} />
              <motion.span
                className={layerCls.band}
                initial={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" }}
                animate={{ clipPath: "polygon(0 0, 140% 0, 140% 140%, 0 140%)" }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
                style={{ clipPath: "polygon(0 0,0 0,0 0,0 0)" }}
              />
            </div>
            {/* wordmark letters */}
            <div className="relative flex w-[250px] md:w-[320px]" style={{ aspectRatio: `${WM_W} / ${WM_H}` }}>
              {LETTERS.map((l, i) => (
                <motion.span
                  key={i}
                  className="absolute top-0 h-full"
                  style={{
                    left: `${(l.x / WM_W) * 100}%`, width: `${(l.w / WM_W) * 100}%`,
                    background: "#0a1f7a",
                    WebkitMask: `url(/brand/letter-${i}.png) center / 100% 100% no-repeat`,
                    mask: `url(/brand/letter-${i}.png) center / 100% 100% no-repeat`,
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 1.35 + i * 0.1 }}
                />
              ))}
            </div>
            <div className="h-[3px] w-40 overflow-hidden rounded-full bg-[#e8ebfa]">
              <motion.div className="h-full bg-electric" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2.3, ease: "easeInOut" }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
