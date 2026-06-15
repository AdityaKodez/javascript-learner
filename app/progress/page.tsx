import { AppHeader } from "@/components/app-header";
import { ProgressTracker } from "@/components/learning/progress-tracker";
import { AchievementBadges } from "@/components/learning/achievement-badges";
import { ModuleProgressList } from "@/components/learning/module-progress-list";
import { ResetProgressButton } from "@/components/learning/reset-progress-button";

// ---------------------------------------------------------------------------
// /progress — the dashboard. Overall stats, achievements, per-module progress,
// and a reset control for testing or starting over.
// ---------------------------------------------------------------------------

export default function ProgressPage() {
  return (
    <div className="min-h-screen">
      <AppHeader showPathInSheet={false} />
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 max-w-2xl">
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Your progress
          </h1>
          <p className="mt-2 text-muted-foreground">
            Every lesson you finish, quiz you pass, and day you show up — all in one place.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <ProgressTracker />
          <div className="grid gap-6 lg:grid-cols-2">
            <ModuleProgressList />
            <AchievementBadges />
          </div>
          <div className="flex justify-center pt-4">
            <ResetProgressButton />
          </div>
        </div>
      </div>
    </div>
  );
}
