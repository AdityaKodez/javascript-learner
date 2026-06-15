"use client";

import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { useProgress } from "@/lib/progress-store";
import { modules } from "@/content/javascript/modules";
import { getIcon } from "@/components/learning/icon";

// ---------------------------------------------------------------------------
// ModuleProgressList — per-module completion bars.
// Shows exactly how far through each module the learner is.
// ---------------------------------------------------------------------------

export function ModuleProgressList() {
  const mounted = useHasMounted();
  const completed = useProgress((s) => s.completedLessons);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Module progress</CardTitle>
        <CardDescription>How far you’ve come in each module.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {modules.map((m) => {
          const ModuleIcon = getIcon(m.icon);
          const total = m.lessons.length;
          const done = mounted
            ? m.lessons.filter((l) => completed.includes(l.slug)).length
            : 0;
          const pct = total ? Math.round((done / total) * 100) : 0;
          const firstLessonSlug = m.lessons[0]?.slug;
          return (
            <Link key={m.slug} href={`/learn/${firstLessonSlug}`} className="group block">
              <div className="mb-1 flex items-center justify-between gap-2 text-sm">
                <span className="flex items-center gap-2 font-medium">
                  <ModuleIcon className={`size-3.5 ${m.accent}`} />
                  {m.title}
                </span>
                <span className="text-xs text-muted-foreground">
                  {done}/{total}
                </span>
              </div>
              <Progress value={pct} />
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
