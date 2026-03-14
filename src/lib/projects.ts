import { personalAiEmployee } from "@/content/projects/personal-ai-employee";
import { aiVideoGenerationAgent } from "@/content/projects/ai-video-generation-agent";
import { flowCloudNativeTodo } from "@/content/projects/flow-cloud-native-todo";
import { roboticsTextbook } from "@/content/projects/robotics-textbook";
import { Project } from "@/types/project";

const allProjects: Project[] = [
  personalAiEmployee,
  aiVideoGenerationAgent,
  flowCloudNativeTodo,
  roboticsTextbook,
];

export function getProjects(): Project[] {
  return allProjects.sort((a, b) => a.priority - b.priority);
}

export function getFeaturedProjects(): Project[] {
  return getProjects().slice(0, 3);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return allProjects.map((p) => p.slug);
}
