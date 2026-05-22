export type WorkCategory = "graduation" | "original" | "practice";

export type CaseStudy = {
  overview: string;
  challenge?: string;
  approach?: string;
  outcome?: string;
  role: string[];
  highlights?: string[];
  gallery?: { src: string; alt: string }[];
};

export type Work = {
  slug: string;
  no: string;
  category: WorkCategory;
  categoryLabel: string;
  title: string;
  titleJa?: string;
  year: string;
  description: string;
  tech: string[];
  image: string;
  imageAlt: string;
  demoUrl?: string;
  caseStudy?: CaseStudy;
};

export const works: Work[] = [
  {
    slug: "star-planets",
    no: "01",
    category: "graduation",
    categoryLabel: "Graduation",
    title: "Star Planets",
    titleJa: "美容室サイト 卒業制作",
    year: "2023",
    description:
      "職業訓練学校の卒業制作として制作した、架空の美容室のブランドサイト。",
    tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    image: "/images/works/starplanets-new.png",
    imageAlt: "Star Planets ブランドサイト スクリーンショット",
    demoUrl: "https://sbkunren.xsrv.jp/202306webp/07/07_makikashu/index.html",
    caseStudy: {
      overview:
        "職業訓練学校（Web デザイン / フロントエンドコース）の卒業制作として制作。 架空の美容室「Star Planets」のブランドサイトを、デザインからコーディングまで一人で担当した。",
      challenge:
        "卒業制作にあたって、自分が一番好きな業種である美容業界を題材に「行ってみたい」と思わせる空気感を作りたかった。 設計からコーディングまで一気通貫でやる、初めての本格的な制作だった。",
      approach:
        "・写真と余白でブランドの空気感を作る\n・スクロールに合わせたフェードインで、訪問者を案内する流れに\n・Photoshop / Illustrator でビジュアル素材を作り、HTML / CSS / jQuery で実装",
      outcome:
        "この制作を通して「デザインとコーディングは一人でできる」という自信を得た。 後にエンジニアとしてのキャリアにつながる、原点の作品。",
      role: ["Design", "Frontend"],
      highlights: [
        "Photoshop / Illustrator でのビジュアル素材作成",
        "jQuery によるフェードイン・スムーズスクロール",
        "卒業制作 (職業訓練校 Web デザインコース)",
      ],
    },
  },
  {
    slug: "koyuki-art",
    no: "02",
    category: "original",
    categoryLabel: "Original",
    title: "Koyuki.art",
    titleJa: "アーティストサイト 練習制作",
    year: "2023",
    description:
      "イラストレーター Koyuki Nishi のための、ギャラリー型サイトの練習制作。",
    tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    image: "/images/works/koyuki-new.png",
    imageAlt: "Koyuki.art サイト スクリーンショット (新デザイン)",
    demoUrl: "/legacy/koyuki/index.html",
    caseStudy: {
      overview:
        "知人のイラストレーター Koyuki Nishi を題材にした、ギャラリー型のポートフォリオ練習制作。 JOJO 風・友人・動物・OTHER の4カテゴリでイラストを並べる構成。",
      approach:
        "・ブランドカラーの緑を背景に置いて統一感を作る\n・グリッドレイアウトで作品を並べる\n・クリックで原寸を別タブで開くシンプルな構造",
      role: ["Design", "Frontend"],
      highlights: [
        "ress.min.css ベースの軽量 CSS リセット",
        "Archivo Black + Zen Kaku Gothic New の混植",
        "lazy loading でモバイル体験を改善 (v2 リニューアル時に追加)",
      ],
    },
  },
  {
    slug: "stand4u",
    no: "03",
    category: "practice",
    categoryLabel: "Coding Practice",
    title: "Banner Mock",
    titleJa: "バナー模写",
    year: "2023",
    description: "バナーの模写。Photoshop / Illustrator での再現練習。",
    tech: ["Photoshop", "Illustrator"],
    image: "/images/works/stand4u.jpg",
    imageAlt: "バナー模写",
  },
  {
    slug: "banner-01",
    no: "04",
    category: "original",
    categoryLabel: "Original",
    title: "Banner Series",
    titleJa: "バナー制作",
    year: "2023",
    description: "Photoshop / Illustrator で制作したバナーシリーズ。",
    tech: ["Photoshop", "Illustrator"],
    image: "/images/works/banner01.jpg",
    imageAlt: "バナー制作 #01",
  },
  {
    slug: "banner-02",
    no: "05",
    category: "original",
    categoryLabel: "Original",
    title: "Banner Series II",
    titleJa: "バナー制作 #2",
    year: "2023",
    description: "ターゲットを変えたバナー制作の続編。色とフォントで雰囲気を変える。",
    tech: ["Photoshop", "Illustrator"],
    image: "/images/works/banner02.png",
    imageAlt: "バナー制作 #02",
  },
  {
    slug: "my-work-01",
    no: "06",
    category: "original",
    categoryLabel: "Original",
    title: "Original Work",
    titleJa: "自主制作",
    year: "2023",
    description: "自主制作のオリジナルビジュアル。",
    tech: ["Photoshop", "Illustrator"],
    image: "/images/works/my-work01.jpg",
    imageAlt: "自主制作 #01",
  },
  {
    slug: "cafe-site",
    no: "07",
    category: "practice",
    categoryLabel: "Coding Practice",
    title: "Cafe Site",
    titleJa: "カフェサイト 模写",
    year: "2023",
    description: "実在カフェサイトの模写。レスポンシブとレイアウトの理解を目的に。",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/works/cafe-new.png",
    imageAlt: "Cafe Site 模写スクリーンショット",
    demoUrl: "https://sbkunren.xsrv.jp/202306webp//07/portfolio-material/CAFE-practice-hp/index.html",
  },
  {
    slug: "recipe-site",
    no: "08",
    category: "practice",
    categoryLabel: "Coding Practice",
    title: "Recipe Site",
    titleJa: "レシピサイト 模写",
    year: "2023",
    description: "レシピサイトの模写。グリッドとカードレイアウトの練習。",
    tech: ["HTML", "CSS"],
    image: "/images/works/recipe-new.png",
    imageAlt: "Recipe Site 模写スクリーンショット",
    demoUrl: "https://sbkunren.xsrv.jp/202306webp/07/portfolio-material/recipi%20hp/index.html",
  },
  {
    slug: "photobook",
    no: "09",
    category: "practice",
    categoryLabel: "Coding Practice",
    title: "Photobook",
    titleJa: "写真集風 LP 模写",
    year: "2023",
    description: "写真集の世界観を持つ縦長 LP の模写。大きなビジュアル使い。",
    tech: ["HTML", "CSS"],
    image: "/images/works/photobook-new.png",
    imageAlt: "Photobook LP 模写スクリーンショット",
    demoUrl: "https://sbkunren.xsrv.jp/202306webp/07/portfolio-material/HP1/index.html",
  },
  {
    slug: "two-column",
    no: "10",
    category: "practice",
    categoryLabel: "Coding Practice",
    title: "2 Column Layout",
    titleJa: "2カラムレイアウト 模写",
    year: "2023",
    description: "2カラムレイアウトの基礎模写。",
    tech: ["HTML", "CSS"],
    image: "/images/works/twocol-new.png",
    imageAlt: "2カラムレイアウト 模写",
    demoUrl: "https://sbkunren.xsrv.jp/202306webp//07/portfolio-material/2rayout-hp/index.html",
  },
];

export const workCategories: { value: WorkCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "graduation", label: "Graduation" },
  { value: "original", label: "Original" },
  { value: "practice", label: "Practice" },
];
