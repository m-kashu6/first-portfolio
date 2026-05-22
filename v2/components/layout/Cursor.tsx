"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 400, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    document.documentElement.classList.add("has-custom-cursor");
    setVisible(true);

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest("a, button, [data-hover]")) setHovering(true);
    };
    const onOut = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest("a, button, [data-hover]")) setHovering(false);
    };

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[210] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{ x: sx, y: sy }}
        animate={{
          width: hovering ? 48 : 8,
          height: hovering ? 48 : 8,
          opacity: hovering ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[210] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink"
        style={{ x, y }}
        animate={{
          width: hovering ? 64 : 32,
          height: hovering ? 64 : 32,
          opacity: hovering ? 0.4 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
      />
    </>
  );
}
