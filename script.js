// Write a function that uses Math.min() and Math.max() to limit a number within a given range (e.g., between 1 and 10).
console.log(Math.min(1, 2, 3, 4, 5, 7, 6));
console.log(Math.max(1, 2, 3, 4, 5, 7, 6));

// What result would you get from Math.floor(Math.random() * 5) + 5, and what range does this expression cover?
console.log(Math.floor(Math.random() * 5) + 5);
// If you wanted to round a number up to the nearest integer only if it has a fractional part (e.g., 5.1 to 6 but 5.0 remains 5), which function(s) could you use?
console.log(Math.ceil(5.1));
console.log(Math.ceil(5.0));
// How would you use destructuring to assign the first two elements of an array [10, 20, 30, 40] to variables a and b?
var arr = [10, 20, 30, 40];
var [a, b] = arr;
console.log(a);
console.log(b);
// Given an object { name: "Alice", age: 25, city: "New York" }, how would you use destructuring to assign name and age to variables?
let obj = {
  name: "Alice",
  age: 25,
  city: "New York",
};
let { name, age } = obj;
console.log(name);
console.log(age);
// Using nested destructuring, how would you extract the city property from this object: { person: { name: "Eve", address: { city: "Paris" } } }?

const object = {
  person: {
    name: "Eve",
    address: {
      city: "Paris",
    },
  },
};

const {
  person: {
    address: { city },
  },
} = object;

console.log(city);
// How would you use the spread operator to combine two arrays, [1, 2, 3] and [4, 5, 6], into a single array?
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);
// Given the function function sum(...numbers) {}, explain how the rest operator can be used in this function to calculate the sum of an arbitrary number of arguments.

function sum(...numbers) {
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result;
}
console.log(sum(10, 20, 30, 40, 50));
// How can you use the spread operator to clone an object { name: "John", age: 30 } into a new object with an additional city property?

var ob1 = { name: "John", age: 30 };
const ob2 = {
  ...ob1,
  city: "New York",
};

console.log(ob2);
