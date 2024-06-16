enum Language {
  English = 100,
  Chinese = 200 + 300,
  Spanish,
}
enum Language {
  France = 4,
}

let myFirstLanguage = Language.Chinese;
let mySecondLanguage = Language["English"];

enum Color {
  Red = "#c10000",
  Blue = "#007ac1",
  Pink = 0xc10050,
  White = 255,
}

let a = Color.Red;
// let b = Color.Green
let c = Color[0];

const enum NewLanguage {
  Chinese,
  English,
}
let l1 = NewLanguage.Chinese;
// let l2 = NewLanguage.Ta;
// let l3 = NewLanguage[0];

const enum Flippable {
  Burger,
  Chair,
  Cup,
  Skateboard,
  Table,
}

function flip(f: Flippable) {
  return "flipped it";
}

flip(Flippable.Burger);
flip(4);

export {};
