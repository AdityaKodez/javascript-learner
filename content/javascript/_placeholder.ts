import type { Lesson, Module } from "@/types";

// ---------------------------------------------------------------------------
// Helper for the "coming soon" modules (4-13).
//
// These modules appear on the roadmap so learners see the full path, but
// their lessons are placeholders with a friendly "preview" lesson. This keeps
// the architecture complete without shipping half-written content.
// ---------------------------------------------------------------------------

export function makePreviewLesson(topic: string): Lesson {
  return {
    slug: `${topic}-preview`,
    title: "Coming soon",
    durationMin: 5,
    difficulty: "Beginner",
    objectives: [`This lesson is part of the ${topic} module — being written.`],
    content: [
      {
        kind: "callout",
        variant: "info",
        title: "This module is in the workshop 🔧",
        text: "You can see where it fits in your learning path. Full interactive lessons for this topic are being added. Meanwhile, keep your streak going with the earlier modules!",
      },
      {
        kind: "paragraph",
        text: "The first three modules — Introduction, Variables, and Data Types — are complete and fully interactive. New modules are released as they're polished, so every lesson you do is finished quality.",
      },
    ],
    challenge: {
      title: "Revisit an earlier lesson",
      prompt: "While this module is being written, reinforce what you've learned by completing a quiz from an earlier lesson.",
      starterCode: "// see you soon!",
      hint: "Streaks reward daily practice — come back tomorrow.",
    },
    quiz: {
      id: `quiz-${topic}-preview`,
      title: "Preview check",
      questions: [
        {
          id: "q1",
          question: "What's the best way to learn programming?",
          options: [
            "Read everything first",
            "Practice a little every day",
            "Memorize syntax",
            "Skip the basics",
          ],
          answer: 1,
          explanation: "Daily practice with feedback is how skills stick.",
        },
      ],
    },
  };
}

export function makePreviewModule(
  slug: string,
  order: number,
  title: string,
  tagline: string,
  description: string,
  icon: string,
  accent: string,
): Module {
  return {
    slug,
    order,
    title,
    tagline,
    description,
    icon,
    accent,
    lessons: [makePreviewLesson(slug)],
  };
}
