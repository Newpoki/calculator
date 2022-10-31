import { isEventKeyOperator } from "./../utils/is-event-key-operator";
import { SetStateAction, useCallback, useEffect, useMemo, useState } from "react";
import { Operator } from "../calculator/calculator-types";

export const useCalculator = () => {
  const [leftValue, setLeftValue] = useState<string | undefined>(undefined);
  const [rightValue, setRightValue] = useState<string | undefined>(undefined);
  const [operator, setOperator] = useState<Operator | undefined>(undefined);

  const handleClickDigit = useCallback(
    (value: SetStateAction<string | undefined>) => {
      operator ? setRightValue(value) : setLeftValue(value);
    },
    [operator]
  );

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

  const handleInvert = useCallback(() => {
    const value = rightValue ?? leftValue ?? "0";

    // We can't just multiply by -1 because in JS, the number -0 is "0" when stringified
    const inverted = value.startsWith("-") ? value.slice(1) : `-${value}`;

    updateResult(inverted);
  }, [leftValue, rightValue, updateResult]);

  const handlePercent = useCallback(() => {
    const value = `${Number(rightValue ?? leftValue ?? "0") / 100}`;

    updateResult(value);
  }, [leftValue, rightValue, updateResult]);

  const handleCancel = useCallback(() => {
    const value = rightValue ?? leftValue ?? "0";

    if (value?.length === 1) {
      return;
    }

    const getUpdatedValue = () => {
      return value.slice(0, value.length - 1);
    };

    rightValue ? setRightValue(getUpdatedValue) : setLeftValue(getUpdatedValue);
  }, [leftValue, rightValue]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (isEventKeyOperator(event.key)) {
        setOperator(event.key);
      }

      if (event.key === "%") {
        handlePercent();
      }

      if (event.key === "Backspace") {
        handleCancel();
      }
    },
    [handleCancel, setOperator, handlePercent]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return useMemo(
    () => ({
      leftValue,
      operator,
      rightValue,
      onDigitClick: handleClickDigit,
      onOperatorClick: setOperator,
      onReset: handleReset,
      onPercent: handlePercent,
      onInvert: handleInvert,
      onRightValueChange: setRightValue,
      setLeftValue,
      setRightValue,
    }),
    [
      handleClickDigit,
      setOperator,
      handleInvert,
      handlePercent,
      handleReset,
      leftValue,
      operator,
      rightValue,
    ]
  );
};
