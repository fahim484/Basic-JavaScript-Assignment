  /************  JavaScript Basic Problem Solving  ***************/

// ! 1. Create a variable called carName, assign the value Volvo to it.
let carName = "Volvo";


// ! 2. On one single line, declare three variables with the following names and values:
let firstName = "John";
let lastName = "Doe";
let age = 35;


// ! 3. Use the correct assignment operator that will result in x being 50 (same as x = x * y).
let x = 10;
let y = 5;
x = x * y;
console.log(x); // Answer: 50


// ! 4. Use comments to describe the correct data type of the following variables:
let length = 16; // number data type
console.log(typeof length); // number data type

let lastName2 = "Johnson"; // string data type
console.log(typeof lastName2); // string data type

const z = {
    firstName: "John",
    lastName : "Doe"
} // object data type
console.log(typeof z); // object data type


// ! 5. Execute the function named myFunction.
function myFunction() {
    // alert("Hello World!"); // for browser use only
    console.log("Hello World!"); // for terminal(node.js) use only
}
myFunction();


// ! 6. Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").
const person = {
    name: "John",
    age : 50,
}
// alert(person.name + " is " + person.age); // for browser use only
console.log(person.name + " is " + person.age); // for terminal(node.js) use only


// ! 7. The <button> element should do something when someone clicks on it. Try to fix it!
// <button>Click me.</button> // Please Check in index.html file!!!


// ! 8. Array Related Question.
// ? (1) Alert the number of items in an array, using the correct Array property:
const cars = ["Volvo", "Jeep", "Mercedes"];
// alert(cars.length); // for browser use only
console.log(cars.length); // for terminal(node.js) use only

// ? (2) Change the first item of Brand to "Ford".
const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";
console.log(Brand);


// ! 9. Math Related Problems.
// ? (1) Use the correct Math method to create a random number.
let f = Math.random();
console.log(f);

// ? (2) Use the correct Math method to return the largest number of 10 and 20.
let l = Math.max(10, 20);
console.log(l);

// ? (3) Use the correct Math method to get the square root of 9.
let sqrt = Math.sqrt(9);
console.log(sqrt);


// ! comparison operator related problems!
// ? (1) Choose the correct comparison operator to alert true, when x is greater than y.
let x1 = 10;
let y1 = 5;
// alert(x > y); // for browser use only
console.log(x > y); // for terminal(node.js) use only

// ? (2) Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
let age1 = 24;
if (age1 < 18) {
    // alert("Too Young"); // for browser use only
    console.log("Too Young"); // for terminal(node.js) use only
}else {
    // alert("Old Enough"); // for browser use only
    console.log("Old Enough"); // for terminal(node.js) use only
}