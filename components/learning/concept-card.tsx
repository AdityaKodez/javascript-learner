import { Lightbulb } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ---------------------------------------------------------------------------
// ConceptCard — a clean list of key points with an icon.
// Used for "JavaScript's superpowers", "Good names vs. bad names", etc.
// ---------------------------------------------------------------------------

export function ConceptCard({
  title,
  points,
  icon,
  accent = "text-primary",
}: {
  title: string;
  points: string[];
  icon?: React.ReactNode;
  accent?: string;
}) {
  return (
    <Card className="border-0 ring-1 ring-foreground/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className={accent}>
            {icon ?? <Lightbulb className="size-4" />}
          </span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-2">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <span
                aria-hidden
                className={`mt-1.5 size-1.5 shrink-0 rounded-full bg-current ${accent}`}
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
