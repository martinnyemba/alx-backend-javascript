0x00. ES6 Basics

JavaScript | ES6


---

📚 Concepts

For this project, you'll be exploring the following concepts:

JavaScript programming

Software Linter


📖 Resources

Make sure to read or watch the following:

ECMAScript 6 - ECMAScript 2015

Statements and Declarations

Arrow Functions

Default Parameters

Rest Parameter

JavaScript ES6 — Iterables and Iterators


🎯 Learning Objectives

By the end of this project, you should be able to explain the following concepts clearly:

What ES6 is

New features introduced in ES6

The difference between a constant and a variable

Block-scoped variables

Arrow functions and default parameters

Rest and spread function parameters

String templating in ES6

Object creation and properties in ES6

Iterators and the for-of loop



---

⚙️ Requirements

Your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x

Allowed editors: vi, vim, emacs, Visual Studio Code

All files should end with a new line

A README.md file, at the root of the folder of the project, is mandatory

Your code should use the .js extension

Your code will be tested using the Jest Testing Framework

Your code will be analyzed using the ESLint linter with specific rules provided

All of your functions must be exported



---

🛠️ Setup Instructions

1. Install NodeJS 12.11.x

Run the following commands in your home directory:

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v    # Should output v12.11.1
npm -v       # Should output 6.11.3

2. Install Jest, Babel, and ESLint

Make sure to run the following in your project directory:

npm install

Ensure you have package.json, babel.config.js, and .eslintrc.js files in your project directory.


---

📁 Project Structure

0x00-ES6_basics/
├── 0-constants.js
├── 1-block-scoped.js
├── 2-arrow.js
├── 3-default-parameter.js
├── 4-rest-parameter.js
├── 5-spread-operator.js
├── 6-string-interpolation.js
├── 7-getBudgetObject.js
├── 8-getBudgetCurrentYear.js
├── 9-getFullBudgetObject.js
└── README.md


---

🚀 Tasks

0. Const or let?

Update the functions to use const and let:

export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += ' is okay';
  return combination;
}

Usage:

npm run dev 0-main.js

1. Block Scope

Ensure variables inside the function aren’t overwritten:

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}

2. Arrow Functions

Rewrite using ES6 arrow functions:

export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}

3. Parameter Defaults

Condense the function with default parameters:

export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}

4. Rest Parameter

Count the number of arguments passed:

export default function returnHowManyArguments(...args) {
  return args.length;
}

5. Spread Syntax

Concatenate arrays and strings:

export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}

6. Template Literals

Use template literals for better readability:

export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}


---

🗂️ Repository

GitHub Repository: alx-backend-javascript

Directory: 0x00-ES6_basic



---

📝 Author

Martin Nyemba


---

Feel free to reach out if you have any questions! 😊


