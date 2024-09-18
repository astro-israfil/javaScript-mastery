const user = {
    username: "israfil",
    email: "israfil@gmail.com",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log(`Username is ${this.username}`);
        console.log(this);
    }
}

// user.getUserDetails();

function User(username, email, loginCount, isLoggedIn) {
    this.username = username;
    this.email = email;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const userOne = new User("Israfil", "israfil@ist.com", 5, true);
// console.log(userOne);

const userTwo = new User("Karolina", "karolina@somthing.com", 10, false);

console.log(userOne instanceof User);
console.log(User.prototype);