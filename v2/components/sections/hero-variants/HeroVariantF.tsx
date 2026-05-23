"use client";

import { motion } from "framer-motion";

// Variant F: Wave bottom edge — cream top, orange wave bottom
export function HeroVariantF() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-cream">
      {/* Top meta */}
      <div className="pointer-events-none absolute inset-x-4 top-6 z-10 flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-ink">
        <span>N° 001 · 2026</span>
        <span>Osaka — JPN</span>
      </div>

      {/* MAKI on top half */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="pointer-events-none absolute left-4 top-[14vh] z-10 font-display text-[24vw] leading-[0.85] tracking-tight text-ink"
      >
        MAKI
      </motion.h1>

      {/* Wave shape — orange bottom half */}
      <motion.svg
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, ease: [0.85, 0, 0.15, 1] }}
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 z-[2] h-[58vh] w-full"
        aria-hidden="true"
      >
        <motion.path
          d="M 0 12 Q 25 0, 50 8 T 100 6 L 100 60 L 0 60 Z"
          fill="var(--color-accent)"
        />
      </motion.svg>

      {/* KASHU on bottom (cream colored, on top of orange wave) */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.9 }}
        className="pointer-events-none absolute right-4 bottom-[20vh] z-[3] font-display italic text-[26vw] leading-[0.85] tracking-tight text-cream"
      >
        KASHU
      </motion.h2>

      {/* Italic tagline inside orange */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.7 }}
        className="absolute inset-x-4 bottom-[10vh] z-[4] text-center font-serif-jp text-base italic text-cream"
      >
        丁寧に、長く使える Web を。
      </motion.p>

      {/* Small floating dot at top */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
        className="absolute right-12 top-[36vh] z-10 h-3 w-3 rounded-full bg-ink"
      />

      {/* Bottom strap */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-4 py-3">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-cream">
          <span>Frontend Engineer</span>
          <span>↓ Scroll</span>
        </div>
      </div>
    </section>
  );
}
