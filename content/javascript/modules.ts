import type { Module } from "@/types";

import { introModule } from "./01-introduction";
import { variablesModule } from "./02-variables";
import { dataTypesModule } from "./03-data-types";
import { operatorsModule } from "./04-operators";
import { conditionalsModule } from "./05-conditionals";
import { loopsModule } from "./06-loops";
import { functionsModule } from "./07-functions";
import { arraysModule } from "./08-arrays";
import { objectsModule } from "./09-objects";
import { domModule } from "./10-dom";
import { eventsModule } from "./11-events";
import { asyncModule } from "./12-async";
import { projectsModule } from "./13-projects";

// ---------------------------------------------------------------------------
// The full learning path, in order.
//
// Modules 1-3 ship with complete lesson content (see /content/javascript).
// Modules 4-13 are declared as "coming soon" scaffolds so the roadmap and
// sidebar render the complete path and the learner can see where they're going.
// ---------------------------------------------------------------------------

export const modules: Module[] = [
  introModule,
  variablesModule,
  dataTypesModule,
  operatorsModule,
  conditionalsModule,
  loopsModule,
  functionsModule,
  arraysModule,
  objectsModule,
  domModule,
  eventsModule,
  asyncModule,
  projectsModule,
];

/** Flat list of every lesson across all modules, in path order. */
export const allLessons = modules.flatMap((m) =>
  m.lessons.map((l) => ({ ...l, moduleSlug: m.slug, moduleTitle: m.title })),
);

export function getModule(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getLesson(slug: string) {
  return allLessons.find((l) => l.slug === slug);
}

/** Lessons in path order with their index, for prev/next navigation. */
export function getLessonNav(slug: string) {
  const idx = allLessons.findIndex((l) => l.slug === slug);
  return {
    index: idx,
    previous: idx > 0 ? allLessons[idx - 1] : null,
    next: idx >= 0 && idx < allLessons.length - 1 ? allLessons[idx + 1] : null,
  };
}

/** Total lesson count across the whole path. */
export const totalLessons = allLessons.length;
