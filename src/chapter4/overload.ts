type Reservation = {};
type Reserve = {
  (form: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
};
// let reserve: Reserve = (from, to, destination) => {
//   return {};
// };
let reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string
) => {
  if (toOrDestination instanceof Date && destination !== undefined) {
    // 单程
  } else if (typeof toOrDestination === "string") {
    // 往返
  }
  return {};
};

type WarnUser = {
  (warning: string): void;
  wasCalled: boolean;
};
// let warnUser: WarnUser = (warning: string) => {
//   if (warnUser.wasCalled) {
//     return;
//   }
//   warnUser.wasCalled = true;
//   alert(warning);
// };
// warnUser.wasCalled = false;
export {};
