"use client";

import { motion } from "framer-motion";

// Variant E: Comic panels — split into 4 frames with different content
export function HeroVariantE() {
  const panels = [
    {
      bg: "bg-accent",
      text: "MAKI",
      textColor: "text-cream",
      meta: "01",
      align: "items-start justify-end",
      italic: false,
    },
    {
      bg: "bg-cream-soft",
      text: "KASHU",
      textColor: "text-ink",
      meta: "02",
      align: "items-end justify-start",
      italic: true,
    },
    {
      bg: "bg-ink",
      text: "1996",
      textColor: "text-accent",
      meta: "03",
      align: "items-center justify-center",
      italic: false,
    },
    {
      bg: "bg-cream-deep",
      text: "OSAKA",
      textColor: "text-ink",
      meta: "04",
      align: "items-center justify-center",
      italic: false,
    },
  ];

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-cream">
      {/* Top meta */}
      <div className="pointer-events-none absolute inset-x-4 top-3 z-30 flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-ink">
        <span>N° 001</span>
        <span>Portfolio · 2026</span>
      </div>

      {/* 2x2 panel grid */}
      <div className="grid h-full w-full grid-cols-2 grid-rows-[1fr_1fr] gap-1 pt-12 pb-20">
        {panels.map((panel, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className={`relative flex flex-col ${panel.align} overflow-hidden border-2 border-ink ${panel.bg} p-3`}
          >
            {/* Panel number */}
            <span className="absolute left-2 top-2 font-mono text-[10px] uppercase tracking-[0.3em] opacity-60">
              {panel.meta}
            </span>
            {/* Big text */}
            <span
              className={`font-display text-[14vw] leading-[0.85] tracking-tight ${panel.textColor} ${panel.italic ? "italic" : ""}`}
            >
              {panel.text}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Bottom strap */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between border-t-2 border-ink bg-cream px-4 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-ink"
      >
        <span>Frontend Engineer</span>
        <span className="font-serif-jp text-sm normal-case italic tracking-normal">
          丁寧に、Webを。
        </span>
        <span>↓</span>
      </motion.div>
    </section>
  );
}
