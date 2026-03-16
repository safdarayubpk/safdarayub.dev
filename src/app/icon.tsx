import { ImageResponse } from "@vercel/og";

export const runtime = "nodejs";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "6px",
          fontFamily: "sans-serif",
        }}
      >
        <span
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-1px",
            display: "flex",
          }}
        >
          S
        </span>
        <span
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#2563EB",
            display: "flex",
            marginLeft: "-1px",
          }}
        >
          .
        </span>
      </div>
    ),
    { ...size }
  );
}
