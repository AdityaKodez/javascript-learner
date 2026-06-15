import type { Module } from "@/types";

export const introModule: Module = {
  slug: "introduction",
  order: 1,
  title: "Introduction to JavaScript",
  tagline: "What JavaScript is and why it runs the web.",
  description:
    "Meet JavaScript — the language that makes websites interactive. No experience needed.",
  icon: "Sparkles",
  accent: "text-amber-500",
  lessons: [
    {
      slug: "what-is-javascript",
      title: "What is JavaScript?",
      durationMin: 6,
      difficulty: "Beginner",
      objectives: [
        "Understand what JavaScript actually does",
        "See it in action with a real example",
        "Learn where JavaScript runs",
      ],
      content: [
        {
          kind: "paragraph",
          text: "You already know HTML (the content) and CSS (the style). JavaScript is the third piece: it's the **behavior**. If a web page were a person, HTML is the body, CSS is the clothes, and JavaScript is the muscles and brain that make it move and react.",
        },
        {
          kind: "analogy",
          title: "Think of a vending machine",
          analogy:
            "The machine's buttons and slots are the HTML. The colors and labels are the CSS. But the *logic* — 'if I press B4 and put in $1, give me a soda' — that's JavaScript. Without it, the buttons are just decoration.",
          takeaway: "JavaScript is the part that reacts and makes decisions.",
        },
        {
          kind: "heading",
          level: 2,
          text: "What JavaScript can do",
        },
        {
          kind: "concept",
          title: "JavaScript's superpowers",
          points: [
            "React to clicks, typing, and taps",
            "Update the page without reloading",
            "Do math and make decisions",
            "Store and change data",
            "Talk to servers to load fresh content",
          ],
        },
        {
          kind: "heading",
          level: 2,
          text: "See it in 10 seconds",
        },
        {
          kind: "code",
          title: "Your very first line of JavaScript",
          summary: "This opens a pop-up. Click Run.",
          code: 'alert("Hello, world!");',
          lines: ["Shows a pop-up with the message"],
          output: 'A pop-up: "Hello, world!"',
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Try it yourself",
          text: "Edit the playground below — change the message and run it again. You're already writing JavaScript!",
        },
        {
          kind: "playground",
          title: "Make it say something new",
          initialCode: 'alert("I am learning JavaScript!");',
          hint: "Change the words between the quotes.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Where does JavaScript run?",
        },
        {
          kind: "diagram",
          caption: "JavaScript runs in two main places.",
          mermaid: `flowchart LR
  JSCode["JavaScript code"] --> Browser["Your browser"]
  JSCode --> Server["Servers (Node.js)"]
  Browser --> Page["Makes the page interactive"]
  Server --> Data["Serves data & apps"]`,
        },
        {
          kind: "paragraph",
          text: "Every modern browser has a built-in JavaScript engine, so your code can run the moment a page loads — no install needed. That's why it's the most popular language for the web.",
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Thinking JavaScript and Java are the same thing.",
              right: "They are completely different languages.",
              why: "The name 'JavaScript' was a marketing move in 1995 to ride Java's popularity. They share almost nothing.",
            },
            {
              wrong: "Believing JavaScript only works in browsers.",
              right: "It also runs on servers (Node.js) and even in apps.",
              why: "Modern JS is everywhere, but for this course we focus on the browser.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "JavaScript adds behavior to web pages.",
            "It reacts to user actions and can change the page.",
            "It runs in every browser automatically.",
            "JavaScript ≠ Java.",
          ],
        },
      ],
      challenge: {
        title: "Say hello your way",
        prompt:
          "Write a line of JavaScript that shows a pop-up greeting someone by name. Use the playground!",
        starterCode: 'alert("Hello!");',
        expectedOutput: "Hello",
        hint: "Change the text inside the quotes, then run it.",
      },
      quiz: {
        id: "quiz-what-is-js",
        title: "Quick check: What is JavaScript?",
        questions: [
          {
            id: "q1",
            question: "Which part of a web page does JavaScript control?",
            options: ["Structure (HTML)", "Style (CSS)", "Behavior & logic", "The Wi-Fi signal"],
            answer: 2,
            explanation: "JavaScript handles behavior — reacting, deciding, and updating the page.",
          },
          {
            id: "q2",
            question: "Where does JavaScript run automatically without installing anything?",
            options: ["Only on servers", "In every web browser", "Only on phones", "Nowhere — you must install it"],
            answer: 1,
            explanation: "Every modern browser has a JavaScript engine built in.",
          },
          {
            id: "q3",
            question: "Are Java and JavaScript the same language?",
            options: ["Yes, they're identical", "No, they're totally different", "Java is newer", "JavaScript is a type of Java"],
            answer: 1,
            explanation: "Completely different languages that happen to share a name.",
          },
        ],
      },
    },
    {
      slug: "why-learn-javascript",
      title: "Why learn JavaScript?",
      durationMin: 5,
      difficulty: "Beginner",
      objectives: [
        "See what real things you can build",
        "Understand why it's a great first language",
        "Know what comes next in this course",
      ],
      content: [
        {
          kind: "paragraph",
          text: "Here's the honest truth: **almost every website you use runs JavaScript.** Gmail, YouTube, Netflix, online stores, games in your browser — all JavaScript. Learning it means you can build things people actually use.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Things you'll be able to build",
        },
        {
          kind: "concept",
          title: "Just a taste of what's possible",
          points: [
            "Interactive forms that validate as you type",
            "To-do lists, calculators, and quizzes",
            "Games that run in the browser",
            "Dashboards and data visualizations",
            "Animations and smooth page transitions",
          ],
        },
        {
          kind: "analogy",
          title: "Learning to cook",
          analogy:
            "HTML, CSS, and JavaScript are like learning three kitchen skills. HTML is plating the food, CSS is making it look beautiful, and JavaScript is actually *cooking* — the part where raw ingredients become a meal. This course teaches you to cook.",
          takeaway: "JavaScript is where the real action happens.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Why it's a great FIRST language",
        },
        {
          kind: "table",
          headers: ["Reason", "What it means for you"],
          rows: [
            ["Instant feedback", "Write code, see results in the browser immediately"],
            ["No setup needed", "Your browser is already a complete environment"],
            ["Huge community", "Endless free tutorials and help online"],
            ["Forgiving syntax", "It won't crash your computer if you make a mistake"],
          ],
        },
        {
          kind: "callout",
          variant: "info",
          title: "The journey ahead",
          text: "This course takes you from zero to confidently writing JavaScript. Each lesson is short and builds on the last. By the end you'll build real mini-projects.",
        },
        {
          kind: "diagram",
          caption: "Your path from beginner to confident beginner.",
          mermaid: `flowchart LR
  Start["You are here"] --> Basics["Variables & data"]
  Basics --> Logic["Decisions & loops"]
  Logic --> Functions["Reusable code"]
  Functions --> DOM["Change web pages"]
  DOM --> Projects["Build things!"]`,
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Trying to learn everything at once.",
              right: "Learn one concept at a time and practice it.",
              why: "Your brain needs repetition to move ideas into long-term memory.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "JavaScript powers most websites and apps you use.",
            "It gives instant feedback — great for beginners.",
            "No setup needed beyond a browser.",
            "You'll go from basics to building real projects.",
          ],
        },
      ],
      challenge: {
        title: "Set a tiny goal",
        prompt:
          "In the playground, write a message to yourself about what you want to build one day.",
        starterCode: 'alert("One day I will build...");',
        hint: "Just finish the sentence inside the quotes.",
      },
      quiz: {
        id: "quiz-why-learn-js",
        title: "Quick check: Why learn JavaScript?",
        questions: [
          {
            id: "q1",
            question: "Why is JavaScript good for beginners?",
            options: ["It requires expensive software", "It gives instant feedback in the browser", "It has very few resources online", "You must memorize everything first"],
            answer: 1,
            explanation: "You write code and see results immediately — perfect for learning.",
          },
          {
            id: "q2",
            question: "What can you eventually build with JavaScript?",
            options: ["Only static text pages", "Games, apps, dashboards, and more", "Nothing useful", "Only mobile apps"],
            answer: 1,
            explanation: "JavaScript can build a huge range of interactive applications.",
          },
          {
            id: "q3",
            question: "What's the best way to learn JavaScript?",
            options: ["Read everything before coding", "Learn one concept at a time and practice", "Memorize all syntax first", "Skip the basics"],
            answer: 1,
            explanation: "One concept at a time, with practice, is how ideas stick.",
          },
        ],
      },
    },
  ],
};
