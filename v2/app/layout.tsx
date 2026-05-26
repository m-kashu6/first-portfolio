import type { Metadata, Viewport } from "next";
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

const SITE_URL = "https://maki-kashu-pf.vercel.app";
const SITE_NAME = "Maki Kashu — Frontend Engineer Portfolio";
const DESCRIPTION =
  "1996年大阪生まれ。元・美容部員、現・フロントエンドエンジニア Maki Kashu のポートフォリオサイト。Next.js / React / Tailwind / TypeScript を使った Web 制作を中心に、デザインから実装まで。";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4EFE6" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1A1A" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s · Maki Kashu",
  },
  description: DESCRIPTION,
  applicationName: "Maki Kashu Portfolio",
  authors: [{ name: "Maki Kashu", url: SITE_URL }],
  creator: "Maki Kashu",
  publisher: "Maki Kashu",
  keywords: [
    "Maki Kashu",
    "賀集真衣",
    "Frontend Engineer",
    "フロントエンドエンジニア",
    "Portfolio",
    "ポートフォリオ",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind",
    "Web Design",
    "大阪",
    "Osaka",
  ],
  category: "portfolio",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      ja: "/",
    },
  },
  openGraph: {
    title: SITE_NAME,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "website",
    // opengraph-image.tsx is auto-detected
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DESCRIPTION,
    creator: "@roba_illust",
    // twitter-image (or opengraph-image fallback) is auto-detected
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "-__7o59fjhlIfptUQ4ziH2Z530riGdcgpDIU6UDkpLQ",
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Maki Kashu",
  alternateName: "賀集 真衣",
  description:
    "1996年大阪生まれのフロントエンドエンジニア。元美容部員。Web デザインとコーディングを軸に活動。",
  jobTitle: "Frontend Engineer",
  url: SITE_URL,
  image: `${SITE_URL}/images/profile/ppl_img.jpg`,
  email: "mailto:2018casmakikashu@gmail.com",
  birthDate: "1996",
  birthPlace: {
    "@type": "Place",
    name: "Osaka, Japan",
  },
  homeLocation: {
    "@type": "Place",
    name: "Osaka, Japan",
  },
  knowsLanguage: ["ja", "en"],
  knowsAbout: [
    "Frontend Engineering",
    "Web Design",
    "Next.js",
    "React",
    "TypeScript",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Accessibility",
  ],
  sameAs: ["https://maki-k-codestock.netlify.app/"],
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "ja",
  description: DESCRIPTION,
  author: {
    "@type": "Person",
    name: "Maki Kashu",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
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
