"use client";

import { motion } from "framer-motion";

// Variant D: Tarot card style — single big card centered with decorative border
export function HeroVariantD() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-ink">
      {/* Diagonal stripes background pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--color-cream) 0, var(--color-cream) 1px, transparent 1px, transparent 14px)",
        }}
      />

      {/* Center "tarot" card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.0, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute inset-x-8 top-1/2 -translate-y-1/2"
      >
        <div className="relative aspect-[5/8] w-full border-[3px] border-cream bg-cream-soft">
          {/* Inner double border */}
          <div className="absolute inset-2 border border-ink/30" />

          {/* Top label */}
          <div className="absolute left-1/2 top-3 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.4em] text-ink">
            — N° 001 —
          </div>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
              The Portfolio
            </p>
            <h1 className="mt-3 font-display text-[18vw] leading-[0.85] tracking-tight">
              <span className="block text-ink">MAKI</span>
              <span className="block text-accent italic">KASHU</span>
            </h1>
            <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.3em] text-mute">
              ★ Frontend Engineer ★
            </p>
            <p className="mt-3 font-serif-jp text-sm italic leading-snug text-ink-soft">
              丁寧に、長く<br />使える Web を。
            </p>
          </div>

          {/* Corner ornaments */}
          <span className="absolute left-3 top-3 font-display text-2xl leading-none text-accent">
            ✦
          </span>
          <span className="absolute right-3 top-3 font-display text-2xl leading-none text-accent">
            ✦
          </span>
          <span className="absolute left-3 bottom-3 font-display text-2xl leading-none text-accent">
            ✦
          </span>
          <span className="absolute right-3 bottom-3 font-display text-2xl leading-none text-accent">
            ✦
          </span>

          {/* Bottom label */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.4em] text-ink">
            — 1996 / OSAKA —
          </div>
        </div>
      </motion.div>

      {/* Top meta */}
      <div className="pointer-events-none absolute inset-x-4 top-6 z-10 flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-cream/70">
        <span>Portfolio · 2026</span>
        <span>vol. 01</span>
      </div>

      {/* Bottom strap */}
      <div className="pointer-events-none absolute inset-x-4 bottom-6 z-10 flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-cream/70">
        <span>↓ Scroll</span>
        <span>★ ★ ★</span>
      </div>
    </section>
  );
}
