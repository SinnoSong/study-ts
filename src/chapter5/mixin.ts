class HardToDebugUser {
  constructor(
    private id: number,
    private firstName: string,
    private lastName: string
  ) {}

  getDebugValue() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
    };
  }
}
let User = withEZDebug(HardToDebugUser);
let user = new User(3, "Emma", "Gluzman");
user.debug();

type ClassConstructor<T> = new (...args: any[]) => T;
function withEZDebug<
  C extends ClassConstructor<{
    getDebugValue(): object;
  }>
>(Class: C) {
  return class extends Class {
    constructor(...args: any[]) {
      super(...args);
    }

    debug() {
      let name = Class.constructor.name;
      let value = this.getDebugValue();
      return `${name} (${JSON.stringify(value)})`;
    }
  };
}
export {};
