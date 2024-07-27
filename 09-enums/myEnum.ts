// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

// yeah we can write const to enum as well because the code generated for enums when converting to ts to js is too huge as it undergoes iffy(immediately invoked function) soo to avoid them we use this const for the enums. it will give one liner.
// values will start from 0
const enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW
}

// give my own values
enum SeatChoice1 {
  AISLE = 10,
  MIDDLE,
  WINDOW
}

// give my own values for remaining as well
enum SeatChoice2 {
  AISLE = 10,
  MIDDLE = 22,
  WINDOW = 33
}

// we can give strings as well

// give my own values
enum SeatChoice3 {
  AISLE = "aisle",
  MIDDLE = "middle",
  WINDOW = "windoew"
}

// give my own values
enum SeatChoice4 {
  AISLE = "aisle",
  MIDDLE = 3,
  // below value will get 4 automatically
  WINDOW,
}

const seat = SeatChoice.AISLE;




















