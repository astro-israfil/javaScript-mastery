// Primitive

// 7 types: Number, String, BigInt, Boolean, null, undefined, Symbol

let score = 100;
let myName = "Israfil";
let bigNumber = 39545465624566551n
let isLoggedIn = true;
let temperature = null;
let userState;

let id = Symbol('123');
let anotherId = Symbol('123');

// console.log(id === anotherId);




// Reference (Non primitive)

// Array, Object, Function

const languages = ["JavaScript", "Python", "C++"];

const userObj = {
    name: "Israfil",
    age: 22,
};

const greeting = function () {
    console.log('Hello world');
}

// console.log(typeof languages);




//___________________________________________________________________________________________________



// Stack (Primitive) and Heap (Non-Primitive)

let myValueOne = 10;
let myValueTwo = myValueOne;

// console.log(myValueTwo);

myValueTwo = 20;

// console.log("myValueOne", myValueOne);
// console.log("myValueTwo", myValueTwo);

const myObjOne = {
    username: "Israfil",
    age: 20,
};

const myObjTwo = myObjOne;

console.log("myObjTwo", myObjTwo);

myObjTwo.username = "alyssa";

console.log("myObjTwo", myObjTwo);
console.log("myObjOne", myObjOne);
