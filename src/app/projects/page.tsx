import type { Metadata } from "next";
import { ProjectFilter } from "@/components/projects/project-filter";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Production AI agents, full-stack applications, and cloud-native systems by Safdar Ayub.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const projects = getProjects();
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  return (
    <main className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Page hero */}
        <div className="mb-12">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />
          <h1 className="text-4xl font-bold mb-3">Projects</h1>
          <p className="text-muted-foreground text-lg">
            Production AI agents, full-stack applications, and cloud-native
            systems
          </p>
        </div>

        <ProjectFilter projects={projects} categories={categories} />
      </div>
    </main>
  );
}
