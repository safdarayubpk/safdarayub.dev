const stats = [
  { value: "23+", label: "Years of Service" },
  { value: "148+", label: "GitHub Repositories" },
  { value: "4", label: "Custom MCP Servers" },
  { value: "21+", label: "Architecture Decision Records" },
  { value: "Platinum", label: "Hackathon Achievement" },
];

export function StatsBar() {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center last:col-span-2 md:last:col-span-1"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
