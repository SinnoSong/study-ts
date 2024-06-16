import { ask, isValid } from "./returnNull";
import {
  DateIsInTheFutureError,
  InvalidDateFormatError,
} from "./throwException";

function parse1(
  birthday: string
): Date | InvalidDateFormatError | DateIsInTheFutureError {
  let date = new Date(birthday);
  if (!isValid(date)) {
    return new InvalidDateFormatError("Enter a date in the form YYYY/MM/DD");
  }
  if (date.getTime() > Date.now()) {
    return new DateIsInTheFutureError("Are you a timelord?");
  }
  return date;
}

let result = parse1(ask());
if (result instanceof InvalidDateFormatError) {
  console.error(result.message);
} else if (result instanceof DateIsInTheFutureError) {
  console.info(result.message);
} else {
  console.info(result.toISOString());
}

export {};
