import type { Achievement, AchievementId } from "@/types";

export const ACHIEVEMENTS: Record<AchievementId, Achievement> = {
  "first-lesson": {
    id: "first-lesson",
    title: "First Steps",
    description: "Completed your very first lesson.",
    icon: "Sparkles",
  },
  "first-variable": {
    id: "first-variable",
    title: "First Variable",
    description: "Learned how to store data with variables.",
    icon: "Variable",
  },
  "function-explorer": {
    id: "function-explorer",
    title: "Function Explorer",
    description: "Mastered reusable blocks of code.",
    icon: "FunctionSquare",
  },
  "loop-survivor": {
    id: "loop-survivor",
    title: "Loop Survivor",
    description: "Survived the world of repetition.",
    icon: "Repeat",
  },
  "array-adventurer": {
    id: "array-adventurer",
    title: "Array Adventurer",
    description: "Collected items into ordered lists.",
    icon: "ListOrdered",
  },
  "object-detective": {
    id: "object-detective",
    title: "Object Detective",
    description: "Unlocked the secrets of objects.",
    icon: "Boxes",
  },
  "dom-tinkerer": {
    id: "dom-tinkerer",
    title: "DOM Tinkerer",
    description: "Manipulated the web page with JavaScript.",
    icon: "MousePointerClick",
  },
  "streak-3": {
    id: "streak-3",
    title: "On Fire",
    description: "Studied 3 days in a row. Keep it up!",
    icon: "Flame",
  },
  "quiz-master": {
    id: "quiz-master",
    title: "Quiz Master",
    description: "Passed 5 knowledge checks.",
    icon: "GraduationCap",
  },
};

export const ALL_ACHIEVEMENT_IDS = Object.keys(ACHIEVEMENTS) as AchievementId[];
