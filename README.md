# Stack Overflow Bug in JavaScript

This repository demonstrates a common error in recursive JavaScript functions: stack overflow. The `foo` function calculates a result recursively, but for large inputs, the recursion depth exceeds the call stack limit, leading to a crash.

The solution provided uses memoization to avoid redundant calculations and prevent stack overflow.

## How to reproduce the bug:

1. Clone the repository.
2. Run `bug.js` with a large input (e.g., `node bug.js 20`).  Observe the stack overflow error.
3. Run `bugSolution.js` with the same input. Observe that it completes successfully without an error.

## Bug and Solution files:

* `bug.js`: Contains the buggy recursive function.
* `bugSolution.js`: Contains the corrected version that uses memoization.