import { ImageResponse } from "@vercel/og";

export const runtime = "nodejs";
export const alt = "Safdar Ayub — AI Engineer & Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0B1120 0%, #1a2744 50%, #0B1120 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent line */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#3b82f6",
            marginBottom: "32px",
            borderRadius: "2px",
            display: "flex",
          }}
        />
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "16px",
            display: "flex",
          }}
        >
          Safdar Ayub
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            textAlign: "center",
            marginBottom: "40px",
            display: "flex",
          }}
        >
          AI Engineer & Full Stack Developer
        </div>
        {/* Tech pills */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {["Agentic AI", "MCP Servers", "Next.js", "Cloud-Native", "Python"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 20px",
                  background: "rgba(59, 130, 246, 0.15)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  borderRadius: "20px",
                  color: "#60a5fa",
                  fontSize: "18px",
                  display: "flex",
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>
        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "60px",
            fontSize: "18px",
            color: "#475569",
            display: "flex",
          }}
        >
          safdarayub.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
