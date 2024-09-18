const myName = "Israfil         ";
const myFriend = "Abdullah     ";

// console.log(myName.length);
// console.log(myName.trueLength);

const heros = ["Ironman", "Spiderman"];

const herosPower = {
    ironman: "flying suite",
    spiderman: "sling",
}

Object.prototype.israfil = function () {
    console.log("Israfil is available here");
}

// This method only be availables in arrays
Array.prototype.heyIsrafil = function () {
    console.log("Hey Israfil!");
}

// myFriend.israfil();
// heros.israfil();
// myFriend.heyIsrafil();
// heros.heyIsrafil();
// herosPower.israfil();


// inheritence
const User = {
    username: "israfil",
    email: "israfil@gmail.com",
    isLoggedIn: true
}

const Teacher = {
    makeVideo: true,
};

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);


let firstName = "Israfil      ";

String.prototype.trueLength = function () {
    console.log(`The true length of ${this} is ${this.trim().length}`);
}

firstName.trueLength();

"Karolina".trueLength();
"dianna".trueLength();