function add(a: number, b: number) {
  return a + b;
}

function greet(name: string) {
  return `hello ${name}`;
}

let greet2 = function (name: string) {
  return `hello ${name}`;
};

let greet3 = (name: string) => {
  return `hello ${name}`;
};

let greet4 = (name: string) => `hello ${name}`;

let greet5 = new Function("name", "return `hello ${name}`");

add(1, 2);
greet("Crystal");

export {};
