// same or similar to type

type User21 = {
  email: string;
  userId: number;
};

interface User2 {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User2 {
  githubToken: string;
}

interface Admin extends User2 {
  role: "admin" | "ta" | "learner";
}

let javeed: Admin = {
  dbId: 3,
  email: "hello",
  userId: 2,
  startTrail: () => {
    return "Hello";
  },
  getCoupon: (name: "Javeed", off: 3) => {
    return 4;
  },
  githubToken: "1234",
  role: "ta",
};

export {};
