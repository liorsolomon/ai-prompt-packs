import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Prompt Packs — Expert Prompts for Business Professionals";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#030712",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            background: "rgba(139,92,246,0.15)",
            border: "1px solid rgba(139,92,246,0.4)",
            borderRadius: "999px",
            padding: "8px 20px",
            fontSize: "18px",
            fontWeight: 600,
            color: "#c4b5fd",
            marginBottom: "32px",
          }}
        >
          AI Prompt Packs
        </div>
        <div
          style={{
            fontSize: "60px",
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.15,
            marginBottom: "24px",
          }}
        >
          Stop wasting 2 hours a day{" "}
          <span style={{ color: "#a78bfa" }}>writing the same prompts.</span>
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#9ca3af",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Plug-and-play AI prompt packs for marketers, founders, and business professionals.
        </div>
        <div
          style={{
            marginTop: "40px",
            fontSize: "20px",
            color: "#6b7280",
          }}
        >
          prompts.3vo.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
