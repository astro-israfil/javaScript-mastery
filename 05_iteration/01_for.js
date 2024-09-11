for (let index = 0; index <= 10; index++) {
    // const element = index;
    // console.log(element);
}

const friends = ["Osman", "Abdullah", "Omar", "Walid"];

for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend === "Omar") {
        // console.log("Call Omar");
    }
    // console.log(friend);
}


for(let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    console.log(friend);
    if (friend == "Omar") {
        break;
    }
}

for(let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend == "Omar") {
        console.log("Found Omar");
        continue;
    }
    console.log(friend);
}