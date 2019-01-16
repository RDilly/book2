//1. Create a function that logs the result of adding two numbers that were passed in as arguments.
//2. Create another function that logs the result of subtracting two numbers that were passed in as arguments.
//3. Invoke each function a couple times with different argument values.

const addTwoNumbers = (first, second) => console.log(first + second)
const subtractTwoNumbers = (first, second) => console.log(first - second)
const calculate = (first, second, fn) => {fn(first, second)}