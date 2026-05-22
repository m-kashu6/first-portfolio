"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/skills";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-ink/60 bg-cream-deep"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="flex items-end justify-between">
          <SectionLabel no="005" label="Skills" />
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-mute md:block">
            What I work with
          </p>
        </div>

        <h2 className="mt-6 font-display text-[18vw] leading-[0.85] tracking-tight md:text-[12vw]">
          TOOLBOX
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
              className="border-t border-ink/40 pt-6"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
                  N° {(gi + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl tracking-wider">
                  {group.label}
                </h3>
              </div>
              <p className="mt-1 font-jp text-xs text-mute">{group.labelJa}</p>

              <ul className="mt-6 flex flex-col gap-2 font-jp text-base">
                {group.items.map((item, i) => (
                  <li
                    key={item.name}
                    className="flex items-baseline gap-3 border-b border-ink/15 pb-2"
                  >
                    <span className="font-mono text-[10px] text-mute">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="flex-1">{item.name}</span>
                    {item.learning && (
                      <span className="inline-flex items-center gap-1 border border-accent/60 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
                        <span className="inline-block h-1 w-1 rounded-full bg-accent" />
                        Learning
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
