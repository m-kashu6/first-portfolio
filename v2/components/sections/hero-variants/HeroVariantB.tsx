"use client";

import { motion } from "framer-motion";

// Variant B: Halftone dot background
export function HeroVariantB() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-cream">
      {/* Halftone dot pattern background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-accent) 4.5px, transparent 5px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Cream "spotlight" gradient at center to allow typography to breathe */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, var(--color-cream) 0%, transparent 60%)",
        }}
      />

      {/* Top meta */}
      <div className="pointer-events-none absolute inset-x-4 top-6 z-10 flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-ink">
        <span>N° 001 · 2026</span>
        <span>Osaka — JPN</span>
      </div>

      {/* Center typography */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="font-display text-[24vw] leading-[0.82] tracking-tight text-ink"
        >
          <span className="block">MAKI</span>
          <span className="block text-accent">KASHU</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-4 inline-block bg-cream/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-soft"
        >
          Frontend Engineer · 1996 · Osaka
        </motion.p>
      </div>

      {/* Bottom strap */}
      <div className="absolute inset-x-0 bottom-0 z-10 bg-cream/95 px-4 py-3 backdrop-blur">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-ink">
          <span>↓ Scroll</span>
          <span className="font-serif-jp text-sm italic normal-case tracking-normal">
            丁寧に、長く使える Web を。
          </span>
        </div>
      </div>
    </section>
  );
}
