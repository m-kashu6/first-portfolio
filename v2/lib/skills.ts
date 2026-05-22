export type SkillItem = {
  name: string;
  learning?: boolean;
};

export type SkillGroup = {
  label: string;
  labelJa: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Design",
    labelJa: "デザイン",
    items: [
      { name: "Illustrator" },
      { name: "Photoshop" },
      { name: "Figma" },
      { name: "Adobe XD" },
    ],
  },
  {
    label: "Frontend",
    labelJa: "フロントエンド",
    items: [
      { name: "HTML" },
      { name: "CSS / Sass" },
      { name: "JavaScript" },
      { name: "TypeScript", learning: true },
      { name: "React", learning: true },
      { name: "Next.js", learning: true },
      { name: "Tailwind", learning: true },
    ],
  },
  {
    label: "Tooling & Misc",
    labelJa: "ツール / その他",
    items: [
      { name: "Git / GitHub" },
      { name: "Astro", learning: true },
      { name: "Netlify / Vercel" },
      { name: "Accessibility" },
    ],
  },
  {
    label: "Language",
    labelJa: "言語",
    items: [
      { name: "日本語 (Native)" },
      { name: "English (Intermediate+)" },
    ],
  },
];
