"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Skills", href: "#skills" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 mix-blend-difference text-cream"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="flex items-center justify-between px-6 py-4 md:px-10 md:py-6">
          <a href="#top" className="font-display text-2xl tracking-wider md:text-3xl">
            MK
            <span className="ml-1 inline-block h-1 w-1 rounded-full bg-cream align-baseline" />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden font-mono text-xs uppercase tracking-[0.2em]"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Status bar */}
        <div
          className={`pointer-events-none hidden items-center justify-between px-10 font-mono text-[10px] uppercase tracking-[0.3em] transition-opacity duration-500 md:flex ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <span>Osaka / JPN</span>
          <span className="animate-blink">●</span>
          <span>Portfolio · 2026</span>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink text-cream md:hidden"
            style={{
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="font-display text-5xl tracking-wider"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
