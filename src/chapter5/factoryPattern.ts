type Shoe = {
  purpose: string;
};
class BalletFlat implements Shoe {
  purpose = "dancing";
}
class Boot implements Shoe {
  purpose = "woodcutting";
}
class Sneaker implements Shoe {
  purpose = "walking";
}

let shoe = {
  create(type: "balletFlat" | "boot" | "sneaker") {
    switch (type) {
      case "balletFlat":
        return cerateBalletFlat();
      case "boot":
        return createBoot();
      case "sneaker":
        return createSneaker();
    }
  },
};
shoe.create("balletFlat");
export {};
function createBoot() {
  return new Boot();
}
function cerateBalletFlat() {
  return new BalletFlat();
}
function createSneaker() {
  return new Sneaker();
}
