import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechBadge } from "@/components/projects/tech-badge";
import { ProjectCard } from "@/components/projects/project-card";
import { Project } from "@/types/project";

interface ProjectDetailLayoutProps {
  project: Project;
  otherProjects: Project[];
  children: React.ReactNode;
}

export function ProjectDetailLayout({
  project,
  otherProjects,
  children,
}: ProjectDetailLayoutProps) {
  return (
    <main className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            {project.isFlagship && (
              <Badge variant="default">Platinum Tier</Badge>
            )}
            <Badge variant="secondary">{project.category}</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-muted-foreground text-lg">{project.oneLiner}</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mb-10">
          {project.links.github && (
            <Button asChild variant="outline">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          )}
          {project.links.live && (
            <Button asChild>
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Site
              </a>
            </Button>
          )}
          {project.links.demo && (
            <Button asChild variant="secondary">
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Watch Demo
              </a>
            </Button>
          )}
        </div>

        {/* Content grid: main content + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 prose prose-neutral dark:prose-invert max-w-none">
            {children}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-base">Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.slice(0, 3).map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
