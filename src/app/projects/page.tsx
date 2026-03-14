import type { Metadata } from "next";
import { ProjectFilter } from "@/components/projects/project-filter";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Production AI agents, full-stack applications, and cloud-native systems by Safdar Ayub.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Page hero */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-3">Projects</h1>
          <p className="text-muted-foreground text-lg">
            Production AI agents, full-stack applications, and cloud-native
            systems
          </p>
        </div>

        <ProjectFilter projects={projects} />
      </div>
    </main>
  );
}
