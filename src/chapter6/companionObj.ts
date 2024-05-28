type Currency = {
  unit: "EUR" | "GBP" | "JPY" | "USD";
  value: number;
};

let Currency: any = {
  DEFAULT: "USD",
  from(value: number, unit = Currency.DEFAULT): Currency {
    return { unit, value };
  },
};

let amountDue: Currency = {
  unit: "JPY",
  value: 83733.1,
};
let otherAmountDue = Currency.from(83733.1, "JPY");
export {};
