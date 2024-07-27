type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: "", email: "", isActive: false };
}

createUser({ name: "", email: "", isActive: false });

// readonly
type User1 = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser1: User1 = {
  _id: "124",
  email: "h@gmail.com",
  name: "a",
  isActive: false,
};

myUser1.email = "kjfbkf@gmail.com";

type cardNumber = {
  cardnumber: number;
};

type cardDate = {
  card_date: number;
};

type cardDetails = cardDate &
  cardNumber & {
    cvv: number;
  };

export {};
