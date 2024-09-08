const gitUserName = "Israfil";
const gitRepoCount = 30;

// String interpolation
// console.log(`My github account name is ${gitUserName} and I have ${gitRepoCount} repositories`);

const myString = new String("IsrafilIM");

// console.log(myString[5]);
// console.log(myString.length);

// console.log(myString.__proto__);

// console.log(myString.charAt(4));
// console.log(myString.indexOf('IM'));

// console.log(myString.startsWith("I"));
// console.log(myString.endsWith("M"));

// console.log(myString.includes("l"));

const substring = myString.substring(0, 5);
// console.log(substring);

const str = "          Hello       " ;

const trimedStr = str.trim();
// console.log(trimedStr);

const slicedMyString = myString.slice(-7, -2);
// console.log(slicedMyString);

const sentence = "The quick brown fox jums over the lazy dog";
const words = sentence.split(" ");
console.log(words);

const url = "https://israfil%20im.com";

console.log(url.replace('%20', '-'));