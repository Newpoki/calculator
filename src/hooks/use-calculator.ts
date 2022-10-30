import { isEventKeyOperator } from "./../utils/is-event-key-operator";
import { useCallback, useEffect, useMemo, useState } from "react";
import { DigitWithSepValue, Operation } from "../calculator/calculator-types";
import { calc } from "../utils/calc";
import { isEventKeyDigitOrDecSep } from "../utils/is-event-key-digit";

export const useCalculator = () => {
  const [leftValue, setLeftValue] = useState<string | undefined>(undefined);
  const [rightValue, setRightValue] = useState<string | undefined>(undefined);
  const [operator, setOperator] = useState<Operation | undefined>(undefined);

  const displayedValue = useMemo(() => {
    return rightValue ?? leftValue ?? 0;
  }, [leftValue, rightValue]);

  const handleClickDigit = useCallback(
    (value: DigitWithSepValue) => {
      const getUpdatedValue = (current: string | undefined) =>
        !current ? value : `${current}${value}`;

      operator ? setRightValue(getUpdatedValue) : setLeftValue(getUpdatedValue);
    },
    [operator]
  );

  const handleClickOperation = useCallback((value: Operation | undefined) => {
    if (!value) {
      return;
    }

    setOperator(value);
  }, []);

  const handleReset = useCallback(() => {
    setLeftValue(undefined);
    setOperator(undefined);
    setRightValue(undefined);
  }, []);

  const updateResult = useCallback((value: string) => {
    setLeftValue(value);
    setRightValue(undefined);
    setOperator(undefined);
  }, []);

  const handleCalc = useCallback(() => {
    if (!leftValue || !operator) {
      return;
    }

    const result = calc(leftValue, operator, rightValue);

    updateResult(result);
  }, [leftValue, operator, rightValue, updateResult]);

  const handleInvert = useCallback(() => {
    const valueToInvert = rightValue ?? leftValue ?? "0";

    // We can't just multiply by -1 because in JS, the number -0 is "0" when stringified
    const invertedValue = valueToInvert.startsWith("-")
      ? valueToInvert.slice(1)
      : `-${valueToInvert}`;

    updateResult(invertedValue);
  }, [leftValue, rightValue, updateResult]);

  const handlePercent = useCallback(() => {
    updateResult(`${Number(rightValue ?? leftValue) / 100}`);
  }, [leftValue, rightValue, updateResult]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (isEventKeyDigitOrDecSep(event.key)) {
        handleClickDigit(event.key);
      }

      if (isEventKeyOperator(event.key)) {
        handleClickOperation(event.key);
      }

      if (event.key === "Enter") {
        handleCalc();
      }

      if (event.key === "Escape") {
        handleReset();
      }

      if (event.key === "%") {
        handlePercent();
      }
    },
    [handleCalc, handleClickDigit, handleClickOperation, handlePercent, handleReset]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return useMemo(
    () => ({
      displayedValue,
      operator,
      onDigitClick: handleClickDigit,
      onOperatorClick: handleClickOperation,
      onReset: handleReset,
      onCalc: handleCalc,
      onPercent: handlePercent,
      onInvert: handleInvert,
    }),
    [
      displayedValue,
      handleCalc,
      handleClickDigit,
      handleClickOperation,
      handleInvert,
      handlePercent,
      handleReset,
      operator,
    ]
  );
};
