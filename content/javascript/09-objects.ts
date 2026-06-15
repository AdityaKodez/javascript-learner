import type { Module } from "@/types";

export const objectsModule: Module = {
  slug: "objects",
  order: 9,
  title: "Objects",
  tagline: "Group related data with key-value pairs.",
  description:
    "Model real things — a user, a product, a post — with properties, methods, and nested data.",
  icon: "Boxes",
  accent: "text-orange-500",
  lessons: [
    {
      slug: "creating-and-using-objects",
      title: "Creating & Using Objects",
      durationMin: 11,
      difficulty: "Beginner",
      achievement: "object-detective",
      objectives: [
        "Create an object with properties",
        "Read and change object values",
        "Understand dot vs bracket access",
      ],
      content: [
        {
          kind: "paragraph",
          text: "An array is an ordered list. An **object** is a collection of related details, each with a label. If an array answers 'what's the next item?', an object answers 'what details describe this thing?' A user object can hold a name, age, and email all together.",
        },
        {
          kind: "analogy",
          title: "An ID card",
          analogy:
            "Think of an object like an ID card. The card has labeled fields: Name, Age, City. Each label points to one piece of information. Objects work the same way: each **key** (label) stores a **value** (the detail).",
          takeaway: "Objects group related facts under labeled keys.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Creating an object",
        },
        {
          kind: "paragraph",
          text: "Objects use curly braces `{}`. Inside, you write **key: value** pairs separated by commas. These pairs are called **properties**.",
        },
        {
          kind: "code",
          title: "Your first object",
          summary: "Each key: value pair is one property.",
          code: 'let user = {\n  name: "Ada",\n  age: 30,\n  isStudent: true\n};',
          lines: [
            "Start the object",
            "name → 'Ada'",
            "age → 30",
            "isStudent → true",
            "End the object",
          ],
        },
        {
          kind: "callout",
          variant: "info",
          title: "Objects vs arrays",
          text: "Arrays use numbered indexes (`arr[0]`) because order matters. Objects use named keys (`user.name`) because labels matter. Use an array for a list; use an object for one thing with many details.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Reading properties with dot notation",
        },
        {
          kind: "paragraph",
          text: "The easiest way to read a property is **dot notation**: `objectName.key`. It reads like English: `user.name` means 'the name property of user.'",
        },
        {
          kind: "code",
          title: "Read object values",
          summary: "Dot notation is clean and readable.",
          code: 'let user = {\n  name: "Ada",\n  age: 30,\n  isStudent: true\n};\n\nconsole.log(user.name);      // Ada\nconsole.log(user.age);       // 30\nconsole.log(user.isStudent); // true',
          lines: [
            "Create the object",
            "",
            "Read the name property",
            "Read the age property",
            "Read the isStudent property",
          ],
          output: "Ada\n30\ntrue",
        },
        {
          kind: "heading",
          level: 2,
          text: "Changing properties",
        },
        {
          kind: "paragraph",
          text: "You can update a property by assigning to it — just like a variable. The object stays the same, but one value inside it changes.",
        },
        {
          kind: "code",
          title: "Update a property",
          summary: "Use dot notation to change one value.",
          code: 'let user = {\n  name: "Ada",\n  age: 30\n};\n\nuser.age = 31;\nconsole.log(user.age);',
          lines: [
            "Start with age 30",
            "",
            "Change age to 31",
            "Prints the new value",
          ],
          output: "31",
        },
        {
          kind: "heading",
          level: 2,
          text: "Adding new properties",
        },
        {
          kind: "paragraph",
          text: "Objects are flexible. You can add a new property at any time by assigning to a key that doesn't exist yet.",
        },
        {
          kind: "code",
          title: "Add a property",
          summary: "A new key appears automatically.",
          code: 'let user = {\n  name: "Ada"\n};\n\nuser.city = "London";\nconsole.log(user.city);',
          lines: [
            "Start with only name",
            "",
            "Add city",
            "Prints London",
          ],
          output: "London",
        },
        {
          kind: "heading",
          level: 2,
          text: "Bracket notation",
        },
        {
          kind: "paragraph",
          text: "Dot notation is great when the key is a simple word. But if the key has spaces, starts with a number, or is stored in a variable, use **bracket notation**: `object[key]`.",
        },
        {
          kind: "code",
          title: "When dot notation can't help",
          summary: "Bracket notation handles spaces and dynamic keys.",
          code: 'let user = {\n  "first name": "Ada",\n  "last name": "Lovelace"\n};\n\nconsole.log(user["first name"]);\n\nlet key = "last name";\nconsole.log(user[key]);',
          lines: [
            "Keys with spaces need quotes",
            "",
            "Read with bracket notation",
            "",
            "Use a variable as the key",
          ],
          output: "Ada\nLovelace",
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Which notation should I use?",
          text: "Use dot notation most of the time — it's cleaner. Use bracket notation only when the key has spaces, weird characters, or comes from a variable.",
        },
        {
          kind: "playground",
          title: "Build a profile",
          initialCode:
            'let profile = {\n  name: "Ada",\n  age: 30,\n  city: "London"\n};\n\nconsole.log(profile.name);\nconsole.log(profile.city);',
          hint: "Add more properties like hobbies or job. Then print them.",
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Trying to access a property with a space using dot notation.",
              right: "Use bracket notation: `obj['first name']`.",
              why: "Dots expect a simple identifier. Spaces break it. Bracket notation is the escape hatch.",
            },
            {
              wrong: "Using quotes with dot notation unnecessarily.",
              right: "Use `user.name`, not `user.'name'`.",
              why: "Dot notation doesn't use quotes. `user.name` is valid; `user.'name'` is not.",
            },
            {
              wrong: "Confusing object keys with array indexes.",
              right: "Objects use labels; arrays use numbers.",
              why: "An object is for named details (`user.name`). An array is for ordered items (`colors[0]`).",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "Objects group related details into key: value pairs.",
            "Properties are read with dot notation: `obj.key`.",
            "You can update or add properties with assignment.",
            "Use bracket notation for spaces or dynamic keys.",
            "Objects are for named details; arrays are for ordered lists.",
          ],
        },
      ],
      challenge: {
        title: "Build a character card",
        prompt:
          "Create an object called `hero` with properties: name, power, level, and isReady. Then print the name and power, update level to 2, and print the updated level.",
        starterCode:
          'let hero = {\n  name: "Ada",\n  power: "Logic",\n  level: 1,\n  isReady: true\n};\n\nconsole.log(hero.name);\nconsole.log(hero.power);\nhero.level = 2;\nconsole.log(hero.level);',
        expectedOutput: "Ada",
        hint: "Create the object, read two properties, update one, then read it again.",
      },
      quiz: {
        id: "quiz-objects-basics",
        title: "Quick check: Objects",
        questions: [
          {
            id: "q1",
            question: 'What does `user.name` do?',
            options: [
              "Creates a new property",
              "Reads the name property",
              "Deletes the object",
              "Turns the object into an array",
            ],
            answer: 1,
            explanation: "Dot notation reads a property by its key.",
          },
          {
            id: "q2",
            question: 'Which syntax is best for a key with a space like "first name"?',
            options: [
              "obj.first name",
              "obj['first name']",
              "obj.first-name",
              "obj.(first name)",
            ],
            answer: 1,
            explanation: "Bracket notation handles spaces and special characters.",
          },
          {
            id: "q3",
            question: "What happens when you assign to a new key on an object?",
            options: [
              "It creates that property",
              "It throws an error",
              "It deletes the object",
              "It converts to an array",
            ],
            answer: 0,
            explanation: "Objects can grow new properties at any time.",
          },
          {
            id: "q4",
            question: "Which is better for a simple key like `age`?",
            options: [
              "Dot notation: obj.age",
              "Bracket notation: obj['age']",
              "Neither works",
              "Both are equally bad",
            ],
            answer: 0,
            explanation: "Dot notation is cleaner for simple keys. Bracket notation is reserved for special cases.",
          },
        ],
      },
    },
    {
      slug: "object-methods-and-nesting",
      title: "Object Methods & Nested Data",
      durationMin: 12,
      difficulty: "Medium",
      objectives: [
        "Add functions inside objects",
        "Understand nested objects and arrays",
        "Use methods to interact with object state",
      ],
      content: [
        {
          kind: "paragraph",
          text: "Objects don't just store data — they can also store **actions**. A function stored inside an object is called a **method**. This is how real-world things behave in code: a `dog` can `bark()`, a `car` can `drive()`, a `user` can `login()`.",
        },
        {
          kind: "analogy",
          title: "A toy robot",
          analogy:
            "Think of an object as a toy robot. It has labels (name, battery level) AND actions (walk, wave, beep). The labels are properties. The actions are methods. Both live on the same robot.",
          takeaway: "Objects can hold both data and behavior.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Methods: functions inside objects",
        },
        {
          kind: "paragraph",
          text: "A method is just a function assigned to a key. When you call it with `object.method()`, it runs. This is how you make objects do things.",
        },
        {
          kind: "code",
          title: "A method that speaks",
          summary: "The function lives inside the object and runs when called.",
          code: 'let dog = {\n  name: "Rex",\n  bark: function() {\n    console.log(this.name + " says woof!");\n  }\n};\n\ndog.bark();',
          lines: [
            "A normal property",
            "A method: a function as a property",
            "this.name refers to the object's name",
            "",
            "Call the method",
          ],
          output: "Rex says woof!",
        },
        {
          kind: "callout",
          variant: "info",
          title: "What is `this`?",
          text: "Inside an object method, `this` means 'the object that called me.' So `this.name` means 'the name property of the current object.' It's how a method knows which object it belongs to.",
        },
        {
          kind: "heading",
          level: 2,
          text: "Nested objects",
        },
        {
          kind: "paragraph",
          text: "Objects can contain other objects. This is called **nesting**. It's how you model real things that have sub-details: a user has an address, and an address has a street, city, and zip.",
        },
        {
          kind: "code",
          title: "A nested object",
          summary: "One object inside another object.",
          code: 'let user = {\n  name: "Ada",\n  address: {\n    street: "123 Main St",\n    city: "London",\n    zip: "10001"\n  }\n};\n\nconsole.log(user.address.city);',
          lines: [
            "Top-level user object",
            "Nested address object",
            "Street inside address",
            "City inside address",
            "Zip inside address",
            "",
            "Read a nested property",
          ],
          output: "London",
        },
        {
          kind: "heading",
          level: 2,
          text: "Arrays inside objects",
        },
        {
          kind: "paragraph",
          text: "Objects can also hold arrays — perfect for lists of details inside one thing. A user might have `hobbies`, a post might have `comments`, a cart might have `items`.",
        },
        {
          kind: "code",
          title: "A list inside an object",
          summary: "The value of hobbies is an array.",
          code: 'let user = {\n  name: "Ada",\n  hobbies: ["coding", "reading", "chess"]\n};\n\nconsole.log(user.hobbies[1]);',
          lines: [
            "A normal property",
            "An array property",
            "",
            "Read the second hobby",
          ],
          output: "reading",
        },
        {
          kind: "heading",
          level: 2,
          text: "Objects inside arrays",
        },
        {
          kind: "paragraph",
          text: "And arrays can hold objects! This is one of the most common patterns in JavaScript. You'll see it everywhere: a list of users, a list of products, a list of messages.",
        },
        {
          kind: "code",
          title: "An array of objects",
          summary: "Each item in the array is its own object.",
          code: 'let users = [\n  { name: "Ada", age: 30 },\n  { name: "Sam", age: 25 }\n];\n\nconsole.log(users[0].name); // Ada\nconsole.log(users[1].age);  // 25',
          lines: [
            "First object in the array",
            "Second object in the array",
            "",
            "First user's name",
            "Second user's age",
          ],
          output: "Ada\n25",
        },
        {
          kind: "diagram",
          caption: "Objects and arrays can nest inside each other.",
          mermaid: `flowchart TD
  User["user"] --> Address["address object"]
  Address --> City["city"]
  User --> Hobbies["hobbies array"]
  Hobbies --> Hobby1["coding"]
  Hobbies --> Hobby2["reading"]`,
        },
        {
          kind: "playground",
          title: "Build a nested profile",
          initialCode:
            'let profile = {\n  name: "Ada",\n  address: {\n    city: "London"\n  },\n  hobbies: ["coding", "reading"]\n};\n\nconsole.log(profile.address.city);\nconsole.log(profile.hobbies[0]);',
          hint: "Add more nested details like phone or favoriteBook.",
        },
        {
          kind: "mistake",
          mistakes: [
            {
              wrong: "Forgetting that this.name only works inside a method.",
              right: "Use this inside methods, not outside the object.",
              why: "this is only meaningful in the context of a method call. Outside, it doesn't refer to your object.",
            },
            {
              wrong: "Trying to read nested data with one dot.",
              right: "Chain dots for nested properties: user.address.city.",
              why: "Each dot moves one level deeper. user.address.city reads the city inside the address object.",
            },
            {
              wrong: "Confusing an array of objects with an object of arrays.",
              right: "Array of objects = list of things. Object of arrays = one thing with list properties.",
              why: "Different shapes for different jobs. Choose based on whether you're grouping many things or describing one thing.",
            },
          ],
        },
        {
          kind: "recap",
          points: [
            "A method is a function stored inside an object.",
            "Inside a method, `this` refers to the current object.",
            "Objects can contain other objects (nesting).",
            "Objects can contain arrays, and arrays can contain objects.",
            "Nested data is read by chaining dots: `obj.a.b`.",
          ],
        },
      ],
      challenge: {
        title: "Build a pet object",
        prompt:
          "Create an object called `pet` with name, age, and a method `speak` that prints the pet's name plus 'says meow'. Then create an array `pets` with two pet objects and print the first pet's name.",
        starterCode:
          'let pet = {\n  name: "Milo",\n  age: 3,\n  speak: function() {\n    console.log(this.name + " says meow");\n  }\n};\n\nlet pets = [pet, { name: "Luna", age: 2 }];\nconsole.log(pets[0].name);',
        expectedOutput: "Milo",
        hint: "Define the method on pet, then create an array with pet and another object.",
      },
      quiz: {
        id: "quiz-object-methods",
        title: "Quick check: Methods & nesting",
        questions: [
          {
            id: "q1",
            question: "What is a method?",
            options: [
              "A variable outside an object",
              "A function stored inside an object",
              "An array property",
              "A nested object only",
            ],
            answer: 1,
            explanation: "A method is a function that lives as a property of an object.",
          },
          {
            id: "q2",
            question: 'What does `this.name` mean inside an object method?',
            options: [
              "The object's name property",
              "A global variable named name",
              "The method's name",
              "The string 'name'",
            ],
            answer: 0,
            explanation: "Inside a method, this refers to the object that called it.",
          },
          {
            id: "q3",
            question: 'How do you read city from `user.address.city`?',
            options: [
              "user.city",
              "user.address.city",
              "user[address][city]",
              "user.address -> city",
            ],
            answer: 1,
            explanation: "You chain dots to move through nested objects.",
          },
          {
            id: "q4",
            question: "Which structure is an array of objects?",
            options: [
              "[{ name: 'Ada' }, { name: 'Sam' }]",
              "{ name: 'Ada', friends: ['Sam'] }",
              "{ users: ['Ada', 'Sam'] }",
              "[1, 2, 3]",
            ],
            answer: 0,
            explanation: "An array of objects is a list where each item is its own object.",
          },
        ],
      },
    },
  ],
};
