"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/lib/profile";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden border-t border-ink/60 bg-cream"
    >
      {/* Mobile: side-by-side image + meta, then full-width headline */}
      <div className="relative mx-auto max-w-[1400px] px-6 pb-20 pt-16 md:hidden">
        <SectionLabel no="002" label="About" />

        {/* Row 1: portrait + side meta */}
        <div className="mt-6 grid grid-cols-[3fr_2fr] gap-4">
          <motion.div
            style={{ y: yImage }}
            className="relative aspect-[4/5] overflow-hidden bg-cream-deep"
          >
            <Image
              src="/images/profile/ppl_img.jpg"
              alt="Maki Kashu"
              fill
              className="object-cover"
              sizes="60vw"
              priority
            />
            <div className="absolute left-2 top-2 bg-cream px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.25em] text-ink">
              N° 002
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between gap-3 py-1"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-mute">
              {profile.bio.eyebrow}
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-mute">
                  Born
                </p>
                <p className="font-display text-3xl leading-none">1996</p>
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-mute">
                  Based
                </p>
                <p className="font-jp text-sm leading-tight">Osaka, Japan</p>
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-mute">
                  Role
                </p>
                <p className="whitespace-nowrap font-jp text-sm font-bold leading-tight text-accent">
                  Frontend Engineer
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Body — numbered paragraphs */}
        <motion.div
          style={{ y: yText }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.6 }}
          className="relative mt-10"
        >
          <span
            aria-hidden="true"
            className="absolute -left-1 -top-6 font-display text-[5rem] leading-[0.5] text-accent/70"
          >
            &ldquo;
          </span>
          <div className="space-y-4 pl-6 font-jp text-[15px] leading-[1.9] text-ink-soft">
            {profile.bio.body.map((line, i) => (
              <p key={i} className="relative">
                <span className="absolute -left-6 top-1 font-mono text-[10px] text-mute">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                {line}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Tags — horizontal scrolling chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
            — Tags
          </p>
          <div className="-mx-6 mt-3 overflow-x-auto px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <ul className="flex w-max gap-2 pr-6">
              {profile.bio.tags.map((tag) => (
                <li
                  key={tag.label}
                  className="flex shrink-0 flex-col gap-1 border border-ink/30 bg-cream-soft px-4 py-3"
                >
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-mute">
                    {tag.label}
                  </span>
                  <span className="font-jp text-sm">{tag.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Closing — clean cream block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="mt-14 border-t border-ink/30 pt-8"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
            — Note
          </p>
          <p className="mt-3 font-serif-jp text-2xl italic leading-[1.5] text-ink">
            {profile.bio.closing}
          </p>
        </motion.div>
      </div>

      {/* Desktop: original 2-column grid */}
      <div className="mx-auto hidden max-w-[1400px] px-6 py-24 md:block md:px-10 md:py-32">
        <SectionLabel no="002" label="About" />

        <div className="mt-12 grid grid-cols-12 gap-6 md:gap-10">
          <motion.div
            style={{ y: yImage }}
            className="col-span-12 md:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-cream-deep">
              <Image
                src="/images/profile/ppl_img.jpg"
                alt="Maki Kashu"
                fill
                className="object-cover"
                sizes="40vw"
              />
              <div className="absolute inset-x-0 bottom-0 border-t border-cream/20 bg-ink/40 px-4 py-3 text-cream backdrop-blur-sm">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em]">
                  {profile.name} / {profile.location}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: yText }}
            className="col-span-12 flex flex-col gap-8 md:col-span-7 md:pl-10"
          >
            <div className="flex flex-col gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
                {profile.bio.eyebrow}
              </p>
              <h2 className="font-display text-[6.5vw] leading-[0.85] tracking-tight">
                {profile.bio.headline}
              </h2>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-mute">
                {profile.bio.lead}
              </p>
            </div>

            <div className="space-y-5 font-jp text-base leading-loose text-ink-soft md:text-lg">
              {profile.bio.body.map((line, i) => (
                <p
                  key={i}
                  className="border-l-2 border-ink/10 pl-4 transition-colors hover:border-accent"
                >
                  {line}
                </p>
              ))}
            </div>

            <dl className="grid grid-cols-1 gap-4 border-t border-ink/40 pt-6 sm:grid-cols-3">
              {profile.bio.tags.map((tag) => (
                <div key={tag.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
                    {tag.label}
                  </dt>
                  <dd className="mt-1 font-jp text-sm">{tag.value}</dd>
                </div>
              ))}
            </dl>

            <p className="font-serif-jp text-2xl italic text-accent md:text-3xl">
              {profile.bio.closing}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
