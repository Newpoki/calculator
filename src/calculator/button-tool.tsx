import { ReactNode, useCallback } from "react";
import { Button } from "./button";
import { ToolValue } from "./calculator-types";

import "./button-tool.scss";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
  onClick: (value: ToolValue) => void;
  value: ToolValue;
};

export const ButtonTool = ({ children, className, onClick, value }: Props) => {
  const handleClick = useCallback(() => {
    onClick(value);
  }, [onClick, value]);

  return (
    <Button className={clsx("tool", className)} onClick={handleClick}>
      {children}
    </Button>
  );
};
