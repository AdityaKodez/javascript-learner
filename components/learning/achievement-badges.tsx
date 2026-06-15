"use client";

import { Lock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { useProgress } from "@/lib/progress-store";
import { ACHIEVEMENTS, ALL_ACHIEVEMENT_IDS } from "@/lib/achievements";
import { getIcon } from "@/components/learning/icon";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// AchievementBadges — the badge collection grid.
// Earned badges glow; locked ones are greyed with a lock. Hover/tap for a
// tooltip describing how to earn each one.
// ---------------------------------------------------------------------------

export function AchievementBadges() {
  const mounted = useHasMounted();
  const earned = useProgress((s) => s.achievements);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
        <CardDescription>
          Earn badges by completing lessons, quizzes, and keeping your streak alive.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TooltipProvider delayDuration={150}>
          <ul className="grid grid-cols-3 gap-3 sm:grid-cols-3">
            {ALL_ACHIEVEMENT_IDS.map((id) => {
              const def = ACHIEVEMENTS[id];
              const isEarned = mounted && earned.includes(id);
              const Icon = getIcon(def.icon);
              return (
                <li key={id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        role="group"
                        aria-label={`${def.title}: ${def.description}`}
                        className={cn(
                          "flex aspect-square cursor-default flex-col items-center justify-center gap-1.5 rounded-xl border p-2 text-center transition-all",
                          isEarned
                            ? "border-primary/40 bg-primary/10"
                            : "border-border bg-muted/30 opacity-60",
                        )}
                      >
                        <span
                          className={cn(
                            "flex size-9 items-center justify-center rounded-full",
                            isEarned
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground",
                          )}
                        >
                          {isEarned ? (
                            <Icon className="size-4" />
                          ) : (
                            <Lock className="size-4" />
                          )}
                        </span>
                        <span className="text-[10px] font-medium leading-tight">
                          {def.title}
                        </span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[180px] text-center">
                      <p className="font-medium">{def.title}</p>
                      <p className="text-xs opacity-90">{def.description}</p>
                      {isEarned ? (
                        <Badge className="mt-1 text-emerald-600 dark:text-emerald-400">Earned</Badge>
                      ) : null}
                    </TooltipContent>
                  </Tooltip>
                </li>
              );
            })}
          </ul>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
}
