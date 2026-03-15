import { Calendar, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlogFrontmatter } from "@/types/blog";

interface BlogPostHeaderProps {
  frontmatter: BlogFrontmatter;
}

export function BlogPostHeader({ frontmatter }: BlogPostHeaderProps) {
  return (
    <header className="mb-10">
      <div className="flex flex-wrap gap-1.5 mb-4">
        {frontmatter.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        {frontmatter.title}
      </h1>

      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <User className="h-4 w-4" />
          {frontmatter.author}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          {new Date(frontmatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          {frontmatter.readTime}
        </span>
      </div>
    </header>
  );
}
