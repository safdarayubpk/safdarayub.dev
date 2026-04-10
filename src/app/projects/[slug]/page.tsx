import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailLayout } from "@/components/projects/project-detail-layout";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
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
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: project.title.split("—")[0].trim(),
      description: project.oneLiner,
      type: "website",
    },
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

  const projectName = project.title.split("—")[0].trim();

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: projectName },
          ]}
        />
      </div>
      <ProjectDetailLayout project={project} otherProjects={otherProjects}>
        {content || <p>Project details coming soon.</p>}
      </ProjectDetailLayout>
    </>
  );
}
