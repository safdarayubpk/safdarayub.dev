import Image from "next/image";
import Link from "next/link";
import { FileDown, ArrowRight, Mail, Github, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { href: "https://github.com/safdarayubpk", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/safdar-ayub-a9884694", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:safdarayub@gmail.com", label: "Email", icon: Mail },
  { href: "https://youtube.com/@safdarayubpk", label: "YouTube", icon: Youtube },
];

export function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          {/* Photo — shows first on mobile */}
          <div className="md:col-span-2 md:order-2 flex justify-center">
            <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/20 bg-muted">
              <Image
                src="/images/safdar-ayub.png"
                alt="Safdar Ayub"
                fill
                className="object-cover object-[center_15%]"
                priority
                sizes="(max-width: 768px) 192px, 288px"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="md:col-span-3 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
              Safdar Ayub
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-400 dark:text-blue-300 font-semibold mb-4">
              AI Engineer &amp; Full Stack Developer
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
              I build autonomous AI agents, cloud-native applications, and
              production-ready full-stack systems. 23+ years of military
              discipline, now engineering the future of AI.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button asChild size="lg">
                <a href="/resume/Safdar_Ayub_Resume.pdf" download>
                  <FileDown className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}
