import { ImageResponse } from "@vercel/og";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B1120",
          borderRadius: "36px",
          fontFamily: "sans-serif",
        }}
      >
        <span
          style={{
            fontSize: "120px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-4px",
            display: "flex",
          }}
        >
          S
        </span>
        <span
          style={{
            fontSize: "120px",
            fontWeight: 700,
            color: "#2563EB",
            display: "flex",
            marginLeft: "-4px",
          }}
        >
          .
        </span>
      </div>
    ),
    { ...size }
  );
}
