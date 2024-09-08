const friendsArray1 = ["Abdullah", "Omar", "Walid"];
const friendsArray2 = ["Alyssa", "Kavin", "Andrew"];

// friendsArray1.push(friendsArray2);

// console.log(friendsArray1);
// console.log(friendsArray1[3][0]);

const allFriends = friendsArray1.concat(friendsArray2);
// console.log(allFriends);

const allNewFriends = [...friendsArray1, ...friendsArray2]; // Spreading arrays

// console.log(allNewFriends);

const nestedNumbersArray = [1, 2, 3, [4, 5, 6], 7, 8];

const flatNumbersArray = nestedNumbersArray.flat(Infinity);
console.log(flatNumbersArray);


console.log(Array.isArray("Israfil"));
console.log(Array.from("Israfil"));
console.log(Array.from({name: "Alyssa"})); // -> [] empty array

let score1 = 20;
let score2 = 30;
let score3 = 40;

console.log(Array.of(score1, score2, score3));