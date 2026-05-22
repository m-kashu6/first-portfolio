export type CareerEvent = {
  year: string;
  period?: string;
  title: string;
  org?: string;
  detail?: string;
};

export const career: CareerEvent[] = [
  {
    year: "1996",
    title: "Born in Osaka",
    detail: "大阪生まれ。",
  },
  {
    year: "2015",
    period: "2015 – 2017",
    title: "Live abroad",
    org: "Philippines / Australia / U.S.",
    detail: "3カ国・約2年の海外滞在。英語は中上級レベル。",
  },
  {
    year: "2018",
    period: "2018 – 2021",
    title: "Beauty Advisor",
    org: "株式会社ザ・ギンザ",
    detail: "美容部員として3年間、人と「触れる」仕事に従事。",
  },
  {
    year: "2023",
    period: "2023 (4 mo.)",
    title: "Vocational training",
    org: "Web デザイン / フロントエンド",
    detail: "職業訓練校でデザインとコーディングを学ぶ。",
  },
  {
    year: "2023",
    period: "2023.12 – 2025.04",
    title: "Frontend Engineer",
    org: "ドーン株式会社",
    detail:
      "コーポレートサイト・LPの実装、アクセシビリティ診断と改善指示などに携わる。",
  },
  {
    year: "2025",
    period: "2025 –",
    title: "Frontend & Barista",
    detail:
      "フロントエンドエンジニアとしての仕事を主軸に、副業でカフェのバリスタとしても働いています。",
  },
];
