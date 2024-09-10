// Immidiately Invoked Function Expression 

(function aFunction() {
    console.log("DB connected");
})();

((name) => {
    console.log("DB Connected Two", name);
})("Israfil");