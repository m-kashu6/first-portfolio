"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { works, workCategories, type Work, type WorkCategory } from "@/lib/works";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WorkModal } from "@/components/sections/WorkModal";

export function Works() {
  const ref = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<WorkCategory | "all">("all");
  const [isMobile, setIsMobile] = useState(false);
  const [selected, setSelected] = useState<Work | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const filtered =
    filter === "all"
      ? works.filter((w) => w.category !== "practice")
      : works.filter((w) => w.category === filter);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-78%"]);

  const sectionHeight = isMobile
    ? "auto"
    : `${Math.max(filtered.length, 4) * 60 + 100}vh`;

  return (
    <section
      id="works"
      ref={ref}
      className="relative border-t border-ink/60 bg-cream-soft"
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 flex h-auto flex-col overflow-hidden md:h-[100svh]">
        <div className="flex items-end justify-between px-6 pt-20 md:px-10 md:pt-24">
          <SectionLabel no="003" label="Works" />
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-mute md:block">
            {filtered.length.toString().padStart(2, "0")} /{" "}
            {works.length.toString().padStart(2, "0")}
          </p>
        </div>

        <div className="px-6 pt-2 md:px-10">
          <h2 className="font-display text-[13vw] leading-[0.85] tracking-tight md:text-[10vw]">
            <span className="block md:inline">SELECTED</span>
            <span className="text-accent md:ml-[0.3em]">WORKS</span>
          </h2>

          <p className="mt-3 max-w-xl font-jp text-xs leading-relaxed text-mute md:text-sm">
            職業訓練校時代 (〜2023) の練習作品です。デザインとコーディングの基礎を学んだ時期の制作物。
            実務で書いたコードは <a href="#code-stock" className="border-b border-mute text-ink transition-colors hover:border-accent hover:text-accent">Code Stock</a> をご覧ください。
          </p>

          {/* Filter tabs */}
          <div className="mt-6 flex flex-wrap gap-2">
            {workCategories.map((cat) => {
              const active = filter === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setFilter(cat.value)}
                  className={`rounded-full border px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
                    active
                      ? "border-ink bg-ink text-cream"
                      : "border-ink/30 text-mute hover:border-ink"
                  }`}
                  data-hover
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards: swipe on mobile, scroll-driven on desktop */}
        {isMobile ? (
          <div className="mt-8 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
            <div className="flex gap-4 px-6">
              {filtered.map((work) => (
                <WorkCard
                  key={work.slug}
                  work={work}
                  onSelect={setSelected}
                  className="w-[78vw] snap-center"
                />
              ))}
              <MoreCard className="w-[60vw] snap-center" />
            </div>
          </div>
        ) : (
          <div className="relative mt-10 flex-1 overflow-hidden">
            <motion.div
              style={{ x }}
              className="flex h-full items-center gap-6 pl-6 pr-[10vw] md:gap-10 md:pl-10"
            >
              {filtered.map((work) => (
                <WorkCard
                  key={work.slug}
                  work={work}
                  onSelect={setSelected}
                  className="h-[68%] md:w-[36vw] lg:w-[28vw]"
                />
              ))}
              <MoreCard className="h-[68%] md:w-[24vw]" />
            </motion.div>
          </div>
        )}

        <div className="border-t border-ink/30 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-mute md:px-10">
          {isMobile ? (
            <span>← Swipe to navigate · Tap to read more</span>
          ) : (
            <span>↓ Scroll to navigate · Click for case study</span>
          )}
        </div>
      </div>

      <WorkModal work={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function WorkCard({
  work,
  onSelect,
  className = "",
}: {
  work: Work;
  onSelect: (work: Work) => void;
  className?: string;
}) {
  return (
    <article
      data-hover
      onClick={() => onSelect(work)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(work);
        }
      }}
      className={`group relative shrink-0 cursor-pointer ${className}`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-deep md:aspect-auto md:h-[78%]">
        <Image
          src={work.image}
          alt={work.imageAlt}
          fill
          sizes="(max-width: 768px) 78vw, 30vw"
          className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
        <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.3em] text-cream mix-blend-difference">
          {work.categoryLabel}
        </div>
        <div className="absolute bottom-4 right-4 font-display text-6xl text-cream mix-blend-difference md:text-7xl">
          {work.no}
        </div>
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/80 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cream transition-transform duration-300 group-hover:translate-y-0">
          Open case study →
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <h3 className="font-display text-xl tracking-wider md:text-2xl">
            {work.title}
          </h3>
          {work.titleJa && (
            <p className="mt-0.5 font-jp text-xs text-mute">{work.titleJa}</p>
          )}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
          {work.year}
        </span>
      </div>

      <p className="mt-3 line-clamp-2 font-jp text-xs leading-relaxed text-ink-soft">
        {work.description}
      </p>

      <ul className="mt-2 flex flex-wrap gap-1">
        {work.tech.map((t) => (
          <li
            key={t}
            className="border border-ink/30 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-mute"
          >
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}

function MoreCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center border border-dashed border-ink/40 aspect-[4/5] md:aspect-auto ${className}`}
    >
      <p className="text-center font-jp text-sm text-mute">
        <span className="block font-display text-2xl tracking-wider text-ink">
          More soon
        </span>
        次の作品、準備中。
      </p>
    </div>
  );
}
