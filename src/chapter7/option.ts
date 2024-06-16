import { ask, isValid } from "./returnNull";

function parse(birthday: string) {
  let date = new Date(birthday);
  if (!isValid(date)) {
    return [];
  }
  return [date];
}

let date = parse(ask());
date.map((_) => _.toISOString()).forEach((_) => console.info(`Date is ${_}`));

export {};
