interface User {
  name: string;
}
interface User {
  age: number;
}
let a: User = {
  name: "John",
  age: 33,
};

// type User = {
//   name: string;
// }

interface User1<Age extends number> {
  age: Age;
}
// interface User1<Age extends string> {
//   age: Age;
// }

export {};
