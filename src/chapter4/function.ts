function sum(a: number, b: number): number {
  return a + b;
}
type Greet = (number: string) => string;
type Log = (message: string, userId?: string) => void;
type SumVariadicSafe = (...numbers: number[]) => number;

let log: Log = (message, userId = "Not signed in") => {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, userId);
};
export {};
