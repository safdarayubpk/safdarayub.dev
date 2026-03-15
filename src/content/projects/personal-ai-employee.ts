import { Project } from "@/types/project";

export const personalAiEmployee: Project = {
  slug: "personal-ai-employee",
  title: "Personal AI Employee — Hybrid Cloud-Local Autonomous Agent",
  oneLiner:
    "A 24/7 autonomous AI agent that monitors Gmail, WhatsApp, and filesystem — drafts responses on a cloud VM while you're offline, then executes with your approval when you reconnect.",
  category: "AI Agents",
  image: "/images/projects/personal-ai-employee.png",
  techStack: [
    "Python",
    "FastMCP",
    "Claude Code",
    "Gmail OAuth2",
    "Playwright",
    "PM2",
    "Git-sync",
    "Docker",
  ],
  links: {
    github: "https://github.com/safdarayubpk/PersonalAIEmployee",
  },
  isFlagship: true,
  priority: 1,
};
