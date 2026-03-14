import { Mail, Linkedin, Github, Youtube, Phone, MapPin, Clock, Globe } from "lucide-react";

const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    value: "safdarayub@gmail.com",
    href: "mailto:safdarayub@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "safdar-ayub",
    href: "https://linkedin.com/in/safdar-ayub-a9884694",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "safdarayubpk",
    href: "https://github.com/safdarayubpk",
  },
  {
    icon: Youtube,
    label: "YouTube",
    value: "@safdarayubpk",
    href: "https://youtube.com/@safdarayubpk",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92-332-961-1639",
    href: "tel:+923329611639",
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
            <span>Kohat District, KP, Pakistan</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="h-4 w-4 flex-shrink-0" />
            <span>Open to remote work worldwide</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 flex-shrink-0" />
            <span>PKT (UTC+5)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
