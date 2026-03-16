import { Mail, Linkedin, Github, Youtube, Phone, MapPin, Clock, Globe } from "lucide-react";
import { socialLinks, contactInfo } from "@/config/site";

const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: socialLinks.email,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "safdar-ayub",
    href: socialLinks.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "safdarayubpk",
    href: socialLinks.github,
  },
  {
    icon: Youtube,
    label: "YouTube",
    value: "@safdarayub3584",
    href: socialLinks.youtube,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contactInfo.phone,
    href: socialLinks.phone,
  },
];

export function ContactLinks() {
  return (
    <div className="space-y-8">
      {/* Direct contact */}
      <div>
        <h3 className="font-semibold mb-4">Direct Contact</h3>
        <div className="space-y-3">
          {contactChannels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <channel.icon className="h-4 w-4 flex-shrink-0" />
              <span>{channel.value}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Location & availability */}
      <div>
        <h3 className="font-semibold mb-4">Location &amp; Availability</h3>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span>{contactInfo.location}</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="h-4 w-4 flex-shrink-0" />
            <span>Open to remote work worldwide</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 flex-shrink-0" />
            <span>{contactInfo.timezone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
