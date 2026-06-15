"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { AppHeader } from "@/components/app-header";
import { PathNavList } from "@/components/learning/path-nav-list";

// ---------------------------------------------------------------------------
// LearnLayout — two-column layout for learning pages.
//
// Desktop (lg+): fixed-width path sidebar on the left + main content.
// Mobile: sidebar collapses into the header's Sheet (handled by AppHeader).
// `activeSlug` flows down to highlight the current lesson in the list.
// ---------------------------------------------------------------------------

export function LearnLayout({
  children,
  activeSlug,
}: {
  children: React.ReactNode;
  activeSlug?: string;
}) {
  return (
    <div className="min-h-screen">
      <AppHeader />
      <div className="mx-auto flex w-full max-w-7xl gap-0 px-0 lg:px-4">
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-72 shrink-0 border-r lg:block">
          <ScrollArea className="h-full px-3 py-6">
            <PathNavList activeSlug={activeSlug} />
          </ScrollArea>
        </aside>
        <main className="min-w-0 flex-1 px-4 py-8 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
