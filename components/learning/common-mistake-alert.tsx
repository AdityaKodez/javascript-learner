import { AlertCircle, Check, X } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// ---------------------------------------------------------------------------
// CommonMistakeAlert — shows wrong/right pairs with a "why".
// Side-by-side red/green comparison makes the fix obvious at a glance.
// ---------------------------------------------------------------------------

interface Mistake {
  wrong: string;
  right: string;
  why: string;
}

export function CommonMistakeAlert({ mistakes }: { mistakes: Mistake[] }) {
  return (
    <Card className="border-destructive/30 ring-1 ring-destructive/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-destructive">
          <AlertCircle className="size-4" />
          Common mistakes
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {mistakes.map((m, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 border-l-2 border-border pl-3"
          >
            <CompareRow
              tone="wrong"
              label="Avoid"
              text={m.wrong}
            />
            <CompareRow tone="right" label="Instead" text={m.right} />
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">Why: </span>
              {m.why}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function CompareRow({
  tone,
  label,
  text,
}: {
  tone: "wrong" | "right";
  label: string;
  text: string;
}) {
  const isRight = tone === "right";
  return (
    <div className="flex items-start gap-2 text-sm">
      <span
        aria-hidden
        className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
          isRight
            ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
            : "bg-destructive/15 text-destructive"
        }`}
      >
        {isRight ? <Check className="size-3" /> : <X className="size-3" />}
      </span>
      <span>
        <span
          className={`mr-1.5 text-xs font-semibold uppercase tracking-wide ${
            isRight ? "text-emerald-600 dark:text-emerald-400" : "text-destructive"
          }`}
        >
          {label}
        </span>
        {text}
      </span>
    </div>
  );
}
