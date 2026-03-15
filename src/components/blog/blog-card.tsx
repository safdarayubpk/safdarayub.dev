import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const { frontmatter, slug } = post;

  return (
    <Card className="group hover:shadow-lg transition-all hover:-translate-y-0.5">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Content */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {frontmatter.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <Link href={`/blog/${slug}`}>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-snug">
                {frontmatter.title}
              </h3>
            </Link>

            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
              {frontmatter.excerpt}
            </p>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {new Date(frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {frontmatter.readTime}
              </span>
            </div>

            <Link
              href={`/blog/${slug}`}
              className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1 mt-3"
            >
              Read More
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
