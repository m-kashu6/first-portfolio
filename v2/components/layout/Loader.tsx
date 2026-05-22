"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "mk-loader-shown";

export function Loader() {
  const [shouldShow, setShouldShow] = useState(false);
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only show loader on first visit per browser session
    const already = window.sessionStorage.getItem(STORAGE_KEY);
    if (already) {
      setDone(true);
      return;
    }
    setShouldShow(true);
    window.sessionStorage.setItem(STORAGE_KEY, "1");

    let frame = 0;
    const total = 80; // ~1.3s at 60fps
    let raf = 0;

    const tick = () => {
      frame += 1;
      const pct = Math.min(100, Math.round((frame / total) * 100));
      setProgress(pct);
      if (frame < total) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!shouldShow) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          aria-hidden
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink text-cream"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1] } }}
        >
          <div className="flex w-full flex-col items-center justify-center gap-6 px-6">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-cream/70">
              Loading
            </div>
            <div className="font-display text-[18vw] leading-none md:text-[14vw]">
              {progress.toString().padStart(3, "0")}
            </div>
            <div className="h-px w-full max-w-md overflow-hidden bg-cream/20">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0 }}
              />
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
              MAKI KASHU — Portfolio 2026
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
