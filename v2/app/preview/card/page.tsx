import Image from "next/image";

const PORTFOLIO_URL = "https://maki-kashu-pf.vercel.app";
const CODESTOCK_URL = "https://maki-k-codestock.netlify.app";
const EMAIL = "2018casmakikashu@gmail.com";
const LINE_ID = "@your-line-id"; // ← 後で差し替え

// QR via external service. 300x300 PNG, accent color foreground on cream
const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&color=1A1A1A&bgcolor=F4EFE6&margin=0&data=${encodeURIComponent(PORTFOLIO_URL)}`;

export default function CardPreviewPage() {
  return (
    <div className="min-h-screen bg-cream-deep">
      <div className="sticky top-0 z-50 flex items-center justify-between border-b-2 border-ink bg-cream px-4 py-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Business Card Preview · 91 × 55 mm
        </p>
        <a
          href="/"
          className="font-mono text-[10px] uppercase tracking-[0.3em] hover:text-accent"
        >
          ← Back
        </a>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-12">
        {/* Notes */}
        <p className="mb-8 max-w-2xl font-mono text-xs leading-relaxed text-mute">
          表面 + 裏面のプレビュー。実際の印刷サイズ (91 × 55mm) で表示しています。
          印刷する時はブラウザの「印刷」→「PDF として保存」→ 印刷所へ入稿。
        </p>

        <div className="flex flex-col items-center gap-12">
          {/* FRONT */}
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
              — Front
            </p>
            <CardFront />
          </div>

          {/* BACK */}
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
              — Back
            </p>
            <CardBack />
          </div>
        </div>

        {/* Print tips */}
        <div className="mt-16 max-w-2xl space-y-3 border-t border-ink/30 pt-6 font-jp text-sm leading-relaxed text-ink-soft">
          <h2 className="font-display text-xl">Print Tips</h2>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>標準サイズ 91 × 55mm で作成。ラクスル・プリスタ等の標準仕様で入稿可</li>
            <li>塗り足し (Bleed) はカードを実際に印刷する時に印刷所側で対応可能</li>
            <li>ブラウザの印刷ダイアログで「100%」「余白なし」を指定すると実寸出力</li>
            <li>QR コードは現在ポートフォリオURLを指す設定</li>
            <li><code className="font-mono">LINE_ID</code> は仮値 (@your-line-id)。実際のIDに差し替えてください</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function CardFront() {
  return (
    <div
      className="relative overflow-hidden bg-cream shadow-2xl"
      style={{ width: "91mm", height: "55mm" }}
    >
      {/* Top accent bar */}
      <div className="absolute inset-x-0 top-0 h-[6mm] bg-accent" />

      {/* N° marker */}
      <div className="absolute left-[5mm] top-[9mm] font-mono uppercase tracking-[0.3em] text-ink" style={{ fontSize: "6pt" }}>
        N° 001 · Portfolio 2026
      </div>

      {/* Vertical mark right */}
      <div
        className="absolute right-[3mm] top-1/2 -translate-y-1/2 origin-center -rotate-90 font-mono uppercase tracking-[0.4em] text-mute"
        style={{ fontSize: "5pt" }}
      >
        OSAKA — JPN
      </div>

      {/* Name block */}
      <div className="absolute left-[5mm] top-[16mm]">
        <p
          className="font-display leading-[0.85] tracking-tight text-ink"
          style={{ fontSize: "32pt" }}
        >
          MAKI
        </p>
        <p
          className="font-display italic leading-[0.85] tracking-tight text-accent"
          style={{ fontSize: "32pt" }}
        >
          KASHU
        </p>
      </div>

      {/* Kanji + role bottom */}
      <div className="absolute left-[5mm] bottom-[5mm] flex items-baseline gap-3">
        <p
          className="font-serif-jp italic text-ink"
          style={{ fontSize: "9pt" }}
        >
          賀集 真衣
        </p>
        <p
          className="font-mono uppercase tracking-[0.3em] text-mute"
          style={{ fontSize: "6pt" }}
        >
          Frontend Engineer
        </p>
      </div>

      {/* Dot accent */}
      <div className="absolute right-[6mm] bottom-[6mm] h-[3mm] w-[3mm] rounded-full bg-accent" />
    </div>
  );
}

function CardBack() {
  return (
    <div
      className="relative overflow-hidden bg-cream shadow-2xl"
      style={{ width: "91mm", height: "55mm" }}
    >
      {/* Top thin accent line */}
      <div className="absolute inset-x-0 top-0 h-[1.5mm] bg-accent" />

      {/* Left: contact info */}
      <div className="absolute left-[5mm] top-[5mm] flex flex-col gap-[3mm]">
        <div>
          <p
            className="font-mono uppercase tracking-[0.3em] text-mute"
            style={{ fontSize: "5pt" }}
          >
            Email
          </p>
          <p
            className="font-jp font-bold text-ink"
            style={{ fontSize: "7.5pt" }}
          >
            {EMAIL}
          </p>
        </div>

        <div>
          <p
            className="font-mono uppercase tracking-[0.3em] text-mute"
            style={{ fontSize: "5pt" }}
          >
            Portfolio
          </p>
          <p
            className="font-jp font-bold text-ink"
            style={{ fontSize: "7pt" }}
          >
            maki-kashu-pf.vercel.app
          </p>
        </div>

        <div>
          <p
            className="font-mono uppercase tracking-[0.3em] text-mute"
            style={{ fontSize: "5pt" }}
          >
            Code Stock
          </p>
          <p
            className="font-jp font-bold text-ink"
            style={{ fontSize: "7pt" }}
          >
            maki-k-codestock.netlify.app
          </p>
        </div>

        <div>
          <p
            className="font-mono uppercase tracking-[0.3em] text-mute"
            style={{ fontSize: "5pt" }}
          >
            LINE
          </p>
          <p
            className="font-jp font-bold text-ink"
            style={{ fontSize: "7.5pt" }}
          >
            {LINE_ID}
          </p>
        </div>
      </div>

      {/* Right: QR code */}
      <div className="absolute right-[5mm] top-[5mm] flex flex-col items-center gap-[1.5mm]">
        <div
          className="overflow-hidden border border-ink"
          style={{ width: "28mm", height: "28mm" }}
        >
          <Image
            src={QR_URL}
            alt="Portfolio QR code"
            width={300}
            height={300}
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>
        <p
          className="font-mono uppercase tracking-[0.3em] text-mute text-center"
          style={{ fontSize: "5pt" }}
        >
          ↑ Portfolio
        </p>
      </div>

      {/* Bottom tagline */}
      <div className="absolute inset-x-[5mm] bottom-[4mm] flex items-baseline justify-between">
        <p
          className="font-serif-jp italic text-accent"
          style={{ fontSize: "8pt" }}
        >
          丁寧に、長く使える Web を。
        </p>
        <p
          className="font-mono uppercase tracking-[0.3em] text-mute"
          style={{ fontSize: "5pt" }}
        >
          © 2026
        </p>
      </div>
    </div>
  );
}
