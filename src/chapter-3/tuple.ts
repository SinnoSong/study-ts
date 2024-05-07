let a: [number] = [1];
let b: [string, string, number] = ["malcolm", "gladwell", 1963];
// b = ["queen", "elizabeth", "ii", 1926];

let trainFares: [number, number?][] = [[3.72], [8.25, 7.7], [10.5]];
let trainFares1: [number, number?][] = [[3.72], [8.25, 7.7], [10.5]];

let friends: [string, ...string[]] = ["harry", "ron", "hermione"];
let list: [number, boolean, ...string[]] = [1, false, "a", "b", "c"];

let as: readonly number[] = [1, 2, 3];
let bs: readonly number[] = as.concat(4);
let three = bs[2];
// as[4] = 6;
// as.push(5);
export {};
