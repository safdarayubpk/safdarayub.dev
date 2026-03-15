import Link from "next/link";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/safdarayubpk", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/safdarayubpk", label: "LinkedIn", icon: Linkedin },
  { href: "https://youtube.com/@safdarayubpk", label: "YouTube", icon: Youtube },
  { href: "mailto:safdarayub@gmail.com", label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Name & tagline */}
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight">
              Safdar<span className="text-primary">.</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              AI Engineer &amp; Full Stack Developer building intelligent systems.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Safdar Ayub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
