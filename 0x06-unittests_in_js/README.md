# Unit Tests in JavaScript

## Overview

This project focuses on learning and implementing **unit testing** in JavaScript using popular tools like Mocha, Chai, and Sinon. The goal is to create robust test suites, write meaningful test cases, and perform integration testing for a small Node.js server.

---

## Learning Objectives

By the end of this project, you should be able to:

- Use **Mocha** to write and organize test suites.
- Implement tests using assertion libraries like **Node's assert** and **Chai**.
- Utilize **spies** and **stubs** for unit testing.
- Use **hooks** to optimize test execution.
- Write **unit tests** for asynchronous functions.
- Perform **integration testing** with a small Node.js server.
- Understand when and how to skip tests.
- Validate API routes and responses with **regex**.

---

## Requirements

- **Environment:** Ubuntu 18.04, Node.js 12.x.x.
- **Code Style:** JavaScript (ES6).
- **Tools:** Mocha, Chai, Sinon, Express, Request.
- Tests should be executed with `npm test` without warnings or errors.
- Each test suite should pass 100%.

---

## Resources

- [Mocha Documentation](https://mochajs.org)
- [Chai](https://www.chaijs.com)
- [Sinon](https://sinonjs.org)
- [Express](https://expressjs.com)
- [Request](https://github.com/request/request)
- [Testing Node.js Apps](https://dev.to/awesometech10/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs-12kl)

---

## Directory Structure

```plaintext
0x06-unittests_in_js/
├── 0-calcul.js
├── 0-calcul.test.js
├── 1-calcul.js
├── 1-calcul.test.js
├── 2-calcul_chai.js
├── 2-calcul_chai.test.js
├── utils.js
├── 3-payment.js
├── 3-payment.test.js
├── 4-payment.js
├── 4-payment.test.js
├── 5-payment.js
├── 5-payment.test.js
├── 6-payment_token.js
├── 6-payment_token.test.js
├── 7-skip.test.js
├── 8-api/
│   ├── api.js
│   ├── api.test.js
│   └── package.json
├── 9-api/
│   ├── api.js
│   ├── api.test.js
│   └── package.json
├── 10-api/
│   ├── api.js
│   ├── api.test.js
│   └── package.json
└── README.md
```

---

## Tasks

### **Task 0: Basic Test with Mocha**

- **File:** `0-calcul.js`, `0-calcul.test.js`
- Create a `calculateNumber` function that rounds and sums two numbers.
- Use `assert` for testing.
- Run with `npm test 0-calcul.test.js`.

---

### **Task 1: Combining Descriptions**

- **File:** `1-calcul.js`, `1-calcul.test.js`
- Extend `calculateNumber` to support operations: `SUM`, `SUBTRACT`, `DIVIDE`.
- Organize tests using `describe`.

---

### **Task 2: Using Chai for Assertions**

- **File:** `2-calcul_chai.js`, `2-calcul_chai.test.js`
- Rewrite test cases using `Chai.expect`.

---

### **Task 3: Spies**

- **File:** `utils.js`, `3-payment.js`, `3-payment.test.js`
- Create `Utils.calculateNumber`.
- Use Sinon `spy` to track function calls.

---

### **Task 4: Stubs**

- **File:** `4-payment.js`, `4-payment.test.js`
- Use Sinon `stub` to replace `Utils.calculateNumber` and control return values.

---

### **Task 5: Hooks**

- **File:** `5-payment.js`, `5-payment.test.js`
- Use `beforeEach` and `afterEach` hooks to reset spies and stubs.

---

### **Task 6: Async Tests**

- **File:** `6-payment_token.js`, `6-payment_token.test.js`
- Test asynchronous behavior using `done`.

---

### **Task 7: Skipping Tests**

- **File:** `7-skip.test.js`
- Skip failing tests using `.skip`.

---

### **Task 8: Basic Integration Testing**

- **File:** `8-api/api.js`, `8-api/api.test.js`
- Test an Express app's root endpoint.

---

### **Task 9: Regex Integration Testing**

- **File:** `9-api/api.js`, `9-api/api.test.js`
- Add a `/cart/:id` endpoint.
- Validate `:id` as a number and return 404 for invalid values.

---

### **Task 10: Advanced API Testing**

- **File:** `10-api/api.js`, `10-api/api.test.js`
- Add:
  - `GET /available_payments`: Returns available payment methods.
  - `POST /login`: Returns a personalized welcome message.

---

## Testing Instructions

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Tests:**
   ```bash
   npm test
   ```

3. **Start Server (for Integration Testing):**
   ```bash
   node api.js
   ```

---

## Tips

- Always restore spies and stubs to avoid side effects.
- Use hooks to optimize repetitive setup and teardown operations.
- Ensure tests cover both normal and edge cases.
- For skipped tests, document reasons and create a ticket for fixing.

---

## Author

- **[Your Name]**
- GitHub Repository: [alx-backend-javascript](https://github.com/martinnyemba/alx-backend-javascript)
