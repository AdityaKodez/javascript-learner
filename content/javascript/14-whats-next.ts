import type { Module } from "@/types";

// ---------------------------------------------------------------------------
// Module 14 — "What's Next".
//
// The capstone of the path. Two lessons:
//   1. How to Think Like a Builder — the *thinking* skill that turns a person
//      who knows syntax into someone who can build. This is intentionally the
//      heaviest lesson on mindset rather than new syntax.
//   2. Beyond This Course — the map of more advanced topics and a curated set
//      of trusted resources to keep going.
// ---------------------------------------------------------------------------

export const whatsNextModule: Module = {
  slug: "whats-next",
  order: 14,
  title: "What's Next",
  tagline: "Learn to think like a builder, then keep going.",
  description:
    "The most important skill isn't syntax — it's how you think. Plus a map of advanced topics and the best resources to continue.",
  icon: "Brain",
  accent: "text-violet-500",
  lessons: [
    // -----------------------------------------------------------------------
    // Lesson 1 — How to Think Like a Builder
    // -----------------------------------------------------------------------
    {
      slug: "how-to-think-like-a-builder",
      title: "How to Think Like a Builder",
      durationMin: 12,
      difficulty: "Medium",
      objectives: [
        "Turn a vague idea into a concrete list of steps",
        "Think in terms of data and actions",
        "Have a reliable plan for when you get stuck",
        "Build a habit of thinking before typing",
      ],
      content: [
        {
          kind: "paragraph",
          text: "You've learned the words of JavaScript: variables, loops, functions, objects. But knowing the words isn't the same as knowing what to **say**. The real skill — the one that separates people who *finish* projects from people who get stuck — is **how you think**. The good news: thinking is a skill, and skills can be practiced.",
        },
        {
          kind: "callout",
          variant: "info",
          title: "The big idea",
          text: "Code is the last step, not the first. Most of building is thinking: understanding the problem, breaking it down, and deciding what to do — before you type anything.",
        },
        {
          kind: "analogy",
          title: "Thinking like a chef, not a cook",
          analogy:
            "A cook follows a recipe step by step. A chef understands *why* each step exists, so they can invent a new dish when there's no recipe. This course gave you recipes. Now you're learning to think like a chef — so you can build things no tutorial has shown you.",
          takeaway: "Tutorials give you recipes. Thinking lets you cook without one.",
        },
        {
          kind: "heading",
          level: 2,
          text: "The builder's thinking loop",
        },
        {
          kind: "paragraph",
          text: "Every experienced developer runs roughly the same loop in their head. It's not magic — it's a repeatable process. Learn it once and you can apply it to *any* project.",
        },
        {
          kind: "steps",
          title: "How a builder approaches any problem",
          steps: [
            {
              title: "1. Understand the problem",
              description:
                "Say out loud, in plain English, exactly what you're trying to do. If you can't explain it simply, you don't understand it yet — and you can't build what you don't understand.",
            },
            {
              title: "2. Break it into smaller problems",
              description:
                "A big problem is just many small problems hiding together. Keep splitting until each piece feels obvious — something you already know how to do.",
            },
            {
              title: "3. Name the data and the actions",
              description:
                "Ask: what information do I need to track? (the data) And what can happen to it? (the actions) Almost every program is just data + the actions that change it.",
            },
            {
              title: "4. Write the steps in plain English",
              description:
                "Before real code, write pseudocode — the logic in normal words. It's far easier to fix a flawed plan than flawed code.",
            },
            {
              title: "5. Build the smallest version",
              description:
                "Get one tiny piece working end to end. A working skeleton beats a perfect plan you never finish.",
            },
            {
              title: "6. Test, then improve",
              description:
                "Run it. Does it do what you said? Then add the next small piece. Repeat until it's done.",
            },
          ],
        },
        {
          kind: "heading",
          level: 2,
          text: "Think in data and actions",
        },
        {
          kind: "paragraph",
          text: "This is the single most useful mental model. When you face any feature, ask two questions: **What do I need to remember?** (data) and **What can the user do?** (actions). Once you can name both, the code almost writes itself.",
        },
        {
          kind: "code",
          title: "Thinking through a 'like' button",
          summary: "Name the data and actions before writing real code.",
          code: "// DATA — what do I need to remember?\n//   - how many likes (a number)\n//   - did THIS user already like it? (a boolean)\n\n// ACTIONS — what can happen?\n//   - user clicks like -> add 1, remember they liked it\n//   - user clicks again -> remove 1, forget they liked it\n\n// Now the code is obvious:\nlet likes = 0;\nlet liked = false;\n\nfunction toggleLike() {\n  liked = !liked;\n  likes = likes + (liked ? 1 : -1);\n}",
          lines: [
            "Start by naming the data...",
            "a count,",
            "and whether this user liked it.",
            "",
            "Then name the actions...",
            "click to like,",
            "click again to unlike.",
            "",
            "Only now do you write code,",
            "and it maps 1-to-1 to your notes.",
            "the data, named as variables",
            "",
            "",
            "the action, as a function",
            "flip the boolean",
            "and adjust the count",
            "",
          ],
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Pseudocode is your superpower",
          text: "Write your logic as comments first, in plain English. Then fill real code under each comment. You'll catch mistakes in your thinking before they become bugs in your code.",
        },
        {
          kind: "heading",
          level: 2,
          text: "When you get stuck (and you will)",
        },
        {
          kind: "paragraph",
          text: "Getting stuck isn't failure — it's the normal state of building. What matters is having a plan. Here's what to do *instead* of giving up or copy-pasting blindly.",
        },
        {
          kind: "steps",
          title: "A plan for getting unstuck",
          steps: [
            {
              title: "Read the error — slowly",
              description:
                "Errors aren't insults, they're directions. The message usually says what went wrong and which line. Read it word by word before doing anything else.",
            },
            {
              title: "Make the problem smaller",
              description:
                "Comment out code until it works again, then add back one line at a time. The line that breaks it is your culprit.",
            },
            {
              title: "Print what you have",
              description:
                "Use console.log to see the actual values. Bugs often come from data being a different shape than you imagined.",
            },
            {
              title: "Explain it out loud",
              description:
                "Describe the problem to a friend, a rubber duck, or yourself. Saying it slowly often reveals the answer before anyone replies.",
            },
            {
              title: "Search the right way",
              description:
                "Search the error message or 'how to X in javascript', not 'fix my whole app'. Small, specific questions get good answers.",
            },
          ],
        },
        {
          kind: "diagram",
          caption: "The thinking loop you'll run on every project.",
          mermaid: `flowchart LR
  Understand["Understand"] --> Break["Break it down"]
  Break --> Name["Name data + actions"]
  Name --> Plan["Plan in plain English"]
  Plan --> Build["Build smallest piece"]
  Build --> Test["Test it"]
  Test -->|works| Next["Add next piece"]
  Test -->|breaks| Debug["Debug calmly"]
  Debug --> Build
  Next --> Build`,
        },
        {
          kind: "playground",
          title: "Practice the thinking, not the typing",
          initialCode:
            "// Pick a tiny feature and plan it BEFORE coding.\n// Example: a button that shows a random compliment.\n\n// DATA — what do I need to remember?\n//   - a list of compliments\n\n// ACTIONS — what can the user do?\n//   - click a button -> pick a random one -> show it\n\n// Now write the steps in plain English, then code:\nconst compliments = ['You got this!', 'Nice work!', 'Keep going!'];\n\nfunction showCompliment() {\n  const index = Math.floor(Math.random() * compliments.length);\n  console.log(compliments[index]);\n}\n\nshowCompliment();",
          hint: "Notice how naming the data and actions first made the code obvious. Try planning your own tiny feature the same way.",
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Typing code the moment you read the problem.",
              right: "Think and plan in plain English first.",
              why: "Code written without a plan tends to wander. A 2-minute plan saves an hour of confusion.",
            },
            {
              wrong: "Trying to hold the whole project in your head.",
              right: "Break it into small pieces and build one at a time.",
              why: "Nobody can juggle a whole app mentally. Small pieces are the only way humans build big things.",
            },
            {
              wrong: "Panicking and deleting everything when you hit a bug.",
              right: "Read the error, isolate it, and fix one thing.",
              why: "Most bugs are tiny and fixable. Calm, systematic debugging beats starting over.",
            },
            {
              wrong: "Copying code you don't understand.",
              right: "Understand each line before you use it.",
              why: "Copied code you don't understand becomes a bug you can't fix. Understanding is what you're really building.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "Thinking is the real skill — code is the last step, not the first.",
            "Run the loop: understand, break down, name data + actions, plan, build small, test, improve.",
            "Almost every program is data plus the actions that change it.",
            "Write pseudocode in plain English before real code.",
            "Getting stuck is normal — have a calm, systematic plan to get unstuck.",
          ],
        },
      ],
      challenge: {
        title: "Decompose a feature like a builder",
        prompt:
          "Pick a small feature (e.g. a search box that filters a list). In comments, write its DATA, its ACTIONS, and the steps in plain English. Then write the code under your plan.",
        starterCode:
          "// Feature: filter a list of names as the user types\n\n// DATA — what do I need to remember?\n//   - the full list of names\n//   - what the user has typed\n\n// ACTIONS — what can the user do?\n//   - type -> keep only names that include the typed text\n\n// Plan in plain English, then code it:\nconst names = ['Ada', 'Alan', 'Grace', 'Linus'];\nconst query = 'a';\n\nconst matches = names.filter(name =>\n  name.toLowerCase().includes(query.toLowerCase())\n);\nconsole.log(matches);",
        expectedOutput: "Ada",
        hint: "Name the data and actions first. The code should map almost 1-to-1 to your plan.",
      },
      quiz: {
        id: "quiz-think-like-builder",
        title: "Quick check: Thinking like a builder",
        questions: [
          {
            id: "q1",
            question: "What's the FIRST step when approaching a new problem?",
            options: [
              "Start writing code immediately",
              "Understand the problem in plain English",
              "Pick a color scheme",
              "Search for a library",
            ],
            answer: 1,
            explanation:
              "If you can't explain the problem simply, you can't build it. Understanding comes first.",
          },
          {
            id: "q2",
            question: "The 'data and actions' model says most programs are...",
            options: [
              "Just loops",
              "Information plus the actions that change it",
              "Mostly styling",
              "Impossible to plan",
            ],
            answer: 1,
            explanation:
              "Name what you need to remember (data) and what can happen (actions), and the code follows.",
          },
          {
            id: "q3",
            question: "What is pseudocode?",
            options: [
              "A broken programming language",
              "Your logic written in plain English before real code",
              "Code that runs faster",
              "A type of error",
            ],
            answer: 1,
            explanation:
              "Pseudocode is the plan in normal words — far easier to fix than real code.",
          },
          {
            id: "q4",
            question: "When you hit an error, what should you do first?",
            options: [
              "Delete everything and start over",
              "Read the error message slowly",
              "Ignore it and keep going",
              "Copy a random fix online",
            ],
            answer: 1,
            explanation:
              "Errors are directions, not insults. Read the message — it usually tells you what and where.",
          },
        ],
      },
    },

    // -----------------------------------------------------------------------
    // Lesson 2 — Beyond This Course
    // -----------------------------------------------------------------------
    {
      slug: "beyond-this-course",
      title: "Beyond This Course",
      durationMin: 10,
      difficulty: "Easy",
      objectives: [
        "See the map of topics that come after the basics",
        "Choose what to learn next without getting overwhelmed",
        "Know the most trusted free resources to keep going",
        "Escape 'tutorial hell' by building real things",
      ],
      content: [
        {
          kind: "paragraph",
          text: "You now know the core of JavaScript. That's a real milestone — most people never get this far. From here, the path branches. You don't need *all* of it, and you definitely don't need it *now*. This lesson is a **map**, so you can pick your own direction with confidence.",
        },
        {
          kind: "callout",
          variant: "tip",
          title: "You know more than you think",
          text: "Everything ahead is built on what you've already learned. New topics are just new combinations of variables, functions, objects, and the thinking skills from the last lesson.",
        },
        {
          kind: "heading",
          level: 2,
          text: "The map of what's next",
        },
        {
          kind: "paragraph",
          text: "Here's the rough order most developers grow in. Take them roughly top to bottom, but follow your curiosity — interest is the best fuel for learning.",
        },
        {
          kind: "table",
          headers: ["Topic", "What it unlocks"],
          rows: [
            ["Modern JS (ES6+)", "Cleaner code: arrow functions, destructuring, spread, modules"],
            ["Working with APIs", "Fetch real data from the internet with fetch() and async/await"],
            ["The browser & DOM, deeper", "Build richer interactive pages and small tools"],
            ["Git & GitHub", "Save versions of your work and share it with the world"],
            ["A framework (React)", "Build large apps without your code turning to spaghetti"],
            ["TypeScript", "Catch bugs before they run by adding types to JavaScript"],
            ["Node.js", "Run JavaScript outside the browser — build servers and tools"],
            ["Testing", "Prove your code works and keep it working as it grows"],
          ],
        },
        {
          kind: "concept",
          title: "How to choose your next step",
          icon: "Lightbulb",
          points: [
            "Pick ONE topic at a time — depth beats a scattered overview.",
            "Choose what excites you or what your next project needs.",
            "Learn just enough to build something, then learn the next bit.",
            "It's normal to revisit basics. Re-reading is learning, not failing.",
          ],
        },
        {
          kind: "callout",
          variant: "warning",
          title: "Beware 'tutorial hell'",
          text: "Watching endless tutorials feels productive but teaches you little. Real learning happens when you build something yourself and get stuck. Aim to build twice as much as you watch.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Project ideas to grow on",
        },
        {
          kind: "paragraph",
          text: "The fastest way forward is to build. Each idea below stretches you a little more than the last. Pick one, plan it with the builder's loop from the previous lesson, and start small.",
        },
        {
          kind: "steps",
          title: "Build these, in roughly this order",
          steps: [
            {
              title: "A tip calculator",
              description:
                "Practice inputs, numbers, and updating the page. Small and finishable in one sitting.",
            },
            {
              title: "A weather app",
              description:
                "Your first real API. Fetch live data and show it. Teaches async and JSON.",
            },
            {
              title: "A quiz game",
              description:
                "Arrays of questions, score tracking, and conditional logic working together.",
            },
            {
              title: "A notes app that saves",
              description:
                "Use localStorage so notes survive a refresh. Real apps remember things.",
            },
            {
              title: "Rebuild something you use",
              description:
                "A timer, a habit tracker, a flashcard app. Building something you actually want keeps you motivated.",
            },
          ],
        },
        {
          kind: "heading",
          level: 2,
          text: "The best places to keep learning",
        },
        {
          kind: "paragraph",
          text: "These are the resources experienced developers actually recommend — all high quality, and all free.",
        },
        {
          kind: "resources",
          title: "References & deep dives",
          items: [
            {
              label: "MDN Web Docs",
              url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              description:
                "The official reference for JavaScript and the web. Bookmark it — you'll use it forever.",
            },
            {
              label: "JavaScript.info",
              url: "https://javascript.info/",
              description:
                "A modern, deep, and beautifully explained tutorial covering JS from basics to advanced.",
            },
          ],
        },
        {
          kind: "resources",
          title: "Learn by building",
          items: [
            {
              label: "The Odin Project",
              url: "https://www.theodinproject.com/",
              description:
                "A full, free, project-based path into web development. Great for what comes after this course.",
            },
            {
              label: "freeCodeCamp",
              url: "https://www.freecodecamp.org/",
              description:
                "Free interactive courses and certifications with hundreds of hands-on coding challenges.",
            },
            {
              label: "Frontend Mentor",
              url: "https://www.frontendmentor.io/",
              description:
                "Real-world UI challenges with designs to build. Perfect for practicing what you know.",
            },
            {
              label: "React official docs",
              url: "https://react.dev/learn",
              description:
                "When you're ready for a framework, the new React docs are interactive and beginner-friendly.",
            },
          ],
        },
        {
          kind: "callout",
          variant: "info",
          title: "Remember the real skill",
          text: "No matter the topic, keep using the builder's loop: understand, break it down, name data and actions, plan, build small, test. The tools change — the thinking doesn't.",
        },
        {
          kind: "recap",
          points: [
            "What's next is a map, not a checklist — pick one direction at a time.",
            "Common next steps: modern JS, APIs, Git, a framework, TypeScript, Node, testing.",
            "Avoid tutorial hell — build more than you watch.",
            "MDN, JavaScript.info, The Odin Project, and freeCodeCamp are trusted, free resources.",
            "The thinking skills you learned carry into every new topic.",
          ],
        },
      ],
      challenge: {
        title: "Plan your next move",
        prompt:
          "Pick ONE topic from the map and ONE project to build with it. In comments, write the topic, the project, and the first three small steps using the builder's loop.",
        starterCode:
          "// Next topic I'll learn: working with APIs\n// Project I'll build: a weather app\n\n// First three small steps:\n// 1. Show a hard-coded temperature on the page\n// 2. Fetch real data from a weather API\n// 3. Show the live temperature for one city\n\nconsole.log('My next step is planned!');",
        expectedOutput: "My next step is planned!",
        hint: "Keep it small and specific. One topic, one project, three tiny first steps.",
      },
      quiz: {
        id: "quiz-beyond-course",
        title: "Quick check: What's next",
        questions: [
          {
            id: "q1",
            question: "What's the best way to choose your next topic?",
            options: [
              "Learn everything at once",
              "Pick one topic that excites you or that your project needs",
              "Only learn what's hardest",
              "Avoid building anything",
            ],
            answer: 1,
            explanation:
              "Depth beats breadth. One topic at a time, guided by interest or a project, works best.",
          },
          {
            id: "q2",
            question: "What is 'tutorial hell'?",
            options: [
              "A difficult tutorial",
              "Watching endless tutorials without building anything yourself",
              "A type of bug",
              "An advanced framework",
            ],
            answer: 1,
            explanation:
              "Tutorials feel productive but real learning comes from building and getting stuck. Build more than you watch.",
          },
          {
            id: "q3",
            question: "Which is a trusted, free JavaScript reference?",
            options: [
              "Random YouTube comments",
              "MDN Web Docs",
              "Unsourced forum posts",
              "AI answers you never verify",
            ],
            answer: 1,
            explanation:
              "MDN is the official, authoritative reference for JavaScript and the web.",
          },
          {
            id: "q4",
            question: "What carries over into every new topic you learn?",
            options: [
              "Nothing — you start from scratch each time",
              "The builder's thinking loop",
              "Only your color choices",
              "Just memorized syntax",
            ],
            answer: 1,
            explanation:
              "Tools change, but understanding, breaking down, and planning apply to everything you'll build.",
          },
        ],
      },
    },
  ],
};
