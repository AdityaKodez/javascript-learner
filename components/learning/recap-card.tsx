import { Check } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// ---------------------------------------------------------------------------
// RecapCard — the "Quick recap" at the end of a lesson.
// High signal, low text: a checklist of the must-remember points.
// ---------------------------------------------------------------------------

export function RecapCard({ points }: { points: string[] }) {
  return (
    <Card className="border-primary/30 ring-1 ring-primary/15">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Check className="size-4 text-primary" />
          Quick recap
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-2">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <Check
                aria-hidden
                className="mt-0.5 size-4 shrink-0 text-primary"
              />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
