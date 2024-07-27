let user: (string | number)[] = ["1", 1];

// define the types in order this is what tuples means.

let t_user: [string, number, boolean];
t_user = ["anc", 123, true];

let rgb: [number, number, number] = [255, 255, 255];

type User = [number, string];

const newUser1: User = [113, "abc@gmail.com"];
newUser1[1] = "haha@gmail.com";
newUser1[0] = 32;

// newUser1.push(true); will not worked
newUser1.push("1",4,4,"soidgoig")

export {};
