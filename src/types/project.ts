export interface Project {
  slug: string;
  title: string;
  oneLiner: string;
  category: string;
  techStack: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  isFlagship: boolean;
  priority: number;
}
