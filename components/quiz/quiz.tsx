"use client";

import { Check, ChevronRight, RotateCcw, X } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useProgress } from "@/lib/progress-store";
import type { Quiz as QuizType } from "@/types";

// ---------------------------------------------------------------------------
// Quiz — a one-question-at-a-time knowledge check.
//
// Design choices for low cognitive load:
//   - Show ONE question at a time (not all at once).
//   - Instant feedback + explanation after answering.
//   - A progress bar so the end is always in sight.
//   - "Pass" = 80%+. Passing records the score to the progress store.
// ---------------------------------------------------------------------------

const PASS_THRESHOLD = 80;

export function Quiz({ quiz }: { quiz: QuizType }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const passQuiz = useProgress((s) => s.passQuiz);
  const question = quiz.questions[current];
  const isLast = current === quiz.questions.length - 1;
  const score = Math.round(
    (answers.filter((a, i) => a === quiz.questions[i].answer).length /
      quiz.questions.length) *
      100,
  );
  const passed = score >= PASS_THRESHOLD;

  function choose(idx: number) {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
    setAnswers((prev) => [...prev, idx]);
  }

  function next() {
    if (isLast) {
      setFinished(true);
      passQuiz(quiz.id, score);
      return;
    }
    setCurrent((c) => c + 1);
    setSelected(null);
    setRevealed(false);
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setRevealed(false);
    setAnswers([]);
    setFinished(false);
  }

  if (finished) {
    return <QuizResult quiz={quiz} score={score} passed={passed} onRestart={restart} />;
  }

  const correct = revealed && selected === question.answer;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Question {current + 1} of {quiz.questions.length}
        </span>
        <Badge variant={correct ? "default" : revealed ? "destructive" : "secondary"}>
          {correct ? "Correct" : revealed ? "Try again next time" : "Tap an answer"}
        </Badge>
      </div>

      <Progress value={((current + (revealed ? 1 : 0)) / quiz.questions.length) * 100} />

      <fieldset className="flex flex-col gap-3">
        <legend className="text-base font-medium">{question.question}</legend>
        <div className="mt-2 flex flex-col gap-2">
          {question.options.map((opt, idx) => {
            const isAnswer = idx === question.answer;
            const isSelected = idx === selected;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => choose(idx)}
                disabled={revealed}
                aria-pressed={isSelected}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all",
                  !revealed && "hover:border-primary hover:bg-muted/40",
                  revealed && isAnswer && "border-emerald-500 bg-emerald-500/10",
                  revealed &&
                    isSelected &&
                    !isAnswer &&
                    "border-destructive bg-destructive/10",
                  revealed && !isAnswer && !isSelected && "opacity-60",
                )}
              >
                <span>{opt}</span>
                {revealed && isAnswer ? (
                  <Check className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                ) : revealed && isSelected && !isAnswer ? (
                  <X className="size-4 shrink-0 text-destructive" />
                ) : null}
              </button>
            );
          })}
        </div>
      </fieldset>

      {revealed ? (
        <div
          className={cn(
            "rounded-xl border p-4 text-sm",
            correct
              ? "border-emerald-500/40 bg-emerald-500/5"
              : "border-destructive/40 bg-destructive/5",
          )}
        >
          <p className="font-medium">
            {correct ? "✅ Correct!" : "💡 Not quite — here’s why:"}
          </p>
          <p className="mt-1 text-muted-foreground">{question.explanation}</p>
        </div>
      ) : null}

      {revealed ? (
        <Button onClick={next} className="self-start">
          {isLast ? "See results" : "Next question"}
          <ChevronRight className="size-4" />
        </Button>
      ) : null}
    </div>
  );
}

function QuizResult({
  quiz,
  score,
  passed,
  onRestart,
}: {
  quiz: QuizType;
  score: number;
  passed: boolean;
  onRestart: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-4 py-4 text-center">
      <div
        className={cn(
          "flex size-16 items-center justify-center rounded-full text-3xl",
          passed ? "bg-emerald-500/15" : "bg-amber-500/15",
        )}
      >
        {passed ? "🎉" : "💪"}
      </div>
      <div>
        <p className="font-heading text-xl font-semibold">
          {passed ? "Quiz passed!" : "Good attempt!"}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          You scored {score}%. {passed ? "Nice work — that’s a pass." : "You need 80% to pass. Review and retry."}
        </p>
      </div>
      <Badge variant={passed ? "default" : "secondary"}>
        {quiz.title}
      </Badge>
      <Button variant="outline" size="sm" onClick={onRestart}>
        <RotateCcw className="size-3.5" />
        Try again
      </Button>
    </div>
  );
}
