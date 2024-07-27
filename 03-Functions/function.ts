// function add(num) {
//   return num + 2;
// }
// add(2);

function add(num: number) {
  return num + 2;
}
add(2);

function getUpper(value: string) {
  return value.toUpperCase();
}

getUpper("hello");

function signUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {
  return { name, email, password, isPaid };
}

signUpUser("abc", "abc", "abc", true);

// optional
let loginUser = (email: string, name: string, isPaid?: boolean) => {};
loginUser("abc", "abc");

// return accurate value
function add1(num: number) {
  // return num + 2;
  return "hey";
}

// see in above example we need to return number but eventhough we give string it will accept but it should not accept.

// function add3(num: number) : number {
//   return "Hello";
// }

const getHello = (s: string): string => {
  return "Hello";
};

const heros = ["thor", "ironman", "spiderman"];

heros.map((item): string => {
  return `hero is ${item}`;
});

function consoleError(errMsg: string) : void {
  console.log(errMsg);
}

function newError(errMsg: string) : never {
  throw new Error(errMsg);
}

console.log(consoleError("Helloooooo"));






export {};
