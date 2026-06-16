import type { Module } from "@/types";

export const operatorsModule: Module = {
  slug: "operators",
  order: 4,
  title: "Operators",
  tagline: "Do math, compare values, and combine logic.",
  description:
    "Add, subtract, compare, and combine — the verbs of programming that make your code do real work.",
  icon: "Calculator",
  accent: "text-violet-500",
  lessons: [
    {
      slug: "arithmetic-operators",
      title: "Arithmetic Operators",
      durationMin: 9,
      difficulty: "Beginner",
      objectives: [
        "Use math operators to calculate",
        "Understand order of operations",
        "Use shorthand operators like += and ++",
      ],
      content: [
        {
          kind: "why",
          point:
            "Operators are the verbs of code — they actually DO things: add prices, count items, split bills, measure remainders.",
          build:
            "a shopping cart that multiplies price by quantity and adds it all into a running total.",
          without:
            "your variables would just sit there holding values you could never combine or calculate with.",
        },
        {
          kind: "paragraph",
          text: "An **operator** is a symbol that does something to values. You already know one: `+`. JavaScript has a whole set of operators for math, and they work exactly like the math you learned in school — with a few useful shortcuts.",
        },
        {
          kind: "analogy",
          title: "A pocket calculator",
          analogy:
            "Think of operators like the buttons on a calculator: + adds, − subtracts, × multiplies, ÷ divides. JavaScript just uses slightly different symbols for some of them (like `*` instead of ×).",
          takeaway: "Operators turn values into results.",
        },
        {
          kind: "heading",
          level: 2,
          text: "The five basic math operators",
        },
        {
          kind: "table",
          headers: ["Operator", "Name", "Example", "Result"],
          rows: [
            ["+", "Addition", "5 + 3", "8"],
            ["-", "Subtraction", "10 - 4", "6"],
            ["*", "Multiplication", "6 * 7", "42"],
            ["/", "Division", "20 / 4", "5"],
            ["%", "Modulo (remainder)", "10 % 3", "1"],
          ],
        },
        {
          kind: "callout",
          variant: "info",
          title: "That % operator is gold",
          text: "Modulo (`%`) gives you the *remainder* after dividing. It's perfect for questions like 'is this number even?' or 'is it my turn every 3rd item?'. `10 % 3` is 1, because 10 ÷ 3 = 3 with 1 left over.",
        },
        {
          kind: "code",
          title: "See all five in action",
          summary: "Each line prints the result of one operator.",
          code: "console.log(5 + 3);   // 8\nconsole.log(10 - 4);  // 6\nconsole.log(6 * 7);   // 42\nconsole.log(20 / 4);  // 5\nconsole.log(10 % 3);  // 1",
          lines: [
            "Addition → 8",
            "Subtraction → 6",
            "Multiplication → 42",
            "Division → 5",
            "Modulo → the remainder 1",
          ],
          output: "8\n6\n42\n5\n1",
        },
        {
          kind: "playground",
          title: "Play with the calculator",
          initialCode:
            "let price = 8;\nlet quantity = 3;\nconsole.log(price * quantity);\nconsole.log(price % 2);",
          hint: "Change the numbers and watch the results update.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Order of operations (PEMDAS)",
        },
        {
          kind: "paragraph",
          text: "JavaScript follows the same order you learned in math class: **Parentheses, Exponents, Multiplication/Division, then Addition/Subtraction**. Multiplication happens *before* addition, just like on paper.",
        },
        {
          kind: "code",
          title: "Order matters!",
          summary: "The same numbers give different answers depending on order.",
          code: "console.log(2 + 3 * 4);   // 14, not 20\nconsole.log((2 + 3) * 4); // 20",
          lines: [
            "Multiplication first: 3*4=12, then 2+12 = 14",
            "Parentheses force addition first: 2+3=5, then 5*4 = 20",
          ],
          output: "14\n20",
        },
        {
          kind: "predict",
          title: "Predict: + with text",
          code: 'console.log("5" + 3);',
          options: ["8", '"53"', "53", "Error"],
          answer: 2,
          explanation:
            "When one side of `+` is text (a string), JavaScript JOINS instead of adding. \"5\" + 3 becomes the string \"53\", not the number 8. This 'concatenation' trap bites everyone — convert with Number() first when you mean math.",
        },
        {
          kind: "callout",
          variant: "tip",
          title: "When in doubt, add parentheses",
          text: "Parentheses make your intent crystal clear — both to JavaScript and to anyone reading your code. `total = (price + tax) * quantity` is much clearer than relying on order of operations.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Shortcuts: +=, -=, *=, /=",
        },
        {
          kind: "paragraph",
          text: "Updating a variable using its current value is *extremely* common — like adding points to a score. JavaScript has a shortcut so you don't have to write the variable name twice.",
        },
        {
          kind: "code",
          title: "The long way vs. the shortcut",
          summary: "Both lines below do the exact same thing.",
          code: "let score = 10;\nscore = score + 5;  // long way\nscore += 5;          // shortcut — same result\nconsole.log(score);",
          lines: [
            "Start with 10",
            "Add 5 the long way → now 15",
            "Add 5 the short way → now 20",
            "Prints 20",
          ],
          output: "20",
        },
        {
          kind: "table",
          headers: ["Shortcut", "Same as", "Use case"],
          rows: [
            ["score += 5", "score = score + 5", "Adding to a total"],
            ["score -= 5", "score = score - 5", "Removing points"],
            ["price *= 2", "price = price * 2", "Doubling a value"],
            ["total /= 4", "total = total / 4", "Splitting evenly"],
          ],
        },
        {
          kind: "heading",
          level: 2,
          text: "Counting by one: ++ and --",
        },
        {
          kind: "code",
          title: "The shortest shortcut",
          summary: "++ adds exactly 1. -- subtracts exactly 1.",
          code: "let count = 0;\ncount++;         // count is now 1\ncount++;         // count is now 2\ncount--;         // count is now 1\nconsole.log(count);",
          lines: [
            "Start at zero",
            "Add 1 → 1",
            "Add 1 again → 2",
            "Subtract 1 → 1",
            "Prints 1",
          ],
          output: "1",
        },
        {
          kind: "callout",
          variant: "info",
          title: "Where you'll see this",
          text: "`count++` shows up constantly in loops (Module 6) and anywhere you need to move through items one at a time. It's the heart of counting in code.",
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Confusing * with × and / with ÷.",
              right: "Use * for multiply and / for divide.",
              why: "JavaScript only understands * and /. The math symbols × and ÷ aren't on most keyboards, so programming languages use these instead.",
            },
            {
              wrong: "Forgetting order of operations.",
              right: "Use parentheses to make it explicit.",
              why: "`2 + 3 * 4` is 14, not 20. When in doubt, add () to force the order you want.",
            },
            {
              wrong: "Mixing numbers and strings with +.",
              right: "Use Number() to convert before adding.",
              why: "`\"5\" + 3` gives \"53\" (text joining), not 8. The + joins when one side is text.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "Math operators: + - * / % (add, subtract, multiply, divide, remainder).",
            "Order of operations follows PEMDAS — use parentheses to be safe.",
            "Shortcuts: +=, -=, *=, /= update a variable in place.",
            "`++` adds 1, `--` subtracts 1 — perfect for counting.",
          ],
        },
      ],
      challenge: {
        title: "Build a bill splitter",
        prompt:
          "Create variables for a total bill and number of people. Calculate how much each person pays, and print it. Try the shorthand operators too!",
        starterCode:
          "let bill = 100;\nlet people = 4;\n// calculate and print what each person owes\nlet each = bill / people;\nconsole.log(each);",
        expectedOutput: "25",
        hint: "Divide the bill by the number of people, then log the result.",
      },
      quiz: {
        id: "quiz-arithmetic-operators",
        title: "Quick check: Arithmetic operators",
        questions: [
          {
            id: "q1",
            question: "What does `10 % 3` evaluate to?",
            options: ["3", "1", "0.3", "30"],
            answer: 1,
            explanation: "% gives the remainder. 10 ÷ 3 = 3 with 1 left over.",
          },
          {
            id: "q2",
            question: "What does `2 + 3 * 4` evaluate to?",
            options: ["20", "14", "24", "9"],
            answer: 1,
            explanation: "Multiplication happens first: 3*4=12, then 2+12=14.",
          },
          {
            id: "q3",
            question: "Which shortcut is the same as `score = score + 10`?",
            options: ["score ++ 10", "score += 10", "score + 10", "score =+ 10"],
            answer: 1,
            explanation: "`+=` adds to a variable in place. `score += 10` is the shortcut.",
          },
          {
            id: "q4",
            question: "After `let x = 5; x++; x++;` what is x?",
            options: ["5", "6", "7", "10"],
            answer: 2,
            explanation: "Each `x++` adds 1: 5 → 6 → 7.",
          },
        ],
      },
    },
    {
      slug: "comparison-and-logical-operators",
      title: "Comparison & Logical Operators",
      durationMin: 9,
      difficulty: "Easy",
      objectives: [
        "Compare values with < > == ===",
        "Combine conditions with && || !",
        "Avoid the == vs === trap",
      ],
      content: [
        {
          kind: "why",
          point:
            "Comparison and logical operators let your code ASK QUESTIONS and get true/false answers — the raw material every decision is built from.",
          build:
            "an entry check that only lets someone in when they're 18-or-older AND have a ticket.",
          without:
            "your code could calculate numbers but never react to them — no 'if this, then that' anywhere.",
        },
        {
          kind: "paragraph",
          text: "Now that you can do math, the next superpower is **asking questions**. Is this number bigger? Are these two values equal? Is the user logged in AND over 18? Comparison and logical operators let your code make decisions based on answers.",
        },
        {
          kind: "analogy",
          title: "A bouncer at a club",
          analogy:
            "A bouncer checks rules: 'Are you over 18?' AND 'Do you have ID?' If BOTH are true, you get in. Comparison operators do the checking; logical operators (AND, OR, NOT) combine the checks.",
          takeaway: "Comparisons ask questions; logical operators combine them.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Comparison operators",
        },
        {
          kind: "paragraph",
          text: "Every comparison produces a **boolean** — `true` or `false`. They're how your code asks 'is this the case?'",
        },
        {
          kind: "table",
          headers: ["Operator", "Means", "Example", "Result"],
          rows: [
            ["===", "Equal to (strict)", "5 === 5", "true"],
            ["!==", "Not equal to (strict)", "5 !== 6", "true"],
            [">", "Greater than", "7 > 3", "true"],
            ["<", "Less than", "2 < 8", "true"],
            [">=", "Greater or equal", "5 >= 5", "true"],
            ["<=", "Less or equal", "4 <= 9", "true"],
          ],
        },
        {
          kind: "code",
          title: "Every result is true or false",
          summary: "Comparison operators always produce a boolean.",
          code: "console.log(7 > 3);      // true\nconsole.log(2 > 8);      // false\nconsole.log(5 === 5);    // true\nconsole.log(10 !== 10);  // false",
          lines: [
            "Is 7 greater than 3? → true",
            "Is 2 greater than 8? → false",
            "Is 5 equal to 5? → true",
            "Is 10 not equal to 10? → false",
          ],
          output: "true\nfalse\ntrue\nfalse",
        },
        {
          kind: "callout",
          variant: "warning",
          title: "== vs === — always use ===",
          text: "JavaScript has TWO equality operators. `==` tries to convert types before comparing (so `5 == \"5\"` is true — yikes). `===` checks value AND type strictly (`5 === \"5\"` is false). **Always use `===` and `!==`** to avoid confusing bugs.",
        },
        {
          kind: "code",
          title: "Why === is safer",
          summary: "See how == and === differ on mixed types.",
          code: 'console.log(5 == "5");   // true  (loose)\nconsole.log(5 === "5");  // false (strict)\nconsole.log(0 == false); // true  (loose)\nconsole.log(0 === false);// false (strict)',
          lines: [
            "Loose == converts '5' to 5, then compares → true",
            "Strict === refuses: number ≠ string → false",
            "Loose: 0 and false are both 'falsy' → true",
            "Strict: different types → false",
          ],
          output: "true\nfalse\ntrue\nfalse",
        },
        {
          kind: "predict",
          title: "Predict: == vs ===",
          code: 'console.log(0 == "");\nconsole.log(0 === "");',
          options: ["true\ntrue", "false\nfalse", "true\nfalse", "false\ntrue"],
          answer: 2,
          explanation:
            "Loose `==` converts types before comparing, and both 0 and \"\" are 'falsy', so it says true — surprising! Strict `===` checks type too: a number is not a string, so false. This is exactly why you always reach for ===.",
        },
        {
          kind: "playground",
          title: "Test some comparisons",
          initialCode:
            "let age = 20;\nconsole.log(age >= 18);\nconsole.log(age === 21);\nconsole.log(age !== 16);",
          hint: "Change age and see how every result flips between true and false.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Logical operators: && || !",
        },
        {
          kind: "paragraph",
          text: "Real decisions often need more than one check. 'Is it the weekend AND sunny?' 'Is the user a member OR a guest?' Logical operators combine multiple booleans into one answer.",
        },
        {
          kind: "table",
          headers: ["Operator", "Name", "True when..."],
          rows: [
            ["&&", "AND", "BOTH sides are true"],
            ["||", "OR", "AT LEAST one side is true"],
            ["!", "NOT", "Flips true ↔ false"],
          ],
        },
        {
          kind: "code",
          title: "Combining checks",
          summary: "&& needs both true. || needs one. ! flips the answer.",
          code: "let age = 20;\nlet hasID = true;\n\nconsole.log(age >= 18 && hasID);  // both true\nconsole.log(age >= 21 || hasID);   // one is true\nconsole.log(!hasID);               // flips to false",
          lines: [
            "Set up two facts",
            "",
            "AND: both are true → true",
            "OR: only one needs to be true → true",
            "NOT: flips true → false",
          ],
          output: "true\ntrue\nfalse",
        },
        {
          kind: "analogy",
          title: "Three doors",
          analogy:
            "`&&` is like a door needing TWO keys — both must fit. `||` is like a door accepting ANY of several keys — one is enough. `!` is a 'do the opposite' switch — it reverses whatever it's given.",
          takeaway: "AND is strict (both), OR is lenient (any), NOT flips.",
        },
        {
          kind: "diagram",
          caption: "How && and || combine two booleans.",
          mermaid: `flowchart TD
  A["a && b"] --> A1["true ONLY if both true"]
  B["a || b"] --> B1["true if EITHER is true"]
  C["!a"] --> C1["flips true↔false"]`,
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Using = (single equals) to compare.",
              right: "Use === for comparison.",
              why: "= is assignment (it stores a value). === asks 'are these equal?'. Mixing them up is one of the most common bugs in JavaScript.",
            },
            {
              wrong: "Using == instead of ===.",
              right: "Always prefer === and !==.",
              why: "Loose == does surprising type conversions (0 == '' is true!). Strict === never surprises you.",
            },
            {
              wrong: "Writing 'and' instead of &&.",
              right: "Use the symbols && for AND, || for OR, ! for NOT.",
              why: "JavaScript uses symbols, not words, for logic. 'and' would be read as a variable name.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "Comparisons (>, <, ===, !==) always produce true or false.",
            "Always use === and !== — never the loose == or !=.",
            "&& = AND (both must be true).",
            "|| = OR (at least one must be true).",
            "! = NOT (flips true/false).",
          ],
        },
      ],
      challenge: {
        title: "Build a membership check",
        prompt:
          "Create variables for a person's age and whether they're a member. Use a logical operator to print true if they can enter: either they're 18+, OR they're a member.",
        starterCode:
          "let age = 16;\nlet isMember = true;\n// print true if age >= 18 OR isMember\nconsole.log(age >= 18 || isMember);",
        expectedOutput: "true",
        hint: "Combine the two checks with || (OR).",
      },
      quiz: {
        id: "quiz-comparison-logical",
        title: "Quick check: Comparison & logical operators",
        questions: [
          {
            id: "q1",
            question: 'What does `5 === "5"` evaluate to?',
            options: ["true", "false", "undefined", "Error"],
            answer: 1,
            explanation: "Strict equality checks type too. A number isn't a string, so false.",
          },
          {
            id: "q2",
            question: "What does `true && false` evaluate to?",
            options: ["true", "false", "null", "Error"],
            answer: 1,
            explanation: "AND needs BOTH sides true. Since one is false, the result is false.",
          },
          {
            id: "q3",
            question: "What does `!true` evaluate to?",
            options: ["true", "false", "undefined", "'true'"],
            answer: 1,
            explanation: "The NOT operator ! flips the value: true becomes false.",
          },
          {
            id: "q4",
            question: "Which operator means 'at least one side is true'?",
            options: ["&&", "||", "!", "==="],
            answer: 1,
            explanation: "|| (OR) is true when at least one side is true.",
          },
        ],
      },
    },
  ],
};
