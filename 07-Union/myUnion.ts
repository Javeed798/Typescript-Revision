// combination of many data types

let score : number | string = 44;

score = 55;

score = "55";

type User1 ={
  name : string
  id : number
}

type Admin = {
  username : string
  id : number
}

let javeed : User1 | Admin = {
  name : "Jav",
  id : 3
}

javeed = {
  username: "jav",
  id : 3
}



function getDbId (id:string | number) {
  return `Hey its my ${id}`
}

getDbId(3);
getDbId("3")


function getId(id:number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    
  }


}



const data : number[] | string[] = []; // it can either array or string

// to have both of them
const data1 : (number | string)[] = [];

data1.push("4",3);

let pi: 3.14 = 3.14;

// pi = 3.145 not worked.

let seatAllotment : "aisle" | "window" | "middle"

seatAllotment = "aisle";
// seatAllotment = "crew"  error cozz crew doesnt exist in type. 










