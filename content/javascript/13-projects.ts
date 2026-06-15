import type { Module } from "@/types";

export const projectsModule: Module = {
  slug: "mini-projects",
  order: 13,
  title: "Mini Projects",
  tagline: "Put it all together with real builds.",
  description:
    "Build a calculator, a to-do app, and more using everything you've learned.",
  icon: "Rocket",
  accent: "text-yellow-500",
  lessons: [
    {
      slug: "project-thinking-and-planning",
      title: "Project Thinking & Planning",
      durationMin: 9,
      difficulty: "Beginner",
      objectives: [
        "Break a project into small steps",
        "Choose the right tools for each step",
        "Plan before coding",
      ],
      content: [
        {
          kind: "paragraph",
          text: "A real project is just a bunch of small ideas glued together. The secret is to **break it down** before you write any code. If you can name the steps, you can build the app.",
        },
        {
          kind: "analogy",
          title: "Building with LEGO",
          analogy:
            "You don't build a LEGO castle by throwing all the bricks at once. You follow a plan: base, walls, tower, roof. Coding is the same. Break the project into pieces, then build one piece at a time.",
          takeaway: "Big projects become easy when you split them into small steps.",
        },
        {
          kind: "heading",
          level: 2,
          text: "The planning checklist",
        },
        {
          kind: "table",
          headers: ["Step", "Question to ask"],
          rows: [
            ["1. Goal", "What should this app do?"],
            ["2. Data", "What information do I need to store?"],
            ["3. UI", "What should the user see?"],
            ["4. Actions", "What can the user click or type?"],
            ["5. Polish", "What makes it feel finished?"],
          ],
        },
        {
          kind: "code",
          title: "Example: a to-do app",
          summary: "A simple project plan before coding.",
          code: "Goal: Let users add and check off tasks\nData: an array of task objects\nUI: input, add button, list of tasks\nActions: add, toggle, delete\nPolish: empty message, clear completed button",
          lines: [
            "What the app does",
            "What data it stores",
            "What the user sees",
            "What the user can do",
            "Extra nice touches",
          ],
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Start tiny",
          text: "Your first version should do only one thing well. A tiny working app is better than a huge broken one. Add features one at a time.",
        },
        {
          kind: "diagram",
          caption: "A simple project flow from idea to working app.",
          mermaid: `flowchart LR
  Idea["Idea"] --> Plan["Plan"]
  Plan --> Build["Build one feature"]
  Build --> Test["Test it"]
  Test --> Polish["Polish"]
  Polish --> Done["Finished"]`,
        },
        {
          kind: "playground",
          title: "Plan your own mini app",
          initialCode:
            "Goal: Build a simple counter\nData: a number called count\nUI: a display and a button\nActions: increment and reset\nPolish: show a message at 10",
          hint: "Use this template to plan your own app before coding.",
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Starting with the hardest feature first.",
              right: "Build the smallest useful version first.",
              why: "A tiny working app teaches you what to build next. Starting with the hardest part often leads to frustration.",
            },
            {
              wrong: "Skipping the plan.",
              right: "Write a quick plan first.",
              why: "Without a plan, you can get lost in the middle. A short checklist keeps you focused.",
            },
            {
              wrong: "Trying to make it perfect before it works.",
              right: "Make it work, then make it better.",
              why: "Working code is the foundation. Polish comes after the basics are solid.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "Break projects into small steps.",
            "Plan the goal, data, UI, actions, and polish.",
            "Start with the smallest useful version.",
            "Build one feature at a time.",
            "Polish comes after it works.",
          ],
        },
      ],
      challenge: {
        title: "Plan a mini app",
        prompt:
          "Write a quick plan for a tiny app you want to build. Include the goal, data, UI, actions, and one polish feature.",
        starterCode:
          "Goal: Build a simple counter\nData: a number called count\nUI: a display and a button\nActions: increment and reset\nPolish: show a message at 10",
        expectedOutput: "",
        hint: "Use the checklist from the lesson.",
      },
      quiz: {
        id: "quiz-project-planning",
        title: "Quick check: Project planning",
        questions: [
          {
            id: "q1",
            question: "What's the first step in planning a project?",
            options: ["Write all the code", "Define the goal", "Add animations", "Pick a color scheme"],
            answer: 1,
            explanation: "Start by clearly defining what the app should do.",
          },
          {
            id: "q2",
            question: "Why start with a tiny version?",
            options: [
              "Because tiny apps are always perfect",
              "Because it's easier to build and test",
              "Because you don't need to plan",
              "Because big features are always bad",
            ],
            answer: 1,
            explanation: "A tiny working version is easier to build, test, and improve.",
          },
          {
            id: "q3",
            question: "Which comes first: polish or working code?",
            options: ["Polish", "Working code", "Both at the same time", "Neither"],
            answer: 1,
            explanation: "Make it work first, then polish it.",
          },
        ],
      },
    },
    {
      slug: "build-a-to-do-app",
      title: "Build a To-Do App",
      durationMin: 14,
      difficulty: "Medium",
      objectives: [
        "Build a real interactive app",
        "Use arrays, objects, DOM, and events",
        "Practice adding, toggling, and deleting items",
      ],
      content: [
        {
          kind: "paragraph",
          text: "A to-do app is the perfect first real project because it uses almost everything you've learned: arrays to store tasks, objects to describe each task, DOM methods to update the page, and events to react to clicks and typing.",
        },
        {
          kind: "analogy",
          title: "A checklist",
          analogy:
            "A to-do app is just a checklist that remembers what you wrote. You add items, check them off, and remove them when they're done. That's it. Once you see it that way, the code becomes much less scary.",
          takeaway: "A to-do app is just a checklist with memory.",
        },
        {
          kind: "heading",
          level: 2,
          text: "The data model",
        },
        {
          kind: "paragraph",
          text: "Each task should be an object with a few pieces of information: the task text and whether it's done. We store all tasks in an array.",
        },
        {
          kind: "code",
          title: "A task object",
          summary: "Each task has text and a done flag.",
          code: "let tasks = [\n  { text: 'Buy milk', done: false },\n  { text: 'Practice JS', done: true }\n];",
          lines: [
            "Array of tasks",
            "Each task is an object",
            "text stores the task",
            "done tracks completion",
          ],
        },
        {
          kind: "heading",
          level: 2,
          text: "The render function",
        },
        {
          kind: "paragraph",
          text: "A **render function** rebuilds the visible list from your data. This is the cleanest pattern: your data is the source of truth, and the UI is generated from it.",
        },
        {
          kind: "code",
          title: "Render tasks to the page",
          summary: "Clear the list and rebuild it from the array.",
          code: "function renderTasks() {\n  const list = document.querySelector('.tasks');\n  list.innerHTML = '';\n\n  for (let task of tasks) {\n    const item = document.createElement('li');\n    item.textContent = task.text;\n    if (task.done) {\n      item.classList.add('done');\n    }\n    list.appendChild(item);\n  }\n}",
          output: "",
          lines: [
            "Find the list container",
            "Clear old items",
            "",
            "Loop through each task",
            "Create a new li",
            "Set the task text",
            "Mark done tasks",
            "Append to the list",
          ],
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Why render first?",
          text: "If you keep your UI in sync with your data, you can change the data and the page updates automatically. That's the pattern real apps use.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Add a task",
        },
        {
          kind: "paragraph",
          text: "When the user submits the form, read the input, create a task object, push it to the array, then render again.",
        },
        {
          kind: "code",
          title: "Add a task on submit",
          summary: "Read the input, add the task, clear the field, render.",
          code: "const form = document.querySelector('form');\nconst input = document.querySelector('input');\nconst tasks = [];\n\nform.addEventListener('submit', function(event) {\n  event.preventDefault();\n  const text = input.value.trim();\n  if (text === '') return;\n\n  tasks.push({ text: text, done: false });\n  input.value = '';\n  renderTasks();\n});",
          output: "",
          lines: [
            "Find the form",
            "Find the input",
            "Empty array of tasks",
            "",
            "Stop the page reload",
            "Read and clean the text",
            "Ignore empty tasks",
            "",
            "Add a new task object",
            "Clear the input",
            "Rebuild the list",
          ],
        },
        {
          kind: "heading",
          level: 2,
          text: "Toggle a task",
        },
        {
          kind: "paragraph",
          text: "To mark a task done or not done, find it by index and flip its `done` value. Then render again.",
        },
        {
          kind: "code",
          title: "Toggle done state",
          summary: "Flip the done flag on click.",
          code: "function toggleTask(index) {\n  tasks[index].done = !tasks[index].done;\n  renderTasks();\n}",
          lines: [
            "Find the task by index",
            "Flip true ↔ false",
            "Rebuild the list",
          ],
        },
        {
          kind: "heading",
          level: 2,
          text: "Delete a task",
        },
        {
          kind: "paragraph",
          text: "To remove a task, use `splice(index, 1)` to delete it from the array, then render again.",
        },
        {
          kind: "code",
          title: "Remove a task",
          summary: "splice removes one item at an index.",
          code: "function deleteTask(index) {\n  tasks.splice(index, 1);\n  renderTasks();\n}",
          lines: [
            "Remove one item at index",
            "Rebuild the list",
          ],
        },
        {
          kind: "diagram",
          caption: "The to-do app data flow.",
          mermaid: `flowchart LR
  Input["User types"] --> Add["Add task object"]
  Add --> Data["tasks array"]
  Data --> Render["renderTasks()"]
  Render --> UI["Visible list"]
  UI --> Toggle["Toggle / delete"]
  Toggle --> Data`,
        },
        {
          kind: "playground",
          title: "Build the full app",
          initialCode:
            "const form = document.querySelector('form');\nconst input = document.querySelector('input');\nconst list = document.querySelector('.tasks');\nconst tasks = [];\n\nfunction renderTasks() {\n  list.innerHTML = '';\n  for (let task of tasks) {\n    const item = document.createElement('li');\n    item.textContent = task.text;\n    if (task.done) item.classList.add('done');\n    list.appendChild(item);\n  }\n}\n\nform.addEventListener('submit', function(event) {\n  event.preventDefault();\n  const text = input.value.trim();\n  if (text === '') return;\n  tasks.push({ text: text, done: false });\n  input.value = '';\n  renderTasks();\n});",
          hint: "Add toggle and delete buttons to each task after this basic version works.",
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Forgetting to render after changing data.",
              right: "Always call renderTasks() after data changes.",
              why: "The array may change, but the page won't update unless you rebuild the UI.",
            },
            {
              wrong: "Adding empty tasks.",
              right: "Check that the input text isn't empty.",
              why: "Empty tasks clutter the app. A quick trim + empty check keeps it clean.",
            },
            {
              wrong: "Trying to edit the DOM directly instead of the data.",
              right: "Change the data, then render.",
              why: "If you only change the HTML, your data and UI can drift apart. Keep the data as the source of truth.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "A to-do app uses an array of task objects.",
            "renderTasks() rebuilds the UI from data.",
            "Add tasks with push, toggle with a boolean flip, delete with splice.",
            "Always update the data first, then render.",
            "A tiny working version comes before polish.",
          ],
        },
      ],
      challenge: {
        title: "Build a complete to-do app",
        prompt:
          "Create a to-do app with an input, form, and list. Add tasks, toggle them done, and delete them. Use renderTasks() after every change.",
        starterCode:
          "const form = document.querySelector('form');\nconst input = document.querySelector('input');\nconst list = document.querySelector('.tasks');\nconst tasks = [];\n\nfunction renderTasks() {\n  list.innerHTML = '';\n  for (let task of tasks) {\n    const item = document.createElement('li');\n    item.textContent = task.text;\n    if (task.done) item.classList.add('done');\n    list.appendChild(item);\n  }\n}\n\nform.addEventListener('submit', function(event) {\n  event.preventDefault();\n  const text = input.value.trim();\n  if (text === '') return;\n  tasks.push({ text: text, done: false });\n  input.value = '';\n  renderTasks();\n});",
        expectedOutput: "",
        hint: "After add, add toggle and delete buttons to each task, then render again.",
      },
      quiz: {
        id: "quiz-todo-project",
        title: "Quick check: To-do project",
        questions: [
          {
            id: "q1",
            question: "What data structure is best for storing many tasks?",
            options: ["A single string", "An array", "A boolean", "A number"],
            answer: 1,
            explanation: "An array is the natural fit for a list of tasks.",
          },
          {
            id: "q2",
            question: "What does renderTasks() do?",
            options: [
              "Deletes the data",
              "Rebuilds the visible list from the data",
              "Adds a new task",
              "Sorts the tasks",
            ],
            answer: 1,
            explanation: "renderTasks() takes the data and updates the UI.",
          },
          {
            id: "q3",
            question: "Which array method removes a task by index?",
            options: ["push", "splice", "map", "filter"],
            answer: 1,
            explanation: "splice removes items from an array.",
          },
          {
            id: "q4",
            question: "What should you do after changing the data?",
            options: [
              "Render again",
              "Do nothing",
              "Delete the page",
              "Stop the app",
            ],
            answer: 0,
            explanation: "After data changes, call renderTasks() so the UI stays in sync.",
          },
        ],
      },
    },
  ],
};

