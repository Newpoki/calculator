import clsx from "clsx";
import { ReactNode, useCallback } from "react";
import { Button } from "./button";

import "./button-digit.scss";
import { DIGITS, DIGIT_SEP } from "./calculator-constants";
import { Digit } from "./calculator-types";

type DigitWithSep = Digit | typeof DIGIT_SEP;

type Props = {
  children: ReactNode;
  onClick: (value: DigitWithSep) => void;
  value: DigitWithSep;
};

export const ButtonDigit = ({ children, onClick, value }: Props) => {
  const handleClick = useCallback(() => {
    onClick(value);
  }, [onClick, value]);

  return (
    <Button
      className={clsx("digit", { "digit--zero": value === DIGITS.ZERO })}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};
