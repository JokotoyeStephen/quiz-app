const questions = [
 {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "variable", "declare", "def"],
    answer: "var"
  },
  {
    question: "What is the difference between 'let' and 'var' in JavaScript?",
    options: ["let has block scope, var has function scope", "let has function scope, var has block scope", "There is no difference", "let is older than var"],
    answer: "let has block scope, var has function scope"
  },
  {
    question: "Which of these is NOT a valid way to declare a variable in modern JavaScript?",
    options: ["let", "const", "var", "variable"],
    answer: "variable"
  },
  {
    question: "What happens when you declare a variable with 'const'?",
    options: ["It cannot be reassigned", "It cannot be accessed", "It becomes global", "It becomes undefined"],
    answer: "It cannot be reassigned"
  },
  {
    question: "What is the value of an uninitialized variable in JavaScript?",
    options: ["undefined", "null", "0", "false"],
    answer: "undefined"
  },
 {
  question: "How do you remove an event listener?",
  options: ["removeEvent()", "off()", "removeEventListener()", "unset()"],
  answer: "removeEventListener()"
},
  {
    question: "What is the correct way to declare a function in JavaScript?",
    options: ["function myFunction() {}", "def myFunction() {}", "create myFunction() {}", "func myFunction() {}"],
    answer: "function myFunction() {}"
  },
  {
    question: "What does a function return by default if no return statement is specified?",
    options: ["undefined", "null", "0", "false"],
    answer: "undefined"
  },
  {
    question: "Which is an example of a function expression?",
    options: ["const myFunc = function() {}", "function myFunc() {}", "def myFunc() {}", "create myFunc() {}"],
    answer: "const myFunc = function() {}"
  },
  {
    question: "What is an arrow function in JavaScript?",
    options: ["() => {}", "-> {}", "=> {}", "function() => {}"],
    answer: "() => {}"
  },
  {
    question: "How do you call a function named 'myFunction'?",
    options: ["myFunction()", "call myFunction()", "execute myFunction()", "run myFunction()"],
    answer: "myFunction()"
  },
  {
  question: "What type is an object in JavaScript?",
  options: ["array", "object", "function", "string"],
  answer: "object"
},
  {
    question: "Which operator is used for string concatenation in JavaScript?",
    options: ["+", "&", "concat", "append"],
    answer: "+"
  },
  {
    question: "What is the result of 'Hello' + 'World' in JavaScript?",
    options: ["HelloWorld", "Hello World", "Hello+World", "Error"],
    answer: "HelloWorld"
  },
  {
  question: "Which keyword is used to provide an alternate condition?",
  options: ["else", "elseif", "otherwise", "or"],
  answer: "else"
},
  {
    question: "What happens when you use + operator with a string and a number?",
    options: ["String concatenation", "Numeric addition", "Error", "Boolean result"],
    answer: "String concatenation"
  },
 {
  question: "What does `++x` do?",
  options: ["Increments x after use", "Increments x before use", "Decrements x", "No change"],
  answer: "Increments x before use"
},
 {
  question: "Can a function be assigned to a variable in JavaScript?",
  options: ["Yes", "No", "Only with let", "Only inside an object"],
  answer: "Yes"
},
  {
    question: "What is the result of 5 + 3 * 2 in JavaScript?",
    options: ["16", "11", "13", "10"],
    answer: "11"
  },
  {
    question: "What is the modulus operator in JavaScript?",
    options: ["%", "mod", "//", "div"],
    answer: "%"
  },
  {
    question: "What does the ++ operator do?",
    options: ["Increments by 1", "Adds two numbers", "Concatenates strings", "Compares values"],
    answer: "Increments by 1"
  },
  {
    question: "What is the result of 10 % 3 in JavaScript?",
    options: ["1", "3", "0", "10"],
    answer: "1"
  },
 {
  question: "Which of these variable names is valid in JavaScript?",
  options: ["1var", "user-name", "_user", "var user"],
  answer: "_user"
},
 {
  question: "What is the result of `'Hi' + 3`?",
  options: ["Hi3", "3Hi", "NaN", "undefined"],
  answer: "Hi3"
},
  {
    question: "Which statement is used to execute code based on a condition in JavaScript?",
    options: ["if", "when", "check", "condition"],
    answer: "if"
  },
  {
    question: "What is the syntax for an if-else statement?",
    options: ["if (condition) {} else {}", "if condition {} else {}", "if (condition) then {} else {}", "if condition then {} else {}"],
    answer: "if (condition) {} else {}"
  },
  {
    question: "Which loop continues until a condition becomes false?",
    options: ["while", "for", "do-while", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What is the syntax for a for loop in JavaScript?",
    options: ["for (init; condition; increment) {}", "for (condition; init; increment) {}", "for init; condition; increment {}", "for (init, condition, increment) {}"],
    answer: "for (init; condition; increment) {}"
  },
  {
    question: "Which statement is used to exit a loop?",
    options: ["break", "exit", "stop", "end"],
    answer: "break"
  },
 {
  question: "What will `5 + '5'` return in JavaScript?",
  options: ["10", "55", "undefined", "NaN"],
  answer: "55"
},
  {
    question: "What is a switch statement used for?",
    options: ["Multiple condition checking", "Loop control", "Function declaration", "Variable declaration"],
    answer: "Multiple condition checking"
  },
  {
    question: "How do you create an object in JavaScript?",
    options: ["{}", "[]", "new Object()", "Both {} and new Object()"],
    answer: "Both {} and new Object()"
  },
  {
    question: "How do you access a property named 'name' in an object called 'person'?",
    options: ["person.name", "person['name']", "person->name", "Both person.name and person['name']"],
    answer: "Both person.name and person['name']"
  },
  {
    question: "How do you add a new property to an existing object?",
    options: ["object.newProperty = value", "object.add('newProperty', value)", "object.insert('newProperty', value)", "object.set('newProperty', value)"],
    answer: "object.newProperty = value"
  },
  {
    question: "What method returns an array of an object's property names?",
    options: ["Object.keys()", "Object.properties()", "Object.names()", "Object.getKeys()"],
    "answer": "Object.keys()"
  },
  {
    question: "How do you delete a property from an object?",
    options: ["delete object.property", "remove object.property", "object.delete('property')", "object.remove('property')"],
    answer: "delete object.property"
  },
  {
    question: "What is the 'this' keyword in JavaScript objects?",
    options: ["Refers to the current object", "Refers to the global object", "Refers to the parent object", "Refers to the window object"],
    answer: "Refers to the current object"
  },
  {
    question: "Which method is used to add an event listener to an element?",
    options: ["addEventListener()", "attachEvent()", "bindEvent()", "onEvent()"],
    answer: "addEventListener()"
  },
  {
    question: "Which event is triggered when a user clicks on an element?",
    options: ["click", "onclick", "mouseclick", "tap"],
    answer: "click"
  },
  {
    question: "What is the first parameter of addEventListener()?",
    options: ["Event type", "Event handler", "Element", "Options"],
    answer: "Event type"
  },
  {
    question: "How do you remove an event listener?",
    options: ["removeEventListener()", "detachEvent()", "unbindEvent()", "offEvent()"],
    answer: "removeEventListener()"
  },
 
  {
    question: "Which method appends a child to an element?",
    options: ["appendChild()", "add()", "appendTo()", "push()"],
    answer: "appendChild()"
  },
  {
    question: "How do you create an array in JavaScript?",
    options: ["[]", "{}", "()", "new Array()"],
    answer: "[]"
  },
  {
    question: "What method is used to add an element to the end of an array?",
    options: ["push()", "add()", "append()", "insert()"],
    answer: "push()"
  },
 {
    question: "Which method selects an element by ID?",
    options: ["getElementByID()", "querySelector()", "getElementById()", "selectById()"],
    answer: "getElementById()"
  },
  {
    question: "How do you access the first element of an array named 'arr'?",
    options: ["arr[0]", "arr.first()", "arr.get(0)", "arr(0)"],
    answer: "arr[0]"
  },
  {
    question: "What property gives you the number of elements in an array?",
    options: ["length", "size", "count", "elements"],
    answer: "length"
  },
 {
    question: "Which method returns the first matching element?",
    options: ["querySelector()", "getElementById()", "getElementsByClassName()", "select()"],
    answer: "querySelector()"
  },
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Management", "Desktop Oriented Mode", "Document Oriented Model"],
    answer: "Document Object Model"
  },
  {
    question: "Which method creates a new element in the DOM?",
    options: ["createElement()", "newElement()", "append()", "addElement()"],
    answer: "createElement()"
  },
];
console.log(questions.length)







let current = 0;
let score = 0;
let time = 20 * 60;
let interval;

const nameInput = document.getElementById("student-name");
const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("next");
const timerDisplay = document.getElementById("timer");
const resultBox = document.getElementById("result");
const scoreText = document.getElementById("score");
const emailLink = document.getElementById("email-link");
const blockedMessage = document.getElementById("blocked-message");

function startTimer() {
  interval = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timerDisplay.textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    time--;
    if (time < 0) {
      clearInterval(interval);
      blockQuiz();
    }
  }, 1000);
}

function loadQuestion() {
  if (current >= questions.length) {
    endQuiz();
    return;
  }
  const q = questions[current];
  questionBox.textContent = q.question;
  optionsBox.innerHTML = "";
  q.options.forEach(option => {
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="radio" name="option" value="${option}"/> ${option}</label>`;
    optionsBox.appendChild(li);
  });
}

nextBtn.onclick = () => {
  if (nameInput.value.trim() === "") {
    alert("Please enter your full name before starting the quiz.");
    return;
  }

  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an answer.");
    return;
  }
  if (selected.value === questions[current].answer) score++;
  current++;
  loadQuestion();
};

function endQuiz() {
  clearInterval(interval);
  document.getElementById("quiz-box").classList.add("hidden");
  resultBox.classList.remove("hidden");
  const studentName = nameInput.value.trim() || "Unnamed Student";
  scoreText.textContent = `Hello ${studentName} you have a ${score}`;

  const message = `Student Name: ${studentName}\nScore: ${score}/50`;
  emailLink.href = `mailto:dotmanlsei@gmail.com?subject=JavaScript Quiz Score&body=${encodeURIComponent(message)}`;
  emailLink.textContent = "Send Score via Email";
}

function blockQuiz() {
  document.getElementById("quiz-box").classList.add("hidden");
  blockedMessage.classList.remove("hidden");
}

window.onload = () => {
  loadQuestion();
  startTimer();

   // Disable copying text on the page
  document.addEventListener('copy', function(e) {
    e.preventDefault();
    alert('Copying is disabled on this quiz page.');
  });

  // Disable right-click context menu
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Right-click is disabled on this quiz page.');
  });
};

 



