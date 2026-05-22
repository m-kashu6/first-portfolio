"use client";

import { motion } from "framer-motion";
import { codeStockItems, type CodeStockItem } from "@/lib/codestock";
import { SectionLabel } from "@/components/ui/SectionLabel";

const categoryStyles: Record<
  CodeStockItem["category"],
  { bg: string; text: string; ring: string }
> = {
  CSS: {
    bg: "bg-cream-soft",
    text: "text-ink",
    ring: "border-ink/20",
  },
  "CSS/JS": {
    bg: "bg-cream-deep",
    text: "text-ink",
    ring: "border-ink/40",
  },
  JS: {
    bg: "bg-ink",
    text: "text-cream",
    ring: "border-ink",
  },
};

export function CodeStock() {
  return (
    <section
      id="code-stock"
      className="relative overflow-hidden border-t border-ink/60 bg-cream"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="flex items-end justify-between">
          <SectionLabel no="004" label="Code Stock" />
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-mute md:block">
            Animations · UI · Snippets
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <h2 className="font-display text-[18vw] leading-[0.85] tracking-tight md:text-[10vw]">
            CODE&nbsp;
            <span className="text-accent">STOCK</span>
          </h2>
          <p className="max-w-md font-jp text-sm leading-relaxed text-ink-soft md:text-base">
            案件や勉強の中で書いた、動くコードのストック。
            Astro × microCMS で運用しています。各カードをクリックすると別タブで実物が見られます。
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {codeStockItems.map((item, i) => {
            const style = categoryStyles[item.category];
            return (
              <motion.li
                key={item.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              >
                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex h-full min-h-[260px] flex-col justify-between border p-6 transition-all hover:-translate-y-1 hover:border-accent ${style.bg} ${style.text} ${style.ring}`}
                  data-hover
                >
                  {/* Top: No + Category + Local badge */}
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-60">
                        N° {item.no}
                      </span>
                      <span
                        className={`inline-flex w-fit items-center gap-1 border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] ${
                          item.category === "JS"
                            ? "border-cream/40"
                            : "border-current/40"
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>
                    {item.local && (
                      <span className="bg-accent px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.3em] text-cream">
                        Local
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 font-jp text-lg font-bold leading-snug md:text-xl">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-3 font-jp text-xs leading-relaxed md:text-sm ${
                      item.category === "JS" ? "text-cream/70" : "text-mute"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-current/15 pt-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">
                      Open Demo
                    </span>
                    <span className="font-mono text-lg transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>

                  {/* Decorative corner mark */}
                  <span className="absolute right-3 top-3 font-display text-3xl leading-none opacity-10 group-hover:opacity-20 transition-opacity">
                    {item.no}
                  </span>
                </a>
              </motion.li>
            );
          })}
        </ul>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink/30 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
            Built with Astro × microCMS · Deployed on Netlify
          </p>
          <a
            href="https://maki-k-codestock.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink transition-colors hover:text-accent"
            data-hover
          >
            <span>Visit Full Code Stock</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
