const user = {
    username: "Israfil",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Karolina";
// user.welcomeMessage();

// this keyword refers to the current context


// console.log(this); // Global object 



// function myFunction() {
//     console.log(this);
// }

// myFunction();


const myFunction = () => {
    console.log(this);
}

// myFunction();

// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwoNumbers(10, 20));

// const addTwoNumbers = (num1, num2) => num1 + num2;

// console.log(addTwoNumbers(40, 20));

const addTwoNumbers = (num1, num2) => (num1 + num2);

console.log(addTwoNumbers(40, 20));


// Implicitly returning object
const getUserDetails = (username) => ({username, isLoggedIn: false, status: "active"});
console.log(getUserDetails("Israfil"));