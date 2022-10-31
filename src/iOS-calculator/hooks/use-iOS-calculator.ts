import { useCallback, useEffect, useMemo, useState } from "react";
import { DIGITS, DIGIT_SEP } from "../../calculator/calculator-constants";
import { DigitWithSep } from "../../calculator/calculator-types";
import { useCalculator } from "../../calculator/hooks/use-calculator";
import { calc } from "../../utils/calc";
import { isEventKeyDigit } from "../../utils/is-event-key-digit";

export const IOS_RESET_BUTTON_LABEL = {
  AC: "AC",
  C: "C",
};

export const useIOSCalculator = () => {
  const {
    rightValue,
    leftValue,
    operator,
    onDigitClick,
    setRightValue,
    setLeftValue,
    onOperatorClick,
    onReset,
    ...calculator
  } = useCalculator();
  const [resetButtonLabel, setResetButtonLabel] = useState(IOS_RESET_BUTTON_LABEL.AC);

  const displayedValue = useMemo(() => {
    return rightValue ?? leftValue ?? "0";
  }, [leftValue, rightValue]);

  const handleDigitClick = useCallback(
    (value: DigitWithSep) => {
      // iOS calculator doesn't allow more than 9 chars
      if (displayedValue.length === 9) {
        return;
      }

      const getUpdatedDigitValue = (current: string | undefined) => {
        console.log({ current, value });
        return !current || current === "0" ? value : `${current}${value}`;
      };

      setResetButtonLabel(IOS_RESET_BUTTON_LABEL.C);
      onDigitClick(getUpdatedDigitValue);
    },
    [displayedValue, onDigitClick]
  );

  const handleSepClick = useCallback(() => {
    onDigitClick((current) => {
      if (!current || current === DIGITS.ZERO) {
        return `${DIGITS.ZERO}${DIGIT_SEP}`;
      }

      // Can only have 1 separator per value
      if (current.indexOf(DIGIT_SEP) !== -1) {
        return current;
      }

      return `${current}${DIGIT_SEP}`;
    });
  }, [onDigitClick]);

  /**
   * iOS reset only the rightValue if present or if there is an operator
   */
  const handleReset = useCallback(() => {
    if (rightValue && rightValue !== "0") {
      // Setting in to zero instead of undefined to allow pressing equal
      // and not displaying the leftValue
      setRightValue("0");
      setResetButtonLabel(IOS_RESET_BUTTON_LABEL.AC);

      return;
    }

    onReset();
    setResetButtonLabel(IOS_RESET_BUTTON_LABEL.AC);
  }, [onReset, rightValue, setRightValue]);

  const handleCalc = useCallback(() => {
    if (!leftValue || !operator) {
      return;
    }

    const result = calc(leftValue, operator, rightValue);

    setLeftValue(rightValue);
    setRightValue(result);
  }, [leftValue, operator, rightValue, setLeftValue, setRightValue]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (isEventKeyDigit(event.key)) {
        handleDigitClick(event.key);
      }

      if (event.key === "Escape") {
        handleReset();
      }

      if (event.key === "Enter") {
        handleCalc();
      }

      if ([DIGIT_SEP, "."].includes(event.key)) {
        handleSepClick();
      }
    },
    [handleCalc, handleDigitClick, handleReset, handleSepClick]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return useMemo(
    () => ({
      ...calculator,
      rightValue,
      leftValue,
      displayedValue,
      operator,
      resetButtonLabel,
      onDigitClick: handleDigitClick,
      onOperatorClick,
      onReset: handleReset,
      onCalc: handleCalc,
      onSepClick: handleSepClick,
    }),
    [
      calculator,
      displayedValue,
      handleCalc,
      handleDigitClick,
      handleReset,
      handleSepClick,
      leftValue,
      onOperatorClick,
      operator,
      resetButtonLabel,
      rightValue,
    ]
  );
};
