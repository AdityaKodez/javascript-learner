"use client";

import { GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Quiz } from "@/components/quiz/quiz";
import type { Quiz as QuizType } from "@/types";

// ---------------------------------------------------------------------------
// KnowledgeCheckModal — opens the lesson quiz inside a dialog.
// Triggered by the "Knowledge check" CTA at the end of a lesson.
// ---------------------------------------------------------------------------
  
export function KnowledgeCheckModal({ quiz }: { quiz: QuizType }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full sm:w-auto">
          <GraduationCap className="size-4" />
          Take the knowledge check
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <GraduationCap className="size-5 text-primary" />
            {quiz.title}
          </DialogTitle>
          <DialogDescription>
            Answer a few quick questions. You need 80% to pass — but you can retry anytime.
          </DialogDescription>
        </DialogHeader>
        <Quiz quiz={quiz} />
      </DialogContent>
    </Dialog>
  );
}
