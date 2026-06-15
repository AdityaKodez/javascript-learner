import type { Module } from "@/types";

export const conditionalsModule: Module = {
  slug: "conditionals",
  order: 5,
  title: "Conditionals",
  tagline: "Make your code decide between options.",
  description:
    "Use if, else, and switch to let your programs make smart decisions based on data.",
  icon: "GitBranch",
  accent: "text-rose-500",
  lessons: [
    {
      slug: "if-else",
      title: "if, else if, and else",
      durationMin: 10,
      difficulty: "Beginner",
      objectives: [
        "Write an if statement that runs code conditionally",
        "Add else if for multiple options",
        "Use else as a fallback",
      ],
      content: [
        {
          kind: "paragraph",
          text: "So far your code runs every line top to bottom, no matter what. Real programs need to **make decisions**: 'if it's raining, take an umbrella; otherwise, wear sunglasses.' The `if` statement is how code asks a question and picks what to do.",
        },
        {
          kind: "analogy",
          title: "A fork in the road",
          analogy:
            "Imagine walking and reaching a fork. A sign says: 'If the bridge is open, go left; else go right.' You check the sign (a condition) and choose one path. The other path simply doesn't happen. `if`/`else` is that sign.",
          takeaway: "Conditionals let code pick one path and skip the others.",
        },
        {
          kind: "heading",
          level: 2,
          text: "The basic if statement",
        },
        {
          kind: "paragraph",
          text: "An `if` statement checks a condition in parentheses. If that condition is `true`, the code inside the curly braces runs. If it's `false`, JavaScript skips that block entirely.",
        },
        {
          kind: "code",
          title: "Your first decision",
          summary: "The code inside {} only runs when the condition is true.",
          code: 'let temperature = 30;\n\nif (temperature > 25) {\n  console.log("It\'s hot outside!");\n}',
          lines: [
            "A value to check",
            "",
            "The condition: is temperature over 25?",
            "This block runs only if true",
            "Prints 'It's hot outside!'",
          ],
          output: "It's hot outside!",
        },
        {
          kind: "callout",
          variant: "info",
          title: "The shape of an if",
          text: "`if (condition) { ... }`. The condition goes in parentheses `()` and produces true/false. The code that runs goes in curly braces `{}`. The braces are like a box holding the 'do this if true' code.",
        },
        {
          kind: "playground",
          title: "Flip the temperature",
          initialCode:
            'let temperature = 15;\nif (temperature > 25) {\n  console.log("Hot!");\n}\nconsole.log("Done checking.");',
          hint: "Change temperature to 30 and watch which lines run.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Adding else: the fallback",
        },
        {
          kind: "paragraph",
          text: "Often you want a backup plan: 'do this if true, otherwise do that.' The `else` keyword gives you the 'otherwise' path.",
        },
        {
          kind: "code",
          title: "Two paths: if / else",
          summary: "Exactly one of the two blocks will run.",
          code: 'let score = 60;\n\nif (score >= 50) {\n  console.log("You passed!");\n} else {\n  console.log("Try again.");\n}',
          lines: [
            "Set a score",
            "",
            "Is score 50 or more?",
            "Runs if true",
            "Runs if false",
          ],
          output: "You passed!",
        },
        {
          kind: "heading",
          level: 2,
          text: "Multiple options: else if",
        },
        {
          kind: "paragraph",
          text: "Sometimes there are more than two outcomes. Use `else if` to chain extra checks. JavaScript tests them in order and runs the **first** one that's true — then skips the rest.",
        },
        {
          kind: "code",
          title: "Grade a score",
          summary: "Each else if is a new question, checked in order.",
          code: 'let score = 75;\n\nif (score >= 90) {\n  console.log("Grade: A");\n} else if (score >= 80) {\n  console.log("Grade: B");\n} else if (score >= 70) {\n  console.log("Grade: C");\n} else {\n  console.log("Grade: F");\n}',
          lines: [
            "Set the score",
            "",
            "90+? No (skip)",
            "80+? No (skip)",
            "70+? Yes! Print C and stop",
            "Never reached",
          ],
          output: "Grade: C",
        },
        {
          kind: "callout",
          variant: "warning",
          title: "Order matters!",
          text: "JavaScript stops at the FIRST true condition. If you check `>= 70` before `>= 90`, a score of 95 would wrongly match the 70 check first. Always order your checks from most specific (highest) to least specific.",
        },
        {
          kind: "diagram",
          caption: "An if / else if / else chain tests conditions in order.",
          mermaid: `flowchart TD
  Start["Start"] --> Q1{"score >= 90?"}
  Q1 -->|Yes| A["Grade: A"]
  Q1 -->|No| Q2{"score >= 80?"}
  Q2 -->|Yes| B["Grade: B"]
  Q2 -->|No| Q3{"score >= 70?"}
  Q3 -->|Yes| C["Grade: C"]
  Q3 -->|No| F["Grade: F"]`,
        },
        {
          kind: "heading",
          level: 2,
          text: "Combining conditions",
        },
        {
          kind: "paragraph",
          text: "You can use the logical operators from the last module (`&&`, `||`, `!`) right inside an `if`. This lets one decision depend on several facts.",
        },
        {
          kind: "code",
          title: "Two checks, one decision",
          summary: "&& means 'both must be true' for the block to run.",
          code: 'let age = 20;\nlet hasTicket = true;\n\nif (age >= 18 && hasTicket) {\n  console.log("Welcome to the show!");\n} else {\n  console.log("Sorry, you can\'t enter.");\n}',
          lines: [
            "Two facts about the visitor",
            "",
            "Both must be true",
            "Runs because 20 >= 18 AND hasTicket is true",
            "Would run otherwise",
          ],
          output: "Welcome to the show!",
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Using = instead of === inside the condition.",
              right: "Use === to compare.",
              why: "`if (x = 5)` assigns 5 to x instead of comparing. This is always 'true' and one of the most common bugs.",
            },
            {
              wrong: "Forgetting the curly braces {}.",
              right: "Always use braces, even for one line.",
              why: "Without braces, only the first line after `if` is conditional. Adding a second line later creates silent bugs. Braces make it unambiguous.",
            },
            {
              wrong: "Putting a semicolon after if (...).",
              right: "No semicolon before the braces.",
              why: "`if (x); { ... }` ends the if immediately, so the block always runs. The stray semicolon 'closes' the if before you intend.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "`if (condition) { ... }` runs code only when the condition is true.",
            "`else { ... }` runs when the if is false.",
            "`else if` chains extra checks, tested in order.",
            "JavaScript runs the FIRST true branch and skips the rest.",
            "Combine checks with &&, ||, and ! inside one condition.",
          ],
        },
      ],
      challenge: {
        title: "Build an age gate",
        prompt:
          "Create an `age` variable. If age is 18 or older, print 'Adult'. If it's 13–17, print 'Teen'. Otherwise print 'Child'. Use else if.",
        starterCode:
          'let age = 15;\nif (age >= 18) {\n  console.log("Adult");\n} else if (age >= 13) {\n  console.log("Teen");\n} else {\n  console.log("Child");\n}',
        expectedOutput: "Teen",
        hint: "Check the highest threshold first, then the next, with else if.",
      },
      quiz: {
        id: "quiz-if-else",
        title: "Quick check: if, else if, else",
        questions: [
          {
            id: "q1",
            question: "What does this print? `let x = 5; if (x > 3) { console.log('A'); } else { console.log('B'); }`",
            options: ["A", "B", "AB", "Nothing"],
            answer: 0,
            explanation: "5 > 3 is true, so the if block runs and prints A. The else is skipped.",
          },
          {
            id: "q2",
            question: "In an if/else if/else chain, how many blocks run?",
            options: ["All that are true", "Only the first true one", "Exactly two", "None"],
            answer: 1,
            explanation: "JavaScript runs the first true branch and skips the rest — at most one block runs.",
          },
          {
            id: "q3",
            question: "Why is `if (x = 5)` a bug?",
            options: ["x = 5 is always false", "It assigns 5 to x instead of comparing", "It's missing braces", "5 isn't allowed"],
            answer: 1,
            explanation: "= is assignment. You wanted === to compare. This silently changes x and is 'truthy', so the block always runs.",
          },
        ],
      },
    },
    {
      slug: "switch-and-ternary",
      title: "switch & the Ternary Operator",
      durationMin: 8,
      difficulty: "Easy",
      objectives: [
        "Use switch for many options on one value",
        "Understand break and default",
        "Write a quick if/else on one line with ?:",
      ],
      content: [
        {
          kind: "paragraph",
          text: "`if`/`else if` chains work great for ranges (`score >= 80`). But when you're checking one value against many *exact* options ('is the day Monday, Tuesday, …?'), there's a cleaner tool: the **`switch`** statement. And for simple either/or choices, the **ternary** operator fits on one line.",
        },
        {
          kind: "heading",
          level: 2,
          text: "The switch statement",
        },
        {
          kind: "paragraph",
          text: "A `switch` takes one value and compares it against several `case`s. When a case matches, its code runs. Each case ends with `break` to stop — otherwise JavaScript keeps running the next cases too (called 'fall through').",
        },
        {
          kind: "code",
          title: "Pick a day's activity",
          summary: "switch compares day to each case label.",
          code: 'let day = "Wednesday";\n\nswitch (day) {\n  case "Monday":\n    console.log("Start of the week");\n    break;\n  case "Wednesday":\n    console.log("Midweek!");\n    break;\n  case "Friday":\n    console.log("Almost weekend");\n    break;\n  default:\n    console.log("A normal day");\n}',
          lines: [
            "The value to match",
            "",
            "Compare day to 'Monday'",
            "If matched, run this and stop",
            "Compare to 'Wednesday'",
            "Match! Prints 'Midweek!' and stops",
            "Other cases",
            "default runs if nothing matched",
          ],
          output: "Midweek!",
        },
        {
          kind: "callout",
          variant: "warning",
          title: "Don't forget break!",
          text: "Without `break`, once a case matches, JavaScript runs it AND every case after it. This 'fall through' is rarely what you want. Always end a case with `break;` unless you deliberately want fall-through.",
        },
        {
          kind: "heading",
          level: 2,
          text: "default: the 'none of the above'",
        },
        {
          kind: "paragraph",
          text: "The `default` case runs when no other case matched. It's like the final `else` in an if chain — your safety net. It doesn't need a `break` (it's last), but adding one is harmless.",
        },
        {
          kind: "playground",
          title: "Try the switch",
          initialCode:
            'let day = "Sunday";\nswitch (day) {\n  case "Saturday":\n  case "Sunday":\n    console.log("Weekend!");\n    break;\n  default:\n    console.log("Weekday");\n}',
          hint: "Notice Saturday and Sunday share the same code — that's intentional fall-through between empty cases.",
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Grouping cases on purpose",
          text: "Empty cases stacked together (`case 'Sat': case 'Sun':`) share the same code — this is the *good* kind of fall-through. It's how you say 'these values all do the same thing.'",
        },
        {
          kind: "heading",
          level: 2,
          text: "The ternary operator (? :)",
        },
        {
          kind: "paragraph",
          text: "For tiny either/or choices, the **ternary** lets you write an if/else on one line. The name comes from it having three parts: `condition ? resultIfTrue : resultIfFalse`.",
        },
        {
          kind: "code",
          title: "One-line decision",
          summary: "Read it as 'is age 18+? if yes, 'adult'; if no, 'minor'.",
          code: 'let age = 20;\nlet status = age >= 18 ? "adult" : "minor";\nconsole.log(status);',
          lines: [
            "The value to check",
            "condition ? ifTrue : ifFalse",
            "Since 20 >= 18, status = 'adult'",
          ],
          output: "adult",
        },
        {
          kind: "table",
          headers: ["Form", "When to use"],
          rows: [
            ["if / else", "Multi-line blocks, complex logic"],
            ["switch", "One value vs many exact matches"],
            ["ternary ?:", "Short either/or that produces a value"],
          ],
        },
        {
          kind: "callout",
          variant: "warning",
          title: "Don't nest ternaries",
          text: "You *can* stack ternaries (`a ? b : c ? d : e`), but it gets unreadable fast. If your choice has more than two outcomes, use a regular if/else or switch. Keep ternaries simple.",
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Forgetting break in a switch case.",
              right: "Add break; at the end of each case.",
              why: "Without break, a matching case runs itself and every case after it. This 'fall through' usually causes bugs.",
            },
            {
              wrong: "Using switch for range checks like score >= 80.",
              right: "Use if / else if for ranges; switch is for exact matches.",
              why: "switch only checks exact equality. Ranges are awkward in switch and read better as if/else.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "`switch` matches one value against many `case`s — great for exact matches.",
            "Each case needs `break;` to stop fall-through.",
            "`default` runs when nothing matches (like a final else).",
            "The ternary `cond ? a : b` is a one-line if/else that produces a value.",
            "Keep ternaries simple — don't nest them.",
          ],
        },
      ],
      challenge: {
        title: "Build a day messenger",
        prompt:
          "Use a switch on a `day` variable. For 'Saturday' and 'Sunday' print 'Weekend', for 'Friday' print 'Almost free', and for anything else print 'Workday'. Don't forget break and default!",
        starterCode:
          'let day = "Friday";\nswitch (day) {\n  case "Saturday":\n  case "Sunday":\n    console.log("Weekend");\n    break;\n  case "Friday":\n    console.log("Almost free");\n    break;\n  default:\n    console.log("Workday");\n}',
        expectedOutput: "Almost free",
        hint: "Group Saturday and Sunday together, then add Friday and a default.",
      },
      quiz: {
        id: "quiz-switch-ternary",
        title: "Quick check: switch & ternary",
        questions: [
          {
            id: "q1",
            question: "What does the `break` keyword do in a switch?",
            options: ["Restarts the switch", "Stops fall-through and exits the switch", "Skips to default", "Nothing"],
            answer: 1,
            explanation: "break ends the case and exits the switch, preventing fall-through into the next case.",
          },
          {
            id: "q2",
            question: "What does `let x = 5 > 3 ? 'yes' : 'no'` set x to?",
            options: ["'yes'", "'no'", "true", "5"],
            answer: 0,
            explanation: "5 > 3 is true, so the ternary picks 'yes'.",
          },
          {
            id: "q3",
            question: "When does the default case run?",
            options: ["Always", "When no other case matched", "First, before cases", "Never"],
            answer: 1,
            explanation: "default is the fallback — it runs only if no case label matches.",
          },
        ],
      },
    },
  ],
};
