import clsx from "clsx";
import { ReactNode, useCallback } from "react";
import { IOSButton } from "./iOS-button";
import { DIGITS, DIGIT_SEP } from "../../calculator/calculator-constants";
import { Digit } from "../../calculator/calculator-types";

import "./iOS-button-digit.scss";

type DigitWithSep = Digit | typeof DIGIT_SEP;

type Props = {
  children: ReactNode;
  onClick: (value: DigitWithSep) => void;
  value: DigitWithSep;
};

export const IOSButtonDigit = ({ children, onClick, value }: Props) => {
  const handleClick = useCallback(() => {
    onClick(value);
  }, [onClick, value]);

  return (
    <IOSButton
      className={clsx("digit", { "digit--zero": value === DIGITS.ZERO })}
      onClick={handleClick}
    >
      {children}
    </IOSButton>
  );
};
