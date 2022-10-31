import { ReactNode, useCallback } from "react";
import { IOSButton } from "./iOS-button";
import clsx from "clsx";
import { Tool } from "../../calculator/calculator-types";

import "./iOS-button-tool.scss";

type Props = {
  children: ReactNode;
  className?: string;
  onClick: (value: Tool) => void;
  value: Tool;
};

export const IOSButtonTool = ({ children, className, onClick, value }: Props) => {
  const handleClick = useCallback(() => {
    onClick(value);
  }, [onClick, value]);

  return (
    <IOSButton className={clsx("tool", className)} onClick={handleClick}>
      {children}
    </IOSButton>
  );
};
