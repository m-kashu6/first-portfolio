"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/profile";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-ink/60 bg-ink text-cream"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-40">
        <SectionLabel no="007" label="Contact" />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="mt-6 font-display text-[18vw] leading-[0.85] tracking-tight text-cream md:text-[14vw]"
        >
          LET&rsquo;S
          <br />
          <span className="text-accent">TALK.</span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">
              Email
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-baseline gap-3 font-display text-xl tracking-wider md:text-4xl lg:text-5xl"
              data-hover
            >
              <span className="break-all border-b border-cream/40 pb-1 transition-colors group-hover:border-accent group-hover:text-accent">
                {profile.email}
              </span>
              <span className="shrink-0 font-mono text-sm transition-transform group-hover:translate-x-2 md:text-base">→</span>
            </a>
          </div>

          <div className="space-y-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">
                Location
              </p>
              <p className="mt-2 font-jp text-base">大阪 / Osaka, Japan</p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">
                Availability
              </p>
              <p className="mt-2 font-jp text-base leading-relaxed">
                フリーランス・業務委託・正社員、いずれもご相談ください。
                <br />
                Open to freelance, contract, and full-time.
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">
                Reply
              </p>
              <p className="mt-2 font-jp text-base">
                通常 1〜2 営業日以内にお返事します。
              </p>
            </div>
          </div>
        </div>

        {/* Big bottom marquee */}
        <div className="mt-24 overflow-hidden border-y border-cream/30 py-6">
          <div className="flex animate-marquee whitespace-nowrap">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="mr-12 flex shrink-0 items-center gap-12 font-display text-[6vw] tracking-wider text-cream/30"
              >
                <span>AVAILABLE</span>
                <span className="text-accent">●</span>
                <span>{profile.email}</span>
                <span className="text-accent">●</span>
                <span>OSAKA</span>
                <span className="text-accent">●</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
