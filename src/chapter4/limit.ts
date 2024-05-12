type TreeNode = {
  value: string;
};
type LeafNode = TreeNode & {
  isLeaf: true;
};
type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode];
};

let a: TreeNode = { value: "a" };
let b: LeafNode = { value: "b", isLeaf: true };
let c: InnerNode = { value: "c", children: [b] };

function mapNode<T extends TreeNode>(node: T, f: (value: string) => string) {
  return {
    ...node,
    value: f(node.value),
  };
}

let a1 = mapNode(a, (_) => _.toUpperCase());
let b1 = mapNode(b, (_) => _.toUpperCase());
let c1 = mapNode(c, (_) => _.toUpperCase());

type HasSides = { numberOfSizes: number };
type SidesHaveLength = { sideLength: number };

function logPerimeter<Shape extends HasSides & SidesHaveLength>(s: Shape) {
  console.log(s.numberOfSizes * s.sideLength);
  return s;
}

type Square = HasSides & SidesHaveLength;
let square: Square = { numberOfSizes: 4, sideLength: 3 };
logPerimeter(square);

type MyEvent<T extends HTMLElement = HTMLElement> = {
  target: T;
  type: string;
};

type MyEvent2<Type extends string, Target extends HTMLElement = HTMLElement> = {
  target: Target;
  type: Type;
};

export {};
