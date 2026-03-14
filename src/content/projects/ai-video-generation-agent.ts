import { Project } from "@/types/project";

export const aiVideoGenerationAgent: Project = {
  slug: "ai-video-generation-agent",
  title: "AI Video Generation Agent — End-to-End Content Automation",
  oneLiner:
    "Type a prompt, get a full 4-minute motion graphics video with narration — completely AI-generated.",
  category: "AI Agents",
  techStack: [
    "TypeScript",
    "React",
    "Remotion",
    "Claude Code",
    "Gemini TTS",
    "Lucide React",
  ],
  links: {
    github: "https://github.com/safdarayubpk/ai-video-generation-agent",
  },
  isFlagship: false,
  priority: 2,
};
