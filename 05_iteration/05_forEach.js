const coding = ["Python", "JavaScript", "Ruby", "CPP", "Swift"];

// coding.forEach( function (item) {
//     console.log(item);
// } );


// function printMe(item) {
//     console.log(item);
// } 

// coding.forEach(printMe);


// coding.forEach((item) => console.log(item));

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})