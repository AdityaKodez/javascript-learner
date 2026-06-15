import type { Module } from "@/types";

export const dataTypesModule: Module = {
  slug: "data-types",
  order: 3,
  title: "Data Types",
  tagline: "The different kinds of values JavaScript understands.",
  description:
    "Numbers, text, true/false, and more — learn what kind of data fits in your variables.",
  icon: "Shapes",
  accent: "text-emerald-500",
  lessons: [
    {
      slug: "numbers-and-strings",
      title: "Numbers and Strings",
      durationMin: 8,
      difficulty: "Beginner",
      objectives: [
        "Tell numbers apart from text",
        "Write strings with quotes",
        "Combine text using +",
      ],
      content: [
        {
          kind: "paragraph",
          text: "A variable can hold different *kinds* of values. The two you'll use constantly are **numbers** (math values) and **strings** (text). Knowing the difference matters because they behave differently.",
        },
        {
          kind: "analogy",
          title: "Prices vs. receipts",
          analogy:
            "Think of a shop. The PRICE of an apple is a number (1.50) — you can add prices, multiply by quantity. The RECEIPT printed at checkout is text — 'Apple x2'. You wouldn't try to multiply the receipt. Same data, different types.",
          takeaway: "Numbers are for math. Strings are for words.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Numbers",
        },
        {
          kind: "code",
          title: "Numbers do math",
          summary: "Whole numbers and decimals are both just 'number'.",
          code: "let price = 3;\nlet tax = 0.5;\nconsole.log(price + tax);",
          lines: [
            "Whole number",
            "Decimal — still a number",
            "Numbers can be added",
          ],
          output: "3.5",
        },
        {
          kind: "heading",
          level: 2,
          text: "Strings (text)",
        },
        {
          kind: "code",
          title: "Text lives in quotes",
          summary: "Anything inside quotes is treated as text, even if it looks like a number.",
          code: 'let name = "Ada";\nlet zip = "90210";\nconsole.log(name);\nconsole.log(zip);',
          lines: [
            "Text in double quotes",
            "This LOOKS like a number but is text",
            "Prints Ada",
            "Prints 90210 — but as text, not a number",
          ],
          output: "Ada\n90210",
        },
        {
          kind: "callout",
          variant: "warning",
          title: "Quotes matter!",
          text: "`let x = 42;` is a number you can do math with. `let x = \"42\";` is text — just two characters. They print the same but behave very differently.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Combining strings",
        },
        {
          kind: "code",
          title: "Join text with +",
          summary: "The + symbol joins strings together (called concatenation).",
          code: 'let first = "Hello";\nlet second = "World";\nconsole.log(first + " " + second);',
          lines: [
            "First word",
            "Second word",
            "Join them with a space in between",
          ],
          output: "Hello World",
        },
        {
          kind: "diagram",
          caption: "Same symbol, different behavior depending on type.",
          mermaid: `flowchart TD
  Plus["The + operator"] --> A["Numbers: 2 + 3 = 5"]
  Plus --> B["Strings: '2' + '3' = '23'"]`,
        },
        {
          kind: "playground",
          title: "Number vs. string surprise",
          initialCode:
            'console.log(2 + 3);     // numbers\nconsole.log("2" + "3"); // strings',
          hint: "Notice how the second line joins instead of adding!",
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: `Treating "10" as a number.`,
              right: `It's text. Convert it with Number() if you need math.`,
              why: `"10" + 5 gives "105", not 15. JavaScript joined the text.`,
            },
            {
              wrong: `Mixing quote types without matching them.`,
              right: `Open and close with the same quote type.`,
              why: `"hello' is an error — JavaScript doesn't know where the string ends.`,
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "Numbers are for math (3, 0.5, -10).",
            "Strings are text inside quotes (\"hello\").",
            "The + joins strings together.",
            "Quotes turn numbers into text — they behave differently.",
          ],
        },
      ],
      challenge: {
        title: "Build a sentence",
        prompt:
          "Create two string variables — a greeting and a name — and join them with + to print 'Hello Ada' (or any name).",
        starterCode: 'let greeting = "Hello";\nlet name = "Ada";\n// join and print them',
        expectedOutput: "Hello",
        hint: "Use greeting + \" \" + name",
      },
      quiz: {
        id: "quiz-numbers-strings",
        title: "Quick check: Numbers & Strings",
        questions: [
          {
            id: "q1",
            question: 'What does this print? `console.log("5" + "5");`',
            options: ["10", "55", "'55'", "Error"],
            answer: 1,
            explanation: "Both are strings, so + joins them into '55'.",
          },
          {
            id: "q2",
            question: "Which line stores the text 'banana'?",
            options: ['let x = banana;', 'let x = "banana";', "let x = (banana);", "let x = #banana#;"],
            answer: 1,
            explanation: "Text must be wrapped in quotes to become a string.",
          },
          {
            id: "q3",
            question: "Which value is a number type?",
            options: ['"42"', "42", "'four'", "'4.2'"],
            answer: 1,
            explanation: "42 without quotes is a number. The others are strings.",
          },
        ],
      },
    },
    {
      slug: "booleans-and-more",
      title: "Booleans, null, and undefined",
      durationMin: 7,
      difficulty: "Easy",
      objectives: [
        "Understand true/false values",
        "Meet null and undefined",
        "Know when each appears",
      ],
      content: [
        {
          kind: "paragraph",
          text: "Not every value is a number or text. Some data is just **yes or no**. And sometimes a variable is *deliberately empty* or *hasn't been set yet*. JavaScript has special types for these.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Booleans: true or false",
        },
        {
          kind: "code",
          title: "Only two possible values",
          summary: "A boolean is either true or false (no quotes, lowercase).",
          code: "let isLoggedIn = true;\nlet hasError = false;\nconsole.log(isLoggedIn);",
          lines: [
            "True — the user is logged in",
            "False — no error right now",
            "Prints true",
          ],
          output: "true",
        },
        {
          kind: "analogy",
          title: "Light switches",
          analogy:
            "A boolean is a light switch: it's either ON or OFF. There's no 'maybe'. Apps use booleans everywhere — 'is the form valid?', 'is sound muted?', 'is the game over?'",
          takeaway: "Booleans drive the decisions your program makes.",
        },
        {
          kind: "heading",
          level: 2,
          text: "null: intentionally empty",
        },
        {
          kind: "paragraph",
          text: "**`null`** means 'I deliberately set this to nothing.' It's you saying 'there is no value here, on purpose.' Like a form field left blank intentionally.",
        },
        {
          kind: "code",
          title: "null is a choice",
          code: "let middleName = null;\nconsole.log(middleName);",
          lines: [
            "Explicitly empty — the person has no middle name",
            "Prints null",
          ],
          output: "null",
        },
        {
          kind: "heading",
          level: 2,
          text: "undefined: not set yet",
        },
        {
          kind: "paragraph",
          text: "**`undefined`** means 'this variable exists but has no value yet.' JavaScript itself produces this — usually it's a sign something wasn't initialized.",
        },
        {
          kind: "code",
          title: "undefined is accidental",
          code: "let result;\nconsole.log(result);",
          lines: [
            "Declared but never given a value",
            "JavaScript fills it with undefined",
          ],
          output: "undefined",
        },
        {
          kind: "table",
          headers: ["Value", "Meaning", "Who sets it"],
          rows: [
            ["null", "Intentionally empty", "You, on purpose"],
            ["undefined", "Not assigned yet", "JavaScript, automatically"],
          ],
        },
        {
          kind: "callout",
          variant: "info",
          title: "Don't stress the difference",
          text: "For beginners, treat null and undefined as 'empty value'. You'll rarely set undefined yourself. Use null when you want to say 'no value here'.",
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: 'Writing booleans with quotes: "true".',
              right: "Use true and false without quotes.",
              why: '"true" is a string, not a boolean. It would behave like text, not yes/no.',
            },
            {
              wrong: "Capitalizing True / False.",
              right: "Always lowercase: true, false.",
              why: "JavaScript is case-sensitive — True with a capital T is undefined.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "Booleans are true or false (lowercase, no quotes).",
            "null = deliberately empty.",
            "undefined = not assigned yet.",
            "Booleans power all the decisions in your code.",
          ],
        },
      ],
      challenge: {
        title: "Flag it",
        prompt:
          "Create a boolean variable `isStudent` set to true and print it. Then create `nickname` set to null and print that too.",
        starterCode: "let isStudent = true;\nlet nickname = null;\n// print both",
        expectedOutput: "true",
        hint: "Two console.log statements.",
      },
      quiz: {
        id: "quiz-booleans",
        title: "Quick check: Booleans & null/undefined",
        questions: [
          {
            id: "q1",
            question: "Which is a valid boolean?",
            options: ["True", "TRUE", "true", '"true"'],
            answer: 2,
            explanation: "Booleans are lowercase true/false with no quotes.",
          },
          {
            id: "q2",
            question: "What does this print? `let x; console.log(x);`",
            options: ["null", "undefined", "0", '""'],
            answer: 1,
            explanation: "A variable declared but not assigned is undefined.",
          },
          {
            id: "q3",
            question: "Which value means 'intentionally empty'?",
            options: ["undefined", "null", "false", "0"],
            answer: 1,
            explanation: "null is what YOU set to mean 'no value here on purpose'.",
          },
        ],
      },
    },
  ],
};
