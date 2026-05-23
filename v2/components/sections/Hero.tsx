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

      {/* ==================== MOBILE (Frame layout) ==================== */}

      {/* Top edge — "FRONTEND  ·  ENGINEER" */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        style={{ opacity }}
        className="pointer-events-none absolute inset-x-3 top-[12vh] z-[3] flex items-center justify-between font-display text-[8vw] tracking-tight text-ink md:hidden"
      >
        <span>FRONTEND</span>
        <span className="text-accent">★</span>
        <span>ENGINEER</span>
      </motion.div>

      {/* Left vertical — "MAKI" */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.55, duration: 0.7 }}
        style={{ opacity }}
        className="pointer-events-none absolute left-0 top-1/2 z-[3] -translate-y-1/2 md:hidden"
      >
        <p
          className="origin-center -rotate-180 font-display text-[18vw] leading-[0.85] tracking-tight text-accent"
          style={{ writingMode: "vertical-rl" }}
        >
          MAKI
        </p>
      </motion.div>

      {/* Right vertical — "KASHU" */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        style={{ opacity }}
        className="pointer-events-none absolute right-0 top-1/2 z-[3] -translate-y-1/2 md:hidden"
      >
        <p
          className="font-display text-[18vw] leading-[0.85] tracking-tight text-ink"
          style={{ writingMode: "vertical-rl" }}
        >
          KASHU
        </p>
      </motion.div>

      {/* Bottom edge — "2026  ·  PORTFOLIO" */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.7 }}
        style={{ opacity }}
        className="pointer-events-none absolute inset-x-3 bottom-[14vh] z-[3] flex items-center justify-between font-display text-[8vw] tracking-tight text-ink md:hidden"
      >
        <span>2026</span>
        <span className="text-accent">●</span>
        <span>PORTFOLIO</span>
      </motion.div>

      {/* Center content inside the frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        style={{ opacity }}
        className="pointer-events-none absolute inset-x-[18vw] top-1/2 z-[4] -translate-y-1/2 md:hidden"
      >
        <div className="flex flex-col items-center gap-3 border-2 border-ink bg-cream px-4 py-6 text-center" style={{ boxShadow: "4px 4px 0 0 var(--color-accent)" }}>
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-mute">
            N° 001 — Issue
          </p>
          <p className="font-display text-3xl leading-none text-ink">
            Maki Kashu
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute">
            1996 / Osaka
          </p>
          <span className="my-1 h-px w-12 bg-ink/30" />
          <p className="font-serif-jp text-sm italic leading-snug text-ink-soft">
            丁寧に、長く<br />使える Web を。
          </p>
        </div>
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
