import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

import { ContinueCard } from "@/components/learning/continue-card";
import { getIcon } from "@/components/learning/icon";
import { LearnLayout } from "@/components/learning/learn-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { modules } from "@/content/javascript/modules";

// ---------------------------------------------------------------------------
// /learn — the "all modules" index inside the learning shell.
// Shows a continue card (for returning learners) then every module expanded
// with its lessons.
// ---------------------------------------------------------------------------

export default function LearnIndexPage() {
  return (
    <LearnLayout>
      <div className="mx-auto max-w-3xl">
        <ContinueCard />

        <h1 className="mt-10 font-heading text-3xl font-semibold tracking-tight">
          All modules
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          14 modules, taken in order. Each builds on the last.
        </p>

        <div className="mt-6 flex flex-col gap-6">
          {modules.map((m) => {
            const ModuleIcon = getIcon(m.icon);
            return (
              <section key={m.slug}>
                <div className="mb-3 flex items-center gap-3">
                  <span className={`flex size-9 items-center justify-center ${m.accent}`}>
                    <ModuleIcon className="size-4" />
                  </span>
                  <div>
                    <h2 className="font-heading text-lg font-semibold">
                      <span className="mr-2 font-mono text-sm text-muted-foreground">
                        {String(m.order).padStart(2, "0")}
                      </span>
                      {m.title}
                    </h2>
                    <p className="text-xs text-muted-foreground">{m.description}</p>
                  </div>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {m.lessons.map((l) => (
                    <Link key={l.slug} href={`/learn/${l.slug}`} className="group">
                      <Card className="h-full transition-all group-hover:-translate-y-0.5 group-hover:ring-foreground/20">
                        <CardHeader>
                          <CardTitle className="text-sm">{l.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <Clock className="size-3" />
                            {l.durationMin} min · {l.difficulty}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-between rounded-xl border bg-muted/30 p-4">
          <p className="text-sm text-muted-foreground">
            Prefer a visual overview?
          </p>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/roadmap">
              Open the roadmap
              <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </LearnLayout>
  );
}
