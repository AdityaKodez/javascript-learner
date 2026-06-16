import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LearnLayout } from "@/components/learning/learn-layout";
import { LessonRenderer } from "@/components/learning/lesson-renderer";
import { Challenge } from "@/components/learning/challenge";
import { KnowledgeCheckModal } from "@/components/quiz/knowledge-check-modal";
import { CompleteLessonButton } from "@/components/learning/complete-lesson-button";
import {
  allLessons,
  getLessonNav,
  totalLessons,
} from "@/content/javascript/modules";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Lesson page — `/learn/[slug]`.
//
// Server component for the shell (objectives, content, challenge, quiz CTA,
// prev/next nav). Only the interactive bits (complete button, quiz, challenge)
// are client components. Static params are generated from the curriculum.
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return allLessons.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // params is async in Next 16
  return params.then((p) => {
    const lesson = allLessons.find((l) => l.slug === p.slug);
    return {
      title: lesson ? `${lesson.title} · JavaScript Learner` : "JavaScript Learner",
      description: lesson?.challenge.prompt ?? "Learn JavaScript one step at a time.",
    };
  });
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = allLessons.find((l) => l.slug === slug);
  if (!lesson) notFound();

  const { index, previous, next } = getLessonNav(slug);

  return (
    <LearnLayout activeSlug={slug}>
      <article className="mx-auto max-w-3xl">
        {/* Breadcrumb / position */}
        <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
          <span>{lesson.moduleTitle}</span>
          <span>·</span>
          <span>
            Lesson {index + 1} of {totalLessons}
          </span>
        </div>

        {/* Title + meta */}
        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          {lesson.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Badge variant="secondary">
            <Clock className="size-3" />
            {lesson.durationMin} min
          </Badge>
          <Badge variant="outline">{lesson.difficulty}</Badge>
        </div>

        {/* Lesson body */}
        <section className="mt-10">
          <LessonRenderer blocks={lesson.content} />
        </section>

        <Separator className="my-10" />

        {/* Mini challenge */}
        <section className="mt-10">
          <Challenge lesson={lesson} />
        </section>

        {/* Quiz CTA + complete */}
        <section className="mt-8 flex flex-col gap-4 rounded-2xl border bg-muted/20 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <CheckCircle2 className="size-5" />
            </div>
            <div>
              <p className="font-medium">Ready to lock it in?</p>
              <p className="text-sm text-muted-foreground">
                Take a quick check, then mark this lesson complete.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <KnowledgeCheckModal quiz={lesson.quiz} />
            <CompleteLessonButton
              slug={lesson.slug}
              achievement={lesson.achievement}
            />
          </div>
        </section>

        {/* Prev / Next */}
        <nav
          aria-label="Lesson navigation"
          className="mt-10 grid gap-3 sm:grid-cols-2"
        >
          {previous ? (
            <LessonNavCard
              dir="prev"
              href={`/learn/${previous.slug}`}
              title={previous.title}
            />
          ) : (
            <div />
          )}
          {next ? (
            <LessonNavCard
              dir="next"
              href={`/learn/${next.slug}`}
              title={next.title}
            />
          ) : (
            <div className="flex items-center justify-end rounded-xl border border-dashed p-4 text-sm text-muted-foreground">
              🎉 You’ve reached the end of the path so far!
            </div>
          )}
        </nav>
      </article>
    </LearnLayout>
  );
}

function LessonNavCard({
  dir,
  href,
  title,
}: {
  dir: "prev" | "next";
  href: string;
  title: string;
}) {
  const isNext = dir === "next";
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-3 rounded-xl border p-4 transition-all hover:border-primary hover:bg-muted/40",
        isNext && "sm:flex-row-reverse sm:text-right",
      )}
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {isNext ? <ArrowRight className="size-4" /> : <ArrowLeft className="size-4" />}
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
          {isNext ? "Next lesson" : "Previous lesson"}
        </span>
        <span className="block truncate text-sm font-medium">{title}</span>
      </span>
    </Link>
  );
}
