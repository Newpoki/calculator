import { DIGITS_LIST_WITH_SEP } from "../calculator/calculator-constants";
import { DigitWithSepValue } from "../calculator/calculator-types";

export const isEventKeyDigitOrDecSep = (eventKey: string): eventKey is DigitWithSepValue => {
  return DIGITS_LIST_WITH_SEP.includes(eventKey as DigitWithSepValue);
};
