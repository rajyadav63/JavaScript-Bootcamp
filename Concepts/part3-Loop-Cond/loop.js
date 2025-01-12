/* while loop that take sum of number from 1 to 5
 */
// let sum = 0;
// let i = 1;
// while (i <= 5) {
//   sum = sum + i;
//   i++;
// }
// console.log(sum);

//2. while loop that counts down fro 5 to 1 and store that number in array
let i = 5;
let arr = [];
while (i >= 1) {
  arr.push(i);
  i--;
}
// console.log(arr);

/*
3. Write a do-while loop that prompts a user to enter thier fav tea until they enter "stop"
Store each tea type in array called teaCollection
*/
// let teaCollection = [];
// let teaType;

// do {
//   teaType = prompt("Enter fav tea");

//   if (teaType != "stop") {
//     teaCollection.push(teaType);
//   }
// } while (teaType != "stop");

// console.log(teaCollection);

/*
4. Write a for loop that multiplies each element in the array [2,3,4] by 2 and store in new array
*/

let array = [2, 3, 4];
let n = array.length;
let newArr = [];
for (let i = 0; i < n; i++) {
  newArr.push(array[i] * 2);
}
// console.log(newArr);

/* 
6. Write a for loop that list all the cities in the array [Paris, new York, Tokyo, London] and stores each city in a new array named cityList
*/

let cities = ["Paris", "new York", "Tokyo", "London"];
let cityList = [];
for (let i = 0; i < cities.length; i++) {
  cityList.push(cities[i]);
}
console.log(cityList);
