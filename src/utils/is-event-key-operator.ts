import { OPERATORS_LIST } from "../calculator/calculator-constants";
import { Operator } from "../calculator/calculator-types";

export const isEventKeyOperator = (eventKey: string): eventKey is Operator => {
  return OPERATORS_LIST.includes(eventKey as Operator);
};
