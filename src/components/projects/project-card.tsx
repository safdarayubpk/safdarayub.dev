import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/projects/tech-badge";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className={`group hover:shadow-lg transition-all hover:-translate-y-1 ${
        project.isFlagship
          ? "border-primary/50 ring-1 ring-primary/20"
          : ""
      }`}
    >
      {/* Image placeholder */}
      <div className="aspect-video bg-muted border-b border-border/40 flex items-center justify-center text-muted-foreground text-sm">
        Screenshot
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-1">
          {project.isFlagship && (
            <Badge variant="default" className="text-xs">
              Platinum Tier
            </Badge>
          )}
          <Badge variant="secondary" className="text-xs">
            {project.category}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-snug">
          {project.title.split("—")[0].trim()}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.oneLiner}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 5).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
          >
            View Details
            <ArrowRight className="h-3 w-3" />
          </Link>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
