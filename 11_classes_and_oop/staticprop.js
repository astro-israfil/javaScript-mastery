class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    logMe () {
        console.log(`Username is ${this.username}`);
    }

    static createdId() {
        return '123';
    }
}

const user = new User("Israfil", "israfil@unknown.com");

console.log(user.createdId());