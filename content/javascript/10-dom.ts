import type { Module } from "@/types";

export const domModule: Module = {
  slug: "dom-basics",
  order: 10,
  title: "DOM Basics",
  tagline: "Change web pages with code.",
  description:
    "Select elements, read them, and update them on the fly — the bridge between JavaScript and the page.",
  icon: "MousePointerClick",
  accent: "text-lime-500",
  lessons: [
    {
      slug: "selecting-and-reading-elements",
      title: "Selecting & Reading Elements",
      durationMin: 12,
      difficulty: "Beginner",
      achievement: "dom-tinkerer",
      objectives: [
        "Understand what the DOM is",
        "Select elements with querySelector",
        "Read text, values, and attributes",
      ],
      content: [
        {
          kind: "paragraph",
          text: "The **DOM** (Document Object Model) is JavaScript's map of the web page. It turns the HTML into a tree of **elements** you can find, read, and change. If HTML is the page's structure, the DOM is the live version JavaScript can touch.",
        },
        {
          kind: "analogy",
          title: "A family tree of the page",
          analogy:
            "Think of the DOM like a family tree. The `<html>` tag is the ancestor. Inside it are `<head>` and `<body>`. Inside the body are headings, buttons, inputs, and paragraphs. Each one is a node you can reach and modify.",
          takeaway: "The DOM is the page as a tree of elements.",
        },
        {
          kind: "heading",
          level: 2,
          text: "What is an element?",
        },
        {
          kind: "paragraph",
          text: "Every HTML tag becomes an **element** in the DOM. A `<button>`, `<p>`, `<input>`, and `<h1>` are all elements. JavaScript can grab any of them and change what they say, how they look, or what they do.",
        },
        {
          kind: "code",
          title: "A tiny page as a DOM tree",
          summary: "HTML becomes a tree of nodes.",
          code: '<main>\n  <h1>Hello</h1>\n  <button>Click me</button>\n</main>',
          lines: [
            "main is the parent",
            "h1 is a child",
            "button is another child",
          ],
        },
        {
          kind: "diagram",
          caption: "The DOM tree matches the HTML nesting.",
          mermaid: `flowchart TD
  Main["<main>"] --> H1["<h1>Hello</h1>"]
  Main --> Btn["<button>Click me</button>"]`,
        },
        {
          kind: "heading",
          level: 2,
          text: "Selecting elements",
        },
        {
          kind: "paragraph",
          text: "Before you can change an element, you have to **select** it. The most common way is `document.querySelector('css selector')`. It finds the *first* element that matches the selector you give it.",
        },
        {
          kind: "code",
          title: "Find the first matching element",
          summary: "querySelector uses CSS selectors.",
          code: 'const heading = document.querySelector("h1");\nconsole.log(heading);',
          output: "",
          lines: [
            "Find the first <h1> on the page",
            "Print the element object",
          ],
        },
        {
          kind: "callout",
          variant: "info",
          title: "Why 'query'?",
          text: "A query is a question. `querySelector` asks the document: 'Who is the first h1?' It then gives you that element back so you can use it.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Common selectors",
        },
        {
          kind: "table",
          headers: ["Selector", "Finds"],
          rows: [
            ["'h1'", "The first h1 element"],
            ["'.class-name'", "The first element with that class"],
            ["'#id-name'", "The first element with that id"],
            ["'button'", "The first button"],
            ["'main p'", "The first p inside main"],
          ],
        },
        {
          kind: "code",
          title: "Select by class and id",
          summary: "Class uses . and id uses #.",
          code: 'const card = document.querySelector(".card");\nconst title = document.querySelector("#main-title");\n\nconsole.log(card);\nconsole.log(title);',
          output: "",
          lines: [
            "Find first .card",
            "Find first #main-title",
            "",
            "Print both",
          ],
        },
        {
          kind: "playground",
          title: "Select and inspect",
          initialCode:
            'const heading = document.querySelector("h1");\nconsole.log(heading);',
          hint: "Try changing the selector to a class or id from your HTML.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Reading text",
        },
        {
          kind: "paragraph",
          text: "Once you have an element, you can read what it says with `.textContent`. This gives you the plain text inside the element.",
        },
        {
          kind: "code",
          title: "Read the text of an element",
          summary: "textContent returns the text inside the element.",
          code: 'const heading = document.querySelector("h1");\nconsole.log(heading.textContent);',
          output: "",
          lines: [
            "Find the heading",
            "Read its text",
          ],
        },
        {
          kind: "heading",
          level: 2,
          text: "Reading input values",
        },
        {
          kind: "paragraph",
          text: "Inputs are special. You don't read their text with `.textContent`; you read their current value with `.value`.",
        },
        {
          kind: "code",
          title: "Read an input value",
          summary: "For inputs, use .value.",
          code: 'const input = document.querySelector("input");\nconsole.log(input.value);',
          output: "",
          lines: [
            "Find the input",
            "Read what the user typed",
          ],
        },
        {
          kind: "callout",
          variant: "tip",
          title: "textContent vs value",
          text: "Use `.textContent` for normal elements like headings and paragraphs. Use `.value` for inputs, selects, and textareas. That's the key difference.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Reading attributes",
        },
        {
          kind: "paragraph",
          text: "Every element can have attributes like `src`, `href`, `alt`, or `class`. You can read them with `.getAttribute('attributeName')`.",
        },
        {
          kind: "code",
          title: "Read an attribute",
          summary: "getAttribute returns the value of an attribute.",
          code: 'const img = document.querySelector("img");\nconsole.log(img.getAttribute("src"));',
          output: "",
          lines: [
            "Find the image",
            "Read its src attribute",
          ],
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Using querySelector when you meant querySelectorAll.",
              right: "querySelector returns the first match; querySelectorAll returns a list.",
              why: "If you need every matching element, querySelector only gives you the first one.",
            },
            {
              wrong: "Forgetting the quotes around CSS selectors.",
              right: "Always wrap selectors in quotes.",
              why: "querySelector('h1') works. querySelector(h1) treats h1 as a variable, which is usually undefined.",
            },
            {
              wrong: "Using textContent on an input.",
              right: "Use .value for inputs.",
              why: "Inputs store their current content in .value, not in textContent.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "The DOM is the live tree version of your HTML.",
            "querySelector(selector) finds the first matching element.",
            "textContent reads plain text from normal elements.",
            "value reads what the user typed into an input.",
            "getAttribute reads attributes like src, href, or class.",
          ],
        },
      ],
      challenge: {
        title: "Read the page",
        prompt:
          "Select the first h1 on the page and print its textContent. Then select the first input and print its value.",
        starterCode:
          'const heading = document.querySelector("h1");\nconsole.log(heading.textContent);\n\nconst input = document.querySelector("input");\nconsole.log(input.value);',
        expectedOutput: "",
        hint: "Use querySelector with the right selector, then read textContent or value.",
      },
      quiz: {
        id: "quiz-dom-selecting",
        title: "Quick check: DOM selection",
        questions: [
          {
            id: "q1",
            question: "What does querySelector return?",
            options: ["All matching elements", "The first matching element", "A string", "Nothing"],
            answer: 1,
            explanation: "querySelector returns the first element that matches the selector.",
          },
          {
            id: "q2",
            question: "Which property reads the text inside a paragraph?",
            options: ["value", "textContent", "getAttribute", "innerHTML"],
            answer: 1,
            explanation: "textContent gives the plain text inside an element.",
          },
          {
            id: "q3",
            question: "Which property reads what a user typed into an input?",
            options: ["textContent", "value", "innerHTML", "getAttribute"],
            answer: 1,
            explanation: "Inputs use .value for their current text.",
          },
          {
            id: "q4",
            question: "How do you select an element with id 'title'?",
            options: ["querySelector('#title')", "querySelector('title')", "querySelector('.title')", "querySelector(title)"],
            answer: 0,
            explanation: "IDs use # in CSS selectors.",
          },
        ],
      },
    },
    {
      slug: "changing-elements-and-the-dom",
      title: "Changing Elements & the DOM",
      durationMin: 12,
      difficulty: "Medium",
      objectives: [
        "Update text, HTML, and attributes",
        "Add and remove classes",
        "Create new elements and append them",
      ],
      content: [
        {
          kind: "paragraph",
          text: "Now that you can find elements, the fun part begins: **changing** them. JavaScript can update text, change attributes, add classes, remove classes, and even create brand-new elements from scratch. This is how pages become interactive.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Changing text",
        },
        {
          kind: "paragraph",
          text: "Use `.textContent = 'new text'` to replace the text inside an element. This is the safest way to change what a user sees.",
        },
        {
          kind: "code",
          title: "Update text",
          summary: "textContent replaces the element's text.",
          code: 'const heading = document.querySelector("h1");\nheading.textContent = "Hello, world!";',
          output: "",
          lines: [
            "Find the heading",
            "Change its text",
          ],
        },
        {
          kind: "heading",
          level: 2,
          text: "Changing HTML",
        },
        {
          kind: "paragraph",
          text: "If you need to add actual HTML inside an element, use `.innerHTML`. This is powerful but risky with user input, so use it carefully.",
        },
        {
          kind: "code",
          title: "Update HTML",
          summary: "innerHTML can add tags, but use it carefully.",
          code: 'const box = document.querySelector(".box");\nbox.innerHTML = "<strong>Bold text</strong>";',
          output: "",
          lines: [
            "Find the box",
            "Replace its HTML with bold text",
          ],
        },
        {
          kind: "callout",
          variant: "warning",
          title: "textContent vs innerHTML",
          text: "Use `.textContent` for plain text. Use `.innerHTML` only when you truly need to insert HTML. Never put raw user input into innerHTML — it can create security problems.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Changing attributes",
        },
        {
          kind: "paragraph",
          text: "You can update attributes with `.setAttribute('name', 'value')`. This is how you change things like `src`, `href`, `alt`, or `class`.",
        },
        {
          kind: "code",
          title: "Change an image source",
          summary: "setAttribute updates an attribute.",
          code: 'const img = document.querySelector("img");\nimg.setAttribute("src", "new-image.jpg");',
          output: "",
          lines: [
            "Find the image",
            "Change its src attribute",
          ],
        },
        {
          kind: "heading",
          level: 2,
          text: "Adding and removing classes",
        },
        {
          kind: "paragraph",
          text: "Classes are how you style elements. The `classList` property lets you add, remove, or toggle classes easily.",
        },
        {
          kind: "code",
          title: "Toggle a class",
          summary: "classList lets you manage classes without rewriting them.",
          code: 'const card = document.querySelector(".card");\ncard.classList.add("active");\ncard.classList.remove("inactive");\ncard.classList.toggle("highlight");',
          output: "",
          lines: [
            "Find the card",
            "Add a class",
            "Remove a class",
            "Toggle a class on/off",
          ],
        },
        {
          kind: "callout",
          variant: "info",
          title: "Why classList is nice",
          text: "classList lets you change styling without touching the full class string. No more manually rewriting class names or worrying about spaces.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Creating new elements",
        },
        {
          kind: "paragraph",
          text: "You can create brand-new elements with `document.createElement('tag')`. Then you can set their text, classes, and attributes, and finally add them to the page with `appendChild`.",
        },
        {
          kind: "code",
          title: "Create and add a paragraph",
          summary: "Create an element, fill it, then append it.",
          code: 'const paragraph = document.createElement("p");\nparagraph.textContent = "I was created by JavaScript!";\nparagraph.classList.add("note");\n\ndocument.body.appendChild(paragraph);',
          output: "",
          lines: [
            "Create a new p element",
            "Set its text",
            "Add a class",
            "Append it to the body",
          ],
        },
        {
          kind: "heading",
          level: 2,
          text: "Appending to a specific parent",
        },
        {
          kind: "paragraph",
          text: "Instead of always adding to the body, you can append to any element you selected. This is how you build lists, cards, and dynamic sections.",
        },
        {
          kind: "code",
          title: "Add to a specific container",
          summary: "Choose where the new element should go.",
          code: 'const list = document.querySelector("ul");\nconst item = document.createElement("li");\nitem.textContent = "New item";\nlist.appendChild(item);',
          output: "",
          lines: [
            "Find the list",
            "Create a new li",
            "Set its text",
            "Append it to the list",
          ],
        },
        {
          kind: "diagram",
          caption: "Creating an element and attaching it to the DOM.",
          mermaid: `flowchart LR
  New["document.createElement('li')"] --> Fill["Set text and classes"]
  Fill --> Append["appendChild()"]
  Append --> DOM["Appears on page"]`,
        },
        {
          kind: "playground",
          title: "Make a dynamic card",
          initialCode:
            'const card = document.createElement("div");\ncard.textContent = "Hello from JS";\ncard.classList.add("card");\ndocument.body.appendChild(card);',
          hint: "Try adding more elements inside the card.",
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Forgetting to append a created element.",
              right: "Create it, configure it, then append it.",
              why: "An element you create exists in memory but won't show on the page until you append it to the DOM.",
            },
            {
              wrong: "Using innerHTML with user input.",
              right: "Use textContent for user input.",
              why: "innerHTML can execute code if fed unsafe input. textContent is safe for plain text.",
            },
            {
              wrong: "Changing class by rewriting the whole class string.",
              right: "Use classList.add/remove/toggle.",
              why: "classList is safer and cleaner than manually editing class strings.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "textContent changes plain text.",
            "innerHTML changes actual HTML — use carefully.",
            "setAttribute updates attributes like src or href.",
            "classList.add/remove/toggle manage CSS classes.",
            "createElement + appendChild adds new nodes to the page.",
          ],
        },
      ],
      challenge: {
        title: "Build a live card",
        prompt:
          "Create a div element, set its textContent to 'Made by JavaScript', add a class called 'card', and append it to the body.",
        starterCode:
          'const card = document.createElement("div");\ncard.textContent = "Made by JavaScript";\ncard.classList.add("card");\ndocument.body.appendChild(card);',
        expectedOutput: "",
        hint: "Create the element, set text, add class, then append it.",
      },
      quiz: {
        id: "quiz-dom-changing",
        title: "Quick check: DOM changes",
        questions: [
          {
            id: "q1",
            question: "Which property should you use to change plain text?",
            options: ["innerHTML", "textContent", "value", "setAttribute"],
            answer: 1,
            explanation: "textContent is the safe choice for plain text.",
          },
          {
            id: "q2",
            question: "Which method adds a class to an element?",
            options: ["classList.add()", "setAttribute('class')", "textContent.add()", "innerHTML.add()"],
            answer: 0,
            explanation: "classList.add('class-name') adds a class.",
          },
          {
            id: "q3",
            question: "Which method creates a new element node?",
            options: ["document.createElement()", "document.querySelector()", "document.appendChild()", "document.newElement()"],
            answer: 0,
            explanation: "createElement creates a new DOM node.",
          },
          {
            id: "q4",
            question: "Which method attaches a new element to the page?",
            options: ["append()", "appendChild()", "attach()", "insert()"],
            answer: 1,
            explanation: "appendChild adds the node to a parent element.",
          },
        ],
      },
    },
  ],
};

