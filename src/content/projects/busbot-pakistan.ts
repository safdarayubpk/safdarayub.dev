import { Project } from "@/types/project";

export const busbotPakistan: Project = {
  slug: "busbot-pakistan",
  title: "BusBot Pakistan — Urdu Voice Bus Route Finder",
  oneLiner:
    "Pakistan's first AI-powered public bus guide — speak in Urdu, get your route. Built for Google AI Seekho 2026 competition, covering Lahore, Karachi, and Islamabad with community-driven route data.",
  category: "AI Applications",
  image: "/images/projects/busbot-pakistan.jpg",
  techStack: [
    "React",
    "Gemini 3 Flash",
    "Firebase Firestore",
    "Web Speech API",
    "Google Cloud Run",
    "Tailwind CSS",
    "Framer Motion",
  ],
  links: {
    github: "https://github.com/safdarayubpk/busbotpakistan",
    live: "https://busbot-pakistan-479163291102.asia-southeast1.run.app/",
  },
  isFlagship: true,
  priority: 3,
  lastUpdated: "2026-04-29",
};
