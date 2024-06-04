let a = [1, true]; //(number|boolean)[]

function tuple<T extends unknown[]>(...ts: T) {
  return ts;
}
let a1 = tuple(1, true);

function isString(a: unknown): boolean {
  return typeof a === "string";
}
isString("a");
isString([7]);

function isString1(a: unknown): a is string {
  return typeof a === "string";
}
function parseInput(input: string | number) {
  let formattedInput: string;
  //   if (isString(input)) {
  //     formattedInput = input.toUpperCase(); // 没有方法
  //   }
  if (isString1(input)) {
    formattedInput = input.toLowerCase();
  }
}

export { tuple };
