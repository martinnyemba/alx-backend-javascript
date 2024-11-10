# 0x02. ES6 Classes

## Overview
This project focuses on understanding ES6 classes in JavaScript, emphasizing Object-Oriented Programming (OOP) principles. By the end of this project, you will be well-equipped to explain various concepts related to classes in JavaScript.

## Learning Objectives
At the end of this project, you should be able to:
- Define a class in JavaScript.
- Add methods to a class.
- Understand and implement static methods within a class.
- Extend one class from another.
- Explore metaprogramming and symbols in JavaScript.

## Resources
Read or watch the following materials:
- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming)

## Requirements
- All files will be executed on **Ubuntu 18.04 LTS** using **NodeJS 12.11.x**.
- Allowed editors: **vi**, **vim**, **emacs**, **Visual Studio Code**.
- All files must end with a new line.
- A `README.md` file must be present in the root of the project folder.
- Code files should use the `.js` extension.
- Code will be tested using **Jest** and the command `npm run test`.
- Code must pass linting checks with **ESLint**.
- To verify the entire project, run `npm run full-test`.

## Setup
1. Install NodeJS 12.11.x in your home directory:

   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   nodejs -v
   npm -v
   ```

2. Install Jest, Babel, and ESLint in your project directory:

   ```bash
   npm install
   ```

## Configuration Files
Ensure the following configuration files are present in your project directory:
- `package.json`
- `babel.config.js`
- `.eslintrc.js`

Remember to run `npm install` again if you add `package.json`.

## Tasks

### Task 0: ClassRoom
Implement a class named `ClassRoom` with a constructor accepting `maxStudentsSize`.

### Task 1: Initialize Rooms
Create a function `initializeRooms` that returns an array of three `ClassRoom` objects.

### Task 2: Holberton Course
Implement the `HolbertonCourse` class with attributes `name`, `length`, and `students`. Include getters and setters for each attribute.

### Task 3: Currency
Create a `Currency` class that includes methods to display the full currency format.

### Task 4: Pricing
Implement a `Pricing` class that includes methods to display full price and convert prices with a static method.

### Task 5: Building
Create a `Building` class as an abstract class that must be extended.

### Task 6: SkyHighBuilding
Extend the `Building` class with a `SkyHighBuilding` class that implements specific methods.

### Task 7: Airport
Create an `Airport` class with attributes and a string representation.

### Task 8: Holberton Class
Implement a `HolbertonClass` that can be cast into a Number and String.

### Task 9: Hoisting
Fix the provided code to ensure it operates correctly.

### Task 10: Car
Implement a `Car` class with a method to clone the car object.

## Repository
GitHub repository: [alx-backend-javascript](https://github.com/martinnyemba/alx-backend-javascript)

## License
Copyright © 2024 ALX, All rights reserved.
