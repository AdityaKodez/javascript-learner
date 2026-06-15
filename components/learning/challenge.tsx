"use client";

import { CheckCircle2, Lightbulb, Target } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Playground } from "@/components/playground/playground";
import { useProgress } from "@/lib/progress-store";
import { passesChallenge } from "@/lib/run-code";
import { cn } from "@/lib/utils";
import type { Lesson } from "@/types";

// ---------------------------------------------------------------------------
// Challenge — the "tiny challenge" at the end of each lesson.
//
// The learner writes code in an embedded Playground, hits Check, and if the
// expected output appears, the challenge is marked solved in the progress
// store. Designed to feel achievable in under 2 minutes.
// ---------------------------------------------------------------------------

export function Challenge({
  lesson,
}: {
  lesson: Lesson;
}) {
  const challengeId = `${lesson.slug}-challenge`;
  const solved = useProgress((s) => s.solvedChallenges.includes(challengeId));
  const solveChallenge = useProgress((s) => s.solveChallenge);
  const [code, setCode] = useState(lesson.challenge.starterCode);
  const [showHint, setShowHint] = useState(false);
  const [status, setStatus] = useState<"idle" | "pass" | "fail">("idle");

  function handleCheck() {
    const passed = passesChallenge(code, lesson.challenge.expectedOutput);
    setStatus(passed ? "pass" : "fail");
    if (passed) solveChallenge(challengeId);
  }

  return (
    <Card
      className={cn(
        "ring-1",
        solved
          ? "border-emerald-500/40 ring-emerald-500/20"
          : "border-primary/30 ring-primary/15",
      )}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Target className="size-4 text-primary" />
              Mini challenge: {lesson.challenge.title}
            </CardTitle>
            <CardDescription className="mt-1">
              {lesson.challenge.prompt}
            </CardDescription>
          </div>
          {solved ? (
            <Badge className="text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="size-3" />
              Solved
            </Badge>
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Playground
          initialCode={lesson.challenge.starterCode}
          title="Your solution"
          hint="Edit, then Run to test"
          className="ring-0"
        />
        {/* Keep the Playground internal state and the check in sync via a
            hidden controlled mirror — simpler: re-run from the textarea. */}
        <ChallengeControls
          code={code}
          setCode={setCode}
          lesson={lesson}
          status={status}
          showHint={showHint}
          onCheck={handleCheck}
          onToggleHint={() => setShowHint((v) => !v)}
        />
      </CardContent>
    </Card>
  );
}

// The Playground is uncontrolled (manages its own code). For challenge
// checking we re-implement a tiny editor here so we control the code value.
function ChallengeControls({
  code,
  setCode,
  lesson,
  status,
  showHint,
  onCheck,
  onToggleHint,
}: {
  code: string;
  setCode: (v: string) => void;
  lesson: Lesson;
  status: "idle" | "pass" | "fail";
  showHint: boolean;
  onCheck: () => void;
  onToggleHint: () => void;
}) {
  return (
    <>
      <label htmlFor="challenge-editor" className="sr-only">
        Your challenge solution
      </label>
      <textarea
        id="challenge-editor"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
        className="min-h-[6rem] w-full resize-y rounded-xl bg-zinc-950 p-4 font-mono text-sm text-zinc-100 outline-none ring-1 ring-foreground/10"
      />

      <div className="flex flex-wrap items-center gap-2">
        <Button onClick={onCheck}>
          <CheckCircle2 className="size-4" />
          Check my answer
        </Button>
        {lesson.challenge.hint ? (
          <Button variant="ghost" size="sm" onClick={onToggleHint}>
            <Lightbulb className="size-3.5" />
            {showHint ? "Hide hint" : "Show hint"}
          </Button>
        ) : null}
      </div>

      {showHint && lesson.challenge.hint ? (
        <p className="rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">
          💡 {lesson.challenge.hint}
        </p>
      ) : null}

      {status === "pass" ? (
        <p className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-300">
          🎉 {lesson.challenge.expectedOutput
            ? "That matches — challenge complete!"
            : "Nice work — challenge complete!"}
        </p>
      ) : null}
      {status === "fail" ? (
        <p className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-sm text-amber-700 dark:text-amber-300">
          Not quite yet. Run it first to see the output, then tweak your code.
        </p>
      ) : null}
    </>
  );
}
