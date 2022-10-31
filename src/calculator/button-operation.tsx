import clsx from "clsx";
import { ReactNode, useCallback } from "react";
import { Button } from "./button";

import "./button-operation.scss";
import { Operation } from "./calculator-types";

type Props = {
  children: ReactNode;
  className?: string;
  isSelected?: boolean;
  onClick: (value: Operation | undefined) => void;
  value?: Operation;
};

export const ButtonOperation = ({
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
    <Button
      className={clsx("operation", className, { selected: isSelected })}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};
