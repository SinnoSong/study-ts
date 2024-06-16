import { ask, isValid } from "./returnNull";

function parse(birthday: string) {
  let date = new Date(birthday);
  if (!isValid(date)) {
    throw new RangeError("Enter a date in the form YYYY/MM/DD");
  }
  return date;
}

try {
  let date = parse(ask());
  console.info("Date is ", date.toISOString());
} catch (e) {
  if (e instanceof RangeError) {
    console.error(e.message);
  } else {
    throw e;
  }
}

class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

/**
 * @throws {InvalidDateFormatError} The user entered their birthday in the wrong format
 * @throws {DateIsInTheFutureError} The user entered a date in the future
 *
 * @param birthday birthday
 * @returns date
 */
function parse1(birthday: string) {
  let date = new Date(birthday);
  if (!isValid(date)) {
    throw new InvalidDateFormatError("Enter a date in the form YYYY/MM/DD");
  }
  if (date.getTime() > Date.now()) {
    throw new DateIsInTheFutureError("Are you a timelord?");
  }
  return date;
}

try {
  let date = parse1(ask());
  console.info("Date is ", date.toISOString());
} catch (e) {
  if (e instanceof InvalidDateFormatError) {
    console.error(e.message);
  } else if (e instanceof DateIsInTheFutureError) {
    console.info(e.message);
  } else {
    throw e;
  }
}

export { InvalidDateFormatError, DateIsInTheFutureError };
