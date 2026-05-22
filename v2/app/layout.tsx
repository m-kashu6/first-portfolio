import type { Metadata } from "next";
import {
  Anton,
  Inter,
  JetBrains_Mono,
  Shippori_Mincho,
  Zen_Kaku_Gothic_New,
} from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Cursor } from "@/components/layout/Cursor";
import { Loader } from "@/components/layout/Loader";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const shippori = Shippori_Mincho({
  variable: "--font-shippori",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maki Kashu — Frontend Engineer",
  description:
    "1996 / Osaka. 元・美容部員、現・フロントエンドエンジニア Maki Kashu のポートフォリオ。",
  authors: [{ name: "Maki Kashu" }],
  openGraph: {
    title: "Maki Kashu — Frontend Engineer",
    description: "Portfolio of Maki Kashu — Frontend Engineer based in Osaka.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${anton.variable} ${inter.variable} ${jetbrains.variable} ${zenKaku.variable} ${shippori.variable}`}
    >
      <body className="bg-cream text-ink antialiased noise">
        <Loader />
        <SmoothScroll />
        <Cursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
