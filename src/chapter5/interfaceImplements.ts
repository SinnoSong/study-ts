interface Animal {
  readonly name: string;
  eat(food: string): void;
  sleep(hours: number): void;
}

class Cat implements Animal, Feline {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
  meow(): void {
    console.info("Meow");
  }
  eat(food: string): void {
    console.info("Ate some", food, ". Mmm!");
  }
  sleep(hours: number): void {
    console.info("Sleeping for", hours, "hours");
  }
}
interface Feline {
  meow(): void;
}

export {};
