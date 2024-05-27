// 类型细化

type Unit = "cm" | "px" | "%";
let units: Unit[] = ["px", "cm", "%"];

function parseUnit(value: string) {
  for (let i = 0; i < units.length; i++) {
    const element = units[i];
    if (value.endsWith(element)) {
      return element;
    }
  }
  return null;
}

type Width = {
  unit: Unit;
  value: number;
};
function parseWidth(width: number | string | null | undefined): Width | null {
  if (width == null) {
    return null;
  }

  if (typeof width === "number") {
    return { unit: "px", value: width };
  }

  let unit = parseUnit(width);
  if (unit) {
    return { unit, value: parseFloat(width) };
  }
  return null;
}

type UserTextEvent = { value: string };
type UserMouseEvent = { value: [number, number] };

type UserEvent = UserTextEvent | UserMouseEvent;

function handle(event: UserEvent) {
  if (typeof event.value === "string") {
    event.value; // string
    // ...
    return;
  }
  event.value; //[number,number]
}

export {};
