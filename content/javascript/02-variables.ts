import type { Module } from "@/types";

export const variablesModule: Module = {
  slug: "variables",
  order: 2,
  title: "Variables",
  tagline: "Boxes for storing and changing data.",
  description:
    "Learn how to store, name, and update data with variables — the foundation of every program.",
  icon: "Variable",
  accent: "text-sky-500",
  lessons: [
    {
      slug: "what-are-variables",
      title: "What are variables?",
      durationMin: 8,
      difficulty: "Beginner",
      achievement: "first-variable",
      objectives: [
        "Understand what a variable is",
        "Create your first variable",
        "Give variables good names",
      ],
      content: [
        {
          kind: "paragraph",
          text: "A **variable** is a labeled box that holds a value. You put something in, give the box a name, and later you can look inside or swap the contents. Programs are basically thousands of these labeled boxes talking to each other.",
        },
        {
          kind: "analogy",
          title: "A labeled lunchbox",
          analogy:
            "Imagine a lunchbox labeled 'sandwich'. You put a sandwich inside in the morning. At lunch you open it — there's your sandwich. Tomorrow you might put pasta in the *same* labeled box. The label stays the same; the contents can change.",
          takeaway: "A variable's name is fixed, but its value can change.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Creating a variable",
        },
        {
          kind: "code",
          title: "Make your first variable",
          summary: "`let` creates a new box. `age` is the name. `25` is the value.",
          code: "let age = 25;",
          lines: [
            "let → 'create a new variable'",
            "age → the name of the box",
            "= → 'store this value inside'",
            "25 → the value being stored",
          ],
        },
        {
          kind: "diagram",
          caption: "A variable is a name pointing to a stored value.",
          mermaid: `flowchart LR
  Name["age"] --> Value["25"]`,
        },
        {
          kind: "callout",
          variant: "tip",
          title: "The magic of names",
          text: "Once a variable exists, you use its NAME, not the value. So later you can write `age + 1` and JavaScript looks inside the box automatically.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Reading and using a variable",
        },
        {
          kind: "code",
          title: "Use the variable",
          summary: "We refer to `age` by name — JavaScript fetches the value.",
          code: 'let age = 25;\nconsole.log(age);',
          lines: [
            "Create a box named age with value 25",
            "Print whatever is inside age",
          ],
          output: "25",
        },
        {
          kind: "heading",
          level: 2,
          text: "Changing a variable's value",
        },
        {
          kind: "code",
          title: "Update the value",
          summary: "Use `=` again to put a new value in the same box.",
          code: "let age = 25;\nage = 26;\nconsole.log(age);",
          lines: [
            "Create age = 25",
            "Replace its value with 26 (no `let` — it already exists)",
            "Print the new value",
          ],
          output: "26",
        },
        {
          kind: "playground",
          title: "Try changing it yourself",
          initialCode:
            'let name = "Alex";\nconsole.log(name);\nname = "Sam";\nconsole.log(name);',
          hint: "Change the names and run it. Watch both outputs.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Naming rules (kept simple)",
        },
        {
          kind: "table",
          headers: ["Rule", "Example"],
          rows: [
            ["Use letters, numbers, _ , $", "score, player_1, total$"],
            ["Cannot start with a number", "❌ 1score → ✅ score1"],
            ["No spaces", "❌ first name → ✅ firstName"],
            ["Case-sensitive", "age ≠ Age ≠ AGE"],
          ],
        },
        {
          kind: "concept",
          title: "Good names vs. bad names",
          points: [
            "✅ score, userName, totalPrice — clear and descriptive",
            "❌ x, s, data1 — too vague",
            "✅ camelCase is the JS convention: firstName, totalPrice",
          ],
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Using `let` again when updating a variable.",
              right: "Drop the `let` — it only exists to CREATE a variable.",
              why: "`let x = 1; let x = 2;` is an error because the box already exists.",
            },
            {
              wrong: "Names with spaces, like `first name`.",
              right: "Use camelCase: `firstName`.",
              why: "Spaces confuse the language into thinking it's two separate words.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "A variable is a labeled box for a value.",
            "Use `let name = value;` to create one.",
            "Use `name = newValue;` to change it later.",
            "Pick clear, descriptive names in camelCase.",
          ],
        },
      ],
      challenge: {
        title: "Make two boxes",
        prompt:
          "Create a variable called `city` that stores your city's name, then print it. Change it to a different city and print it again.",
        starterCode: 'let city = "___";\nconsole.log(city);',
        expectedOutput: "",
        hint: "Two console.log lines — one before and one after changing the value.",
      },
      quiz: {
        id: "quiz-what-are-variables",
        title: "Quick check: Variables",
        questions: [
          {
            id: "q1",
            question: "Which line correctly creates a variable named score with value 10?",
            options: ["score = let 10;", "let score = 10;", "variable score 10;", "let 10 = score;"],
            answer: 1,
            explanation: "`let name = value;` is the pattern: keyword, name, equals, value.",
          },
          {
            id: "q2",
            question: "How do you change an existing variable's value to 50?",
            options: ["let score = 50;", "score = 50;", "change score 50;", "score == 50;"],
            answer: 1,
            explanation: "Once created, just assign without `let`: `score = 50;`",
          },
          {
            id: "q3",
            question: "Which is a valid variable name?",
            options: ["1stPlace", "first name", "firstName", "first-name"],
            answer: 2,
            explanation: "Names can't start with a number, have spaces, or use hyphens. camelCase works.",
          },
          {
            id: "q4",
            question: "What does this print? `let x = 5; x = 8; console.log(x);`",
            options: ["5", "8", "13", "Error"],
            answer: 1,
            explanation: "The value was replaced with 8 before printing, so you see 8.",
          },
        ],
      },
    },
    {
      slug: "let-const-var",
      title: "let, const, and var",
      durationMin: 7,
      difficulty: "Easy",
      objectives: [
        "Know the three ways to declare variables",
        "Pick the right one each time",
        "Avoid the common `var` pitfalls",
      ],
      content: [
        {
          kind: "paragraph",
          text: "You've seen `let`. There are actually three keywords for creating variables in JavaScript: **`let`**, **`const`**, and **`var`**. The good news: you only really need to understand two of them.",
        },
        {
          kind: "heading",
          level: 2,
          text: "The big picture",
        },
        {
          kind: "table",
          headers: ["Keyword", "Can change later?", "When to use"],
          rows: [
            ["let", "Yes", "When the value will change"],
            ["const", "No — fixed forever", "When the value stays the same (default!)"],
            ["var", "Yes (old style)", "Basically never — it's from 1995"],
          ],
        },
        {
          kind: "analogy",
          title: "Notebook vs. engraved plaque",
          analogy:
            "`let` is like a whiteboard — you can erase and rewrite. `const` is like an engraved plaque — once it's set, it's set. `var` is an old chalkboard that behaves weirdly; we don't use it anymore.",
          takeaway: "Reach for `const` first. Use `let` only when the value must change.",
        },
        {
          kind: "heading",
          level: 2,
          text: "const: set it and forget it",
        },
        {
          kind: "code",
          title: "A value that never changes",
          summary: "`const` creates a variable you cannot reassign.",
          code: 'const birthYear = 1995;\nconsole.log(birthYear);\nbirthYear = 1996; // ❌ Error!',
          lines: [
            "Create a fixed variable",
            "Print it — works fine",
            "Trying to change it throws an error",
          ],
          output: "1995\n// then: TypeError: Assignment to constant variable.",
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Why prefer const?",
          text: "If you declare everything as `const` by default and only switch to `let` when needed, you prevent accidental changes. It's a safety net for your future self.",
        },
        {
          kind: "playground",
          title: "Feel the difference",
          initialCode:
            'const greeting = "Hi";\nlet score = 0;\nscore = 10; // OK\nconsole.log(score);',
          hint: "Try uncommenting `greeting = 'Hello'` to see the const error.",
        },
        {
          kind: "heading",
          level: 2,
          text: "What about var?",
        },
        {
          kind: "paragraph",
          text: "`var` is the old way of making variables. You'll see it in old tutorials, but modern JavaScript avoids it because it has confusing behavior. **Use `let` and `const` instead.** You don't need to memorize `var`'s quirks — just don't use it.",
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Reassigning a const.",
              right: "Use `let` if the value needs to change.",
              why: "`const x = 1; x = 2;` throws a TypeError at runtime.",
            },
            {
              wrong: "Using `var` in new code.",
              right: "Use `let` or `const`.",
              why: "`var` ignores block scope, leading to sneaky bugs in modern code.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "`const` = fixed value (use by default).",
            "`let` = value can change.",
            "`var` = old style, avoid in modern code.",
            "Reassigning a `const` throws an error.",
          ],
        },
      ],
      challenge: {
        title: "Choose wisely",
        prompt:
          "Create a `const` called `pi` set to 3.14, and a `let` called `radius` set to 5. Print both.",
        starterCode: "const pi = 3.14;\nlet radius = 5;\n// print both here",
        expectedOutput: "",
        hint: "Two console.log lines — one for pi, one for radius.",
      },
      quiz: {
        id: "quiz-let-const-var",
        title: "Quick check: let, const, var",
        questions: [
          {
            id: "q1",
            question: "Which keyword should you use for a value that never changes?",
            options: ["var", "let", "const", "fixed"],
            answer: 2,
            explanation: "`const` declares a value that can't be reassigned — perfect for constants.",
          },
          {
            id: "q2",
            question: "What happens here? `const x = 5; x = 6;`",
            options: ["x becomes 6", "Nothing", "A TypeError", "x becomes 11"],
            answer: 2,
            explanation: "You can't reassign a const — it throws a TypeError.",
          },
          {
            id: "q3",
            question: "Which keyword should modern code generally avoid?",
            options: ["let", "const", "var", "All of them"],
            answer: 2,
            explanation: "`var` has confusing behavior; prefer `let` and `const`.",
          },
        ],
      },
    },
  ],
};
