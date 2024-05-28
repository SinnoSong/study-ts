type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Day = Weekday | "Sat" | "Sun";

function getNextDay(w: Weekday): Day {
  switch (w) {
    case "Mon":
      return "Tue";
  }
  return "Sat";
}

// function isBig(n: number): boolean {
//   if (n >= 100) {
//     return true;
//   }
// }

type APIResponse = {
  user: {
    userId: string;
    friendList: {
      count: number;
      friends: {
        firstName: string;
        lastName: string;
      }[];
    };
  };
};
type FriendList = APIResponse["user"]["friendList"];
type Friend = FriendList["friends"][number];

type ResponseKeys = keyof APIResponse;
type UserKeys = keyof APIResponse["user"];
type FriendListKeys = keyof APIResponse["user"]["friendList"];

function get<O extends object, K extends keyof O>(o: O, k: K) {
  return o[k];
}
type ActivityLog = {
  lastEvent: Date;
  event: {
    id: string;
    timestamp: Date;
    type: "Read" | "Write";
  };
};

let activityLog: ActivityLog = {
  lastEvent: new Date(),
  event: {
    id: "123",
    timestamp: new Date(),
    type: "Read",
  },
};
let lastEvent = get(activityLog, "lastEvent");

type Get = {
  <O extends object, K extends keyof O>(o: O, k: K): O[K];
  <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(
    o: O,
    k1: K1,
    k2: K2
  ): O[K1][K2];
  <
    O extends object,
    K1 extends keyof O,
    K2 extends keyof O[K1],
    K3 extends keyof O[K1][K2]
  >(
    o: O,
    k1: K1,
    k2: K2,
    k3: K3
  ): O[K1][K2][K3];
};

let get1: Get = (object: any, ...keys: string[]) => {
  let result = object;
  keys.forEach((k) => (result = result[k]));
  return result;
};
get1(activityLog, "event", "type");
// get1(activityLog,"bad");
export {};
