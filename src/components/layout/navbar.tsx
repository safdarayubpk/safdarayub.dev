"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="text-lg font-bold tracking-tight">
          Safdar<span className="text-primary">.</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: resume + theme toggle + mobile menu */}
        <div className="flex items-center gap-2">
          <Button asChild variant="default" size="sm" className="hidden md:flex">
            <a href="/resume/Safdar_Ayub_Resume.pdf" download>
              <FileDown className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
