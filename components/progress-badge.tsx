"use client";

import { Flame } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { computeStreak, useProgress } from "@/lib/progress-store";
import { totalLessons } from "@/content/javascript/modules";

// ---------------------------------------------------------------------------
// ProgressBadge — the tiny chip in the header showing lessons done + streak.
// Kept minimal so it fits on mobile. Uses mounted guard to avoid SSR mismatch.
// ---------------------------------------------------------------------------

export function ProgressBadge() {
  const mounted = useHasMounted();
  const completed = useProgress((s) => s.completedLessons);
  const activeDays = useProgress((s) => s.activeDays);

  const lessons = mounted ? completed.length : 0;
  const streak = mounted ? computeStreak(activeDays) : 0;

  return (
    <div className="flex items-center gap-1.5">
      <Badge variant="secondary" className="hidden sm:inline-flex">
        {lessons}/{totalLessons} lessons
      </Badge>
      {streak > 0 ? (
        <Badge className="text-orange-600 dark:text-orange-400" title={`${streak} day streak`}>
          <Flame className="size-3" />
          {streak}
        </Badge>
      ) : null}
    </div>
  );
}
