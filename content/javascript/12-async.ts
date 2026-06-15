import type { Module } from "@/types";

export const asyncModule: Module = {
  slug: "async-javascript",
  order: 12,
  title: "Async JavaScript",
  tagline: "Wait for things without freezing.",
  description:
    "Promises and async/await — handle slow tasks like fetching data without blocking your page.",
  icon: "Clock",
  accent: "text-blue-500",
  lessons: [
    {
      slug: "callbacks-promises-and-async-await",
      title: "Callbacks, Promises & Async/Await",
      durationMin: 13,
      difficulty: "Medium",
      objectives: [
        "Understand asynchronous code",
        "Use callbacks and promises",
        "Write async functions with await",
      ],
      content: [
        {
          kind: "paragraph",
          text: "Some tasks take time: loading data, waiting for a timer, or reading a file. JavaScript calls these **asynchronous** tasks — things that happen later. The key is to keep the page responsive while you wait.",
        },
        {
          kind: "analogy",
          title: "Ordering food at a restaurant",
          analogy:
            "When you order food, you don't stand frozen at the counter until it's ready. You give your order, wait, and then the food arrives. Asynchronous code works the same way: you start a task, keep doing other things, and handle the result when it's ready.",
          takeaway: "Async code lets you wait without freezing.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Callbacks",
        },
        {
          kind: "paragraph",
          text: "A **callback** is a function you pass into another function to run later. It's the oldest way to handle async work.",
        },
        {
          kind: "code",
          title: "A simple callback",
          summary: "setTimeout runs the callback after a delay.",
          code: 'setTimeout(function() {\n  console.log("Done waiting!");\n}, 1000);',
          lines: [
            "Wait 1000 milliseconds (1 second)",
            "Then run this function",
          ],
        },
        {
          kind: "callout",
          variant: "info",
          title: "Why callbacks can get messy",
          text: "Callbacks work, but when you chain many async steps, code can become deeply nested. This is sometimes called 'callback hell.' Promises were created to make this cleaner.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Promises",
        },
        {
          kind: "paragraph",
          text: "A **Promise** is JavaScript's way of saying 'I might not have the answer yet, but I promise to give you one eventually.' A promise can either **resolve** with a value or **reject** with an error.",
        },
        {
          kind: "code",
          title: "A promise that resolves",
          summary: "then runs when the promise succeeds.",
          code: 'const promise = new Promise(function(resolve) {\n  resolve("Success!");\n});\n\npromise.then(function(message) {\n  console.log(message);\n});',
          lines: [
            "Create a promise",
            "Resolve it with a value",
            "",
            "Run when the promise succeeds",
          ],
          output: "Success!",
        },
        {
          kind: "code",
          title: "A promise that rejects",
          summary: "catch runs when the promise fails.",
          code: 'const promise = new Promise(function(resolve, reject) {\n  reject("Something went wrong");\n});\n\npromise.then(function(message) {\n  console.log(message);\n}).catch(function(error) {\n  console.log(error);\n});',
          lines: [
            "Create a promise",
            "Reject it with an error",
            "",
            "This won't run because the promise rejected",
            "Handle the error here",
          ],
          output: "Something went wrong",
        },
        {
          kind: "heading",
          level: 2,
          text: "async / await",
        },
        {
          kind: "paragraph",
          text: "`async` and `await` are the modern way to write promise-based code. They make async code look almost like normal, step-by-step code.",
        },
        {
          kind: "code",
          title: "Await a promise",
          summary: "await pauses only inside an async function.",
          code: 'async function waitOneSecond() {\n  await new Promise(function(resolve) {\n    setTimeout(resolve, 1000);\n  });\n  console.log("Done waiting!");\n}\n\nwaitOneSecond();',
          lines: [
            "Mark this function as async",
            "Wait for this promise to finish",
            "Pause here until the promise resolves",
            "Run after the wait",
          ],
        },
        {
          kind: "callout",
          variant: "tip",
          title: "await only works inside async",
          text: "You can only use `await` inside a function marked `async`. Outside of that, use `.then()` or another async wrapper.",
        },
        {
          kind: "playground",
          title: "Delay a message",
          initialCode:
            'async function showMessage() {\n  await new Promise(function(resolve) {\n    setTimeout(resolve, 1000);\n  });\n  console.log("Hello after 1 second!");\n}\n\nshowMessage();',
          hint: "Change the delay and see how long it waits.",
        },
        {
          kind: "diagram",
          caption: "Async code starts a task and continues later.",
          mermaid: `flowchart LR
  Start["Start task"] --> Wait["Wait"]
  Wait --> Result["Result arrives"]
  Result --> Done["Continue"]`,
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Forgetting that async code runs later.",
              right: "Expect results to arrive after the current line finishes.",
              why: "Async work doesn't block the rest of your code. You need a callback, promise, or await to handle the result when it's ready.",
            },
            {
              wrong: "Using await outside an async function.",
              right: "Put await inside an async function.",
              why: "await only works inside functions marked async. Outside, JavaScript doesn't know what to pause.",
            },
            {
              wrong: "Not handling rejected promises.",
              right: "Always use catch or try/catch.",
              why: "If a promise rejects and you don't handle it, the error can be silent or break your app.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "Async code handles tasks that finish later.",
            "Callbacks are functions passed in to run later.",
            "Promises represent a future success or failure.",
            "async/await makes promise code easier to read.",
            "await only works inside async functions.",
          ],
        },
      ],
      challenge: {
        title: "Wait and print",
        prompt:
          "Write an async function that waits 2 seconds, then prints 'Ready!'. Use setTimeout wrapped in a Promise and await.",
        starterCode:
          'async function waitAndPrint() {\n  await new Promise(function(resolve) {\n    setTimeout(resolve, 2000);\n  });\n  console.log("Ready!");\n}\n\nwaitAndPrint();',
        expectedOutput: "Ready!",
        hint: "Use setTimeout inside a Promise, then await it inside an async function.",
      },
      quiz: {
        id: "quiz-async-basics",
        title: "Quick check: Async basics",
        questions: [
          {
            id: "q1",
            question: "What does async code do?",
            options: [
              "Runs instantly and blocks everything",
              "Handles tasks that finish later",
              "Only works in browsers",
              "Deletes old code",
            ],
            answer: 1,
            explanation: "Async code handles tasks that don't finish immediately.",
          },
          {
            id: "q2",
            question: "What is a promise?",
            options: [
              "A guarantee of success",
              "A future value or error",
              "A type of callback",
              "A browser-only feature",
            ],
            answer: 1,
            explanation: "A promise represents a value that may arrive later, or an error if it fails.",
          },
          {
            id: "q3",
            question: "Which keyword pauses inside an async function?",
            options: ["await", "wait", "pause", "delay"],
            answer: 0,
            explanation: "await pauses until a promise settles.",
          },
          {
            id: "q4",
            question: "Where can you use await?",
            options: [
              "Anywhere",
              "Only inside async functions",
              "Only in the browser console",
              "Only after a for loop",
            ],
            answer: 1,
            explanation: "await only works inside async functions.",
          },
        ],
      },
    },
    {
      slug: "fetching-data-and-error-handling",
      title: "Fetching Data & Error Handling",
      durationMin: 12,
      difficulty: "Medium",
      objectives: [
        "Use fetch to get data from an API",
        "Handle loading and error states",
        "Use try/catch with async code",
      ],
      content: [
        {
          kind: "paragraph",
          text: "A lot of real apps need data from somewhere else: a server, a database, or an API. The `fetch` function lets you request that data from JavaScript. Since fetch is asynchronous, you'll almost always pair it with `await`.",
        },
        {
          kind: "analogy",
          title: "Ordering from a restaurant again",
          analogy:
            "fetch is like placing an order at a restaurant. You ask for something, wait for it to be prepared, then either get your meal or get told something went wrong.",
          takeaway: "fetch starts a request; await waits for the answer.",
        },
        {
          kind: "heading",
          level: 2,
          text: "fetch",
        },
        {
          kind: "paragraph",
          text: "`fetch(url)` asks the browser to go get data from a URL. It returns a promise that resolves when the response arrives.",
        },
        {
          kind: "code",
          title: "Fetch JSON data",
          summary: "fetch + await + json is the standard pattern.",
          code: 'async function getData() {\n  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");\n  const data = await response.json();\n  console.log(data);\n}\ngetData();',
          output: "",
          lines: [
            "Ask for the URL",
            "Wait for the response",
            "Turn the response into JSON",
            "Log the data",
          ],
        },
        {
          kind: "callout",
          variant: "warning",
          title: "fetch doesn't reject on HTTP errors",
          text: "If the server returns 404 or 500, fetch still resolves. You need to check `response.ok` yourself and throw an error if needed.",
        },
        {
          kind: "heading",
          level: 2,
          text: "try / catch",
        },
        {
          kind: "paragraph",
          text: "Use `try/catch` to handle errors safely. The code inside try runs normally. If something fails, catch receives the error and you can respond gracefully.",
        },
        {
          kind: "code",
          title: "Handle fetch errors",
          summary: "try/catch keeps your app from breaking.",
          code: 'async function getData() {\n  try {\n    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");\n    if (!response.ok) {\n      throw new Error("Request failed");\n    }\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.log("Error:", error);\n  }\n}\ngetData();',
          output: "",
          lines: [
            "Try this block",
            "Ask for the URL",
            "Wait for response",
            "Check for HTTP errors",
            "Convert to JSON",
            "Log the data",
            "If anything fails, run this",
          ],
        },
        {
          kind: "heading",
          level: 2,
          text: "Loading states",
        },
        {
          kind: "paragraph",
          text: "When data takes time to arrive, your page should show a loading message. That tells users something is happening instead of leaving them staring at a blank screen.",
        },
        {
          kind: "code",
          title: "Show loading while waiting",
          summary: "Update the UI before and after the fetch.",
          code: 'async function loadData() {\n  const status = document.querySelector(".status");\n  const output = document.querySelector(".output");\n\n  status.textContent = "Loading...";\n  try {\n    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");\n    if (!response.ok) {\n      throw new Error("Request failed");\n    }\n    const data = await response.json();\n    output.textContent = data.title;\n    status.textContent = "Loaded!";\n  } catch (error) {\n    status.textContent = "Something went wrong";\n  }\n}\n\nloadData();',
          output: "",
          lines: [
            "Find the status area",
            "Find the output area",
            "",
            "Show loading",
            "Try the request",
            "Fetch the data",
            "Wait for response",
            "Check for HTTP errors",
            "Convert to JSON",
            "Show the title",
            "Mark as loaded",
            "Handle errors",
            "Show error message",
          ],
        },
        {
          kind: "diagram",
          caption: "A typical async flow: loading → request → success or error.",
          mermaid: `flowchart LR
  Start["Start"] --> Loading["Show loading"]
  Loading --> Request["fetch()"]
  Request --> Check{"response.ok?"}
  Check -->|Yes| Success["Display data"]
  Check -->|No| Fail["Catch error"]
  Fail --> Done["Show message"]
  Success --> Done`,
        },
        {
          kind: "playground",
          title: "Fetch and display",
          initialCode:
            'async function loadData() {\n  const output = document.querySelector(".output");\n  output.textContent = "Loading...";\n  try {\n    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");\n    const data = await response.json();\n    output.textContent = data.title;\n  } catch (error) {\n    output.textContent = "Error loading data";\n  }\n}\n\nloadData();',
          hint: "Change the URL to another JSON endpoint.",
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Forgetting await before fetch.",
              right: "Use await fetch(...) to wait for the response.",
              why: "Without await, you get a promise object, not the actual data.",
            },
            {
              wrong: "Not checking response.ok.",
              right: "Always check response.ok before reading JSON.",
              why: "fetch doesn't reject on 404 or 500 by itself. You need to check it manually.",
            },
            {
              wrong: "Showing no loading state.",
              right: "Show loading while waiting.",
              why: "Users need feedback that something is happening. A blank screen feels broken.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "fetch gets data from a URL.",
            "await pauses until the response arrives.",
            "response.json() turns the response into usable data.",
            "try/catch handles errors safely.",
            "Loading states keep users informed.",
          ],
        },
      ],
      challenge: {
        title: "Build a data loader",
        prompt:
          "Create an async function that fetches a post from jsonplaceholder, shows 'Loading...' while it waits, then displays the post title in a paragraph. If it fails, show an error message.",
        starterCode:
          'async function loadData() {\n  const output = document.querySelector(".output");\n  output.textContent = "Loading...";\n  try {\n    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");\n    if (!response.ok) {\n      throw new Error("Request failed");\n    }\n    const data = await response.json();\n    output.textContent = data.title;\n  } catch (error) {\n    output.textContent = "Error loading data";\n  }\n}\n\nloadData();',
        expectedOutput: "",
        hint: "Use fetch, await, response.json(), and try/catch.",
      },
      quiz: {
        id: "quiz-fetch-errors",
        title: "Quick check: Fetching data & errors",
        questions: [
          {
            id: "q1",
            question: "What does fetch() return?",
            options: ["A string", "A promise", "A number", "A boolean"],
            answer: 1,
            explanation: "fetch returns a promise that resolves to a response.",
          },
          {
            id: "q2",
            question: "Which method converts a response to JSON?",
            options: ["response.text()", "response.json()", "response.data()", "response.object()"],
            answer: 1,
            explanation: "response.json() parses the response body as JSON.",
          },
          {
            id: "q3",
            question: "What does try/catch do?",
            options: [
              "Runs code and catches errors",
              "Deletes errors",
              "Restarts the page",
              "Blocks the browser",
            ],
            answer: 0,
            explanation: "try runs code; catch handles any errors that happen.",
          },
          {
            id: "q4",
            question: "Why check response.ok?",
            options: [
              "Because fetch doesn't reject on HTTP errors like 404",
              "Because fetch only works for text",
              "Because JSON needs it",
              "Because await needs it",
            ],
            answer: 0,
            explanation: "fetch doesn't automatically reject on HTTP errors, so you need to check response.ok yourself.",
          },
        ],
      },
    },
  ],
};

