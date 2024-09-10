const userEmail = "";

if (userEmail) {
    console.log("Yes we got the user email");
} else {
    console.log("You don't received an email");
}

// falsy value
// 0, -0, 0n, "", false, null, undefined, NaN 

// Truthy value
// "0", "false", " ", [], {}, function() {}



// Nullish coalescing operator (??): null, undefined 

let cartQuantity = null;
cartQuantity = cartQuantity ?? 10;
console.log(`You have ${cartQuantity} products in your cart`);


// Shortcircuit operator
let username = "";
username = username || "Anonymouse";
console.log(username);

const print = false;
print && console.log("Hello World!");



// Ternery operator
const age = 18;

age >= 18 ? console.log("You are eligible to drive") : console.log("You are not eligible to drive");