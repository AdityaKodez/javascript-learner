"use client";

import Link from "next/link";
import { Check } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { useProgress } from "@/lib/progress-store";
import { modules } from "@/content/javascript/modules";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// PathNavList — the learning-path navigation, accordion-style.
//
// Each module is a collapsible section. Lessons live inside. The module that
// contains the currently-open lesson auto-expands. No decorative module
// icons — just text + a chevron, for a clean, readable list.
// `activeSlug` highlights the current lesson (lesson pages only).
// ---------------------------------------------------------------------------

export function PathNavList({
  activeSlug,
  onNavigate,
}: {
  activeSlug?: string;
  onNavigate?: () => void;
}) {
  const mounted = useHasMounted();
  const completed = useProgress((s) => s.completedLessons);

  // Auto-open the module whose lesson is currently active.
  const activeModule = modules.find((m) =>
    m.lessons.some((l) => l.slug === activeSlug),
  );
  const defaultValue = activeModule ? [activeModule.slug] : undefined;

  return (
    <Accordion
      type="multiple"
      defaultValue={defaultValue}
      className="gap-0 px-1"
    >
      {modules.map((m) => {
        const total = m.lessons.length;
        const done = mounted
          ? m.lessons.filter((l) => completed.includes(l.slug)).length
          : 0;

        return (
          <AccordionItem
            key={m.slug}
            value={m.slug}
            className="border-b border-border/60 last:border-0"
          >
            <AccordionTrigger className="items-center gap-2 py-3 text-left hover:no-underline">
              <span className="flex items-center gap-2">
                <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
                  {String(m.order).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium">{m.title}</span>
              </span>
              <span className="ml-auto pr-1 text-[11px] font-normal tabular-nums text-muted-foreground group-aria-expanded/accordion-trigger:hidden">
                {done}/{total}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-1">
              <ul className="flex flex-col">
                {m.lessons.map((l) => {
                  const isDone = mounted && completed.includes(l.slug);
                  const isActive = activeSlug === l.slug;
                  return (
                    <li key={l.slug}>
                      <Link
                        href={`/learn/${l.slug}`}
                        onClick={onNavigate}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm transition-colors",
                          isActive
                            ? "bg-primary/10 font-medium text-primary"
                            : "text-foreground/80 hover:bg-muted hover:text-foreground",
                        )}
                      >
                        <span
                          aria-hidden
                          className={cn(
                            "flex size-4 shrink-0 items-center justify-center rounded-full border text-[8px]",
                            isDone
                              ? "border-emerald-500 bg-emerald-500 text-white"
                              : isActive
                                ? "border-primary"
                                : "border-muted-foreground/30",
                          )}
                        >
                          {isDone ? <Check className="size-2.5" /> : null}
                        </span>
                        <span className="leading-snug">{l.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
