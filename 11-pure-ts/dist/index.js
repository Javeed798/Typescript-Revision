"use strict";
// console.log("Type Script Here");
// console.log("Check Check");
// class User {
//   name: string;
//   age: number;
//   readonly city: string = "Bangalore";
//   private readonly city: string = "Bangalore";
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // if i dont wanna declare the below fields i can us like public inside the constructor..
        // name: string;
        // age: number;
        // readonly city: string = "Bangalore";
        this.city = "Bangalore";
        // private _courseCount = 1;
        // if we use protected it can be used in its classes and also to those where it is inherited. 
        this._courseCount = 1;
        this.name = name;
        this.age = age;
    }
    get getAppleName() {
        return `Apple ${this.name}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    // setters wont have any return type
    set setCourseCount(newCount) {
        if (newCount <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = newCount;
    }
    // private methods
    deleteToken() {
        console.log("Delete Token");
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const javeed = new User("javee", 23);
// javeed.city = "Bangalore";
javeed.setCourseCount = 5;
console.log(javeed);
