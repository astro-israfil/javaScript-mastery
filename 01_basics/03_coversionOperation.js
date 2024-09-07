let score = "33";

// console.log(typeof score);

let scoreInNumber = Number(score);

// console.log(typeof scoreInNumber);
// console.log(scoreInNumber);

// "33" -> 33
// "" -> 0
// "israfil" -> NaN
// null -> 0
// true -> 1



let isLoggedIn = 0;

// console.log(typeof isLoggedIn);

let isLoggedInBool = Boolean(isLoggedIn);

// console.log(isLoggedInBool);

// "something" -> true
// "" -> false
// 0 -> false



let randomString = undefined;

// console.log(typeof randomString);

let randomStringInTypeString = String(randomString);

// console.log(typeof randomStringInTypeString);
// console.log(randomStringInTypeString);




////////////          Operations               ///////////////

// Arithmetic Operations

// console.log(2 + 2);
// console.log(5 - 10);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(10 / 3);
// console.log(10 % 3);

let firstName = "Israfil";
let lastName = " Mallick";

let fullName = firstName + lastName;
// console.log(fullName);


// console.log("2" + "2");
// console.log("2" + 2);
// console.log(2 + "2");
// console.log(1 + 2 + "2");
// console.log("1" + 2 + 2);

// console.log(+true); // 1
// console.log(+false); // 0


// Post increment and pre increment

let x = 10;
let y = x++; // incrementing x's values after assignment

console.log(x, y); // 11 10

let i = 10;
let j = ++i; // incremeting x's values before assignment

console.log(i, j);