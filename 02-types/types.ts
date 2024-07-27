/*
  Number,
  String
  Boolean

  Null
  Undefined
  Void
  Object
  Array
  Tuples
  Any
  Never
  Unknown
*/  

// !syntax
// let variableName : type = value;
let name: string = "Javeed";
let num : number = 5;

console.log(name + " " + num);

// number
let userId:number = 444444;

// boolean

let isLoggedIn: boolean = false;

// Type inference
let userId1 = 2345;
// userId1 = "qewrt" cannot possible...........


// any keyword
let hero;
function getHero() {
  return "hello";
}
hero = getHero(); //  hover on hero u get any..

// noImplicitAny => inside config file we can add it there.


export {};
