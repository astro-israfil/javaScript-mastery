const myDate = new Date();
console.log(myDate.toString());

console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

// console.log(new Date(8.64e15).toLocaleDateString()); // Maximum date rage
const myAnotherDate = new Date();

// console.log(myAnotherDate.getTime() - myDate.getTime());


console.log(myDate.getTime()); // getting timestamp
const myTimeStamp = Date.now(); // getting timestamp

console.log(myTimeStamp);