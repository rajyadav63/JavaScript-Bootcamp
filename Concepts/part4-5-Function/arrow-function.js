//Normal Syntax
// () => ???
/*
const myFunction = (param1, param2, ...) => {
  // function body
}
  */

// How to Convert a Regular Function to an Arrow Function Easily

function greetings(name) {
  return `Hello, ${name}!`;
}
/*
// step 1: replace function with const
const greetings(name){
  return `Hello, ${name}!`;
}

// step 2: add = after the function name
const greetings = (name) {
  return `Hello, ${name}!`;
}

// step 3: add => after the parentheses
const greetings = (name) => {
  return `Hello, ${name}!`;
}
  */
