// ---------------------------------------------------------------------------
// Core domain types for the JavaScript learning platform.
//
// These types describe the shape of:
//   - the learning path / curriculum (modules & lessons)
//   - lesson content blocks (the building blocks of every lesson)
//   - quizzes & challenges
//   - the user's progress, achievements and streak
//
// Content is authored as data, not hardcoded JSX, so adding a lesson is just
// adding to a file in /content/javascript.
// ---------------------------------------------------------------------------

/** Difficulty shown as a badge on lesson cards. */
export type Difficulty = "Beginner" | "Easy" | "Medium";

/** Identifier for an achievement badge. */
export type AchievementId =
  | "first-variable"
  | "function-explorer"
  | "loop-survivor"
  | "array-adventurer"
  | "object-detective"
  | "dom-tinkerer"
  | "first-lesson"
  | "streak-3"
  | "quiz-master";

// ---------------------------------------------------------------------------
// Lesson content blocks
//
// A lesson is an ordered list of "blocks". Each block is one of the kinds
// below. This keeps content declarative and lets the renderer map each block
// to the right visual component.
// ---------------------------------------------------------------------------

export type ContentBlock =
  | { kind: "heading"; level: 2 | 3; text: string }
  | { kind: "paragraph"; text: string }
  | { kind: "callout"; variant: "info" | "tip" | "warning"; title?: string; text: string }
  | {
      kind: "code";
      title?: string;
      code: string;
      language?: string;
      /** Optional one-line summary shown above the code. */
      summary?: string;
      /** Line-by-line explanation: index = line number (0-based). */
      lines?: string[];
      /** The text the code prints when run, shown in an "Output" panel. */
      output?: string;
    }
  | { kind: "concept"; title: string; icon?: string; points: string[] }
  | { kind: "analogy"; title: string; analogy: string; takeaway?: string }
  | {
      kind: "mistake";
      mistakes: { wrong: string; right: string; why: string }[];
    }
  | { kind: "playground"; title?: string; initialCode: string; hint?: string }
  | { kind: "diagram"; mermaid: string; caption?: string }
  | {
      kind: "steps";
      title?: string;
      steps: { title: string; description: string }[];
    }
  | { kind: "table"; headers: string[]; rows: string[][] }
  | {
      kind: "resources";
      title?: string;
      items: { label: string; url: string; description?: string }[];
    }
  | { kind: "recap"; points: string[] }
  | {
      kind: "challenge";
      title: string;
      prompt: string;
      starterCode: string;
      /** A substring that should appear in the user's output to "pass". */
      expectedOutput?: string;
      hint?: string;
    };

// ---------------------------------------------------------------------------
// Quiz & knowledge checks
// ---------------------------------------------------------------------------

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  /** Index into options. */
  answer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

// ---------------------------------------------------------------------------
// Lesson & module
// ---------------------------------------------------------------------------

export interface Lesson {
  slug: string;
  title: string;
  /** ~5-10 min, expressed in minutes for the badge. */
  durationMin: number;
  difficulty: Difficulty;
  /** "What you'll learn" — 2-4 bullets. */
  objectives: string[];
  /** The blocks that make up the lesson body. */
  content: ContentBlock[];
  /** The tiny challenge shown inside the lesson. */
  challenge: {
    title: string;
    prompt: string;
    starterCode: string;
    expectedOutput?: string;
    hint?: string;
  };
  /** Quick knowledge check at the end of the lesson. */
  quiz: Quiz;
  /** Achievement unlocked when this lesson is completed. */
  achievement?: AchievementId;
}

export interface Module {
  slug: string;
  /** 1-based position in the path. */
  order: number;
  title: string;
  /** Short tagline shown on cards. */
  tagline: string;
  description: string;
  icon: string;
  /** Tailwind text color class for the module accent, e.g. "text-amber-500". */
  accent: string;
  lessons: Lesson[];
}

// ---------------------------------------------------------------------------
// Progress (persisted to localStorage via Zustand)
// ---------------------------------------------------------------------------

export interface ProgressState {
  /** Lesson slugs marked complete. */
  completedLessons: string[];
  /** Quiz ids that were passed (>= 80%). */
  passedQuizzes: string[];
  /** Achievement ids earned. */
  achievements: AchievementId[];
  /** Best score per quiz id (0-100). */
  bestScores: Record<string, number>;
  /** ISO date strings (YYYY-MM-DD) the user was active. */
  activeDays: string[];
  /** ISO timestamp of last activity, for streak calc. */
  lastActive: string | null;
  /** Tiny challenges the user marked as solved. */
  solvedChallenges: string[];

  // actions
  completeLesson: (slug: string, achievement?: AchievementId) => void;
  passQuiz: (quizId: string, score: number) => void;
  solveChallenge: (id: string) => void;
  reset: () => void;
}

export interface Achievement {
  id: AchievementId;
  title: string;
  description: string;
  icon: string;
}
