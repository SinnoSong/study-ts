// type Filter = {
//   (array: number[], f: (item: number) => boolean): number[];
//   (array: string[], f: (item: string) => boolean): string[];
// };
type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};
let filter: Filter = (array, f) => {
  let result = [];
  for (const item of array) {
    if (f(item)) {
      result.push(item);
    }
  }
  return result;
};
filter([1, 2, 3], (_) => _ > 2);
filter(["a", "b"], (_) => _ !== "b");
let names = [
  { firstName: "beth" },
  { firstName: "caitlyn" },
  { firstName: "xin" },
];
filter(names, (_) => _.firstName.startsWith("b"));

type Filter1<T> = {
  (array: T[], f: (item: T) => boolean): T[];
};

function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i]);
  }
  return result;
}
let promise = new Promise<number>((resolve) => resolve(45));
promise.then((result) => result * 4);
export {};
