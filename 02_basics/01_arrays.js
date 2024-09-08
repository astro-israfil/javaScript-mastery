const myArray = [0, 1, 2, 3, 4, 5];

console.log(myArray);

const languages = ["JavaScript", "Python", "Kotlin", "Dart", "Swift"];

// console.log(languages[1]);
// console.log(languages.length);

// myArray.push(6);
// myArray.push(7);
// console.log(myArray);

// myArray.pop();
// myArray.pop();
// console.log(myArray);

// myArray.unshift(10);
// console.log(myArray);

// myArray.shift();
// console.log(myArray);

// const myArrayString = myArray.toString();
const myArrayString = myArray.join();
console.log(myArrayString);

const myArrayPortionCopy = myArray.slice(1, 4);
console.log(myArrayPortionCopy);
console.log("After slice", myArray);

const myArrayPortion = myArray.splice(1, 3);
console.log(myArrayPortion);
console.log("After splice", myArray);