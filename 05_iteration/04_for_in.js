const friends = ["Omar", "Osman", "Abdullah", "Musa", "Walid"];

for (const key in friends) {
    // console.log(key);
    // console.log(friends[key]);
}

const greeting = "Hello World!";

for (const index in greeting) {
    // console.log(greeting.charAt(index));
}

const user = {
    name: "Israfil",
    language: "Bangla",
    country: "Bangladesh",
};


for (const key in user) {
    // console.log(key, ":");
    // console.log(user[key]);
}

const map1 = new Map();
map1.set("name", "Israfil");
map1.set("language", "Bangla");
map1.set("country", "Bangladesh");

console.log(map1);

// for (const key in map1) {
//     console.log(key);
// }

// ! We can't loop through the map using for in loop