"use client";

import { BookOpen, Flame, Trophy } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { computeStreak, useProgress } from "@/lib/progress-store";
import { allLessons, totalLessons } from "@/content/javascript/modules";
import { ALL_ACHIEVEMENT_IDS } from "@/lib/achievements";

// ---------------------------------------------------------------------------
// ProgressTracker — the at-a-glance dashboard card.
// Shows lessons done, streak, and achievements earned as three stat tiles +
// one overall progress bar. Safe for SSR (guards against hydration mismatch).
// ---------------------------------------------------------------------------

export function ProgressTracker({ compact = false }: { compact?: boolean }) {
  const mounted = useHasMounted();
  const completedLessons = useProgress((s) => s.completedLessons);
  const achievements = useProgress((s) => s.achievements);
  const activeDays = useProgress((s) => s.activeDays);

  const lessonsDone = mounted ? completedLessons.length : 0;
  const percent = totalLessons ? Math.round((lessonsDone / totalLessons) * 100) : 0;
  const streak = mounted ? computeStreak(activeDays) : 0;
  const achievementsCount = mounted ? achievements.length : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="size-4 text-primary" />
          Your progress
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {!compact ? (
          <div className="grid grid-cols-3 gap-3">
            <Stat
              icon={<BookOpen className="size-4" />}
              value={`${lessonsDone}/${totalLessons}`}
              label="Lessons"
            />
            <Stat
              icon={<Flame className="size-4 text-orange-500" />}
              value={`${streak}`}
              label="Day streak"
            />
            <Stat
              icon={<Trophy className="size-4 text-amber-500" />}
              value={`${achievementsCount}/${ALL_ACHIEVEMENT_IDS.length}`}
              label="Badges"
            />
          </div>
        ) : null}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Path completion</span>
            <span className="font-medium text-foreground">{percent}%</span>
          </div>
          <Progress value={percent} />
        </div>
        {!compact ? (
          <p className="text-xs text-muted-foreground">
            {lessonsDone === 0
              ? "Start the first lesson to begin your journey."
              : `You’ve completed ${lessonsDone} of ${totalLessons} lessons. Keep going!`}
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl bg-muted/40 p-3 text-center">
      <span className="text-muted-foreground">{icon}</span>
      <span className="font-heading text-lg font-semibold">{value}</span>
      <span className="text-[11px] text-muted-foreground">{label}</span>
    </div>
  );
}

// Re-exported small helpers for other components.
export { allLessons };
