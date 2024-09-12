const numbers = [1, 2, 3, 4];

// const sumOfNumbers = numbers.reduce(function (accumulator, currentValue) {
//     console.log("accumulator", accumulator);
//     console.log("currentValue", currentValue);
//     return accumulator + currentValue;
// }, 0);

// console.log(sumOfNumbers);


const sumOfNumbers = numbers.reduce((acc, currVal) => acc + currVal, 0);

console.log(sumOfNumbers);