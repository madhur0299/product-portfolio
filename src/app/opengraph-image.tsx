import { ImageResponse } from "next/og";

export const alt = "Madhur Jain, product manager for growth, pricing, and AI";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const proof = [
  ["85%", "NL-to-SQL accuracy"],
  ["+10%", "Booking conversion"],
  ["~$21M", "D2C run rate owned"],
];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px 72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ color: "#ffffff", display: "flex", fontSize: 40, fontWeight: 700, letterSpacing: "-0.01em" }}>
            Madhur Jain
          </div>
          <div style={{ color: "#a1a1aa", display: "flex", fontSize: 24, letterSpacing: "0.06em" }}>
            PRODUCT / GROWTH / AI
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 58, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.08, maxWidth: "1000px" }}>
          I ship AI products and define how they get judged.
        </div>

        <div style={{ borderTop: "1px solid #3f3f46", display: "flex", gap: "72px", paddingTop: "26px", width: "100%" }}>
          {proof.map(([value, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ color: "#ffffff", display: "flex", fontSize: 40, fontWeight: 700 }}>{value}</div>
              <div style={{ color: "#a1a1aa", display: "flex", fontSize: 21 }}>{label}</div>
            </div>
          ))}
          <div style={{ color: "#71717a", display: "flex", fontSize: 21, marginLeft: "auto", alignItems: "flex-end" }}>
            madhurjain.in
          </div>
        </div>
      </div>
    ),
    size,
  );
}
