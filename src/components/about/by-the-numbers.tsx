const metrics = [
  { value: "23+", label: "Years of Military Service" },
  { value: "150+", label: "GitHub Repositories" },
  { value: "21+", label: "Architecture Decision Records" },
  { value: "4", label: "Custom MCP Servers" },
  { value: "13", label: "Claude Code Skills" },
  { value: "Platinum", label: "Hackathon Tier" },
  { value: "4", label: "Production Projects" },
];

export function ByTheNumbers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          By the Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center last:col-span-2 md:last:col-span-1"
            >
              <div className="text-3xl font-bold text-primary">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
