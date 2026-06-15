"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { useProgress } from "@/lib/progress-store";
import { allLessons } from "@/content/javascript/modules";

// ---------------------------------------------------------------------------
// ContinueCard — the "pick up where you left off" card.
// Finds the first incomplete lesson and links to it. Encourages daily practice.
// ---------------------------------------------------------------------------

export function ContinueCard() {
  const mounted = useHasMounted();
  const completed = useProgress((s) => s.completedLessons);

  const next = allLessons.find((l) => !completed.includes(l.slug)) ?? null;
  const done = mounted ? completed.length : 0;

  // Nothing mounted yet → render a stable skeleton-ish card to avoid mismatch.
  if (!mounted) {
    return (
      <Card className="border-primary/30 ring-1 ring-primary/15">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PlayCircle className="size-4 text-primary" />
            Continue learning
          </CardTitle>
          <CardDescription>Loading your progress…</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  if (!next) {
    return (
      <Card className="border-emerald-500/30 ring-1 ring-emerald-500/15">
        <CardHeader>
          <CardTitle>🎉 You finished every available lesson!</CardTitle>
          <CardDescription>
            New modules are being written. Come back soon — and keep your streak alive.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const starting = done === 0;

  return (
    <Card className="border-primary/30 ring-1 ring-primary/15">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PlayCircle className="size-4 text-primary" />
          {starting ? "Ready to begin?" : "Continue where you left off"}
        </CardTitle>
        <CardDescription>
          {starting
            ? "Your first lesson is short and friendly. Let’s go."
            : `You’ve completed ${done} lesson${done > 1 ? "s" : ""}. One more today?`}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Up next
          </p>
          <p className="font-medium">{next.title}</p>
        </div>
        <Button asChild>
          <Link href={`/learn/${next.slug}`}>
            {starting ? "Start" : "Resume"}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
