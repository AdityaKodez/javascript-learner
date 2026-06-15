"use client";

import { Check, PartyPopper } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { useProgress } from "@/lib/progress-store";
import { getLessonNav } from "@/content/javascript/modules";
import { ACHIEVEMENTS } from "@/lib/achievements";
import { getIcon } from "@/components/learning/icon";
import type { AchievementId } from "@/types";

// ---------------------------------------------------------------------------
// CompleteLessonButton — marks a lesson done in the progress store and shows
// a celebratory dialog (especially when it unlocks a new achievement).
// After completing, offers to jump straight to the next lesson.
// ---------------------------------------------------------------------------

export function CompleteLessonButton({
  slug,
  achievement,
}: {
  slug: string;
  achievement?: AchievementId;
}) {
  const mounted = useHasMounted();
  const router = useRouter();
  const isDone = useProgress((s) => s.completedLessons.includes(slug));
  const achievements = useProgress((s) => s.achievements);
  const completeLesson = useProgress((s) => s.completeLesson);
  const [open, setOpen] = useState(false);
  const [justUnlocked, setJustUnlocked] = useState<AchievementId | null>(null);

  const { next } = getLessonNav(slug);

  function handleClick() {
    if (isDone) return;
    // Was this achievement already earned before completing?
    const hadAlready = achievement
      ? achievements.includes(achievement)
      : true;
    completeLesson(slug, achievement);
    if (achievement && !hadAlready) {
      setJustUnlocked(achievement);
    }
    setOpen(true);
  }

  return (
    <>
      <Button
        size="lg"
        variant={isDone ? "secondary" : "default"}
        onClick={handleClick}
        disabled={isDone || !mounted}
      >
        <Check className="size-4" />
        {isDone ? "Completed" : "Mark complete"}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <PartyPopper className="size-5 text-primary" />
              Lesson complete!
            </DialogTitle>
            <DialogDescription>
              {justUnlocked
                ? "You unlocked a new achievement. Keep it up!"
                : "Great work. Your progress is saved automatically."}
            </DialogDescription>
          </DialogHeader>

          {justUnlocked ? (
            <div className="flex flex-col items-center gap-2 rounded-xl bg-muted/50 p-6 text-center">
              {(() => {
                const def = ACHIEVEMENTS[justUnlocked];
                const Icon = getIcon(def.icon);
                return (
                  <>
                    <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon className="size-7" />
                    </span>
                    <p className="font-heading text-lg font-semibold">{def.title}</p>
                    <p className="text-sm text-muted-foreground">{def.description}</p>
                  </>
                );
              })()}
            </div>
          ) : null}

          <DialogFooter className="flex-row flex-wrap justify-center gap-2 sm:justify-center">
            {next ? (
              <Button
                onClick={() => {
                  setOpen(false);
                  router.push(`/learn/${next.slug}`);
                }}
              >
                Next lesson
              </Button>
            ) : (
              <Button asChild>
                <a href="/roadmap">See your roadmap</a>
              </Button>
            )}
            <Button variant="outline" onClick={() => setOpen(false)}>
              Stay here
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
