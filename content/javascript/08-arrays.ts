import type { Module } from "@/types";

export const arraysModule: Module = {
  slug: "arrays",
  order: 8,
  title: "Arrays",
  tagline: "Store ordered lists of values.",
  description:
    "Collect, access, and change ordered data in a single variable — and loop through it all.",
  icon: "ListOrdered",
  accent: "text-teal-500",
  lessons: [
    {
      slug: "creating-and-accessing-arrays",
      title: "Creating & Accessing Arrays",
      durationMin: 11,
      difficulty: "Beginner",
      achievement: "array-adventurer",
      objectives: [
        "Create an array of values",
        "Access items by their index",
        "Add, change, and measure arrays",
      ],
      content: [
        {
          kind: "why",
          point:
            "Arrays let one variable hold a whole LIST — so you can manage 100 items as easily as one.",
          build:
            "a to-do app that keeps every task in one `todos` list you can add to, read, and update.",
          without:
            "you'd need a separate variable for every single item (task1, task2, task3…) — unmanageable fast.",
        },
        {
          kind: "paragraph",
          text: "A variable holds one value. But what if you need to store *many* related values — like a list of scores, a cart of items, or the days of the week? An **array** is a single variable that holds an ordered list. It's the workhorse of JavaScript.",
        },
        {
          kind: "analogy",
          title: "A row of mailboxes",
          analogy:
            "Picture a row of numbered mailboxes: #0, #1, #2, #3... Each mailbox holds one item, and they share one address (the array's name). To get an item, you say 'the mailbox at number 2.' The numbering always starts at ZERO, which takes getting used to.",
          takeaway: "An array is an ordered, numbered list of values.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Creating an array",
        },
        {
          kind: "paragraph",
          text: "Make an array with square brackets `[]`, putting values inside separated by commas. Arrays can hold any type — numbers, strings, booleans, even a mix.",
        },
        {
          kind: "code",
          title: "Your first arrays",
          summary: "Square brackets create the list; commas separate items.",
          code: 'let scores = [90, 85, 78, 92];\nlet colors = ["red", "green", "blue"];\nlet mixed = [1, "hello", true];\n\nconsole.log(scores);',
          lines: [
            "An array of numbers",
            "An array of strings",
            "Arrays can mix types (but usually don't)",
            "",
            "Prints the whole array",
          ],
          output: "[ 90, 85, 78, 92 ]",
        },
        {
          kind: "heading",
          level: 2,
          text: "Accessing items by index",
        },
        {
          kind: "paragraph",
          text: "Each item has a numbered position called its **index**. Here's the catch: **counting starts at 0**, not 1. The first item is index 0, the second is index 1, and so on. This is called *zero-based indexing* and it's universal in programming.",
        },
        {
          kind: "code",
          title: "Get an item with [index]",
          summary: "colors[0] is the FIRST item because we start counting at 0.",
          code: 'let colors = ["red", "green", "blue"];\n\nconsole.log(colors[0]);  // red\nconsole.log(colors[1]);  // green\nconsole.log(colors[2]);  // blue',
          lines: [
            "Three colors in order",
            "",
            "Index 0 = first = 'red'",
            "Index 1 = second = 'green'",
            "Index 2 = third = 'blue'",
          ],
          output: "red\ngreen\nblue",
        },
        {
          kind: "predict",
          title: "Predict: which index?",
          code: 'let colors = ["red", "green", "blue"];\nconsole.log(colors[3]);',
          options: ["blue", "red", "undefined", "Error"],
          answer: 2,
          explanation:
            "The array has 3 items at indexes 0, 1, 2 — there is no index 3. Reading a missing index isn't an error; JavaScript silently returns `undefined`. The last item of a 3-item array is colors[2], not colors[3].",
        },
        {
          kind: "callout",
          variant: "warning",
          title: "The 0 thing trips everyone up",
          text: "If an array has 3 items, the last one is at index **2**, not 3. Off-by-one errors (using 3 when you meant 2) are the most common array bug. Whenever you reach for an index, remember: subtract one from the human count.",
        },
        {
          kind: "diagram",
          caption: "Index is the position; counting starts at 0.",
          mermaid: `flowchart LR
  I0["colors[0] = 'red'"] --- I1["colors[1] = 'green'"] --- I2["colors[2] = 'blue'"]`,
        },
        {
          kind: "playground",
          title: "Pick an item",
          initialCode:
            'let fruits = ["apple", "banana", "cherry", "date"];\nconsole.log(fruits[0]);\nconsole.log(fruits[3]);',
          hint: "Change the index numbers to access different fruits. Try index 4 — what happens?",
        },
        {
          kind: "heading",
          level: 2,
          text: "Changing an item",
        },
        {
          kind: "paragraph",
          text: "You can update any item by assigning to its index, just like a variable. The old value is replaced.",
        },
        {
          kind: "code",
          title: "Swap a value",
          summary: "Assign to colors[1] to replace 'green'.",
          code: 'let colors = ["red", "green", "blue"];\ncolors[1] = "yellow";\nconsole.log(colors);',
          lines: [
            "Start with three colors",
            "Replace index 1 ('green') with 'yellow'",
            "Now: red, yellow, blue",
          ],
          output: "[ 'red', 'yellow', 'blue' ]",
        },
        {
          kind: "heading",
          level: 2,
          text: "How many items? .length",
        },
        {
          kind: "paragraph",
          text: "Every array has a `.length` property that tells you how many items it holds. Super useful — especially for loops, where you want to visit every item.",
        },
        {
          kind: "code",
          title: "Count the items",
          summary: ".length gives the count (always one more than the last index).",
          code: 'let colors = ["red", "green", "blue"];\nconsole.log(colors.length);  // 3',
          lines: [
            "Three items",
            "Length is 3 (but last index is 2)",
          ],
          output: "3",
        },
        {
          kind: "heading",
          level: 2,
          text: "Adding items: push",
        },
        {
          kind: "paragraph",
          text: "The `push` method adds an item to the **end** of an array. It's how you grow a list over time — like adding a new item to a to-do list.",
        },
        {
          kind: "code",
          title: "Add to the end",
          summary: "push appends and increases the length.",
          code: 'let todo = ["eat", "sleep"];\ntodo.push("code");\nconsole.log(todo);\nconsole.log(todo.length);',
          lines: [
            "Start with two items",
            "Add 'code' to the end",
            "Now three items",
            "Length is now 3",
          ],
          output: "[ 'eat', 'sleep', 'code' ]\n3",
        },
        {
          kind: "callout",
          variant: "info",
          title: "Methods vs properties",
          text: "A **property** like `.length` is a value you read (no parentheses). A **method** like `.push()` is an action you call (with parentheses). Methods *do* something; properties *describe* something.",
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Using index 1 for the first item.",
              right: "The first item is at index 0.",
              why: "Arrays are zero-based. arr[1] is the SECOND item. Forgetting this is the #1 array mistake.",
            },
            {
              wrong: "Confusing length with last index.",
              right: "Last index = length - 1.",
              why: "An array of 3 items has length 3, but its last item is at index 2. Off-by-one errors come from this.",
            },
            {
              wrong: "Accessing an index that doesn't exist.",
              right: "Check the length first, or you'll get undefined.",
              why: "`colors[10]` on a 3-item array isn't an error — it silently returns undefined. This hides bugs.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "An array is an ordered list stored in one variable.",
            "Create with square brackets: `[1, 2, 3]`.",
            "Access items with `arr[index]` — counting starts at 0.",
            "`.length` gives the item count (one more than the last index).",
            "`.push(value)` adds an item to the end.",
          ],
        },
      ],
      challenge: {
        title: "Build a shopping list",
        prompt:
          "Create an array called `shopping` with three items. Print the first item and the last item using indexes. Then use push to add a fourth item and print the new length.",
        starterCode:
          'let shopping = ["milk", "eggs", "bread"];\nconsole.log(shopping[0]);\nconsole.log(shopping[2]);\nshopping.push("butter");\nconsole.log(shopping.length);',
        expectedOutput: "milk",
        hint: "First item is index 0. With 3 items, the last is index 2. After push, length becomes 4.",
      },
      quiz: {
        id: "quiz-arrays-basics",
        title: "Quick check: Arrays",
        questions: [
          {
            id: "q1",
            question: 'What does `["a","b","c"][0]` return?',
            options: ["'a'", "'b'", "'c'", "undefined"],
            answer: 0,
            explanation: "Index 0 is the first item — 'a'.",
          },
          {
            id: "q2",
            question: 'What is the index of the last item in `["a","b","c","d"]`?',
            options: ["4", "3", "1", "0"],
            answer: 1,
            explanation: "Four items → indexes 0,1,2,3. The last is index 3 (length - 1).",
          },
          {
            id: "q3",
            question: "How do you add 'new' to the end of array `arr`?",
            options: ["arr.add('new')", "arr.push('new')", "arr + 'new'", "arr[end] = 'new'"],
            answer: 1,
            explanation: "push appends a value to the end of the array.",
          },
          {
            id: "q4",
            question: 'What does `["a","b"].length` return?',
            options: ["1", "2", "0", "undefined"],
            answer: 1,
            explanation: "There are two items, so length is 2.",
          },
        ],
      },
    },
    {
      slug: "array-methods-and-loops",
      title: "Array Methods & Looping",
      durationMin: 12,
      difficulty: "Medium",
      objectives: [
        "Loop through an array with for and for...of",
        "Add, remove, and find items with methods",
        "Transform arrays with map and filter",
      ],
      content: [
        {
          kind: "why",
          point:
            "Looping and array methods let you ACT on a whole list at once — total every price, print every name, keep only what matches.",
          build:
            "a cart that loops through items to compute the grand total, then filters out the out-of-stock ones.",
          without:
            "you'd hand-write the same operation once per item — and rewrite it every time the list size changes.",
        },
        {
          kind: "paragraph",
          text: "Now that you can make arrays, the next superpower is **doing something with every item** — like printing each name or totaling each price. You'll also meet the array *methods*: built-in actions that add, remove, find, and transform items with one clean line.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Looping with a classic for loop",
        },
        {
          kind: "paragraph",
          text: "The classic way to visit every item: loop an index from 0 up to the array's length. Inside the loop, use `arr[i]` to get each item.",
        },
        {
          kind: "code",
          title: "Print every color",
          summary: "i goes 0, 1, 2 — grabbing each item by index.",
          code: 'let colors = ["red", "green", "blue"];\n\nfor (let i = 0; i < colors.length; i++) {\n  console.log(colors[i]);\n}',
          lines: [
            "Three items",
            "",
            "i from 0 to length-1",
            "Each round, print the item at index i",
          ],
          output: "red\ngreen\nblue",
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Why i < length (not <=)",
          text: "If length is 3, indexes are 0,1,2. So we loop while `i < 3` — that gives us 0,1,2 and stops before 3. Using `<=` would try index 3, which is undefined.",
        },
        {
          kind: "heading",
          level: 2,
          text: "The cleaner way: for...of",
        },
        {
          kind: "paragraph",
          text: "When you don't need the index — just each item — `for...of` is much cleaner. It hands you each value directly, no counting required.",
        },
        {
          kind: "code",
          title: "for...of: each item directly",
          summary: "No index variable needed — JavaScript grabs each item for you.",
          code: 'let colors = ["red", "green", "blue"];\n\nfor (let color of colors) {\n  console.log(color);\n}',
          lines: [
            "The array",
            "",
            "color takes each value in turn",
            "Print it",
          ],
          output: "red\ngreen\nblue",
        },
        {
          kind: "table",
          headers: ["Loop", "When to use"],
          rows: [
            ["for (let i = 0; ...)", "When you need the INDEX (position)"],
            ["for (let item of arr)", "When you only need each VALUE"],
          ],
        },
        {
          kind: "playground",
          title: "Loop and total",
          initialCode:
            "let prices = [10, 20, 15];\nlet total = 0;\nfor (let price of prices) {\n  total += price;\n}\nconsole.log(total);",
          hint: "Add each price to total inside the loop. Result should be 45.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Adding & removing items",
        },
        {
          kind: "paragraph",
          text: "You've met `push` (add to end). Arrays have a whole toolkit: `pop` removes the last item, `unshift` adds to the front, and `shift` removes the first.",
        },
        {
          kind: "table",
          headers: ["Method", "Action", "Returns"],
          rows: [
            ["push(x)", "Add to the END", "New length"],
            ["pop()", "Remove from the END", "The removed item"],
            ["unshift(x)", "Add to the START", "New length"],
            ["shift()", "Remove from the START", "The removed item"],
          ],
        },
        {
          kind: "code",
          title: "push and pop",
          summary: "push adds to the end; pop removes the last and gives it back.",
          code: 'let stack = [1, 2, 3];\nstack.push(4);       // [1, 2, 3, 4]\nlet removed = stack.pop();\nconsole.log(removed);  // 4\nconsole.log(stack);    // [1, 2, 3]',
          lines: [
            "Start with three",
            "Add 4 to the end",
            "Remove the last, capture it",
            "Prints the removed 4",
            "Prints the remaining array",
          ],
          output: "4\n[ 1, 2, 3 ]",
        },
        {
          kind: "heading",
          level: 2,
          text: "Finding items: includes & indexOf",
        },
        {
          kind: "code",
          title: "Does the array have this value?",
          summary: "includes returns true/false; indexOf gives the position.",
          code: 'let fruits = ["apple", "banana", "cherry"];\n\nconsole.log(fruits.includes("banana"));  // true\nconsole.log(fruits.includes("grape"));     // false\nconsole.log(fruits.indexOf("cherry"));     // 2',
          lines: [
            "Our list",
            "",
            "Is 'banana' in there? → true",
            "Is 'grape'? → false",
            "Where is 'cherry'? → index 2",
          ],
          output: "true\nfalse\n2",
        },
        {
          kind: "heading",
          level: 2,
          text: "Transforming: map & filter",
        },
        {
          kind: "paragraph",
          text: "Two powerful methods that take a function: `map` creates a NEW array by transforming each item, and `filter` creates a new array keeping only items that pass a test. They don't change the original — they return a fresh array.",
        },
        {
          kind: "code",
          title: "Double every number",
          summary: "map applies the function to each item and collects the results.",
          code: "let nums = [1, 2, 3];\nlet doubled = nums.map(function(n) {\n  return n * 2;\n});\nconsole.log(doubled);  // [2, 4, 6]\nconsole.log(nums);     // [1, 2, 3] — unchanged",
          lines: [
            "Original array",
            "map returns a NEW array",
            "What to do to each item",
            "Doubled values",
            "Original is untouched",
          ],
          output: "[ 2, 4, 6 ]\n[ 1, 2, 3 ]",
        },
        {
          kind: "predict",
          title: "Predict: does map change the original?",
          code: "let nums = [1, 2, 3];\nnums.map(function(n) {\n  return n * 10;\n});\nconsole.log(nums);",
          options: ["[ 10, 20, 30 ]", "[ 1, 2, 3 ]", "undefined", "[ ]"],
          answer: 1,
          explanation:
            "`map` returns a BRAND NEW array and never touches the original — but here we ignored the returned value entirely. So `nums` is still [1, 2, 3]. To use the doubled list you must capture it: `let big = nums.map(...)`.",
        },
        {
          kind: "code",
          title: "Keep only the big ones",
          summary: "filter keeps items where the function returns true.",
          code: "let nums = [1, 5, 2, 8, 3];\nlet big = nums.filter(function(n) {\n  return n > 3;\n});\nconsole.log(big);  // [5, 8]",
          lines: [
            "Mixed numbers",
            "filter returns a new array",
            "Keep items where this is true",
            "Only 5 and 8 passed",
          ],
          output: "[ 5, 8 ]",
        },
        {
          kind: "callout",
          variant: "info",
          title: "Don't worry if map/filter feel advanced",
          text: "These use functions as inputs — a big idea. For now, just know they exist and produce new arrays. You'll use them constantly once functions feel natural. Revisit this lesson after a few projects.",
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Using <= instead of < in an array loop.",
              right: "Use i < arr.length.",
              why: "Length 3 means indexes 0–2. `i <= 3` would grab index 3, which is undefined.",
            },
            {
              wrong: "Thinking push or map changes the original.",
              right: "push mutates; map and filter return new arrays.",
              why: "push/pop/shift/unshift change the original. map/filter DON'T — they give you a fresh array and leave the source alone.",
            },
            {
              wrong: "Using includes() to get a position.",
              right: "Use indexOf() for the index; includes() only returns true/false.",
              why: "includes answers 'is it there?' indexOf answers 'where is it?'. Different tools.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "Loop arrays with `for (let i = 0; i < arr.length; i++)` or cleaner `for (let item of arr)`.",
            "push/pop work the end; unshift/shift work the start.",
            "includes() checks presence; indexOf() finds the position.",
            "map() builds a new array by transforming each item.",
            "filter() builds a new array keeping items that pass a test.",
          ],
        },
      ],
      challenge: {
        title: "Find the total and the max",
        prompt:
          "Create an array of 5 numbers. Use a for...of loop to calculate their total and print it. Then use filter to create a new array with only numbers greater than 10 and print its length.",
        starterCode:
          "let nums = [5, 12, 8, 20, 3];\nlet total = 0;\nfor (let n of nums) {\n  total += n;\n}\nconsole.log(total);\nlet big = nums.filter(function(n) { return n > 10; });\nconsole.log(big.length);",
        expectedOutput: "48",
        hint: "Sum with a loop and +=. Filter keeps items where n > 10.",
      },
      quiz: {
        id: "quiz-array-methods",
        title: "Quick check: Array methods & loops",
        questions: [
          {
            id: "q1",
            question: "Which loop gives you each value directly without an index?",
            options: ["for (let i = 0; ...)", "for (let item of arr)", "while (arr)", "loop(arr)"],
            answer: 1,
            explanation: "for...of hands you each item's value directly — no index needed.",
          },
          {
            id: "q2",
            question: "What does `[1,2,3].pop()` return?",
            options: ["3", "[1,2]", "undefined", "1"],
            answer: 0,
            explanation: "pop removes and RETURNS the last item — 3 in this case.",
          },
          {
            id: "q3",
            question: "What does map() do?",
            options: [
              "Removes items that fail a test",
              "Creates a new array by transforming each item",
              "Counts the items",
              "Adds an item to the end",
            ],
            answer: 1,
            explanation: "map applies a function to every item and returns a new array of results.",
          },
          {
            id: "q4",
            question: "Does filter() change the original array?",
            options: ["Yes", "No — it returns a new array", "Only sometimes", "It deletes the original"],
            answer: 1,
            explanation: "filter and map never mutate — they return a fresh array.",
          },
        ],
      },
    },
  ],
};
