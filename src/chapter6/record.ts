type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Day = Weekday | "Sat" | "Sun";

let nextDay: Record<Weekday, Day> = {
  Mon: "Tue",
  Tue: "Wed",
  Wed: "Thu",
  Thu: "Fri",
  Fri: "Sat",
};

let nextDay1: { [K in Weekday]: Day } = {
  Mon: "Tue",
  Tue: "Wed",
  Wed: "Thu",
  Thu: "Fri",
  Fri: "Sat",
};
// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// };

type Account = {
  id: number;
  isEmployee: boolean;
  notes: string[];
};

// 所有字段都是可选
type OptionalAccount = {
  [K in keyof Account]?: Account[K];
};

// 所有字段都是可为null
type NullableAccount = {
  [K in keyof Account]: Account[K] | null;
};

// 所有字段都是只读的
type ReadonlyAccount = {
  readonly [K in keyof Account]: Account[K];
};

// 所有字段都是可写的
type MutableAccount = {
  -readonly [K in keyof Account]: Account[K];
};
export {};
