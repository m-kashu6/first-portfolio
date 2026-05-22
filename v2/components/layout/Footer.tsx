"use client";

import { useEffect, useState } from "react";

export function Footer() {
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const date = new Date();
      const time = date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Tokyo",
      });
      setNow(time);
    };
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <footer
      className="relative z-10 border-t border-ink/60 bg-cream-deep px-6 py-10 md:px-10 md:py-12"
      style={{ paddingBottom: "max(2.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl tracking-wider md:text-5xl">
            MAKI KASHU
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-mute">
            Frontend Engineer · Osaka
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-mute">
            Osaka — {now || "--:--:--"}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
            © {new Date().getFullYear()} Maki Kashu — Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
