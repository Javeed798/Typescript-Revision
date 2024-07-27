const User = {
  name: "Javeed",
  email: "javeedsharif@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "Javeed", isPaid: false });

function createCourse(): { name: string; price: number } {
  return { name: "Reactjs", price: 345 };
}

// weird behaviour
// as u see in createUser we dont have email but yet we can pass email.
let newUser = {name: "Javeed", isPaid: false,email: "h@gmail.com" }
createUser(newUser);


export {};
