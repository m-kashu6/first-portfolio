"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Desktop kinetic title (unchanged)
function DesktopTitle() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
      className="select-none whitespace-nowrap font-display text-[20vw] leading-[0.82] tracking-tight"
    >
      <span className="text-ink/90">MAKI</span>{" "}
      <span className="text-accent">KASHU</span>
    </motion.h1>
  );
}

function OsakaClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Tokyo",
        })
      );
    };
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <span className="tabular-nums">{time || "--:--:--"}</span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      {/* Top meta */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between px-6 pt-[max(env(safe-area-inset-top),0px)] font-mono text-[9px] uppercase tracking-[0.3em] text-ink/70 md:px-10 md:text-[10px]">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-20 flex flex-col gap-1 md:mt-28"
        >
          <span>N° 001</span>
          <span>Osaka — <OsakaClock /></span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-20 flex flex-col items-end gap-1 md:mt-28"
        >
          <span>Frontend Engineer</span>
          <span>Portfolio · 2026</span>
        </motion.div>
      </div>

      {/* ==================== DESKTOP ==================== */}

      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute inset-0 z-0 hidden items-center justify-center md:flex"
      >
        <DesktopTitle />
      </motion.div>

      {/* Vertical side label — desktop */}
      <div className="pointer-events-none absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 md:block">
        <p className="origin-center -rotate-90 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
          Maki Kashu · 1996 · Osaka · JP
        </p>
      </div>

      {/* Desktop marquee */}
      <div className="pointer-events-none absolute inset-x-0 top-[20vh] z-10 hidden overflow-hidden md:block">
        <div className="flex animate-marquee whitespace-nowrap">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="mr-12 flex shrink-0 items-center gap-12 font-display text-[5vw] tracking-wider text-ink/15"
            >
              <span>FRONTEND</span>
              <span>·</span>
              <span>DESIGN</span>
              <span>·</span>
              <span>MOTION</span>
              <span>·</span>
              <span>TYPOGRAPHY</span>
              <span>·</span>
              <span>ACCESSIBILITY</span>
              <span>·</span>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== MOBILE (Diagonal split with dashed line) ==================== */}

      {/* Diagonal orange block (top-left half) */}
      <motion.div
        style={{ opacity }}
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden md:hidden"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.0, ease: [0.85, 0, 0.15, 1] }}
          className="absolute inset-0 bg-accent"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 38%, 0 62%)" }}
        />
        {/* Subtle dashed diagonal line just inside the cut */}
        <motion.svg
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ delay: 1.1, duration: 1.2 }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <motion.line
            x1="100"
            y1="42"
            x2="0"
            y2="66"
            stroke="#1A1A1A"
            strokeWidth="0.4"
            strokeDasharray="2 2"
          />
        </motion.svg>
      </motion.div>

      {/* Mobile typo — MAKI on orange, KASHU on cream */}
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute inset-0 z-[3] flex flex-col justify-center px-4 md:hidden"
      >
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="block self-start pl-2 font-display text-[24vw] leading-[0.85] tracking-tight text-cream"
        >
          MAKI
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-4 block self-end pr-2 font-display italic text-[24vw] leading-[0.85] tracking-tight text-ink"
        >
          KASHU
        </motion.span>
      </motion.div>

      {/* Role label — bottom, mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.7 }}
        style={{ opacity }}
        className="pointer-events-none absolute inset-x-0 bottom-[14vh] z-[4] flex flex-col items-center gap-1 md:hidden"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink">
          Frontend / Engineer
        </p>
        <p className="font-serif-jp text-base italic text-ink-soft">
          丁寧に、長く使える Web を。
        </p>
      </motion.div>

      {/* Bottom strap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.6 }}
        style={{ opacity }}
        className="absolute inset-x-0 bottom-0 z-20 border-t border-ink/60 bg-cream/70 backdrop-blur"
      >
        <div className="flex flex-col gap-2 px-6 pb-[max(env(safe-area-inset-bottom),16px)] pt-3 md:flex-row md:items-center md:justify-between md:px-10 md:py-4">
          <p className="hidden font-jp text-sm tracking-wide md:block md:text-base">
            <span className="font-serif-jp italic">丁寧に、</span>長く使える Web を。
          </p>
          <div className="flex items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.3em] text-mute md:text-[10px]">
            <span className="md:hidden">
              <OsakaClock />
            </span>
            <span>↓ Scroll <span className="hidden md:inline">· About · Works · Skills · Career · Contact</span></span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
