"use strict";

/*
function greet(name) {
  console.log(`Hello, ${name}`);
}

greet("Jim");

// testing undefined as a return
function doSomething() {
  console.log("doing something...");
}

let result = doSomething();
console.log(result); // prints in console "undefined" as the default of return is "undefined"

// returning a specific value
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(3, 4)); // prints 7

// anonymous function
const sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(3, 4));

// dealing with default arguments for functions
function greetings(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greetings(); // Hello, Guest!
greetings("Anna"); // Hello, Anna!


// dealing with Arrow Functions =>

function greet(name) {
  console.log(`Hello, ${name}`);
}

const greetings = (name) => {
  console.log(`Hello, ${name}!`);
};

const calculateArea = (width, height) => width * height;

console.log(calculateArea(5, 3));

// global, local and block scope

function greet() {
  let message = "Hello, local scope!";
  console.log(message);
}

greet();
console.log(message); // this will throw an error as message is in the local scope of the function and can't be accesses in a global scope

// block scope is defined by the curly braces {}, usually in if statements, for loops and while loops.

if (true) {
  let blockVar = "I'm in a block";
  console.log(blockVar); // this will print the string
}

console.log(blockVar); // this will throw an error, however, if it was a VAR variable, it could be accessed


let greeting = "hello";
let firstTwo = greeting[0] + greeting[1];
console.log(firstTwo);

let poem =
  "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);

let statement = 'She said, "Hello!"';
console.log(statement);

let quote = "It's a beautiful day!";
console.log(quote);

let firstName = "Alice";
let greeting = `Hello, ${firstName}`;
console.log(greeting);

let poem = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;

console.log(poem);

let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("awesome!");
console.log(position); // 14


let maskEmailTest = "user@gmail.com";

let findUser = maskEmailTest.indexOf("@");
console.log(maskEmailTest.slice(0, 4));

function maskEmail(email) {
  let findUser = email.indexOf("@");
  let username = email.substring(0, findUser);

  let maskedUsername =
    username[0] +
    "*".repeat(username.length - 2) +
    username[username.length - 1];

  let domain = email.substring(findUser);
  return maskedUsername + domain;
}

let email = "testemail@gmail.com";
console.log(maskEmail(email));
*/

let userName = prompt("What is your name?", "Guest");
console.log(userName);

let age = prompt("How old are you?");
if (age !== null) {
  console.log("You are " + age + " years old.");
} else {
  console.log("User canceled the prompt.");
}
