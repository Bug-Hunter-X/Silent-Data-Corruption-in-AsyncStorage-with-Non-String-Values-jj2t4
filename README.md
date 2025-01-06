# React Native AsyncStorage Silent Data Corruption

This repository demonstrates a subtle bug in React Native applications involving the use of `AsyncStorage` with non-string values.  `AsyncStorage` only accepts strings; attempting to directly store objects or arrays will lead to data corruption or loss without throwing explicit errors. 

The `bug.js` file showcases the problematic code, while `bugSolution.js` provides the corrected implementation.

## Reproducing the Bug

1. Clone this repository.
2. Run the `bug.js` example. Observe that the console message indicates successful storage, even though the data is incorrectly saved.
3. Compare with the corrected approach in `bugSolution.js`.

## Solution

Always stringify complex data using `JSON.stringify()` before storing it in `AsyncStorage` and parse it back using `JSON.parse()` when retrieving it.