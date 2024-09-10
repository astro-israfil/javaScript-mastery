function sayHello() {
    console.log("Hello");
}

// sayHello();
// sayHello();

// function with parameters
// function greetUser(username){
//     if (!username) {
//         console.log("Please enter a username");
//         return;
//     }
//     console.log(`Hello programmer, ${username}`);
// }

// function with default parameter
function greetUser(username = "Anonymous"){
    // if (!username) {
    //     console.log("Please enter a username");
    //     return;
    // }
    console.log(`Hello programmer, ${username}`);
}

// greetUser("Israfil");
// greetUser("Sophia");
// greetUser();

function addTwoNumbers(number1, number2) {
    // console.log(number1 + number2);
    const result = number1 + number2;
    return result;
}

const result = addTwoNumbers(10, 5);

// console.log(result);



// function rest parameters
function calculateCartPrice(num1, ...nums) {
    console.log(num1);
    return nums;
}

console.log(calculateCartPrice(100, 300, 700));


const userObj = {
    username: "Sophia",
    cartQuantity: 5,
    price: 599,
}

// function handleUserDetails(userObj) {
//     console.log(`${userObj.username} has ${userObj.cartQuantity} product in cart. and total product price is ${userObj.price}`);
// }


function handleUserDetails({username, cartQuantity, price}) {
    console.log(`${username} has ${cartQuantity} product in cart. and total product price is ${price}`);
}

handleUserDetails(userObj);
handleUserDetails({username: "alyssa", cartQuantity: 40, price: 999});