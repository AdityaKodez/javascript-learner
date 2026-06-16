"use client";

import { Check, HelpCircle, Play, X } from "lucide-react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// PredictOutput — "What will this print?" Shown BEFORE the output is revealed.
//
// Forcing the learner to commit to a prediction first turns passive reading
// into active recall (a much stronger memory signal). The real output stays
// hidden until they pick an option, then we reveal correct/incorrect, the
// actual output, and an optional explanation.
// ---------------------------------------------------------------------------

export function PredictOutput({
  code,
  options,
  answer,
  explanation,
  title,
  language = "javascript",
}: {
  code: string;
  options: string[];
  answer: number;
  explanation?: string;
  title?: string;
  language?: string;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const revealed = selected !== null;
  const correct = revealed && selected === answer;

  return (
    <figure className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
      <figcaption className="flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5 text-xs font-medium text-muted-foreground">
        <HelpCircle className="size-3.5" />
        {title ?? "Predict the output"}
      </figcaption>

      <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed">
        <SyntaxHighlighter language={language} style={a11yDark}>
          {code}
        </SyntaxHighlighter>
      </pre>

      <div className="flex flex-col gap-3 border-t bg-background p-4">
        <p className="text-sm font-medium">
          🤔 What will this print?
        </p>
        <div className="flex flex-col gap-2">
          {options.map((opt, idx) => {
            const isAnswer = idx === answer;
            const isSelected = idx === selected;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => !revealed && setSelected(idx)}
                disabled={revealed}
                aria-pressed={isSelected}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-lg border px-4 py-2.5 text-left font-mono text-[13px] transition-all",
                  !revealed && "hover:border-primary hover:bg-muted/40",
                  revealed && isAnswer && "border-emerald-500 bg-emerald-500/10",
                  revealed &&
                    isSelected &&
                    !isAnswer &&
                    "border-destructive bg-destructive/10",
                  revealed && !isAnswer && !isSelected && "opacity-60",
                )}
              >
                <span className="whitespace-pre-wrap">{opt}</span>
                {revealed && isAnswer ? (
                  <Check className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                ) : revealed && isSelected && !isAnswer ? (
                  <X className="size-4 shrink-0 text-destructive" />
                ) : null}
              </button>
            );
          })}
        </div>

        {revealed ? (
          <div
            className={cn(
              "rounded-lg border p-3 text-sm",
              correct
                ? "border-emerald-500/40 bg-emerald-500/5"
                : "border-destructive/40 bg-destructive/5",
            )}
          >
            <p className="flex items-center gap-1.5 font-medium">
              {correct ? "✅ Correct!" : "💡 Not quite."}
            </p>
            <div className="mt-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-emerald-500">
              <Play className="size-3" />
              Actual output
            </div>
            <pre className="mt-1 whitespace-pre-wrap wrap-break-word font-mono text-[13px] text-emerald-400">
              {options[answer]}
            </pre>
            {explanation ? (
              <p className="mt-2 text-muted-foreground">{explanation}</p>
            ) : null}
          </div>
        ) : null}
      </div>
    </figure>
  );
}
