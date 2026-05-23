"use client";

import { motion } from "framer-motion";

// Variant A: Risograph overlap — semi-transparent shapes with mix-blend
export function HeroVariantA() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-cream-soft">
      {/* Large orange disc */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.85 }}
        transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute -left-[20vw] top-[6vh] h-[70vw] w-[70vw] rounded-full bg-accent mix-blend-multiply"
      />
      {/* Large pink disc — overlap */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.75 }}
        transition={{ delay: 0.2, duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute -right-[15vw] top-[28vh] h-[68vw] w-[68vw] rounded-full mix-blend-multiply"
        style={{ background: "#F49ABF" }}
      />
      {/* Small yellow circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.9 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="absolute right-[12vw] bottom-[24vh] h-[18vw] w-[18vw] rounded-full mix-blend-multiply"
        style={{ background: "#FFD93D" }}
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
          transition={{ delay: 0.5, duration: 0.9 }}
          className="font-display text-[22vw] leading-[0.82] tracking-tight"
        >
          <span className="block text-ink">MAKI</span>
          <span className="block text-ink mix-blend-difference">KASHU</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="mt-4 font-serif-jp text-base italic text-ink"
        >
          丁寧に、長く使える Web を。
        </motion.p>
      </div>

      {/* Bottom meta */}
      <div className="pointer-events-none absolute inset-x-4 bottom-6 z-10 flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-ink">
        <span>Frontend Engineer</span>
        <span>↓ Scroll</span>
      </div>
    </section>
  );
}
