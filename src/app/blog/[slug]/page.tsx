import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts, getBlogSlugs } from "@/lib/blog";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { BlogPostHeader } from "@/components/blog/blog-post-header";
import { MDXRenderer } from "@/components/blog/mdx-renderer";
import { RelatedPosts } from "@/components/blog/related-posts";
import { ShareButtons } from "@/components/blog/share-buttons";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { ReadingProgress } from "@/components/blog/reading-progress";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      tags: post.frontmatter.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post || !post.frontmatter.published) {
    notFound();
  }

  // Find related posts by matching tags
  const allPosts = getBlogPosts();
  const relatedPosts = allPosts
    .filter(
      (p) =>
        p.slug !== slug &&
        p.frontmatter.tags.some((tag) => post.frontmatter.tags.includes(tag))
    )
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    datePublished: post.frontmatter.date,
    author: {
      "@type": "Person",
      name: post.frontmatter.author,
      url: "https://safdarayub.dev",
    },
    publisher: {
      "@type": "Person",
      name: "Safdar Ayub",
      url: "https://safdarayub.dev",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://safdarayub.dev/blog/${slug}`,
    },
  };

  return (
    <main className="py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <ReadingProgress />
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.frontmatter.title },
          ]}
        />

        <article>
          <BlogPostHeader frontmatter={post.frontmatter} />
          <TableOfContents />
          <MDXRenderer source={post.content} />
          <ShareButtons title={post.frontmatter.title} slug={slug} />
        </article>

        <RelatedPosts posts={relatedPosts} />
      </div>
    </main>
  );
}
