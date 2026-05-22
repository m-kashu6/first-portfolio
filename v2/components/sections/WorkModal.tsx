"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Work } from "@/lib/works";

type Props = {
  work: Work | null;
  onClose: () => void;
};

export function WorkModal({ work, onClose }: Props) {
  useEffect(() => {
    if (!work) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [work, onClose]);

  return (
    <AnimatePresence>
      {work && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[170] bg-ink/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal panel — slides in from right */}
          <motion.div
            key="modal"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.85, 0, 0.15, 1], duration: 0.6 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="work-modal-title"
            data-lenis-prevent
            className="fixed inset-y-0 right-0 z-[180] flex w-full flex-col bg-cream md:w-[80vw] lg:w-[70vw]"
          >
            {/* Header bar (sticky) */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink/30 bg-cream/95 px-6 py-4 backdrop-blur md:px-10">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
                <span className="bg-ink px-2 py-1 text-cream">N° {work.no}</span>
                <span>{work.categoryLabel}</span>
                <span>·</span>
                <span>{work.year}</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="閉じる"
                className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink transition-colors hover:text-accent"
                data-hover
              >
                <span className="hidden md:inline">Close</span>
                <span className="text-xl leading-none">✕</span>
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto" data-lenis-prevent>
              <div className="mx-auto max-w-[1000px] px-6 py-10 md:px-10 md:py-14">
                {/* Title */}
                <h2
                  id="work-modal-title"
                  className="font-display text-[14vw] leading-[0.85] tracking-tight md:text-[7vw]"
                >
                  {work.title}
                </h2>
                {work.titleJa && (
                  <p className="mt-3 font-serif-jp text-lg italic text-mute md:text-xl">
                    {work.titleJa}
                  </p>
                )}

                <p className="mt-6 font-jp text-base leading-relaxed text-ink-soft md:text-lg">
                  {work.description}
                </p>

                {/* Hero image */}
                <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden bg-cream-deep">
                  <Image
                    src={work.image}
                    alt={work.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 70vw"
                    className="object-cover"
                  />
                </div>

                {/* CTA buttons */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {work.demoUrl && (
                    <a
                      href={work.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-cream transition-colors hover:bg-accent"
                      data-hover
                    >
                      <span>Open Demo</span>
                      <span className="transition-transform group-hover:translate-x-1">↗</span>
                    </a>
                  )}
                  <div className="inline-flex flex-wrap items-center gap-1">
                    {work.tech.map((t) => (
                      <span
                        key={t}
                        className="border border-ink/30 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-mute"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case study */}
                {work.caseStudy ? (
                  <div className="mt-16 space-y-12">
                    <CaseSection label="Overview" eyebrow="01">
                      <p className="font-jp text-base leading-loose text-ink-soft md:text-lg">
                        {work.caseStudy.overview}
                      </p>
                    </CaseSection>

                    {work.caseStudy.challenge && (
                      <CaseSection label="Challenge" eyebrow="02">
                        <p className="whitespace-pre-line font-jp text-base leading-loose text-ink-soft md:text-lg">
                          {work.caseStudy.challenge}
                        </p>
                      </CaseSection>
                    )}

                    {work.caseStudy.approach && (
                      <CaseSection label="Approach" eyebrow="03">
                        <p className="whitespace-pre-line font-jp text-base leading-loose text-ink-soft md:text-lg">
                          {work.caseStudy.approach}
                        </p>
                      </CaseSection>
                    )}

                    {work.caseStudy.outcome && (
                      <CaseSection label="Outcome" eyebrow="04">
                        <p className="font-jp text-base leading-loose text-ink-soft md:text-lg">
                          {work.caseStudy.outcome}
                        </p>
                      </CaseSection>
                    )}

                    <CaseSection label="Role" eyebrow="05">
                      <ul className="flex flex-wrap gap-2">
                        {work.caseStudy.role.map((r) => (
                          <li
                            key={r}
                            className="border border-ink/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]"
                          >
                            {r}
                          </li>
                        ))}
                      </ul>
                    </CaseSection>

                    {work.caseStudy.highlights && work.caseStudy.highlights.length > 0 && (
                      <CaseSection label="Highlights" eyebrow="06">
                        <ul className="space-y-2">
                          {work.caseStudy.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="flex gap-3 border-l-2 border-accent/60 pl-4 font-jp text-sm leading-relaxed text-ink-soft md:text-base"
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
                      </CaseSection>
                    )}

                    {work.caseStudy.gallery && work.caseStudy.gallery.length > 0 && (
                      <CaseSection label="Gallery" eyebrow="07">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          {work.caseStudy.gallery.map((img, i) => (
                            <div
                              key={i}
                              className="relative aspect-[4/3] overflow-hidden bg-cream-deep"
                            >
                              <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 35vw"
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </CaseSection>
                    )}
                  </div>
                ) : (
                  <div className="mt-16 border-t border-ink/20 pt-8">
                    <p className="font-jp text-sm text-mute">
                      この作品のケーススタディは準備中です。
                    </p>
                  </div>
                )}

                {/* Footer / sign-off */}
                <div className="mt-20 flex items-center justify-between border-t border-ink/30 pt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
                  <span>End of Case Study</span>
                  <button
                    type="button"
                    onClick={onClose}
                    className="transition-colors hover:text-accent"
                    data-hover
                  >
                    ← Back to Works
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function CaseSection({
  label,
  eyebrow,
  children,
}: {
  label: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-[120px_1fr] md:gap-10">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
          {eyebrow}
        </p>
        <h3 className="mt-1 font-display text-2xl tracking-wider">{label}</h3>
      </div>
      <div>{children}</div>
    </section>
  );
}
