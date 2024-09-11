const friends = ["Omar", "Osman", "Walid", "Abdullah", "Musa"];

for (const friend of friends) {
    // console.log(friend);
}

const greeting = "Hello worlds!";

for (const greet of greeting) {
    // console.log(greet);
}

const user = {
    name: "Israfil",
    age: 20,
    isLoggedIn: false,
};

for (const [key, value] of Object.entries(user)) {
    console.log(`${key} :: ${value}`);
}


// _________________________Map_______________________________

const map1 = new Map();
map1.set("BD", "Bangladesh");
map1.set("USA", "United States of America");
map1.set("UAE", "United Arab Emirates");

console.log(map1.size);
console.log(map1);
console.log(map1.keys());
console.log(map1.values());

for (const [key, value] of map1) {
    // console.log(`${key} :: ${value}`);
}