// Singleton
// Object.create 

// Object literal

const mySymb = Symbol('id123');
const user = {
    [mySymb]: "1dfaqw123343fdf",
    name: "Israfil",
    "full name": "Israfil Mallick",
    email: "israfil@microsoft.com",
    age: 18,
    isLoggedIn: false,
    role: ['admin', 'moderator']
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mySymb]);

user.email = "israfil@machine.com";

// console.log(user);

// Object.freeze(user);

user.email = "israfil@google.com";
// console.log(user);

user.greeting = function () {
    console.log(`Hello coder ${this.name}`);
}

user.greeting();