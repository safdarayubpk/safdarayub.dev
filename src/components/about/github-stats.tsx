import { Github, GitFork, Star, BookOpen, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/config/site";

const stats = [
  { icon: BookOpen, value: "150+", label: "Repositories" },
  { icon: Star, value: "5", label: "Projects Shipped" },
  { icon: GitFork, value: "21+", label: "ADRs Written" },
  { icon: Code2, value: "4", label: "MCP Servers" },
];

const languages = [
  { name: "TypeScript", percentage: 35, color: "bg-blue-500" },
  { name: "Python", percentage: 30, color: "bg-yellow-500" },
  { name: "JavaScript", percentage: 15, color: "bg-amber-400" },
  { name: "MDX", percentage: 10, color: "bg-purple-500" },
  { name: "CSS", percentage: 5, color: "bg-pink-500" },
  { name: "Other", percentage: 5, color: "bg-gray-400" },
];

export function GitHubStats() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-3">GitHub Activity</h2>
        <p className="text-muted-foreground text-center mb-10">
          150+ repositories and counting
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="pt-6 text-center">
                <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Top languages */}
        <Card className="max-w-3xl mx-auto mb-8">
          <CardContent className="pt-6">
            <h3 className="text-sm font-semibold mb-4">Top Languages</h3>
            {/* Combined progress bar */}
            <div className="flex rounded-full overflow-hidden h-3 mb-4">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className={`${lang.color}`}
                  style={{ width: `${lang.percentage}%` }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>
            {/* Legend */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-1.5">
                  <span
                    className={`inline-block w-2.5 h-2.5 rounded-full ${lang.color}`}
                  />
                  <span className="text-xs text-muted-foreground">
                    {lang.name}{" "}
                    <span className="font-medium text-foreground">
                      {lang.percentage}%
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* GitHub link */}
        <div className="text-center">
          <Button asChild variant="outline">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
