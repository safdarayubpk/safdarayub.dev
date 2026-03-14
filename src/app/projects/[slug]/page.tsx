import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailLayout } from "@/components/projects/project-detail-layout";
import { getProjectBySlug, getProjects, getProjectSlugs } from "@/lib/projects";
import { projectDetails } from "@/content/projects/details";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title.split("—")[0].trim(),
    description: project.oneLiner,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = getProjects().filter((p) => p.slug !== slug);
  const content = projectDetails[slug];

  return (
    <ProjectDetailLayout project={project} otherProjects={otherProjects}>
      {content || <p>Project details coming soon.</p>}
    </ProjectDetailLayout>
  );
}
