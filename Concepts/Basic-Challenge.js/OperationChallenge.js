/*
Playing with Variables
Task:

Perform the following mathematical operations
on the provided variables a and b



Add

Subtract

Multiply

Divide

Increment

Decrement

Reminder
*/
// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
  return a + b;
}

// Subtract small value from larger one
function subtract() {
  return b - 1;
}

function multiply() {
  return a * b;
}

// Divide larger value by small
function divide() {
  return a / b;
}

// Increase value of a by 1
function increment() {
  return `${a++} ${b++}`;
}

// Decrease value of b by 1
function decrement() {
  return `${a--} ${b--}`;
}

// Divide larger value by small to find the reminder
function reminder() {
  return a % b;
}
