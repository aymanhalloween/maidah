import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Maidah";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FFFFFF",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: "#999999",
            marginBottom: 16,
          }}
        >
          مائدة
        </div>
        <div
          style={{
            fontSize: 72,
            color: "#111111",
            fontWeight: 400,
            letterSpacing: "-0.02em",
          }}
        >
          Maidah
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#666666",
            marginTop: 24,
            maxWidth: 600,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          A permanent endowment fund investing in the people and institutions
          the Muslim world still needs.
        </div>
      </div>
    ),
    { ...size }
  );
}
