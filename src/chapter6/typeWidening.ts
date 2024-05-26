let a = "x"; //string
let b = 3; //number
var c = true; //boolean
const d = { x: 3 }; // {x:number}

enum E {
  X,
  Y,
  Z,
}

let e = E.X; // E

const a1 = "x"; // x
const b1 = 3; // 3
const c1 = true; // true
const d1 = { x: 3 }; // {x:3}
const e1 = E.X; // E.X

let a2: "x" = "x"; // x
let b2: 3 = 3; // 3
let c2: true = true; // true
let d2: { x: 3 } = { x: 3 }; // {x:3}

let a3 = null; // any
a3 = 3; // any
a3 = "b"; // any

function x() {
  let a = null;
  a = 3;
  a = "b";
  return a;
}
x(); //string

// const

let a4 = { x: 3 }; // {x:number}
let b4: { x: 3 }; // {x:3}
let c4 = { x: 3 } as const; //{readonly x:3}
let d4 = [1, { x: 2 }]; //(number|{x:number})[]
let e4 = [1, { x: 2 }] as const; //(1|{x:2})[]

export {};
