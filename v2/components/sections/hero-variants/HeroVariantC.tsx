"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Variant C: Photo collage cutout
export function HeroVariantC() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-cream">
      {/* Top meta */}
      <div className="pointer-events-none absolute inset-x-4 top-6 z-30 flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-ink">
        <span>N° 001 · 2026</span>
        <span>Osaka — JPN</span>
      </div>

      {/* Big background letter "M" */}
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="pointer-events-none absolute -left-4 top-[14vh] z-[1] select-none font-display text-[80vw] leading-[0.8] text-accent/15"
      >
        M
      </motion.span>

      {/* Profile photo - tilted "polaroid" frame */}
      <motion.div
        initial={{ opacity: 0, rotate: -8, scale: 0.85 }}
        animate={{ opacity: 1, rotate: -4, scale: 1 }}
        transition={{ delay: 0.5, duration: 1, type: "spring", bounce: 0.4 }}
        className="absolute right-6 top-[18vh] z-[5] w-[52vw] border-2 border-ink bg-cream p-2"
        style={{ boxShadow: "6px 6px 0 0 #1B2C56" }}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-cream-deep">
          <Image
            src="/images/profile/ppl_img.jpg"
            alt="Maki Kashu"
            fill
            className="object-cover"
            sizes="52vw"
            priority
          />
        </div>
        <p className="mt-1 text-center font-mono text-[8px] uppercase tracking-[0.3em] text-ink">
          Maki Kashu / 26
        </p>
      </motion.div>

      {/* Sticker — circular badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 30 }}
        animate={{ opacity: 1, scale: 1, rotate: 15 }}
        transition={{ delay: 0.9, duration: 0.7, type: "spring", bounce: 0.5 }}
        className="absolute left-4 top-[22vh] z-[6] flex h-20 w-20 items-center justify-center rounded-full bg-accent text-center"
      >
        <p className="font-display text-[10px] leading-tight text-cream">
          AVAILABLE
          <br />
          2026
        </p>
      </motion.div>

      {/* MAKI label — bottom area */}
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute left-4 bottom-[26vh] z-[5] font-display text-[18vw] leading-[0.85] tracking-tight"
      >
        <span className="block text-ink">MAKI</span>
        <span className="block text-accent">KASHU</span>
      </motion.h1>

      {/* Italic tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.7 }}
        className="absolute left-6 bottom-[16vh] z-[5] font-serif-jp text-sm italic text-ink-soft"
      >
        丁寧に、長く使える Web を。
      </motion.p>

      {/* Decorative scribble */}
      <motion.svg
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        viewBox="0 0 100 30"
        className="absolute right-6 bottom-[24vh] z-[5] h-6 w-20"
        aria-hidden="true"
      >
        <motion.path
          d="M 5 15 Q 20 5, 35 15 T 65 15 T 95 15"
          stroke="#1B2C56"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </motion.svg>

      {/* Bottom strap */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-ink/30 bg-cream/95 px-4 py-3">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-ink">
          <span>Frontend Engineer</span>
          <span>↓ Scroll</span>
        </div>
      </div>
    </section>
  );
}
