class User {
    constructor (username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    get username () {
        return this._username.toUpperCase();
    }

    set username (value) {
        this._username = value;
    }

    get password () {
        return this._password
    }

    set password (value) {
        this._password = value + "ac2a3eextraencryption"; 
    }
}


const user1 = new User('israfil', 'israfil@gmail.com', '123');

user1.password = "098"
console.log(user1);
console.log(user1.username);