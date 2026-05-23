import { HeroVariantA } from "@/components/sections/hero-variants/HeroVariantA";
import { HeroVariantB } from "@/components/sections/hero-variants/HeroVariantB";
import { HeroVariantC } from "@/components/sections/hero-variants/HeroVariantC";
import { HeroVariantF } from "@/components/sections/hero-variants/HeroVariantF";

const variants = [
  { id: "A", label: "Risograph 重ね刷り", component: HeroVariantA },
  { id: "B", label: "Halftone ドット背景", component: HeroVariantB },
  { id: "C", label: "写真コラージュ風", component: HeroVariantC },
  { id: "F", label: "波形下辺", component: HeroVariantF },
];

export default function HeroPreviewPage() {
  return (
    <div className="bg-cream">
      <div className="sticky top-0 z-50 flex items-center justify-between border-b-2 border-ink bg-cream px-4 py-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Hero Variants Preview
        </p>
        <a
          href="/"
          className="font-mono text-[10px] uppercase tracking-[0.3em] hover:text-accent"
        >
          ← Back
        </a>
      </div>
      {variants.map((v) => {
        const Variant = v.component;
        return (
          <section key={v.id} className="relative border-b-2 border-ink">
            <div className="sticky top-12 z-40 bg-ink px-4 py-2 text-cream">
              <p className="font-mono text-xs uppercase tracking-[0.3em]">
                Variant {v.id} · {v.label}
              </p>
            </div>
            <Variant />
          </section>
        );
      })}
    </div>
  );
}
