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
  // if i dont wanna declare the below fields i can us like public inside the constructor..
  // name: string;
  // age: number;
  // readonly city: string = "Bangalore";
  private readonly city: string = "Bangalore";

  // private _courseCount = 1;
  // if we use protected it can be used in its classes and also to those where it is inherited. 
  protected _courseCount = 1;

  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  get getAppleName(): string {
    return `Apple ${this.name}`;
  }

  get getCourseCount(): number {
    return this._courseCount;
  }

  // setters wont have any return type
  set setCourseCount(newCount: number) {
    if (newCount <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = newCount;
  }
  // private methods
  private deleteToken() {
    console.log("Delete Token");
    
  }
}


class SubUser extends User {
  isFamily : boolean = true

  changeCourseCount() {
    this._courseCount = 4;
  }
}

const javeed = new User("javee", 23);
// javeed.city = "Bangalore";
javeed.setCourseCount = 5;

console.log(javeed);


