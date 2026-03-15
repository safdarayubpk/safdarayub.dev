import { ImageResponse } from "@vercel/og";
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/blog";

export const runtime = "nodejs";
export const alt = "Blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateImageMetadata() {
  return getBlogSlugs().map((slug) => ({
    id: slug,
    size,
    alt: `Blog: ${slug}`,
    contentType,
  }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  const title = post?.frontmatter.title || "Blog Post";
  const tags = post?.frontmatter.tags || [];
  const readTime = post?.frontmatter.readTime || "";
  const date = post?.frontmatter.date
    ? new Date(post.frontmatter.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

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
          {/* Blog label */}
          <div
            style={{
              fontSize: "16px",
              color: "#3b82f6",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "24px",
              display: "flex",
            }}
          >
            Blog
          </div>
          {/* Title */}
          <div
            style={{
              fontSize: title.length > 60 ? "36px" : "44px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.3,
              display: "flex",
              maxWidth: "900px",
            }}
          >
            {title}
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
          {/* Tags */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {tags.slice(0, 3).map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 16px",
                  background: "rgba(59, 130, 246, 0.15)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  borderRadius: "16px",
                  color: "#60a5fa",
                  fontSize: "16px",
                  display: "flex",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          {/* Meta */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "4px",
            }}
          >
            <div style={{ fontSize: "16px", color: "#94a3b8", display: "flex" }}>
              {date} {readTime ? `· ${readTime}` : ""}
            </div>
            <div style={{ fontSize: "16px", color: "#475569", display: "flex" }}>
              Safdar Ayub
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
