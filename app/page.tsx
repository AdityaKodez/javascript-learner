import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Code2,
  GraduationCap,
  HeartHandshake,
  Rocket,
  Sparkles,
  Trophy,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AppHeader } from "@/components/app-header";
import { ProgressTracker } from "@/components/learning/progress-tracker";
import { modules } from "@/content/javascript/modules";
import { getIcon } from "@/components/learning/icon";

// ---------------------------------------------------------------------------
// Home page — the welcoming front door.
//
// Goals: reassure beginners, show the path, get them to the first lesson in
// one click. No walls of text — a hero, three reassurance points, the module
// grid, and a progress sidebar for returning learners.
// ---------------------------------------------------------------------------

export default function HomePage() {
  const firstLessonSlug = modules[0].lessons[0].slug;

  return (
    <div className="min-h-screen">
      <AppHeader showPathInSheet={false} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.96_0.04_38)_0%,transparent_70%)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.32_0.08_38)_0%,transparent_70%)]"
        />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="size-3" />
              From zero to confident beginner
            </Badge>
            <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Learn JavaScript,
              <br />
              <span className="text-primary">one small step at a time.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Short, visual, interactive lessons. No jargon, no walls of text —
              just real code you can run and concepts that actually stick.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild>
                <Link href={`/learn/${firstLessonSlug}`}>
                  Start learning — free
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/roadmap">See the roadmap</Link>
              </Button>
            </div>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="size-3" />
              Each lesson takes 5–10 minutes
            </p>
          </div>
        </div>
      </section>

      {/* Why this course */}
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="grid gap-4 sm:grid-cols-3">
            <Feature
              icon={<Code2 className="size-5" />}
              title="Run code instantly"
              text="Every example is editable. Change a line, hit Run, see what happens — right in your browser."
            />
            <Feature
              icon={<HeartHandshake className="size-5" />}
              title="Built for beginners"
              text="We assume zero programming knowledge. Plain language, real-world analogies, and no scary jargon."
            />
            <Feature
              icon={<Trophy className="size-5" />}
              title="Progress that feels good"
              text="Track lessons, keep a streak, and earn badges. Small wins, every single day."
            />
          </div>
        </div>
      </section>

      {/* Modules + progress */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h2 className="font-heading text-2xl font-semibold tracking-tight">
                  The learning path
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  13 modules. Take them in order, or jump to what interests you.
                </p>
              </div>
              <Button variant="ghost" size="sm" asChild className="shrink-0">
                <Link href="/roadmap">
                  Full roadmap
                  <ArrowRight className="size-3.5" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {modules.map((m) => {
                const ModuleIcon = getIcon(m.icon);
                return (
                  <Link key={m.slug} href={`/learn/${m.lessons[0].slug}`} className="group">
                    <Card className="h-full transition-all group-hover:-translate-y-0.5 group-hover:ring-foreground/20">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="font-mono">
                            {String(m.order).padStart(2, "0")}
                          </Badge>
                          <ModuleIcon className={`size-5 ${m.accent}`} />
                        </div>
                        <CardTitle className="mt-1 text-base">{m.title}</CardTitle>
                        <CardDescription>{m.tagline}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>

          <aside className="lg:sticky lg:top-20 lg:self-start">
            <ProgressTracker />
          </aside>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Rocket className="size-6" />
          </div>
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            Ready to write your first line of JavaScript?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            It takes 5 minutes. No sign-up, no setup. Just press Start.
          </p>
          <Button size="lg" asChild className="mt-6">
            <Link href={`/learn/${firstLessonSlug}`}>
              <GraduationCap className="size-4" />
              Start the first lesson
            </Link>
          </Button>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-xs text-muted-foreground">
          Built for learners, not for showing off. Practice a little every day. 💛
        </div>
      </footer>
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
        <CardTitle className="mt-1">{title}</CardTitle>
        <CardDescription>{text}</CardDescription>
      </CardHeader>
    </Card>
  );
}
