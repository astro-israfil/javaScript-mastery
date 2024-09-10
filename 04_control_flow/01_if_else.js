const temperature = 41;

if (temperature < 50) {
    console.log("Temperature is less than 50");
} else {
    console.log("Temperature is greater than 50");
}

const score = 100;

if (score >= 100) {
    const power = "fly";
    console.log(`You got the power of ${power}`);
}
// console.log(`You got the power of ${power}`);

const marks = 100;

if (marks > 80) {
    console.log('A+');
} else if (marks > 70) {
    console.log("A");
} else if (marks > 60) {
    console.log("A-");
} else if (marks > 50) {
    console.log("B")
} else if (marks > 40) {
    console.log("C");
} else if (marks > 30) {
    console.log("D");
} else {
    console.log("F");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInWithGoogle = false;
const loggedInWithFacebook = true;

if (userLoggedIn && debitCard) {
    console.log("User can shop here.");
}


if (loggedInWithFacebook || loggedInWithGoogle) {
    console.log("User logged in");
} 