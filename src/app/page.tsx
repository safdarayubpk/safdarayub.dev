import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-4">Safdar Ayub</h1>
        <p className="text-muted-foreground text-lg mb-8">
          AI Engineer &amp; Full Stack Developer
        </p>

        <div className="flex gap-3 mb-12">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Design System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                Colors, fonts, and spacing are configured.
              </p>
              <div className="flex gap-2">
                <Badge>Next.js 16</Badge>
                <Badge variant="secondary">Tailwind 4</Badge>
                <Badge variant="outline">ShadCN</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dark Mode</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Dark mode is the default theme. Toggle coming in navbar.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Typography</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Inter font for all text. Clean and professional.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
