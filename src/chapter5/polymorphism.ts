class MyMap<K, V> {
  constructor(initialKey: K, initialValue: V) {}
  get(key: K): V {
    throw new Error("Method not implemented.");
  }
  set(key: K, value: V): void {
    throw new Error("Method not implemented.");
  }
  merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {
    throw new Error("Method not implemented.");
  }
  static of<K, V>(key: K, value: V): MyMap<K, V> {
    throw new Error("Method not implemented.");
  }
}

interface MyMap<K, V> {
  get(key: K): V;
  set(key: K, value: V): void;
}

let a = new MyMap<string, number>("k", 1);
let b = new MyMap("K", true);

a.get("k");
b.set("k", true);
export {};
