const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

const user = {
    username: "israfil",
    email: "israfil@fb.com",
    isLoggedIn: false,
    loginCount: 10,
}

console.log(Object.getOwnPropertyDescriptor(user, "username"));

Object.defineProperty(user, "username", {
    writable: false,
    enumerable: true,
});

// user.username = "dianna";

for (const [key, value] of Object.entries(user)) {
    console.log(`${key}:: ${value}`);
}
