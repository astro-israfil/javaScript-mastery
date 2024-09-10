const tinderUser = new Object();
tinderUser.id = "tin1323";
tinderUser.email = "israfil@google.com";
tinderUser.isLoggedIn = true;

console.log(tinderUser);

const obj1 = {a: "Israfil", b: "Alyssa"};
const obj2 = {c: "Karolina", d: "Andrew"};

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};

// console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty("email"));

const course = {
    name: "JavaScript Mastery",
    courseInstructor: "Israfil",
    price: 999,
};


const {name, courseInstructor: instructor} = course;

console.log(name, instructor);