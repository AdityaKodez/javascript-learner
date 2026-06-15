"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/theme-toggle";
import { PathNavList } from "@/components/learning/path-nav-list";
import { ProgressBadge } from "@/components/progress-badge";

// ---------------------------------------------------------------------------
// AppHeader — top bar shown on every page.
//
// Left: brand / home link. Right: a compact progress chip, theme toggle, and
// (on small screens) a hamburger that opens the learning path in a Sheet.
// ---------------------------------------------------------------------------

export function AppHeader({ showPathInSheet = true }: { showPathInSheet?: boolean }) {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4">
        <Link href="/" className="flex items-center gap-2 font-heading text-sm font-semibold">
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            {"JS"}
          </span>
          <span className="hidden sm:inline">JavaScript Learner</span>
        </Link>

        <nav className="ml-2 hidden items-center gap-1 text-sm sm:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/learn">Learn</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/roadmap">Roadmap</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/progress">Progress</Link>
          </Button>
        </nav>

        <div className="ml-auto flex items-center gap-1.5">
          <ProgressBadge />
          <ThemeToggle />

          {showPathInSheet ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon-sm"
                  className="lg:hidden"
                  aria-label="Open learning path"
                >
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-75 p-0">
                <SheetHeader className="px-4 pt-4">
                  <SheetTitle>Learning path</SheetTitle>
                </SheetHeader>
                <ScrollArea className="h-[calc(100vh-4rem)] px-3 pb-6">
                  <PathNavList />
                </ScrollArea>
              </SheetContent>
            </Sheet>
          ) : null}
        </div>
      </div>
    </header>
  );
}
