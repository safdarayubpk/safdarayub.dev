import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "@/types/blog";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 pt-10 border-t border-border">
      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post) => (
          <Card
            key={post.slug}
            className="group hover:shadow-md transition-all"
          >
            <CardContent className="p-5">
              <div className="flex flex-wrap gap-1 mb-2">
                {post.frontmatter.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.frontmatter.title}
                </h3>
              </Link>
              <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                {post.frontmatter.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1"
              >
                Read More
                <ArrowRight className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
