export interface BlogFrontmatter {
  title: string;
  date: string;
  author: string;
  tags: string[];
  readTime: string;
  excerpt: string;
  published: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
}
