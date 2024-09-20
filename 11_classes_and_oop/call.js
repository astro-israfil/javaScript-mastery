function createUserName(username) {
    this.username = username;
}

function createUser(username, email, password) {
    createUserName.call(this, username); // take execution context of another function as won context
    this.email = email;
    this.password = password;
}

const user = new createUser("israfil", "israfil@fbi.com", "1234");
console.log(user);
