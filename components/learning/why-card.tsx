import { ArrowRight, Hammer, Wrench } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

// ---------------------------------------------------------------------------
// WhyCard — "Why you're learning this".
//
// Placed at the very top of a lesson to give the learner motivation BEFORE
// theory: what the concept lets them do, the concrete thing they'll build,
// and what breaks without it. Distinct "builder" styling (indigo, hammer
// icon) so it reads as the lesson's mission briefing.
// ---------------------------------------------------------------------------

export function WhyCard({
  title = "Why you're learning this",
  point,
  build,
  without,
}: {
  title?: string;
  point: string;
  build: string;
  without?: string;
}) {
  return (
    <Card className="border-indigo-400/40 bg-indigo-50/60 ring-1 ring-indigo-400/20 dark:border-indigo-500/20 dark:bg-indigo-500/5">
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center gap-2 font-heading text-sm font-medium">
          <span className="flex size-7 items-center justify-center rounded-full bg-indigo-400/20 text-indigo-600 dark:text-indigo-400">
            <Hammer className="size-4" />
          </span>
          {title}
        </div>

        <p className="text-sm leading-relaxed">{point}</p>

        <div className="flex items-start gap-2 rounded-lg bg-indigo-400/10 px-3 py-2 text-sm">
          <Wrench className="mt-0.5 size-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
          <p>
            <span className="font-medium text-indigo-700 dark:text-indigo-300">
              You&apos;ll build:{" "}
            </span>
            {build}
          </p>
        </div>

        {without ? (
          <p className="flex items-start gap-1.5 text-sm font-medium italic text-indigo-700 dark:text-indigo-300">
            <ArrowRight className="mt-0.5 size-4 shrink-0" />
            <span>Without it: {without}</span>
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}
