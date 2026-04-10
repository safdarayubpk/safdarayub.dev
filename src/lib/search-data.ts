import { getProjects } from "./projects";
import { getBlogPosts } from "./blog";

export interface SearchItem {
  type: "project" | "blog";
  title: string;
  description: string;
  href: string;
  tags?: string[];
}

export function getSearchItems(): SearchItem[] {
  const projects = getProjects().map((p) => ({
    type: "project" as const,
    title: p.title.split("—")[0].trim(),
    description: p.oneLiner,
    href: `/projects/${p.slug}`,
    tags: p.techStack,
  }));

  const posts = getBlogPosts().map((p) => ({
    type: "blog" as const,
    title: p.frontmatter.title,
    description: p.frontmatter.excerpt,
    href: `/blog/${p.slug}`,
    tags: p.frontmatter.tags,
  }));

  return [...projects, ...posts];
}
