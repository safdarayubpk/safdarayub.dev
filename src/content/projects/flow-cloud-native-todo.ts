import { Project } from "@/types/project";

export const flowCloudNativeTodo: Project = {
  slug: "flow-cloud-native-todo",
  title: "Flow — 8-Phase Cloud-Native Todo Application",
  oneLiner:
    "A todo app that evolved through 8 architectural phases — from console script to Kubernetes-deployed microservice with AI chatbot.",
  category: "Full Stack",
  image: "/images/projects/flow-cloud-native-todo.png",
  techStack: [
    "Next.js",
    "FastAPI",
    "SQLModel",
    "Docker",
    "Kubernetes",
    "Helm",
    "Dapr",
    "Kafka",
  ],
  links: {
    github: "https://github.com/safdarayubpk/flow",
    live: "https://frontend-blue-six-59.vercel.app/login",
  },
  isFlagship: false,
  priority: 4,
  lastUpdated: "2026-02-28",
};
