import { Project } from "@/types/project";

export const aiVideoGenerationAgent: Project = {
  slug: "ai-video-generation-agent",
  title: "AI Video Generation Agent — End-to-End Content Automation",
  oneLiner:
    "Type a prompt, get a full 4-minute motion graphics video with narration — completely AI-generated.",
  category: "AI Agents",
  image: "/images/projects/ai-video-generation-agent.png",
  techStack: [
    "TypeScript",
    "React",
    "Remotion",
    "Claude Code",
    "Gemini TTS",
    "Lucide React",
  ],
  links: {
    github: "https://github.com/safdarayubpk/general-agent-video-maker",
    demo: "https://www.youtube.com/watch?v=7NoWCL33IUQ",
  },
  isFlagship: false,
  priority: 3,
};
