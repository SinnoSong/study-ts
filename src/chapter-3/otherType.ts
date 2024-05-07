function a(x: number) {
  if (x < 10) {
    return x;
  }
  return null;
}
function b() {
  return undefined;
}
function c() {
  let a = 2 + 2;
  let b = a * a;
}
function d(): never {
  throw TypeError("I always error");
}
function e() {
  while (true) {}
}
export {};
