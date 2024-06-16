let a = [1, 2, 3];
let b = ["a", "b"];
let c: string[] = ["1"];
let d = [1, "a"];
const e = [2, "b"];

let f = ["red"];
f.push("blue");
// f.push(true);
let g = [];
g.push(1);
g.push("red");

let h: number[] = [];
h.push(1);
// h.push("red");
d.map((_) => {
  if (typeof _ === "number") {
    return _ * 3;
  }
  return _.toUpperCase();
});
export {};
