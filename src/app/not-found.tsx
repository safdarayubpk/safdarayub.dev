import Link from "next/link";
import { Home, FolderOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center py-16 md:py-24">
      <div className="max-w-md mx-auto px-4 text-center">
        <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/projects">
              <FolderOpen className="mr-2 h-4 w-4" />
              Projects
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
