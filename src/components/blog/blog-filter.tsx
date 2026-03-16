"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogPost } from "@/types/blog";

interface BlogFilterProps {
  posts: BlogPost[];
  tags: string[];
}

export function BlogFilter({ posts, tags }: BlogFilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const active = searchParams.get("tag") || "All";

  const setActive = (tag: string) => {
    if (tag === "All") {
      router.push("/blog", { scroll: false });
    } else {
      router.push(`/blog?tag=${encodeURIComponent(tag)}`, { scroll: false });
    }
  };

  const filtered =
    active === "All"
      ? posts
      : posts.filter((p) => p.frontmatter.tags.includes(active));

  return (
    <>
      {/* Filter tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        <Button
          variant={active === "All" ? "default" : "outline"}
          size="sm"
          onClick={() => setActive("All")}
          aria-pressed={active === "All"}
          className="rounded-full"
        >
          All
        </Button>
        {tags.map((tag) => (
          <Button
            key={tag}
            variant={active === tag ? "default" : "outline"}
            size="sm"
            onClick={() => setActive(tag)}
            aria-pressed={active === tag}
            className="rounded-full"
          >
            {tag}
          </Button>
        ))}
      </div>

      {/* Blog cards */}
      <div className="grid grid-cols-1 gap-6">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          No posts with this tag yet.
        </p>
      )}
    </>
  );
}
