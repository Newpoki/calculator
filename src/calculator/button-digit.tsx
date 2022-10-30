import clsx from "clsx";
import { ReactNode, useCallback } from "react";
import { Button } from "./button";

import "./button-digit.scss";
import { DIGITS_WITH_SEP } from "./calculator-constants";
import { DigitWithSepValue } from "./calculator-types";

type Props = {
  children: ReactNode;
  onClick: (value: DigitWithSepValue) => void;
  value: DigitWithSepValue;
};

export const ButtonDigit = ({ children, onClick, value }: Props) => {
  const handleClick = useCallback(() => {
    onClick(value);
  }, [onClick, value]);

  return (
    <Button
      className={clsx("digit", { "digit--zero": value === DIGITS_WITH_SEP.ZERO })}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};
