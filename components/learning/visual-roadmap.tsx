"use client";

import Link from "next/link";
import { CheckCircle2, ChevronRight, Circle, Lock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { useProgress } from "@/lib/progress-store";
import { modules } from "@/content/javascript/modules";
import { getIcon } from "@/components/learning/icon";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// VisualRoadmap — the big, motivating "where you're going" view.
//
// A vertical timeline of all 13 modules. Each node shows: state (done /
// current / locked-ish), the module icon, title, tagline, and lesson count.
// Clicking jumps to the module's first lesson.
// ---------------------------------------------------------------------------

export function VisualRoadmap() {
  const mounted = useHasMounted();
  const completed = useProgress((s) => s.completedLessons);

  // Find the first not-done lesson slug → that's the "current" module.
  const firstIncomplete = modules.find((m) =>
    m.lessons.some((l) => !completed.includes(l.slug)),
  );

  return (
    <ol className="relative flex flex-col gap-4">
      {/* the vertical connector line */}
      <span
        aria-hidden
        className="absolute left-[1.4rem] top-2 bottom-2 w-px bg-border"
      />
      {modules.map((m) => {
        const ModuleIcon = getIcon(m.icon);
        const lessonsDone = m.lessons.filter((l) =>
          mounted ? completed.includes(l.slug) : false,
        ).length;
        const total = m.lessons.length;
        const allDone = mounted && lessonsDone === total;
        const isCurrent = mounted && firstIncomplete?.slug === m.slug && !allDone;
        const firstLessonSlug = m.lessons[0]?.slug;

        return (
          <li key={m.slug} className="relative">
            <div className="flex items-start gap-4">
              <span
                aria-hidden
                className={cn(
                  "z-10 flex size-11 shrink-0 items-center justify-center rounded-full border-2 bg-background",
                  allDone
                    ? "border-emerald-500 text-emerald-600 dark:text-emerald-400"
                    : isCurrent
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground",
                )}
              >
                {allDone ? (
                  <CheckCircle2 className="size-5" />
                ) : (
                  <ModuleIcon className="size-5" />
                )}
              </span>

              <Card
                className={cn(
                  "flex-1 transition-all hover:ring-foreground/20",
                  isCurrent && "ring-primary/30",
                )}
              >
                <Link
                  href={`/learn/${firstLessonSlug}`}
                  className="block"
                  aria-label={`Start ${m.title}`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="font-mono">
                          {String(m.order).padStart(2, "0")}
                        </Badge>
                        {allDone ? (
                          <Badge className="text-emerald-600 dark:text-emerald-400">Complete</Badge>
                        ) : isCurrent ? (
                          <Badge>
                            Up next
                          </Badge>
                        ) : null}
                      </div>
                      <ChevronRight className="size-4 text-muted-foreground" />
                    </div>
                    <CardTitle className={cn("flex items-center gap-2", m.accent)}>
                      <ModuleIcon className="size-4" />
                      {m.title}
                    </CardTitle>
                    <CardDescription>{m.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>
                        {total} lesson{total > 1 ? "s" : ""}
                      </span>
                      {mounted ? (
                        <span className="flex items-center gap-1">
                          {lessonsDone > 0 ? (
                            <>
                              <Circle className="size-3" />
                              {lessonsDone}/{total} done
                            </>
                          ) : (
                            <>
                              <Lock className="size-3" />
                              Not started
                            </>
                          )}
                        </span>
                      ) : null}
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
