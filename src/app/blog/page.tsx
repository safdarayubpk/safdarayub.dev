import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on Agentic AI, full-stack development, and the journey from military to tech.",
};

export default function BlogPage() {
  return (
    <main className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-3">Blog</h1>
          <p className="text-muted-foreground text-lg">
            Insights on Agentic AI, full-stack development, and my journey from
            military to tech
          </p>
        </div>

        <Card className="max-w-2xl">
          <CardContent className="pt-6 text-center py-16">
            <p className="text-muted-foreground text-lg">
              Blog posts coming soon. Stay tuned for articles on AI engineering,
              MCP servers, and spec-driven development.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
