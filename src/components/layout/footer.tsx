import Link from "next/link";
import { Github, Linkedin, Mail, Rss, Youtube } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
];

const socialLinks = [
  { href: "https://github.com/safdarayubpk", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/safdarayubpk", label: "LinkedIn", icon: Linkedin },
  { href: "https://youtube.com/@safdarayub3584", label: "YouTube", icon: Youtube },
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
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
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
            <div className="flex gap-3 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="text-muted-foreground hover:text-primary transition-colors p-2 -m-2"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              safdarayub@gmail.com
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Kohat District, Pakistan
            </p>
          </div>
        </div>

        {/* RSS + Copyright */}
        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Safdar Ayub. All rights reserved.</span>
          <a
            href="/blog/rss.xml"
            className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Rss className="h-4 w-4" />
            RSS Feed
          </a>
        </div>
      </div>
    </footer>
  );
}
