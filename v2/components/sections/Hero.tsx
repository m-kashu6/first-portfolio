"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => m.HeroScene),
  { ssr: false }
);

// Letter-by-letter stagger animation
function KineticTitle() {
  const lines = [
    { text: "MAKI", className: "text-ink/90" },
    { text: "KASHU", className: "text-accent" },
  ];

  return (
    <h1 className="select-none font-display leading-[0.82] tracking-tight">
      {/* Mobile: stacked */}
      <span className="flex flex-col md:hidden">
        {lines.map((line, li) => (
          <motion.span
            key={line.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + li * 0.15, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className={`block text-[24vw] ${line.className}`}
          >
            {line.text}
          </motion.span>
        ))}
      </span>

      {/* Desktop: inline */}
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        className="hidden whitespace-nowrap text-[20vw] md:inline-block"
      >
        {lines.map((line, li) => (
          <span key={line.text} className={line.className}>
            {line.text}
            {li === 0 && <span>&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </h1>
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

      {/* Background kinetic typo (above graphic band on mobile) */}
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center md:z-0"
      >
        <KineticTitle />
      </motion.div>


      {/* Vertical side label */}
      <div className="pointer-events-none absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 md:block">
        <p className="origin-center -rotate-90 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
          Maki Kashu · 1996 · Osaka · JP
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="pointer-events-none absolute left-1 top-1/2 z-20 -translate-y-1/2 md:hidden"
      >
        <p
          className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.3em] text-mute"
          style={{ writingMode: "vertical-rl" }}
        >
          MAKI KASHU · 1996 · OSAKA
        </p>
      </motion.div>

      {/* Bracket / corner marks */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="pointer-events-none absolute inset-0 z-20"
      >
        <div className="absolute left-3 top-20 h-3 w-3 border-l border-t border-ink/50 md:hidden" />
        <div className="absolute right-3 top-20 h-3 w-3 border-r border-t border-ink/50 md:hidden" />
        <div className="absolute left-3 bottom-24 h-3 w-3 border-b border-l border-ink/50 md:hidden" />
        <div className="absolute right-3 bottom-24 h-3 w-3 border-b border-r border-ink/50 md:hidden" />
      </motion.div>

      {/* Status pill */}
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.6, type: "spring" }}
        style={{ opacity }}
        className="pointer-events-none absolute left-1/2 top-[26vh] z-20 -translate-x-1/2 md:hidden"
      >
        <div className="flex items-center gap-2 rounded-full border border-ink/40 bg-cream/80 px-3 py-1 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-blink" />
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-ink-soft">
            Available · 2026
          </span>
        </div>
      </motion.div>

      {/* 3D layer (desktop only) */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 z-10 hidden md:block md:mix-blend-multiply"
      >
        <HeroScene />
      </motion.div>

      {/* Mobile: bottom-right color block (graphic accent) */}
      <motion.div
        style={{ opacity }}
        className="pointer-events-none absolute bottom-0 right-0 z-[2] h-[40vh] w-[58vw] overflow-hidden md:hidden"
      >
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.3, duration: 1.1, ease: [0.85, 0, 0.15, 1] }}
          style={{ originY: 1 }}
          className="absolute inset-0 bg-accent"
        />
        {/* Caption inside block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute inset-x-4 bottom-24 flex flex-col gap-1 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/90"
        >
          <span>Portfolio</span>
          <span>Vol. 01 &mdash; 2026</span>
        </motion.div>
        {/* Big issue number in the block */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.18, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="absolute right-2 top-2 font-display text-7xl leading-none text-cream"
        >
          02
        </motion.span>
      </motion.div>

      {/* Mincho italic statement — bottom, mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.7 }}
        style={{ opacity }}
        className="pointer-events-none absolute left-6 bottom-[24vh] z-30 max-w-[55vw] md:hidden"
      >
        <p className="font-serif-jp text-lg italic leading-snug text-ink">
          丁寧に、長く<br />使える Web を。
        </p>
      </motion.div>

      {/* Marquee — top */}
      <div className="pointer-events-none absolute inset-x-0 top-[8vh] z-10 overflow-hidden md:top-[20vh]">
        <div className="flex animate-marquee whitespace-nowrap">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="mr-12 flex shrink-0 items-center gap-12 font-display text-[6vw] tracking-wider text-ink/15 md:text-[5vw]"
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

      {/* Second marquee — bottom mobile */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[15vh] z-10 overflow-hidden md:hidden">
        <div
          className="flex animate-marquee whitespace-nowrap"
          style={{ animationDirection: "reverse", animationDuration: "40s" }}
        >
          {[0, 1].map((i) => (
            <div
              key={i}
              className="mr-8 flex shrink-0 items-center gap-8 font-mono text-[10px] uppercase tracking-[0.4em] text-ink/40"
            >
              <span>★</span>
              <span>Frontend Engineer</span>
              <span>·</span>
              <span>Based in Osaka</span>
              <span>·</span>
              <span>Open for work</span>
              <span>·</span>
              <span>Since 2023</span>
              <span>·</span>
            </div>
          ))}
        </div>
      </div>

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
