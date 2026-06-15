import type { Module } from "@/types";

export const functionsModule: Module = {
  slug: "functions",
  order: 7,
  title: "Functions",
  tagline: "Package reusable blocks of code.",
  description:
    "Write once, run anywhere — learn to wrap code into named, reusable functions with inputs and outputs.",
  icon: "FunctionSquare",
  accent: "text-indigo-500",
  lessons: [
    {
      slug: "defining-functions",
      title: "Defining & Calling Functions",
      durationMin: 11,
      difficulty: "Beginner",
      achievement: "function-explorer",
      objectives: [
        "Define a function with function keyword",
        "Call a function to run its code",
        "Pass arguments into parameters",
      ],
      content: [
        {
          kind: "paragraph",
          text: "So far every line of code runs once, top to bottom. But real programs reuse the same logic constantly — greeting a user, calculating a total, checking a password. A **function** lets you wrap code into a named package, then run that package whenever you want, as many times as you want.",
        },
        {
          kind: "analogy",
          title: "A recipe in a cookbook",
          analogy:
            "Think of a function like a recipe titled 'Pancakes.' You write the steps ONCE in the cookbook (that's *defining* the function). Later, when you want pancakes, you don't rewrite the steps — you just say 'make the Pancakes recipe' (that's *calling* it). One recipe, used many times.",
          takeaway: "A function is a named, reusable recipe for code.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Defining a function",
        },
        {
          kind: "paragraph",
          text: "To create a function, use the `function` keyword, give it a name, add parentheses `()`, and put the code to run inside curly braces `{}`. Defining a function does NOT run it — it just teaches JavaScript the recipe.",
        },
        {
          kind: "code",
          title: "Define a greeting function",
          summary: "This creates the function but doesn't run it yet.",
          code: 'function sayHi() {\n  console.log("Hello there!");\n}',
          lines: [
            "The function keyword + a name",
            "Start of the code block",
            "The code that runs when called",
            "End of the block",
          ],
        },
        {
          kind: "callout",
          variant: "info",
          title: "Define vs. call — the key difference",
          text: "Defining a function (`function sayHi() {...}`) just stores the recipe. Nothing runs yet. To actually run it, you must **call** it by writing its name followed by parentheses: `sayHi()`. Beginners often forget to call!",
        },
        {
          kind: "heading",
          level: 2,
          text: "Calling a function",
        },
        {
          kind: "code",
          title: "Now run it three times",
          summary: "The parentheses () are what actually trigger the function.",
          code: 'function sayHi() {\n  console.log("Hello there!");\n}\n\nsayHi();  // runs the function\nsayHi();  // runs it again\nsayHi();  // and again',
          lines: [
            "Define once",
            "",
            "Call it — prints 'Hello there!'",
            "Call again — prints again",
            "Call a third time",
          ],
          output: "Hello there!\nHello there!\nHello there!",
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Don't forget the parentheses",
          text: "`sayHi` (no parens) just refers to the function itself — like pointing at the recipe. `sayHi()` (with parens) actually runs it. The parentheses mean 'do this now.'",
        },
        {
          kind: "playground",
          title: "Call your own function",
          initialCode:
            'function cheer() {\n  console.log("You got this!");\n}\n\ncheer();\ncheer();',
          hint: "Add more cheer() calls to run it more times.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Inputs: parameters and arguments",
        },
        {
          kind: "paragraph",
          text: "Functions get more powerful when they can take **inputs** — values you hand them when calling. You declare named slots called **parameters** in the parentheses. When you call the function, the actual values you pass are called **arguments**.",
        },
        {
          kind: "code",
          title: "A function that takes a name",
          summary: "name is a parameter; 'Ada' is the argument we pass in.",
          code: 'function greet(name) {\n  console.log("Hello, " + name + "!");\n}\n\ngreet("Ada");\ngreet("Sam");',
          lines: [
            "name is a parameter — a slot for input",
            "Use the parameter inside",
            "",
            "Call with 'Ada' as the argument",
            "Call with a different argument",
          ],
          output: "Hello, Ada!\nHello, Sam!",
        },
        {
          kind: "callout",
          variant: "info",
          title: "Parameter vs. argument — the terms",
          text: "A **parameter** is the named slot in the definition (`function greet(name)`). An **argument** is the actual value you pass when calling (`greet('Ada')`). People mix these up constantly — don't worry if you do too.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Multiple parameters",
        },
        {
          kind: "paragraph",
          text: "A function can take several inputs — just separate them with commas. The order matters: the first argument fills the first parameter, and so on.",
        },
        {
          kind: "code",
          title: "Two inputs",
          summary: "Arguments fill parameters in order: a → x, b → y.",
          code: 'function introduce(name, age) {\n  console.log("I\'m " + name + ", age " + age);\n}\n\nintroduce("Ada", 30);',
          lines: [
            "Two parameters, comma-separated",
            "Use both inside",
            "",
            "'Ada' → name, 30 → age",
          ],
          output: "I'm Ada, age 30",
        },
        {
          kind: "diagram",
          caption: "Arguments flow into parameters by position.",
          mermaid: `flowchart LR
  Call["introduce('Ada', 30)"] --> P1["name = 'Ada'"]
  Call --> P2["age = 30"]
  P1 --> Body["Body runs"]
  P2 --> Body`,
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Defining a function but never calling it.",
              right: "Add a call: name with parentheses.",
              why: "Defining only stores the recipe. Without `sayHi()` somewhere, the code inside never runs.",
            },
            {
              wrong: "Forgetting the parentheses when calling.",
              right: "Write sayHi() not sayHi.",
              why: "`sayHi` references the function; `sayHi()` actually runs it. Missing the () is a silent no-op.",
            },
            {
              wrong: "Passing arguments in the wrong order.",
              right: "Match the parameter order exactly.",
              why: "`introduce(30, 'Ada')` would print 'I'm 30, age Ada'. Order is positional, not by name.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "A function is a named, reusable block of code.",
            "`function name() { ... }` defines it; `name()` calls it.",
            "Parameters are input slots in the definition.",
            "Arguments are the actual values passed when calling.",
            "Always include parentheses () to actually run a function.",
          ],
        },
      ],
      challenge: {
        title: "Build a greeting machine",
        prompt:
          "Define a function called `greet` that takes one parameter `name` and prints 'Welcome, ' + name. Then call it with two different names.",
        starterCode:
          'function greet(name) {\n  console.log("Welcome, " + name);\n}\n\ngreet("Ada");\ngreet("Sam");',
        expectedOutput: "Welcome",
        hint: "Define the function with one parameter, then call it twice with different arguments.",
      },
      quiz: {
        id: "quiz-defining-functions",
        title: "Quick check: Defining & calling functions",
        questions: [
          {
            id: "q1",
            question: "What's the difference between `sayHi` and `sayHi()`?",
            options: [
              "Nothing, they're identical",
              "sayHi refers to the function; sayHi() runs it",
              "sayHi runs it; sayHi() doesn't",
              "sayHi is an error",
            ],
            answer: 1,
            explanation: "The parentheses () are what actually call (run) the function.",
          },
          {
            id: "q2",
            question: "In `function greet(name)`, what is `name`?",
            options: ["An argument", "A parameter", "A function call", "A variable outside"],
            answer: 1,
            explanation: "name is a parameter — the named input slot declared in the definition.",
          },
          {
            id: "q3",
            question: "How do you call a function named cheer that takes no inputs?",
            options: ["call cheer;", "cheer;", "cheer();", "function cheer();"],
            answer: 2,
            explanation: "Name followed by empty parentheses runs the function.",
          },
        ],
      },
    },
    {
      slug: "return-values-and-scope",
      title: "Return Values & Scope",
      durationMin: 11,
      difficulty: "Medium",
      objectives: [
        "Send a result back with return",
        "Capture and use a return value",
        "Understand variable scope (local vs global)",
      ],
      content: [
        {
          kind: "paragraph",
          text: "Functions can do more than just *do* something (like print). They can also **give back a result** using the `return` keyword. This turns a function into a question-answering machine: you hand it inputs, it hands you back an answer. We'll also learn about **scope** — which variables are visible where.",
        },
        {
          kind: "analogy",
          title: "A vending machine",
          analogy:
            "A function with `return` is like a vending machine. You put in money and a code (arguments). The machine does its work internally, then a snack pops out (the return value). You can then eat that snack — or pass it somewhere else.",
          takeaway: "return hands a value back to whoever called the function.",
        },
        {
          kind: "heading",
          level: 2,
          text: "The return keyword",
        },
        {
          kind: "paragraph",
          text: "`return` does two things at once: it sends a value back to the caller, AND it immediately stops the function (no code after it runs). Whatever you put after `return` is the function's answer.",
        },
        {
          kind: "code",
          title: "A function that gives an answer",
          summary: "return sends the result back; we capture it in a variable.",
          code: "function add(a, b) {\n  return a + b;\n}\n\nlet result = add(3, 4);\nconsole.log(result);",
          lines: [
            "Two parameters",
            "Give back the sum",
            "",
            "Call it; result becomes 7",
            "Print 7",
          ],
          output: "7",
        },
        {
          kind: "callout",
          variant: "info",
          title: "console.log vs return",
          text: "Beginners mix these up constantly. `console.log` *displays* a value on screen — it doesn't give anything back. `return` *hands a value back* to your code so you can store and use it. A function that only console.logs can't have its result used elsewhere.",
        },
        {
          kind: "code",
          title: "The difference in action",
          summary: "return lets you use the result; console.log just prints.",
          code: "function double(x) {\n  return x * 2;  // hands back a value\n}\n\nlet y = double(5);  // y is now 10\nconsole.log(y + 1);  // we can use y further",
          lines: [
            "Give back twice the input",
            "",
            "Capture the return value",
            "Use it in more math → 11",
          ],
          output: "11",
        },
        {
          kind: "heading",
          level: 2,
          text: "return stops the function",
        },
        {
          kind: "paragraph",
          text: "The moment `return` runs, the function exits — even if there's more code below. Think of it as 'mission accomplished, leaving now.'",
        },
        {
          kind: "code",
          title: "Code after return doesn't run",
          summary: "The last line is unreachable.",
          code: 'function greet() {\n  return "Hi";\n  console.log("This never runs");\n}\n\nconsole.log(greet());',
          lines: [
            "return sends 'Hi' back and exits",
            "Skipped — function already left",
            "",
            "Prints Hi",
          ],
          output: "Hi",
        },
        {
          kind: "playground",
          title: "Build a multiplier",
          initialCode:
            "function multiply(a, b) {\n  return a * b;\n}\n\nlet area = multiply(6, 7);\nconsole.log(area);",
          hint: "Change the numbers and watch the captured result change.",
        },
        {
          kind: "heading",
          level: 2,
          text: "What is scope?",
        },
        {
          kind: "paragraph",
          text: "**Scope** is the question 'where can I see this variable?' Variables created *inside* a function only exist inside that function — they're **local**. Variables created *outside* any function are **global** and visible everywhere.",
        },
        {
          kind: "analogy",
          title: "Kitchen vs. dining room",
          analogy:
            "Imagine a restaurant. The chef has ingredients on the kitchen counter (local variables) — customers in the dining room can't see them. The menu on the wall (global variables) is visible to everyone. Scope is about which 'room' a variable lives in.",
          takeaway: "Local variables stay inside their function; globals are visible everywhere.",
        },
        {
          kind: "code",
          title: "Local variables stay inside",
          summary: "message only exists inside sayMessage — using it outside is an error.",
          code: 'function sayMessage() {\n  let message = "Hello";\n  console.log(message);  // works\n}\n\nsayMessage();\nconsole.log(message);  // Error! message isn\'t defined here',
          lines: [
            "message is local to this function",
            "Works — we're inside",
            "",
            "Call it",
            "Error — message doesn't exist out here",
          ],
          output: "Hello\n// then: ReferenceError: message is not defined",
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Why scope is a good thing",
          text: "Scope keeps functions self-contained. A variable named `i` inside one function won't collide with an `i` in another. This prevents bugs — each function is its own little world unless you deliberately share data.",
        },
        {
          kind: "table",
          headers: ["Where declared", "Scope", "Visible..."],
          rows: [
            ["Outside any function", "Global", "Everywhere in your code"],
            ["Inside a function", "Local", "Only inside that function"],
            ["Inside a function's parameters", "Local", "Only inside that function"],
          ],
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Using console.log when you meant return.",
              right: "Use return to give a value back.",
              why: "console.log only displays — it returns undefined. So `let x = myFunc()` would set x to undefined even if the function logged something.",
            },
            {
              wrong: "Trying to use a local variable outside its function.",
              right: "Either return it, or declare it at the global scope.",
              why: "Local variables are destroyed when the function ends. They don't exist outside, causing a ReferenceError.",
            },
            {
              wrong: "Forgetting that return exits immediately.",
              right: "Put any code that must run BEFORE the return.",
              why: "Anything after `return` is dead code — it never executes because the function already left.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "`return value` sends a result back to the caller and exits the function.",
            "Capture a return value in a variable: `let x = func()`.",
            "console.log displays; return hands back. They're different.",
            "Variables inside a function are local — invisible outside.",
            "Global variables (outside any function) are visible everywhere.",
          ],
        },
      ],
      challenge: {
        title: "Build a square function",
        prompt:
          "Write a function `square(n)` that RETURNS n multiplied by itself (not console.log — return!). Then call it with 5 and print the result. You should get 25.",
        starterCode:
          "function square(n) {\n  return n * n;\n}\n\nlet answer = square(5);\nconsole.log(answer);",
        expectedOutput: "25",
        hint: "Use return n * n inside the function, then capture and print the result.",
      },
      quiz: {
        id: "quiz-return-scope",
        title: "Quick check: Return & scope",
        questions: [
          {
            id: "q1",
            question: "What does `return` do?",
            options: [
              "Prints a value to the screen",
              "Sends a value back to the caller and exits",
              "Restarts the function",
              "Creates a variable",
            ],
            answer: 1,
            explanation: "return hands a value back AND immediately exits the function.",
          },
          {
            id: "q2",
            question: "What's the difference between console.log and return?",
            options: [
              "They're identical",
              "console.log displays; return hands back a usable value",
              "return displays; console.log hands back",
              "console.log exits the function",
            ],
            answer: 1,
            explanation: "console.log shows text on screen. return gives a value back to your code so you can use it.",
          },
          {
            id: "q3",
            question: "Where can you use a variable declared inside a function?",
            options: [
              "Anywhere in your code",
              "Only inside that function",
              "Only in other functions",
              "Only before the function is called",
            ],
            answer: 1,
            explanation: "Local (function-scoped) variables exist only inside their function.",
          },
          {
            id: "q4",
            question: "What does this print? `function f() { return 5; console.log('hi'); } console.log(f());`",
            options: ["hi then 5", "5", "hi", "nothing"],
            answer: 1,
            explanation: "return exits immediately, so console.log('hi') never runs. f() returns 5, which gets printed.",
          },
        ],
      },
    },
  ],
};
