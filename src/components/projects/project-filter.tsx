"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/project-card";
import { Project } from "@/types/project";

interface ProjectFilterProps {
  projects: Project[];
  categories: string[];
}

export function ProjectFilter({ projects, categories }: ProjectFilterProps) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={active === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className="rounded-full"
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          No projects in this category yet.
        </p>
      )}
    </>
  );
}
