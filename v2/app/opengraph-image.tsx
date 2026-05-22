import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Maki Kashu — Frontend Engineer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F4EFE6",
          color: "#1A1A1A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top meta row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 16,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#6B6760",
          }}
        >
          <span>N° 001 · PORTFOLIO 2026</span>
          <span>OSAKA, JAPAN</span>
        </div>

        {/* Big title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: 0.85,
            letterSpacing: "-0.02em",
          }}
        >
          <span
            style={{
              fontSize: 220,
              fontWeight: 900,
              color: "#1A1A1A",
            }}
          >
            MAKI
          </span>
          <span
            style={{
              fontSize: 220,
              fontWeight: 900,
              color: "#FF4B1F",
              fontStyle: "italic",
            }}
          >
            KASHU
          </span>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 18,
          }}
        >
          <span
            style={{
              letterSpacing: 4,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Frontend Engineer
          </span>
          <span
            style={{
              fontSize: 14,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#6B6760",
            }}
          >
            maki-kashu-pf.vercel.app
          </span>
        </div>

        {/* Accent block — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 260,
            height: 280,
            background: "#FF4B1F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: 200,
              fontWeight: 900,
              color: "#F4EFE6",
              opacity: 0.25,
              lineHeight: 1,
            }}
          >
            26
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
