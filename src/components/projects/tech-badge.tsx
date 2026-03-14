import { Badge } from "@/components/ui/badge";

interface TechBadgeProps {
  name: string;
}

export function TechBadge({ name }: TechBadgeProps) {
  return (
    <Badge variant="outline" className="text-xs font-normal">
      {name}
    </Badge>
  );
}
