"use client";

import { useState } from "react";
import { TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useProgress } from "@/lib/progress-store";

// ---------------------------------------------------------------------------
// ResetProgressButton — wipes localStorage progress after confirmation.
// Useful for re-taking the course or for testing. Destructive, so it lives
// behind a dialog with clear warning text.
// ---------------------------------------------------------------------------

export function ResetProgressButton() {
  const [open, setOpen] = useState(false);
  const reset = useProgress((s) => s.reset);

  function handleReset() {
    reset();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <TriangleAlert className="size-3.5" />
          Reset all progress
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Reset all progress?</DialogTitle>
          <DialogDescription>
            This clears every completed lesson, quiz score, streak, and achievement.
            This can’t be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-row justify-center gap-2 sm:justify-center">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Keep my progress
          </Button>
          <Button variant="destructive" onClick={handleReset}>
            Yes, reset everything
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
