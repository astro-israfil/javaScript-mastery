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

console.log(typeof languages);