import { ImageResponse } from "next/og";

export const alt = "Madhur Jain, product manager for growth, pricing, and AI";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "flex-start",
          background: "#050505",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ color: "#d4d4d4", display: "flex", fontSize: 28, fontWeight: 700 }}>
          Madhur Jain · Product / Growth / AI
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", maxWidth: "980px" }}>
          <div style={{ display: "flex", fontSize: 70, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Product decisions teams can build and businesses can measure.
          </div>
          <div style={{ color: "#a1a1aa", display: "flex", fontSize: 30, lineHeight: 1.35 }}>
            Customer insight, commercial judgment, data fluency, and hands-on AI depth.
          </div>
        </div>
        <div style={{ borderTop: "2px solid #52525b", display: "flex", paddingTop: "20px", width: "100%" }}>
          www.madhurjain.in
        </div>
      </div>
    ),
    size,
  );
}
