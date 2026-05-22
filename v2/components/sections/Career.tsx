"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { career } from "@/lib/career";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Career() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="career"
      ref={ref}
      className="relative overflow-hidden border-t border-ink/60 bg-cream"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <SectionLabel no="006" label="Career" />

        <h2 className="mt-6 font-display text-[18vw] leading-[0.85] tracking-tight md:text-[12vw]">
          TIMELINE
        </h2>

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 h-full w-px bg-ink/15 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[18px] top-0 w-px bg-accent md:left-1/2 md:-translate-x-1/2"
          />

          <ul className="flex flex-col gap-14 md:gap-20">
            {career.map((event, i) => (
              <motion.li
                key={`${event.year}-${event.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute left-[14px] top-2 h-2 w-2 rounded-full bg-accent ring-4 ring-cream md:left-1/2 md:top-3 md:-translate-x-1/2" />

                {/* Mobile: stacked, single column with dot indent */}
                <div className="pl-10 md:hidden">
                  <p className="font-display text-4xl tracking-wider text-accent">
                    {event.year}
                  </p>
                  {event.period && (
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
                      {event.period}
                    </p>
                  )}
                  <h3 className="mt-4 font-display text-xl tracking-wider">
                    {event.title}
                  </h3>
                  {event.org && (
                    <p className="mt-1 font-jp text-xs text-mute">{event.org}</p>
                  )}
                  {event.detail && (
                    <p className="mt-3 font-jp text-sm leading-relaxed text-ink-soft">
                      {event.detail}
                    </p>
                  )}
                </div>

                {/* Desktop: alternating two-column layout */}
                <div
                  className={`hidden grid-cols-2 gap-12 md:grid ${
                    i % 2 === 1 ? "[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div
                    className={
                      i % 2 === 0 ? "text-right pr-12" : "pl-12"
                    }
                  >
                    <p className="font-display text-5xl tracking-wider text-accent lg:text-7xl">
                      {event.year}
                    </p>
                    {event.period && (
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
                        {event.period}
                      </p>
                    )}
                  </div>

                  <div
                    className={
                      i % 2 === 0 ? "pl-12" : "text-right pr-12"
                    }
                  >
                    <h3 className="font-display text-2xl tracking-wider">
                      {event.title}
                    </h3>
                    {event.org && (
                      <p className="mt-1 font-jp text-sm text-mute">{event.org}</p>
                    )}
                    {event.detail && (
                      <p className="mt-3 font-jp text-base leading-relaxed text-ink-soft">
                        {event.detail}
                      </p>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
