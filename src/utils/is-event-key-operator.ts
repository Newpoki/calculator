import { OPERATORS_LIST } from "../calculator/calculator-constants";
import { OperatorValue } from "../calculator/calculator-types";

export const isEventKeyOperator = (eventKey: string): eventKey is OperatorValue => {
  return OPERATORS_LIST.includes(eventKey as OperatorValue);
};
