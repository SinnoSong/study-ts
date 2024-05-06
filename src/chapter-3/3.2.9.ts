// type alias

type Age = number;
type Person = {
  name: string;
  age: Age;
};
let age: Age = 55;
let driver: Person = {
  name: "James",
  age: age,
};

type Color = "red";
// type Color = "blue";

let x = Math.random() < 0.5;
if (x) {
  type Color = "blue";
  let b: Color = "blue";
} else {
  let c: Color = "red";
}

// 交集 并集

type Cat = { name: string; purrs: boolean };
type Dog = { name: string; barks: boolean; wags: boolean };
type CatOrDogOrBoth = Cat | Dog;
type CatAndDog = Cat & Dog;

// Cat
let a: CatOrDogOrBoth = {
  name: "kitty",
  purrs: true,
};

// Dog
let dog: CatOrDogOrBoth = {
  name: "Domino",
  barks: true,
  wags: true,
};

let both: CatAndDog = {
  name: "Donkeys",
  barks: true,
  purrs: true,
  wags: true,
};

type Returns = string | null;
function trueOrNull(isTrue: boolean): Returns {
  if (isTrue) {
    return "true";
  }
  return null;
}
function strOrNum(a: string, b: number) {
  return a || b;
}
export {};
