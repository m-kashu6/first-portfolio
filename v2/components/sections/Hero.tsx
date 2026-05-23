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

      {/* ==================== MOBILE (Apartamento / pop-surreal) ==================== */}

      {/* Background shapes — scattered */}
      <motion.div
        style={{ opacity }}
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden md:hidden"
      >
        {/* Orange disc — top-left */}
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.9, type: "spring", bounce: 0.4 }}
          className="absolute -left-6 top-[18vh] h-32 w-32 rounded-full bg-accent"
        />
        {/* Pink square — mid-right, rotated */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 12 }}
          transition={{ delay: 0.6, duration: 0.9, type: "spring", bounce: 0.5 }}
          className="absolute right-3 top-[40vh] h-28 w-28"
          style={{ background: "#F49ABF" }}
        />
        {/* Navy triangle — bottom-left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: -8 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="absolute left-6 bottom-[18vh] h-0 w-0"
          style={{
            borderLeft: "55px solid transparent",
            borderRight: "55px solid transparent",
            borderBottom: "95px solid #1B2C56",
          }}
        />
        {/* Yellow small circle — center-ish */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.0, duration: 0.6, type: "spring" }}
          className="absolute right-12 top-[28vh] h-7 w-7 rounded-full"
          style={{ background: "#FFD93D" }}
        />
        {/* Tiny squiggle (dashed line) — bottom right */}
        <motion.svg
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          viewBox="0 0 100 30"
          className="absolute right-4 bottom-[28vh] h-7 w-24"
          aria-hidden="true"
        >
          <motion.path
            d="M 2 15 Q 15 2, 28 15 T 54 15 T 80 15 T 98 15"
            stroke="#1B2C56"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </motion.svg>
      </motion.div>

      {/* Mobile typo — KASHU on top right, MAKI offset on left */}
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute inset-0 z-[3] flex flex-col justify-center px-4 md:hidden"
      >
        <motion.span
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="block self-end pr-2 font-display text-[26vw] leading-[0.85] tracking-tight text-accent"
        >
          KASHU
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.65, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="-mt-2 block self-start pl-2 font-display text-[22vw] leading-[0.85] tracking-tight text-ink"
          style={{ fontStyle: "italic" }}
        >
          MAKI
        </motion.span>
      </motion.div>

      {/* Role label — bottom area, mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.7 }}
        style={{ opacity }}
        className="pointer-events-none absolute inset-x-0 bottom-[16vh] z-[4] flex flex-col items-center gap-1 md:hidden"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink">
          Frontend / Engineer
        </p>
        <p className="font-serif-jp text-base italic text-ink-soft">
          丁寧に、長く使える Web を。
        </p>
      </motion.div>

      {/* "001" sticker — top center, mobile */}
      <motion.div
        initial={{ opacity: 0, rotate: -12, scale: 0.6 }}
        animate={{ opacity: 1, rotate: -6, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.6, type: "spring", bounce: 0.5 }}
        style={{ opacity }}
        className="pointer-events-none absolute left-6 top-[12vh] z-[4] md:hidden"
      >
        <div
          className="flex flex-col items-start border-2 border-ink bg-cream px-2 py-1 font-mono text-[10px] uppercase tracking-[0.25em]"
          style={{ boxShadow: "3px 3px 0 0 #1B2C56" }}
        >
          <span className="text-mute">Issue</span>
          <span className="font-display text-2xl leading-none text-ink">001</span>
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
