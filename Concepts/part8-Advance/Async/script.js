//example 1
// console.log("Start");
setTimeout(function display() {
    // console.log("async code");
}, 2000)

// console.log("end");

//example 2
console.log("staart");

setTimeout(function one() {
    console.log("one");

}, 3000);
setTimeout(function two() {
    console.log("two");

}, 2030);

console.log("end");

