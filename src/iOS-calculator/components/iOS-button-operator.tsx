import clsx from "clsx";
import { ReactNode, useCallback } from "react";
import { Operator } from "../../calculator/calculator-types";
import { IOSButton } from "./iOS-button";

import "./iOS-button-operator.scss";

type Props = {
  children: ReactNode;
  className?: string;
  isSelected?: boolean;
  onClick: (value: Operator | undefined) => void;
  value?: Operator;
};

export const IOSButtonOperator = ({
  children,
  className,
  isSelected = false,
  onClick,
  value,
}: Props) => {
  const handleClick = useCallback(() => {
    onClick(value);
  }, [onClick, value]);

  return (
    <IOSButton
      className={clsx("operator", className, { selected: isSelected })}
      onClick={handleClick}
    >
      {children}
    </IOSButton>
  );
};
