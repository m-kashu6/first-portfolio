type Props = {
  no: string;
  label: string;
  align?: "left" | "right";
};

export function SectionLabel({ no, label, align = "left" }: Props) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-mute ${
        align === "right" ? "justify-end" : ""
      }`}
    >
      <span className="inline-block h-px w-8 bg-ink/40" />
      <span>N° {no}</span>
      <span>·</span>
      <span>{label}</span>
    </div>
  );
}
