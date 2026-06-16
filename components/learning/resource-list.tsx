import { ArrowUpRight, BookOpen } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

// ---------------------------------------------------------------------------
// ResourceList — a curated set of external links (docs, courses, tools).
// Used by the "What's Next" module to point learners at trusted next steps.
// Each item is a card that opens in a new tab.
// ---------------------------------------------------------------------------

export function ResourceList({
  title,
  items,
}: {
  title?: string;
  items: { label: string; url: string; description?: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      {title ? (
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          <BookOpen className="size-4 text-primary" />
          {title}
        </div>
      ) : null}
      <div className="grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <Card className="h-full transition-all group-hover:-translate-y-0.5 group-hover:ring-primary/30">
              <CardContent className="flex items-start justify-between gap-3 p-4">
                <div className="min-w-0">
                  <p className="font-medium text-foreground group-hover:text-primary">
                    {item.label}
                  </p>
                  {item.description ? (
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  ) : null}
                </div>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
