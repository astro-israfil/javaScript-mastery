const promiseOne = new Promise(function (resolve, reject) {
    // Time consuming task
    // DB connection, read or write files, crytographi etc

    setTimeout(function () {
        console.log("Async task is completed");
        resolve();
    }, 1000);
});

// promiseOne.then(function () {
//     console.log("Promise one consumed");
// })

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async task 2 completed");
//         resolve();
//     }, 1000);
// }).then(function () {
//     console.log("Promise 2 consumed");
// });

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 3 completed");
        resolve({username: "israfil", email: "israfil@somthing.com", password: "1234"});
    }, 1000);
});


// promiseThree.then(function (user) {
//     console.log("Promise three consumed");
//     console.log("result", user);
// });

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const error = false;
        if (!error) {
            resolve({username: "israfil", email: "israfil@something.com", password: "1234"});
        } else {
            reject("Error: somthig went wrong");
        }
    }, 1000);
});


promiseFour.then(function (user) {
    const username = user.username;
    return username;
}).then(function (username) {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log("The promise is either resolved or rejected");
});


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const error = false;
        if (!error) {
            resolve({username: "israfil", email: "israfil@something.com", password: "1234"});
        } else {
            reject("ERROR: something wrong happend");
        }
    }, 1000);
});



async function consumePromise() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise();


async function consumeUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.log(error);
    }
}

consumeUserData();