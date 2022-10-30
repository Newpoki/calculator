import { Operation } from "../calculator/calculator-types";

export const calc = (
  leftValue: string,
  operator: Operation,
  rightValue: string | undefined
): string => {
  const parsedLeftValue = Number(leftValue.replace(",", "."));
  const parsedRightValue = rightValue ? Number(rightValue.replace(",", ".")) : parsedLeftValue;

  switch (operator) {
    case "*":
      return (parsedLeftValue * parsedRightValue).toString();

    case "+":
      return (parsedLeftValue + parsedRightValue).toString();

    case "-":
      return (parsedLeftValue - parsedRightValue).toString();

    case "/":
      return (parsedLeftValue / parsedRightValue).toString();
  }
};
