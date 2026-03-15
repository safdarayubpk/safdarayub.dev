import { Project } from "@/types/project";

export const roboticsTextbook: Project = {
  slug: "robotics-textbook",
  title:
    "Physical AI & Humanoid Robotics — Interactive Textbook with RAG Chatbot",
  oneLiner:
    "A 6-chapter interactive textbook on robotics with a built-in AI chatbot that answers questions from the content.",
  category: "Education",
  image: "/images/projects/robotics-textbook.png",
  techStack: [
    "Docusaurus",
    "React",
    "FastAPI",
    "OpenAI Agents SDK",
    "MCP SDK",
    "Neon DB",
    "Qdrant Cloud",
  ],
  links: {
    github: "https://github.com/safdarayubpk/robotics-textbook",
    live: "https://2-book.vercel.app",
  },
  isFlagship: false,
  priority: 4,
};
