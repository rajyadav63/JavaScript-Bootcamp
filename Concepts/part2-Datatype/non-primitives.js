//Object

const std = {
  name: "Razz",
  clg: "KIIT",
  "user name": "rktweets", //key with space must be in ''
};

// console.log(std.name);
// console.log(std.clg);
// console.log(std["user name"]);
// console.log(std);

//Array
let arr = [1, 2, 3, 4, 5];
// console.log(arr[2]);

//type conversion

let num = 4;
// console.log(4 + "3"); //43-> num get converted to string and concatenated it
// console.log(4 - 3); //1-> string get converted to num

// console.log(4 + undefined); //NaN
let val = null;
// console.log(Number(null)); //0

let isTrue = true;
console.log(Number(isTrue)); //1-> true get converted into 1
let isFalse = false;
console.log(Number(isFalse)); //1-> false get converted into 0
