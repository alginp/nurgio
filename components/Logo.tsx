"use client";

import { NLink } from "@/lib/providers";

/**
 * The NURGIO "N": one continuous folded ribbon, rendered as three CSS-mask layers
 * extracted from the official logo (so shapes are pixel-accurate and recolorable
 * via --blue-electric / --pillar-l / --pillar-r). Aspect ratio 1400:1057.
 */
export const N_RATIO = "1400 / 1057";

export function NMark({ className = "", mono = false, style }: { className?: string; mono?: boolean; style?: React.CSSProperties }) {
  const m = mono ? { background: "#fff" } : undefined;
  return (
    <span aria-hidden className={`relative block ${className}`} style={{ aspectRatio: N_RATIO, ...style }}>
      <span className="mask-layer mask-left" style={m} />
      <span className="mask-layer mask-right" style={m} />
      <span className="mask-layer mask-band" style={m} />
    </span>
  );
}

/** Class names for individually animatable layers (used by preloader & hero). */
export const layerCls = {
  left: "mask-layer mask-left",
  right: "mask-layer mask-right",
  band: "mask-layer mask-band",
};

/** Full horizontal logo: icon + lavender divider + wordmark. */
export function Logo({ className = "", scale = 1, light = false, link = true }: { className?: string; scale?: number; light?: boolean; link?: boolean }) {
  const content = (
    <span
      className={`inline-flex items-center ${className}`}
      style={{ gap: 12 * scale, ...(light ? ({ "--wordmark": "#ffffff", "--pillar-l": "#3a5be0", "--pillar-r": "#4a6cf0" } as React.CSSProperties) : {}) }}
    >
      <NMark style={{ width: 46 * scale }} />
      <span aria-hidden style={{ width: 2 * scale, height: 36 * scale, background: "var(--lavender)", borderRadius: 2 }} />
      <span className="wm" style={{ width: 118 * scale }} />
      <span className="sr-only">NURGIO</span>
    </span>
  );
  return link ? (
    <NLink href="/" aria-label="NURGIO — Beranda" className="inline-flex">
      {content}
    </NLink>
  ) : (
    content
  );
}
