import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Rss } from "lucide-react";
import { BlogFilter } from "@/components/blog/blog-filter";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getBlogPosts, getAllTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on Agentic AI, full-stack development, and the journey from military to tech.",
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const tags = getAllTags();

  return (
    <main className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Page hero */}
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-3">Blog</h1>
            <p className="text-muted-foreground text-lg">
              Insights on Agentic AI, full-stack development, and my journey
              from military to tech
            </p>
          </div>
          <Link
            href="/blog/rss.xml"
            className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5 shrink-0"
          >
            <Rss className="h-4 w-4" />
            Subscribe via RSS
          </Link>
        </div>

        {posts.length > 0 ? (
          <Suspense fallback={<div className="py-12 text-center text-muted-foreground">Loading posts...</div>}>
            <BlogFilter posts={posts} tags={tags} />
          </Suspense>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Blog posts coming soon. Stay tuned for articles on AI engineering,
              MCP servers, and spec-driven development.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
