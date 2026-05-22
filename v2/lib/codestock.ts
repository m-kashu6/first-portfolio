export type CodeStockItem = {
  slug: string;
  no: string;
  title: string;
  category: "CSS" | "CSS/JS" | "JS";
  description: string;
  demoUrl: string;
  local: boolean;
};

const NETLIFY_BASE = "https://maki-k-codestock.netlify.app";

export const codeStockItems: CodeStockItem[] = [
  {
    slug: "jo047a2dokdr",
    no: "01",
    title: "画像を斜め下から表示させるアニメーション",
    category: "CSS",
    description: "clip-path を使って、画像を斜め下からスッと現れるアニメーションに。",
    demoUrl: `${NETLIFY_BASE}/jo047a2dokdr`,
    local: false,
  },
  {
    slug: "ruqkxa6frc",
    no: "02",
    title: "花びらを上から散らすアニメーション",
    category: "CSS",
    description: "花びらを上から舞い散らせる、季節感のあるアニメーション。",
    demoUrl: `${NETLIFY_BASE}/ruqkxa6frc`,
    local: false,
  },
  {
    slug: "6gj8eybip",
    no: "03",
    title: "スクロール時にぼかし→クリアに切り替わる",
    category: "CSS/JS",
    description: "スクロール位置に応じて、ぼかし → クリアに変わるテキスト/画像表現。",
    demoUrl: `${NETLIFY_BASE}/6gj8eybip`,
    local: false,
  },
  {
    slug: "fnxfh8m3qoz7",
    no: "04",
    title: "画像をぷよぷよ拡大縮小させる",
    category: "CSS",
    description: "アクセント要素として効く、柔らかい拡大縮小アニメーション。",
    demoUrl: `${NETLIFY_BASE}/fnxfh8m3qoz7`,
    local: false,
  },
  {
    slug: "d7ekdwqtb",
    no: "05",
    title: "画像を上下に動かすアニメーション",
    category: "CSS",
    description: "ふわっと上下に揺れる、リラックスした動きの装飾アニメーション。",
    demoUrl: `${NETLIFY_BASE}/d7ekdwqtb`,
    local: false,
  },
  {
    slug: "zlr7lemwe2",
    no: "06",
    title: "画像をカタカタ動かすアニメーション",
    category: "CSS",
    description: "カタカタ振動する、ユーモアのある軽い動き。",
    demoUrl: `${NETLIFY_BASE}/zlr7lemwe2`,
    local: false,
  },
  {
    slug: "p_x9-1ox202v",
    no: "07",
    title: "画像を振り子のように動かす",
    category: "CSS",
    description: "transform-origin を活かして、振り子のように左右に揺らす。",
    demoUrl: `${NETLIFY_BASE}/p_x9-1ox202v`,
    local: false,
  },
  {
    slug: "foc50onjvm",
    no: "08",
    title: "一時停止ボタンのあるスライダー",
    category: "JS",
    description:
      "再生/一時停止ボタンとプログレスインジケーターを備えたスライダー。アクセシビリティ配慮。",
    demoUrl: `${NETLIFY_BASE}/foc50onjvm/`,
    local: false,
  },
  {
    slug: "33lc3k7sr2",
    no: "09",
    title: "付箋風見出し",
    category: "CSS",
    description: "立体感のある付箋風の見出し装飾。クライアントワークで重宝。",
    demoUrl: `${NETLIFY_BASE}/33lc3k7sr2`,
    local: false,
  },
  {
    slug: "iyf6f5koxw",
    no: "10",
    title: "clip-path で画像をひし形にくりぬき影を作る",
    category: "CSS",
    description: "clip-path と疑似要素を組み合わせて、ひし形にくりぬいた画像 + 影。",
    demoUrl: `${NETLIFY_BASE}/iyf6f5koxw`,
    local: false,
  },
];
