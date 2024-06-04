import { tuple } from "./functionType";

declare global {
  interface Array<T> {
    zip<U>(list: U[]): [T, U][];
  }
}

Array.prototype.zip = function <T, U>(this: T[], list: U[]): [T, U][] {
  return this.map((v, k) => tuple(v, list[k]));
};

const result = [1, 2, 3].map((n) => n * 2).zip(["a", "b", "c"]);
console.log(result);
export {};
