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

let userName = prompt("What is your name?", "Guest");
console.log(userName);

let age = prompt("How old are you?");
if (age !== null) {
  console.log("You are " + age + " years old.");
} else {
  console.log("User canceled the prompt.");
}

const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if (
    creditScore >= minCreditScoreForDuplex &&
    annualIncome >= minIncomeForDuplex
  ) {
    return "You qualify for a duplex, condo, and car loan.";
  } else if (
    annualIncome >= minIncomeForCondo &&
    creditScore >= minCreditScoreForCondo
  ) {
    return "You qualify for a condo and car loan.";
  } else if (
    annualIncome >= minIncomeForCar &&
    creditScore >= minCreditScoreForCar
  ) {
    return "You qualify for a car loan.";
  } else {
    return "You don't qualify for any loans.";
  }
}

let duplexLoanMsg = getLoanMessage(85000, 850);
let condoLoanMsg = getLoanMessage(65000, 690);
let carLoanMsg = getLoanMessage(45000, 660);
let noLoanMsg = getLoanMessage(25000, 550);

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);


function convertCtoF(cels) {
  return cels * (9 / 5) + 32;
}

console.log(convertCtoF(-30));

let count = 0;

function cc(card) {
  if (card >= 2 && card <= 6) {
    count += 1;
  } else if (card >= 7 && card <= 9) {
    count += 0;
  } else if (
    card === 10 ||
    card === "J" ||
    card === "Q" ||
    card === "K" ||
    card === "A"
  ) {
    count -= 1;
  }

  if (count > 0) {
    return `${count} Bet`;
  } else {
    return `${count} Hold`;
  }
}

cc(8);
cc(4);
console.log(cc(7));
*/
