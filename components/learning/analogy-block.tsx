import { Lightbulb } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

// ---------------------------------------------------------------------------
// AnalogyBlock — a real-world analogy to build intuition before theory.
// Visually distinct (accented card) so learners recognize "oh, a relatable
// example is coming".
// ---------------------------------------------------------------------------

export function AnalogyBlock({
  title,
  analogy,
  takeaway,
}: {
  title: string;
  analogy: string;
  takeaway?: string;
}) {
  return (
    <Card className="border-amber-400/40 bg-amber-50/60 ring-1 ring-amber-400/20 dark:border-amber-500/20 dark:bg-amber-500/5">
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center gap-2 font-heading text-sm font-medium">
          <span className="flex size-7 items-center justify-center rounded-full bg-amber-400/20 text-amber-600 dark:text-amber-400">
            <Lightbulb className="size-4" />
          </span>
          {title}
        </div>
        <p className="text-sm leading-relaxed">{analogy}</p>
        {takeaway ? (
          <p className="text-sm font-medium italic text-amber-700 dark:text-amber-300">
            → {takeaway}
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}
