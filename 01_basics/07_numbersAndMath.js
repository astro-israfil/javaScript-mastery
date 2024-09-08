const score = 100;

console.log(score);

const balance = new Number(400);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 1123.867;

console.log(otherNumber.toPrecision(3));



// ______________________________Math_________________________________

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(-2));
// console.log(Math.sqrt(25));
// console.log(Math.floor(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.round(4.5));
// console.log(Math.min(1, 3, 4));
// console.log(Math.max(2, 4, 5));

console.log(Math.random());

console.log(Math.floor(Math.random() * 10) + 1);

/// Generate random number of a specified range
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min)) + min);