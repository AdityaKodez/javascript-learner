---
name: javascript-learner
description: >-
  Work with the JavaScript Learner project — a Next.js 16 + React 19 + TypeScript platform for teaching JavaScript through short, visual, interactive lessons. Trigger whenever the user mentions lesson content, content blocks, quizzes, challenges, playground, curriculum, modules, progress tracking, achievements, or any changes to /content/ or /types/.
---

# JavaScript Learner Skill

A Next.js 16 (App Router) project with React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, and Zustand. It teaches JavaScript via bite-sized, interactive lessons with an in-browser code playground.

## Architecture at a glance

- `/app` — Next.js pages (App Router). `/app/learn/[slug]/page.tsx` renders the lesson page; `/app/page.tsx` is the marketing home; `/app/roadmap`, `/app/progress` are supplementary pages.
- `/components/learning/` — All learning UI: `LessonRenderer`, `Challenge`, `LearnLayout`, `PathNavList`, `ProgressTracker`, etc.
- `/components/playground/` — `Playground` (the code editor + output panel), `CodeBlock`, etc.
- `/components/ui/` — shadcn/ui component primitives (Button, Card, Badge, ScrollArea, Tabs, etc.).
- `/content/javascript/` — **All lesson data.** Each module is a `.ts` file exporting a `[Module]`, imported by `modules.ts`.
- `/lib/` — `run-code.ts` (sandboxed JS runner via `new Function`), `progress-store.ts` (Zustand + localStorage), `utils.ts` (`cn()`).
- `/types/index.ts` — The `Module`, `Lesson`, `ContentBlock`, `Quiz`, `ProgressState`, etc. types. **Source of truth for content shape.**

## Content authoring (the golden path)

Lesson content is **declarative data**, not JSX. A lesson is an object with a `content` array of `ContentBlock`s, a `challenge`, and a `quiz`. To add or edit lessons, edit the `.ts` files under `/content/javascript/` and the types in `/types/index.ts` if needed.

### Available block kinds

These map 1:1 in `LessonRenderer` (`/components/learning/lesson-renderer.tsx`):

| kind       | props                                                    | visual                          |
| ---------- | --------------------------------------------------------- | ------------------------------- |
| `heading`  | `level: 2 \| 3`, `text`                                   | `<h2>` / `<h3>`                 |
| `paragraph`| `text` (supports `**bold**` and backtick inline code)     | `<p>`                           |
| `callout`  | `variant: "info" \| "tip" \| "warning"`, `title?`, `text`| tinted card                     |
| `code`     | `code`, `title?`, `summary?`, `lines?`, `output?`, `language?` | code block with optional output panel |
| `concept`  | `title`, `points: string[]`                               | bullet card                     |
| `analogy`  | `title`, `analogy`, `takeaway?`                           | analogy card                    |
| `mistake`  | `mistakes: { wrong, right, why }[]`                       | "Common mistakes" card          |
| `playground`| `initialCode`, `hint?`, `title?`                        | live editable Playground       |
| `diagram`  | `mermaid` (string), `caption?`                            | Mermaid diagram                |
| `steps`    | `title?`, `steps: { title, description }[]`               | numbered step list              |
| `table`    | `headers`, `rows: string[][]`                             | data table                      |
| `recap`    | `points: string[]`                                        | summary card                    |
| `challenge`| `title`, `prompt`, `starterCode`, `expectedOutput?`, `hint?` | (rarely used inline)            |

### Adding a new block kind

1. Add the union case to `ContentBlock` in `/types/index.ts`.
2. Add the `case` to the `switch` in `LessonRenderer`.
3. Create the new component in `/components/learning/` or `/components/playground/`.
4. Import and use it in `LessonRenderer`.

### Writing a lesson: key rules

- Keep lessons **short** — target 5-10 minutes, 5-12 content blocks.
- `objectives`: 2-4 bullets of what the learner will know afterward.
- `durationMin`: realistic reading + interaction time in minutes.
- `difficulty`: `"Beginner"`, `"Easy"`, or `"Medium"`.
- The `challenge.prompt` should feel **achievable in under 2 minutes**.
- `quiz.questions` should have 3-5 questions, each with 4 options, exactly one correct `answer` (0-based index), and a plain-language `explanation`.
- Code examples in `code` blocks should always include an `output` string describing what happens when run, unless it's user-dependent.

### Adding a new module to the path

1. Create `content/javascript/XX-slug.ts` exporting a `Module`.
2. Import it in `content/javascript/modules.ts` and add to the `modules` array.
3. The home page (`/app/page.tsx`) and nav sidebar auto-populate from the exported `modules` array — no manual list updates needed.

### The in-browser runner (`/lib/run-code.ts`)

- User code runs via `new Function(code)` with a stubbed `console` and `alert`.
- Infinite loops are caught via an operation counter (`> 1_000_000` ops).
- The `expectedOutput` in a challenge is a **substring match** against the captured console output.
- DOM APIs are **not** shimmed; DOM lessons rely on `console.log` output.

## Style & conventions

- **File naming**: kebab-case: `lesson-renderer.tsx`, `run-code.ts`.
- **Imports**: always use path aliases (`@/components/...`, `@/lib/...`, `@/types`). Never relative paths except within the same folder.
- **Components**: functional, default export for pages, named exports for reusable components. Use `cn()` from `@/lib/utils` for conditional classes.
- **Tailwind**: utility classes, no arbitrary values where possible. Colors are from the CSS variables (primary, muted, etc.). Dark mode supported via `next-themes`.
- **Comments**: Multi-line `// -----` headers at the top of files explaining what the file does. Keep them concise.
- **No `console.log`** in production UI — drop or remove before shipping.
- **Zustand**: the `useProgress` store is persisted to `localStorage` under `"js-learner/progress"`. Always be defensive about SSR/hydration — check `useHasMounted` before rendering user-dependent data.

## When to use which tool

- Editing lesson content -> `/content/javascript/*.ts` files.
- Adding a new visual block type -> update `/types/index.ts` + add component + wire into `LessonRenderer`.
- Changing the runner behavior -> `/lib/run-code.ts`.
- Adjusting scoring/achievements -> `/lib/progress-store.ts` and `/lib/achievements.ts`.
- New UI component -> check `/components/ui/` for shadcn primitives first, then build in `/components/learning/` or `/components/playground/`.
