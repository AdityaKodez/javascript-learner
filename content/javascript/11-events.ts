import type { Module } from "@/types";

export const eventsModule: Module = {
  slug: "events",
  order: 11,
  title: "Events",
  tagline: "Respond to clicks, typing, and more.",
  description:
    "Make your page react to what the user does — clicks, input, keyboard, and form submissions.",
  icon: "Bell",
  accent: "text-fuchsia-500",
  lessons: [
    {
      slug: "event-listeners-and-clicks",
      title: "Event Listeners & Clicks",
      durationMin: 11,
      difficulty: "Beginner",
      objectives: [
        "Attach a click listener",
        "Use addEventListener",
        "Understand event.target vs currentTarget",
      ],
      content: [
        {
          kind: "paragraph",
          text: "An **event** is something that happens on the page: a click, a key press, a form submit, or text being typed. JavaScript can **listen** for these events and run code when they happen. This is how a button becomes clickable, a form becomes useful, and a page feels alive.",
        },
        {
          kind: "analogy",
          title: "A doorbell",
          analogy:
            "Think of an event listener like a doorbell. You don't stand at the door waiting for someone to ring — you just listen for the bell, and when it rings, you react. In JavaScript, the button is the doorbell and your function is the reaction.",
          takeaway: "Events let your code react when the user does something.",
        },
        {
          kind: "heading",
          level: 2,
          text: "The click event",
        },
        {
          kind: "paragraph",
          text: "The simplest event to start with is `click`. You attach a function to a button, and that function runs every time the button is clicked.",
        },
        {
          kind: "code",
          title: "Make a button do something",
          summary: "Add a click listener to a button.",
          code: 'const button = document.querySelector("button");\n\nbutton.addEventListener("click", function() {\n  console.log("Button clicked!");\n});',
          output: "",
          lines: [
            "Find the button",
            "",
            "Listen for clicks",
            "Run this when clicked",
          ],
        },
        {
          kind: "callout",
          variant: "info",
          title: "Why addEventListener?",
          text: "You could write `button.onclick = ...`, but `addEventListener` is cleaner and more flexible. It lets you attach multiple listeners to the same element without overwriting each other.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Changing the page on click",
        },
        {
          kind: "paragraph",
          text: "Most real clicks don't just log messages — they change the page. You can update text, toggle classes, or show and hide elements right inside the listener.",
        },
        {
          kind: "code",
          title: "Click to change text",
          summary: "The click listener updates the heading.",
          code: 'const button = document.querySelector("button");\nconst heading = document.querySelector("h1");\n\nbutton.addEventListener("click", function() {\n  heading.textContent = "You clicked me!";\n});',
          output: "",
          lines: [
            "Find the button",
            "Find the heading",
            "",
            "On click, change the heading text",
          ],
        },
        {
          kind: "heading",
          level: 2,
          text: "event.target vs currentTarget",
        },
        {
          kind: "paragraph",
          text: "Inside an event listener, JavaScript gives you an **event object**. It has useful info about what happened. Two properties you'll see a lot: `event.target` is the element you actually clicked, and `event.currentTarget` is the element you attached the listener to.",
        },
        {
          kind: "code",
          title: "See the event object",
          summary: "target and currentTarget are often the same, but not always.",
          code: 'const button = document.querySelector("button");\n\nbutton.addEventListener("click", function(event) {\n  console.log(event.target);\n  console.log(event.currentTarget);\n});',
          output: "",
          lines: [
            "Find the button",
            "",
            "The clicked element",
            "The element with the listener",
          ],
        },
        {
          kind: "diagram",
          caption: "target is the actual clicked element; currentTarget is the listener owner.",
          mermaid: `flowchart LR
  Click["User clicks"] --> Target["event.target"]
  Click --> Listener["event.currentTarget"]`,
        },
        {
          kind: "playground",
          title: "Click counter",
          initialCode:
            'const button = document.querySelector("button");\nconst count = document.querySelector(".count");\nlet clicks = 0;\n\nbutton.addEventListener("click", function() {\n  clicks = clicks + 1;\n  count.textContent = clicks;\n});',
          hint: "Try changing the text or adding a class on click.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Toggling a class",
        },
        {
          kind: "paragraph",
          text: "A common pattern is to toggle a class on click — like opening and closing a menu, or switching a card between active and inactive.",
        },
        {
          kind: "code",
          title: "Toggle a class on click",
          summary: "classList.toggle flips a class on or off.",
          code: 'const button = document.querySelector("button");\nconst card = document.querySelector(".card");\n\nbutton.addEventListener("click", function() {\n  card.classList.toggle("active");\n});',
          output: "",
          lines: [
            "Find the button",
            "Find the card",
            "",
            "Flip the active class on/off",
          ],
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Why toggle is handy",
          text: "You don't need to know whether the class is already there. `toggle` handles both cases: if it's present, it removes it; if it's missing, it adds it.",
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Using onclick instead of addEventListener.",
              right: "Prefer addEventListener for new code.",
              why: "onclick works, but addEventListener is more flexible and easier to extend.",
            },
            {
              wrong: "Forgetting to select the element first.",
              right: "Find the element before attaching the listener.",
              why: "You can't listen to an element you haven't selected yet.",
            },
            {
              wrong: "Confusing target with currentTarget.",
              right: "target is what was clicked; currentTarget is what the listener is on.",
              why: "They're often the same on simple buttons, but different when you click a child inside a parent.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "Events are things that happen on the page.",
            "Use addEventListener to listen for clicks and other actions.",
            "The event object gives you details about what happened.",
            "event.target is the actual clicked element.",
            "event.currentTarget is the element with the listener.",
          ],
        },
      ],
      challenge: {
        title: "Build a click counter",
        prompt:
          "Create a button and a paragraph with class 'count'. Each time the button is clicked, increase a counter and update the paragraph text to show the number.",
        starterCode:
          'const button = document.querySelector("button");\nconst count = document.querySelector(".count");\nlet clicks = 0;\n\nbutton.addEventListener("click", function() {\n  clicks = clicks + 1;\n  count.textContent = clicks;\n});',
        expectedOutput: "",
        hint: "Use a variable to remember the count, then update textContent on each click.",
      },
      quiz: {
        id: "quiz-events-clicks",
        title: "Quick check: Events & clicks",
        questions: [
          {
            id: "q1",
            question: "Which method attaches a click listener?",
            options: ["addEventListener", "listen", "attach", "clickListener"],
            answer: 0,
            explanation: "addEventListener is the standard way to attach listeners.",
          },
          {
            id: "q2",
            question: "What does event.target mean?",
            options: [
              "The element with the listener",
              "The element that was actually clicked",
              "The whole page",
              "The current function",
            ],
            answer: 1,
            explanation: "target is the actual element that triggered the event.",
          },
          {
            id: "q3",
            question: "What does event.currentTarget mean?",
            options: [
              "The element with the listener",
              "The element that was clicked",
              "The event name",
              "The browser window",
            ],
            answer: 0,
            explanation: "currentTarget is the element the listener is attached to.",
          },
          {
            id: "q4",
            question: "Which classList method flips a class on and off?",
            options: ["add", "remove", "toggle", "switch"],
            answer: 2,
            explanation: "toggle adds the class if it's missing and removes it if it's present.",
          },
        ],
      },
    },
    {
      slug: "input-keyboard-and-forms",
      title: "Input, Keyboard & Forms",
      durationMin: 11,
      difficulty: "Medium",
      objectives: [
        "Listen for input and keydown events",
        "Use event.preventDefault()",
        "Read input values on submit",
      ],
      content: [
        {
          kind: "paragraph",
          text: "Clicks are just the beginning. Forms and text fields use other events: `input`, `change`, `keydown`, and `submit`. These let your code react as the user types, presses keys, or submits a form.",
        },
        {
          kind: "heading",
          level: 2,
          text: "The input event",
        },
        {
          kind: "paragraph",
          text: "The `input` event fires every time the user changes the value of a text field. It's perfect for live previews, search boxes, and validation as the user types.",
        },
        {
          kind: "code",
          title: "Live preview while typing",
          summary: "input runs after every keystroke.",
          code: 'const input = document.querySelector("input");\nconst preview = document.querySelector(".preview");\n\ninput.addEventListener("input", function(event) {\n  preview.textContent = event.target.value;\n});',
          output: "",
          lines: [
            "Find the input",
            "Find the preview area",
            "",
            "On each input change",
            "Read the current value",
          ],
        },
        {
          kind: "heading",
          level: 2,
          text: "Keyboard events",
        },
        {
          kind: "paragraph",
          text: "Keyboard events let you react to key presses. `keydown` fires when a key is pressed down, `keyup` when it's released, and `keypress` is older and less commonly used now.",
        },
        {
          kind: "code",
          title: "React to a key press",
          summary: "event.key tells you which key was pressed.",
          code: 'document.addEventListener("keydown", function(event) {\n  console.log(event.key);\n});',
          output: "",
          lines: [
            "Listen on the whole document",
            "When a key is pressed",
            "Log the key name",
          ],
        },
        {
          kind: "callout",
          variant: "info",
          title: "Common key values",
          text: "Keys like Enter, Escape, ArrowUp, and Space are easy to check with event.key. This is how you build shortcuts and special keyboard controls.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Form submit events",
        },
        {
          kind: "paragraph",
          text: "Forms have their own `submit` event. It fires when the user clicks submit or presses Enter. This is where you usually read the form's inputs and decide what to do next.",
        },
        {
          kind: "code",
          title: "Handle a form submission",
          summary: "Prevent the page reload, then read the input.",
          code: 'const form = document.querySelector("form");\nconst input = document.querySelector("input");\n\nform.addEventListener("submit", function(event) {\n  event.preventDefault();\n  console.log(input.value);\n});',
          output: "",
          lines: [
            "Find the form",
            "Find the input",
            "",
            "Stop the default page reload",
            "Read the input value",
          ],
        },
        {
          kind: "callout",
          variant: "warning",
          title: "Why preventDefault?",
          text: "By default, a form submit reloads the page. `event.preventDefault()` stops that so you can handle it yourself in JavaScript.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Reading multiple inputs",
        },
        {
          kind: "paragraph",
          text: "If a form has several inputs, you can read them one by one, or use the form itself and its `elements` collection.",
        },
        {
          kind: "code",
          title: "Read two inputs from a form",
          summary: "form.elements gives you access to all inputs.",
          code: 'const form = document.querySelector("form");\nconst nameInput = form.elements["name"];\nconst ageInput = form.elements["age"];\n\nform.addEventListener("submit", function(event) {\n  event.preventDefault();\n  console.log(nameInput.value);\n  console.log(ageInput.value);\n});',
          output: "",
          lines: [
            "Find the form",
            "Get the name input",
            "Get the age input",
            "",
            "Stop reload",
            "Read name",
            "Read age",
          ],
        },
        {
          kind: "playground",
          title: "Live search box",
          initialCode:
            'const input = document.querySelector("input");\nconst output = document.querySelector(".output");\n\ninput.addEventListener("input", function(event) {\n  output.textContent = event.target.value;\n});',
          hint: "Try typing into the input and watching the output update.",
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Forgetting preventDefault on form submit.",
              right: "Always call event.preventDefault() for custom form handling.",
              why: "Without it, the browser reloads the page and your JavaScript result disappears.",
            },
            {
              wrong: "Using click instead of submit on a form.",
              right: "Use submit for the form's actual submission.",
              why: "A form can be submitted by Enter, not just by clicking a button. submit catches all ways.",
            },
            {
              wrong: "Reading an input before the user types.",
              right: "Read the value inside the event handler.",
              why: "The value only matters when the event happens. Reading too early gives you the old value.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "input fires whenever text changes.",
            "keydown and keyup respond to keyboard activity.",
            "submit handles form submissions.",
            "event.preventDefault() stops the browser's default action.",
            "event.target.value reads the current input value.",
          ],
        },
      ],
      challenge: {
        title: "Build a live preview",
        prompt:
          "Create an input and a paragraph. As the user types, update the paragraph text to match the input value. Then add a form with a submit button and prevent the default reload.",
        starterCode:
          'const input = document.querySelector("input");\nconst output = document.querySelector(".output");\n\ninput.addEventListener("input", function(event) {\n  output.textContent = event.target.value;\n});',
        expectedOutput: "",
        hint: "Use input for live text and submit with preventDefault for the form.",
      },
      quiz: {
        id: "quiz-events-inputs",
        title: "Quick check: Input, keyboard & forms",
        questions: [
          {
            id: "q1",
            question: "Which event fires as the user types in an input?",
            options: ["click", "input", "submit", "load"],
            answer: 1,
            explanation: "input fires whenever the value changes.",
          },
          {
            id: "q2",
            question: "Which event fires when a form is submitted?",
            options: ["input", "submit", "change", "keydown"],
            answer: 1,
            explanation: "submit fires when the form is sent.",
          },
          {
            id: "q3",
            question: "What does event.preventDefault() do?",
            options: [
              "Stops the default browser action",
              "Deletes the form",
              "Focuses the input",
              "Adds a class",
            ],
            answer: 0,
            explanation: "preventDefault stops the browser from doing its usual thing, like reloading on form submit.",
          },
          {
            id: "q4",
            question: "Which property gives the current text in an input?",
            options: ["textContent", "value", "innerHTML", "key"],
            answer: 1,
            explanation: "Inputs store their current text in .value.",
          },
        ],
      },
    },
  ],
};

