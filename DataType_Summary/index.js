// Primitive (Call By Value)

// Number
// String
// Boolean
// null
// undefined
// Symbol
// BigInt

let userName = "Zeeshan";

const score = 100;
const scoreValue = 100.12;

const isLoggedIn = Boolean;

const outSideTemp = null;

let useEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);
// Yeh value donoh different aayega kyo ki yeh unique hota hai

// Non Primitive (Call By Reference)

// Array
// Object
// Function

const heros = ["Shaktiman", "Doga", "NaagRaj"];

let myObj = {
  name: "Zeeshan",
  age: 25,
};

const myFunction = function () {
  console.log("Hello Zeeshan");
};
