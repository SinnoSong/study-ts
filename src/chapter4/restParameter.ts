function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
sum([1, 2, 3]);

function sumVariadic() {
  return Array.from(arguments).reduce((total, n) => total + n, 0);
}
function sumVariadicSafe(...numbers: number[]) {
  return numbers.reduce((total, n) => total + n, 0);
}
sumVariadicSafe(1, 2, 3, 4);

interface Console {
  log(message?: any, ...optionalParams: any[]): void;
}
