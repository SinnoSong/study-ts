// type Sushi = {
//   calories: number;
//   salty: boolean;
//   tasty: boolean;
// };
interface Sushi {
  calories: number;
  salty: boolean;
  tasty: boolean;
}
type Cake = {
  calories: number;
  salty: boolean;
  tasty: boolean;
};

type Food = {
  calories: number;
  tasty: boolean;
};
type Sushi1 = Food & {
  salty: boolean;
};
type Cake1 = Food & {
  sweet: boolean;
};

interface IFood {
  calories: number;
  tasty: boolean;
}
interface Sushi2 extends IFood {
  salty: boolean;
}
interface Cake2 extends IFood {
  sweet: boolean;
}

interface A {
  good(x: number): string;
  bad(x: number): string;
}
// interface B extends A {
//   good(x: number | string): string;
//   bad(x: string): string;
// }
type A1 = {
  good(x: number): string;
  bad(x: number): string;
};
type B1 = A1 & {
  good(x: number | string): string;
  bad(x: string): string;
};

export {};
