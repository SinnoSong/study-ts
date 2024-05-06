// let a: object = {
//     b: "x"
// }
let a = {
  b: "X",
};
a.b;
// a = {}
// a = {
//     b:"x",
//     c:"y"
// }
let b = {
  c: {
    d: "F",
  },
};
const c: {
  firstName: string;
  lastName: string;
} = {
  firstName: "John",
  lastName: "Doe",
};

class Person {
  constructor(public firstName: string, public lastName: string) {}
}
let newPerson = new Person("John", "Doe");

let i: number;
// let j = i * 3

let obj: {
  b: number;
  c?: string;
  [key: number]: boolean;
};

obj = { b: 1 };
obj = { b: 1, c: undefined };
obj = { b: 1, c: "" };
obj = { b: 1, 0: true };
obj = { b: 1, 0: true, 10: false };
// obj = { 10: true };
// obj = { b: 1, 33: "red" };

let airplaneSeatingAssignments: {
  [seatNumber: string]: string;
} = {
  "3d": "John",
  "6b": "Zoe",
};

let user: {
  readonly firstName: string;
} = {
  firstName: "abby",
};

user.firstName;
// user.firstName = "jane";

export {};
