let a = 1999;
function b() {}

type a = number;
interface b {
  (): void;
}

if (a + 1 > 3) {
  // value a
}

let x: a = 3; // type a

class C {}
let c: C = // type C
  new C(); // value C
enum E {
  F,
  G,
}
let e: E = E.F; //enum type E // value E

type State = {
  [key: string]: string;
};
class StringDatabase {
  constructor(public state: State = {}) {}
  get(key: string): string | null {
    return key in this.state ? this.state[key] : null;
  }
  set(key: string, value: string): void {
    this.state[key] = value;
  }
  static from(state: State) {
    let db = new StringDatabase();
    for (let key in state) {
      db.set(key, state[key]);
    }
    return db;
  }
}
interface IStringDatabase {
  state: State;
  get(key: string): string | null;
  set(key: string, value: string): void;
}
interface IStringDatabaseConstructor {
  new (state?: State): IStringDatabase;
  from(state: State): IStringDatabase;
}
export {};
