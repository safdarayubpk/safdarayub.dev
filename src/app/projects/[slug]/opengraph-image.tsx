import { ImageResponse } from "@vercel/og";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";

export const runtime = "nodejs";
export const alt = "Project";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateImageMetadata() {
  return getProjectSlugs().map((slug) => ({
    id: slug,
    size,
    alt: `Project: ${slug}`,
    contentType,
  }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  const title = project?.title.split("—")[0].trim() || "Project";
  const subtitle = project?.title.split("—")[1]?.trim() || "";
  const oneLiner = project?.oneLiner || "";
  const techStack = project?.techStack || [];
  const category = project?.category || "";
  const isFlagship = project?.isFlagship || false;

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0B1120 0%, #1a2744 50%, #0B1120 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top section */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Labels */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
            {isFlagship && (
              <div
                style={{
                  padding: "6px 16px",
                  background: "rgba(234, 179, 8, 0.2)",
                  border: "1px solid rgba(234, 179, 8, 0.4)",
                  borderRadius: "16px",
                  color: "#fbbf24",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  display: "flex",
                }}
              >
                Platinum Tier
              </div>
            )}
            <div
              style={{
                padding: "6px 16px",
                background: "rgba(59, 130, 246, 0.15)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                borderRadius: "16px",
                color: "#60a5fa",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                display: "flex",
              }}
            >
              {category}
            </div>
          </div>
          {/* Title */}
          <div
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "12px",
              display: "flex",
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                fontSize: "24px",
                color: "#94a3b8",
                lineHeight: 1.4,
                marginBottom: "16px",
                display: "flex",
              }}
            >
              {subtitle}
            </div>
          )}
          <div
            style={{
              fontSize: "20px",
              color: "#64748b",
              lineHeight: 1.5,
              maxWidth: "800px",
              display: "flex",
            }}
          >
            {oneLiner}
          </div>
        </div>

        {/* Bottom section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          {/* Tech stack */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", maxWidth: "800px" }}>
            {techStack.slice(0, 6).map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "6px 14px",
                  background: "rgba(100, 116, 139, 0.15)",
                  border: "1px solid rgba(100, 116, 139, 0.3)",
                  borderRadius: "14px",
                  color: "#94a3b8",
                  fontSize: "14px",
                  display: "flex",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
          <div style={{ fontSize: "16px", color: "#475569", display: "flex" }}>
            safdarayub.dev
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
