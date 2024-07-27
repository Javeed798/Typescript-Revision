"use strict";
// function add(num) {
//   return num + 2;
// }
// add(2);
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    return num + 2;
}
add(2);
function getUpper(value) {
    return value.toUpperCase();
}
getUpper("hello");
function signUpUser(name, email, password, isPaid) {
    return { name: name, email: email, password: password, isPaid: isPaid };
}
signUpUser("abc", "abc", "abc", true);
// optional
var loginUser = function (email, name, isPaid) { };
loginUser("abc", "abc");
// return accurate value
function add1(num) {
    // return num + 2;
    return "hey";
}
// see in above example we need to return number but eventhough we give string it will accept but it should not accept.
// function add3(num: number) : number {
//   return "Hello";
// }
var getHello = function (s) {
    return "Hello";
};
var heros = ["thor", "ironman", "spiderman"];
heros.map(function (item) {
    return "hero is ".concat(item);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
console.log(consoleError("Helloooooo"));
