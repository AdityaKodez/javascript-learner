import type { Module } from "@/types";

export const loopsModule: Module = {
  slug: "loops",
  order: 6,
  title: "Loops",
  tagline: "Repeat actions without repeating code.",
  description:
    "Automate repetition with for and while loops — the engine behind processing lists and counting.",
  icon: "Repeat",
  accent: "text-cyan-500",
  lessons: [
    {
      slug: "for-loops",
      title: "for Loops",
      durationMin: 11,
      difficulty: "Beginner",
      achievement: "loop-survivor",
      objectives: [
        "Understand what a loop does",
        "Write a for loop with start, condition, and step",
        "Avoid infinite loops",
      ],
      content: [
        {
          kind: "paragraph",
          text: "Computers are amazing at one thing humans find boring: **doing the same action over and over without mistakes.** A loop tells JavaScript 'run this block again and again until I say stop.' Instead of copying `console.log` twenty times, you write it once and loop.",
        },
        {
          kind: "analogy",
          title: "Climbing stairs",
          analogy:
            "Imagine climbing a flight of stairs. Your brain does: 'take a step, am I at the top? No — take another step, am I at the top?...' That's a loop! You repeat one action (step) and check a condition (at the top?) each time, stopping when it's true.",
          takeaway: "A loop repeats a block while a condition stays true.",
        },
        {
          kind: "heading",
          level: 2,
          text: "The for loop, dissected",
        },
        {
          kind: "paragraph",
          text: "The `for` loop has three parts squeezed into one line, separated by semicolons: where to **start**, when to **stop**, and how to **move forward** each time.",
        },
        {
          kind: "code",
          title: "Count from 1 to 5",
          summary: "The three parts of a for loop: start; condition; step.",
          code: "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}",
          lines: [
            "Start: create i and set it to 1",
            "Condition: keep going while i <= 5",
            "Step: add 1 to i after each round",
            "Body: this runs every loop",
          ],
          output: "1\n2\n3\n4\n5",
        },
        {
          kind: "callout",
          variant: "info",
          title: "Meet the counter variable: i",
          text: "By tradition, loops use a variable named `i` (short for 'index'). It's the loop's memory of 'where am I in the count?' Each time around, `i` changes — usually by +1 via `i++`.",
        },
        {
          kind: "diagram",
          caption: "The three parts of a for loop, in order.",
          mermaid: `flowchart LR
  Start["1. Start\nlet i = 1"] --> Check{"2. Condition\ni <= 5?"}
  Check -->|Yes| Body["3. Body runs\nconsole.log(i)"]
  Body --> Step["4. Step\ni++"]
  Step --> Check
  Check -->|No| Done["Loop ends"]`,
        },
        {
          kind: "heading",
          level: 2,
          text: "The three parts, up close",
        },
        {
          kind: "table",
          headers: ["Part", "What it does", "Runs..."],
          rows: [
            ["Start (`let i = 1`)", "Sets up the counter", "Once, at the beginning"],
            ["Condition (`i <= 5`)", "Decides whether to keep going", "Before every round"],
            ["Step (`i++`)", "Changes the counter", "After every round"],
          ],
        },
        {
          kind: "playground",
          title: "Make it count higher",
          initialCode:
            "for (let i = 1; i <= 10; i++) {\n  console.log('Number ' + i);\n}",
          hint: "Change the 10 to count to a different number. Try starting at 0.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Counting down",
        },
        {
          kind: "paragraph",
          text: "Loops can count backwards too. Start high, make the condition 'while greater than zero', and step DOWN with `i--`.",
        },
        {
          kind: "code",
          title: "Liftoff countdown",
          summary: "Start at 3, keep going while i > 0, subtract 1 each time.",
          code: 'for (let i = 3; i > 0; i--) {\n  console.log(i);\n}\nconsole.log("Liftoff!");',
          lines: [
            "Start at 3, loop while i > 0, subtract 1",
            "Print current i",
            "After loop ends",
          ],
          output: "3\n2\n1\nLiftoff!",
        },
        {
          kind: "heading",
          level: 2,
          text: "Summing with a loop",
        },
        {
          kind: "paragraph",
          text: "Loops shine when you need to build up a result — like adding all numbers from 1 to 10. You create a total variable, then add to it inside the loop.",
        },
        {
          kind: "code",
          title: "Add 1 + 2 + ... + 10",
          summary: "A running total that grows each round.",
          code: "let total = 0;\nfor (let i = 1; i <= 10; i++) {\n  total = total + i;\n}\nconsole.log(total);",
          lines: [
            "Start the total at 0",
            "Loop i from 1 to 10",
            "Add i to the total each time",
            "After the loop, print 55",
          ],
          output: "55",
        },
        {
          kind: "callout",
          variant: "warning",
          title: "Beware the infinite loop",
          text: "If the condition NEVER becomes false, the loop runs forever — freezing your page. The classic mistake: forgetting the step (`i++`). Always make sure something in the loop pushes toward the end condition.",
        },
        {
          kind: "code",
          title: "An infinite loop (don't run this!)",
          summary: "i never changes, so i < 5 is true forever.",
          code: "// for (let i = 0; i < 5; ) {\n//   console.log(i); // i never increases!\n// }",
          lines: [
            "Start i at 0",
            "Condition is true... but nothing changes i",
            "This would freeze the browser",
          ],
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Forgetting the step (i++ or i--).",
              right: "Always include a step that moves toward ending.",
              why: "Without a step, the condition stays true forever → infinite loop → frozen page. Force-refresh to escape.",
            },
            {
              wrong: "Off-by-one: using < when you meant <=.",
              right: "Decide if the end number should be included.",
              why: "`i < 5` stops at 4. `i <= 5` includes 5. This single character decides whether 5 runs.",
            },
            {
              wrong: "Using the loop variable after the loop expecting its start value.",
              right: "Remember i has changed to its final value.",
              why: "After `for (let i = 0; i < 5; i++)`, i is 5 — the value that made the condition false.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "A loop repeats a block while a condition is true.",
            "`for (start; condition; step) { body }` has three parts.",
            "`i` is the conventional counter variable.",
            "Always include a step (like i++) to avoid infinite loops.",
            "Mind off-by-one errors: `< 5` stops at 4, `<= 5` includes 5.",
          ],
        },
      ],
      challenge: {
        title: "Print even numbers",
        prompt:
          "Use a for loop to print only the even numbers from 2 to 10 (2, 4, 6, 8, 10). Hint: start at 2 and step by 2 each time using i += 2.",
        starterCode:
          "for (let i = 2; i <= 10; i += 2) {\n  console.log(i);\n}",
        expectedOutput: "2",
        hint: "Start at 2, set the condition to i <= 10, and use i += 2 as the step.",
      },
      quiz: {
        id: "quiz-for-loops",
        title: "Quick check: for loops",
        questions: [
          {
            id: "q1",
            question: "What are the three parts of `for (a; b; c)`?",
            options: [
              "start; condition; step",
              "name; value; type",
              "begin; middle; end",
              "if; else; default",
            ],
            answer: 0,
            explanation: "for loops have a start, a condition (when to keep going), and a step (how to advance).",
          },
          {
            id: "q2",
            question: "What does this print? `for (let i = 0; i < 3; i++) { console.log(i); }`",
            options: ["0 1 2", "1 2 3", "0 1 2 3", "1 2"],
            answer: 0,
            explanation: "Starts at 0, runs while i < 3, so i is 0, 1, then 2. Stops before 3.",
          },
          {
            id: "q3",
            question: "What causes an infinite loop?",
            options: [
              "The condition never becomes false",
              "Using i as the counter",
              "Having too many lines in the body",
              "Starting at 0",
            ],
            answer: 0,
            explanation: "If the condition can never become false (e.g. no step), the loop runs forever.",
          },
          {
            id: "q4",
            question: "Which loop counts down from 3 to 1?",
            options: [
              "for (let i = 3; i > 0; i--)",
              "for (let i = 1; i <= 3; i++)",
              "for (let i = 3; i < 0; i++)",
              "for (let i = 3; i > 0; i++)",
            ],
            answer: 0,
            explanation: "Start at 3, continue while i > 0, and decrement with i-- to count down.",
          },
        ],
      },
    },
    {
      slug: "while-loops-and-break",
      title: "while Loops, break & continue",
      durationMin: 9,
      difficulty: "Easy",
      objectives: [
        "Write a while loop for unknown counts",
        "Exit a loop early with break",
        "Skip a round with continue",
      ],
      content: [
        {
          kind: "paragraph",
          text: "The `for` loop is perfect when you know *exactly* how many times to repeat. But sometimes you don't — you just want to 'keep going until something happens.' That's the job of the **`while`** loop. You'll also meet two keywords, `break` and `continue`, that give you finer control inside any loop.",
        },
        {
          kind: "analogy",
          title: "Eating until full",
          analogy:
            "A `for` loop is like 'eat exactly 5 bites.' A `while` loop is 'keep eating WHILE you're still hungry.' You don't know in advance how many bites — you check the condition (am I full?) each time and stop when it's false.",
          takeaway: "Use for when the count is known; while when it isn't.",
        },
        {
          kind: "heading",
          level: 2,
          text: "The while loop",
        },
        {
          kind: "paragraph",
          text: "A `while` loop has just one part: a condition. As long as that condition is `true`, the body runs again. The danger is that YOU have to make the condition become false — usually by changing a variable inside the loop.",
        },
        {
          kind: "code",
          title: "Count down with while",
          summary: "We manually update count inside the loop so it eventually ends.",
          code: "let count = 3;\nwhile (count > 0) {\n  console.log(count);\n  count--;  // important! moves toward ending\n}\nconsole.log('Done');",
          lines: [
            "Start the counter at 3",
            "Keep looping while count > 0",
            "Print it",
            "Subtract 1 — must change count!",
            "After the loop",
          ],
          output: "3\n2\n1\nDone",
        },
        {
          kind: "callout",
          variant: "warning",
          title: "While loops are infinite-loop prone",
          text: "If you forget to update the variable inside a while loop, the condition never changes — infinite loop. Always double-check that something inside the body pushes toward making the condition false.",
        },
        {
          kind: "heading",
          level: 2,
          text: "for vs while: when to use each",
        },
        {
          kind: "table",
          headers: ["Loop", "Best for", "Example"],
          rows: [
            ["for", "You know the count in advance", "Loop 10 times, process 5 items"],
            ["while", "You don't know when it'll end", "Keep asking until the user types 'quit'"],
          ],
        },
        {
          kind: "playground",
          title: "Try a while loop",
          initialCode:
            "let number = 1;\nwhile (number <= 16) {\n  console.log(number);\n  number = number * 2;\n}",
          hint: "This doubles each time: 1, 2, 4, 8, 16. Change the condition to see different stops.",
        },
        {
          kind: "heading",
          level: 2,
          text: "break: escape immediately",
        },
        {
          kind: "paragraph",
          text: "Sometimes you want to bail out of a loop *early*, before the condition becomes false. The `break` keyword instantly exits the loop — no matter what round you're on. It's the 'stop everything!' button.",
        },
        {
          kind: "code",
          title: "Stop when you find what you want",
          summary: "break exits the loop the moment we hit 3.",
          code: "for (let i = 1; i <= 10; i++) {\n  if (i === 3) {\n    console.log('Found 3, stopping!');\n    break;\n  }\n  console.log(i);\n}",
          lines: [
            "Loop 1 to 10",
            "Check if we've reached 3",
            "Announce it",
            "Exit the loop immediately",
            "Otherwise print i",
          ],
          output: "1\n2\nFound 3, stopping!",
        },
        {
          kind: "heading",
          level: 2,
          text: "continue: skip this round",
        },
        {
          kind: "paragraph",
          text: "`continue` is gentler: it skips the *rest of this round* and jumps straight to the next one. The loop keeps going — it just ignores whatever's left in the current pass. Great for 'skip the odd numbers.'",
        },
        {
          kind: "code",
          title: "Skip the number 3",
          summary: "continue jumps to the next i without running the rest.",
          code: "for (let i = 1; i <= 5; i++) {\n  if (i === 3) {\n    continue;  // skip the rest of this round\n  }\n  console.log(i);\n}",
          lines: [
            "Loop 1 to 5",
            "When i is 3...",
            "Jump to the next round",
            "Otherwise print i",
          ],
          output: "1\n2\n4\n5",
        },
        {
          kind: "table",
          headers: ["Keyword", "What it does"],
          rows: [
            ["break", "Exits the loop completely"],
            ["continue", "Skips to the next round of the loop"],
          ],
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Forgetting to update the variable in a while loop.",
              right: "Always change something that moves toward the condition being false.",
              why: "Without an update, `while (x < 5)` where x never changes runs forever.",
            },
            {
              wrong: "Using break when you meant continue (or vice versa).",
              right: "break = stop entirely; continue = skip this round only.",
              why: "Mixing them up either ends your loop too early or never stops it. Read them aloud to remember.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "`while (condition) { body }` repeats while the condition is true.",
            "Use while when you don't know how many times to loop.",
            "Always update the condition's variable inside a while loop.",
            "`break` exits the loop entirely; `continue` skips to the next round.",
          ],
        },
      ],
      challenge: {
        title: "Skip and stop",
        prompt:
          "Loop from 1 to 10. Use continue to skip the number 5, and use break to stop entirely when you reach 8. So you should print 1,2,3,4,6,7 and then stop.",
        starterCode:
          "for (let i = 1; i <= 10; i++) {\n  if (i === 5) {\n    continue;\n  }\n  if (i === 8) {\n    break;\n  }\n  console.log(i);\n}",
        expectedOutput: "1",
        hint: "Check for 5 first (continue), then check for 8 (break), then log i.",
      },
      quiz: {
        id: "quiz-while-break",
        title: "Quick check: while, break, continue",
        questions: [
          {
            id: "q1",
            question: "When is a while loop a better choice than a for loop?",
            options: [
              "When you know exactly how many times to loop",
              "When you don't know how many times it'll run",
              "When you want to count",
              "Never — for is always better",
            ],
            answer: 1,
            explanation: "while shines when the end isn't a fixed count, like 'keep going until a condition is met.'",
          },
          {
            id: "q2",
            question: "What does `break` do?",
            options: [
              "Skips to the next round",
              "Exits the loop immediately",
              "Restarts the loop",
              "Pauses the loop",
            ],
            answer: 1,
            explanation: "break completely exits the loop, no matter what round you're on.",
          },
          {
            id: "q3",
            question: "What does `continue` do?",
            options: [
              "Exits the loop",
              "Skips the rest of this round and goes to the next",
              "Restarts from the first round",
              "Ends the program",
            ],
            answer: 1,
            explanation: "continue skips whatever's left in the current round and jumps to the next iteration.",
          },
        ],
      },
    },
  ],
};
