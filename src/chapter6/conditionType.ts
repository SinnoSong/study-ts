type IsString<T> = T extends string ? true : false;

type A = IsString<string>; //true
type B = IsString<number>; //false

type ToArray<T> = T[];
type A1 = ToArray<number>;
type B1 = ToArray<number | string>;

type ToArray2<T> = T extends unknown ? T[] : T[];
type A2 = ToArray2<number>;
type B2 = ToArray2<number | string>;

type Without<T, U> = T extends U ? never : T;
type A3 = Without<boolean | number | string, boolean>;

type ElementType<T> = T extends unknown[] ? T[number] : T;
type A4 = ElementType<number[]>;

type ElementType2<T> = T extends (infer U)[] ? U : T;

type A5 = number | string;
type B5 = string;
type C5 = Exclude<A5, B5>;
// Extract,NonNullable,ReturnType,InstanceType
export {};
