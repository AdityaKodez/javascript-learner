import { ListOrdered } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// ---------------------------------------------------------------------------
// StepsCard — an ordered, numbered visual breakdown.
// Good for "step-by-step visual breakdown" requirements where order matters.
// ---------------------------------------------------------------------------

export function StepsCard({
  title,
  steps,
}: {
  title?: string;
  steps: { title: string; description: string }[];
}) {
  return (
    <Card>
      {title ? (
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ListOrdered className="size-4 text-primary" />
            {title}
          </CardTitle>
        </CardHeader>
      ) : null}
      <CardContent>
        <ol className="relative flex flex-col gap-5 before:absolute before:top-1 before:bottom-1 before:left-3 before:w-px before:bg-border">
          {steps.map((step, i) => (
            <li key={i} className="relative flex gap-3.5 pl-0">
              <span
                aria-hidden
                className="z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground"
              >
                {i + 1}
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">{step.title}</span>
                <span className="text-sm text-muted-foreground">
                  {step.description}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
