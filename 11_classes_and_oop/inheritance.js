class User {
    constructor (username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    } 
    logMe () {
        console.log("Username is ", this.username);
    }
}

class Teacher extends User {
    isCourseAvailable;
    constructor (username, email, password, courseList=[]) {
        super(username, email, password);
        this.isCourseAvailable = Boolean(courseList.length && true);
        this.courseList = courseList;
    }

    addCourse (courseName) {
        this.courseList = [...this.courseList, courseName];
    }
}

const israfil = new Teacher("israfil", "israfil@unknown.com", "123", ["JavaScript", "React"]);

israfil.addCourse("Python");
console.log(israfil);

const dianna = new User("dianna", "dianna@unknown.com", "123");
dianna.logMe();
israfil.logMe();