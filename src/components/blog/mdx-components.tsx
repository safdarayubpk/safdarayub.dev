import Link from "next/link";
import { Badge } from "@/components/ui/badge";

function ProjectLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-primary hover:underline font-medium inline-flex items-center gap-1"
    >
      {children}
    </Link>
  );
}

function Callout({
  type = "info",
  children,
}: {
  type?: "info" | "warning" | "tip";
  children: React.ReactNode;
}) {
  const styles = {
    info: "border-primary/30 bg-primary/5",
    warning: "border-yellow-500/30 bg-yellow-500/5",
    tip: "border-green-500/30 bg-green-500/5",
  };

  const labels = {
    info: "Info",
    warning: "Warning",
    tip: "Tip",
  };

  return (
    <div className={`border-l-4 rounded-r-lg p-4 my-6 ${styles[type]}`}>
      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1 block">
        {labels[type]}
      </span>
      <div className="text-sm">{children}</div>
    </div>
  );
}

function TechBadge({ name }: { name: string }) {
  return (
    <Badge variant="secondary" className="text-xs font-mono">
      {name}
    </Badge>
  );
}

export function getMDXComponents(): Record<string, React.ComponentType<React.ComponentProps<never>> | ((props: React.HTMLAttributes<HTMLElement>) => React.ReactNode)> {
  return {
    ProjectLink,
    Callout,
    TechBadge,
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1 className="text-3xl font-bold mt-10 mb-4" {...props} />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2 className="text-2xl font-bold mt-8 mb-3" {...props} />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3 className="text-xl font-semibold mt-6 mb-2" {...props} />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p className="mb-4 leading-relaxed" {...props} />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
      <ul className="list-disc pl-6 mb-4 space-y-1" {...props} />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
      <ol className="list-decimal pl-6 mb-4 space-y-1" {...props} />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
      <li className="leading-relaxed" {...props} />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a
        className="text-primary hover:underline"
        target={props.href?.startsWith("http") ? "_blank" : undefined}
        rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      />
    ),
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote
        className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground my-6"
        {...props}
      />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => (
      <code
        className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
        {...props}
      />
    ),
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
      <pre
        className="bg-muted/50 border border-border rounded-lg p-4 overflow-x-auto my-6 text-sm font-mono"
        {...props}
      />
    ),
    hr: () => <hr className="my-8 border-border" />,
    table: (props: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm" {...props} />
      </div>
    ),
    th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
      <th
        className="border border-border px-3 py-2 bg-muted font-semibold text-left"
        {...props}
      />
    ),
    td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
      <td className="border border-border px-3 py-2" {...props} />
    ),
  };
}
