let set = new Set();
set.add(1).add(2).add(3);
set.has(2); // true
set.has(4); // false

class MySet {
  has(value: number): boolean {
    throw new Error("Method not implemented.");
  }
  add(value: number): this {
    throw new Error("Method not implemented.");
  }
}
export {};
