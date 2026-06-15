"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AchievementId, ProgressState } from "@/types";

// ---------------------------------------------------------------------------
// Learning progress store.
//
// Persisted to localStorage under "js-learner/progress". All selectors that
// read it should be defensive about hydration — see useHasMounted / the
// hydration guards in components.
// ---------------------------------------------------------------------------

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

/**
 * Compute the current streak (consecutive days up to and including today or
 * yesterday). Stored as a flat list of days so the math is simple and lossless.
 */
export function computeStreak(days: string[]): number {
  if (days.length === 0) return 0;
  const set = new Set(days);
  const today = todayISO();
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  // If the user hasn't been active today or yesterday, the streak is broken.
  let cursor: string;
  if (set.has(today)) cursor = today;
  else if (set.has(yesterday)) cursor = yesterday;
  else return 0;

  let streak = 0;
  while (set.has(cursor)) {
    streak++;
    cursor = new Date(
      new Date(cursor).getTime() - 86400000,
    ).toISOString().slice(0, 10);
  }
  return streak;
}

const initialState = {
  completedLessons: [] as string[],
  passedQuizzes: [] as string[],
  achievements: [] as AchievementId[],
  bestScores: {} as Record<string, number>,
  activeDays: [] as string[],
  lastActive: null as string | null,
  solvedChallenges: [] as string[],
};

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...initialState,

      completeLesson: (slug, achievement) => {
        const already = get().completedLessons.includes(slug);
        const day = todayISO();
        set((s) => ({
          completedLessons: already
            ? s.completedLessons
            : [...s.completedLessons, slug],
          achievements:
            achievement && !s.achievements.includes(achievement)
              ? [...s.achievements, achievement]
              : s.achievements,
          activeDays: s.activeDays.includes(day)
            ? s.activeDays
            : [...s.activeDays, day],
          lastActive: new Date().toISOString(),
        }));

        // "first-lesson" meta achievement
        if (!already && get().completedLessons.length === 1) {
          set((s) =>
            s.achievements.includes("first-lesson")
              ? s
              : { achievements: [...s.achievements, "first-lesson"] },
          );
        }
        checkStreakAchievement(get, set);
      },

      passQuiz: (quizId, score) => {
        const day = todayISO();
        set((s) => ({
          passedQuizzes: s.passedQuizzes.includes(quizId)
            ? s.passedQuizzes
            : [...s.passedQuizzes, quizId],
          bestScores: {
            ...s.bestScores,
            [quizId]: Math.max(s.bestScores[quizId] ?? 0, score),
          },
          activeDays: s.activeDays.includes(day)
            ? s.activeDays
            : [...s.activeDays, day],
          lastActive: new Date().toISOString(),
        }));
        checkStreakAchievement(get, set);

        // quiz-master: pass 5 quizzes
        if (get().passedQuizzes.length >= 5) {
          set((s) =>
            s.achievements.includes("quiz-master")
              ? s
              : { achievements: [...s.achievements, "quiz-master"] },
          );
        }
      },

      solveChallenge: (id) =>
        set((s) => ({
          solvedChallenges: s.solvedChallenges.includes(id)
            ? s.solvedChallenges
            : [...s.solvedChallenges, id],
          activeDays: s.activeDays.includes(todayISO())
            ? s.activeDays
            : [...s.activeDays, todayISO()],
          lastActive: new Date().toISOString(),
        })),

      reset: () => set({ ...initialState }),
    }),
    {
      name: "js-learner/progress",
      version: 1,
    },
  ),
);

function checkStreakAchievement(
  get: () => ProgressState,
  set: (partial: Partial<ProgressState>) => void,
) {
  const streak = computeStreak(get().activeDays);
  if (streak >= 3 && !get().achievements.includes("streak-3")) {
    set({ achievements: [...get().achievements, "streak-3"] });
  }
}
