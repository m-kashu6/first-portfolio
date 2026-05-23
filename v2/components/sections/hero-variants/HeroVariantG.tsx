"use client";

import { motion } from "framer-motion";

// Variant G: Vertical stripes — Bauhaus-inspired
export function HeroVariantG() {
  const stripes = [
    { color: "bg-cream-soft", width: "w-[8vw]" },
    { color: "bg-accent", width: "w-[14vw]" },
    { color: "bg-cream-soft", width: "w-[8vw]" },
    { color: "bg-cream-deep", width: "w-[18vw]" },
    { color: "bg-cream-soft", width: "w-[6vw]" },
    { color: "bg-accent", width: "w-[10vw]" },
    { color: "bg-cream-soft", width: "w-auto flex-1" },
  ];

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-cream">
      {/* Vertical stripes */}
      <div className="absolute inset-0 flex">
        {stripes.map((stripe, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.15 * i, duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
            style={{ originY: 0 }}
            className={`${stripe.color} ${stripe.width}`}
          />
        ))}
      </div>

      {/* Top meta */}
      <div className="pointer-events-none absolute inset-x-4 top-6 z-10 flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-ink">
        <span>N° 001</span>
        <span>2026 · Osaka</span>
      </div>

      {/* Big typo in center */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="font-display text-[24vw] leading-[0.85] tracking-tight"
        >
          <span className="block text-ink">MAKI</span>
          <span className="block text-ink italic mix-blend-difference">
            KASHU
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-4 inline-block bg-cream px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-ink"
        >
          Frontend Engineer
        </motion.p>
      </div>

      {/* Bottom strap */}
      <div className="absolute inset-x-0 bottom-0 z-10 bg-ink px-4 py-3">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-cream">
          <span>↓ Scroll</span>
          <span className="font-serif-jp text-sm normal-case italic tracking-normal text-cream">
            丁寧に、長く使える Web を。
          </span>
        </div>
      </div>
    </section>
  );
}
