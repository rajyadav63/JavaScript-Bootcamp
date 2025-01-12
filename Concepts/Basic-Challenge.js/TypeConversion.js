/*
Playing with Types
Task 1:

Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".



Task 2:

Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.



Task 3:

Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"



Task 4:

Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
*/
function stringToNumber(input) {
  const convertedNumber = Number(input);
  return isNaN(convertedNumber) ? "Not a number" : convertedNumber;
}

function flipBoolean(input) {
  return !Boolean(input);
}

function whatAmI(input) {
  const type = typeof input;
  if (type === "number") {
    return "I'm a number!";
  } else if (type === "string") {
    return "I'm a string!";
  } else if (type === "boolean") {
    return "I'm a boolean!";
  } else if (type === "object") {
    return input === null ? "I'm null!" : "I'm an object!";
  } else if (type === "undefined") {
    return "I'm undefined!";
  } else if (type === "function") {
    return "I'm a function!";
  } else if (type === "symbol") {
    return "I'm a symbol!";
  } else if (type === "bigint") {
    return "I'm a bigint!";
  } else {
    return "I'm something else!";
  }
}

function isItTruthy(input) {
  return input ? "It's truthy!" : "It's falsey!";
}
