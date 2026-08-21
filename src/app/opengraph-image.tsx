import { ImageResponse } from "next/og";

export const alt = "Madhur Jain, AI, data, and growth product manager";
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
          background: "#ffffff",
          color: "#111827",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ color: "#2563eb", display: "flex", fontSize: 28, fontWeight: 700 }}>
          Madhur Jain · AI, data & growth products
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", maxWidth: "980px" }}>
          <div style={{ display: "flex", fontSize: 70, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            AI, consumer, and growth products that move the business.
          </div>
          <div style={{ color: "#52606d", display: "flex", fontSize: 30, lineHeight: 1.35 }}>
            Portfolio covering PRISM, SplashLearn, Honasa, and Coach.
          </div>
        </div>
        <div style={{ borderTop: "2px solid #111827", display: "flex", paddingTop: "20px", width: "100%" }}>
          www.madhurjain.in
        </div>
      </div>
    ),
    size,
  );
}
