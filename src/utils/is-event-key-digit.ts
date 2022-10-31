import { DIGITS_LIST } from "../calculator/calculator-constants";
import { Digit } from "../calculator/calculator-types";

export const isEventKeyDigit = (eventKey: string): eventKey is Digit => {
  return DIGITS_LIST.includes(eventKey as Digit);
};
