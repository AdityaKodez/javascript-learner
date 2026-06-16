import { Map } from "lucide-react";

import { AppHeader } from "@/components/app-header";
import { VisualRoadmap } from "@/components/learning/visual-roadmap";
import { ProgressTracker } from "@/components/learning/progress-tracker";

// ---------------------------------------------------------------------------
// /roadmap — the big motivating "where you're going" page.
// A vertical timeline of all modules with the progress sidebar alongside.
// ---------------------------------------------------------------------------

export default function RoadmapPage() {
  return (
    <div className="min-h-screen">
      <AppHeader showPathInSheet={false} />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-8 max-w-2xl">
          <div className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-primary">
            <Map className="size-4" />
            Your roadmap
          </div>
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            The full path to confident JavaScript
          </h1>
          <p className="mt-2 text-muted-foreground">
            14 modules, from your very first line of code to building real
            projects. Follow the path top to bottom — each module unlocks the next.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="max-w-2xl">
            <VisualRoadmap />
          </div>
          <aside className="lg:sticky lg:top-20 lg:self-start">
            <ProgressTracker />
          </aside>
        </div>
      </div>
    </div>
  );
}
