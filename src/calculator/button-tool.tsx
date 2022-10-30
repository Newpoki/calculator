import { ReactNode, useCallback } from "react";
import { Button } from "./button";
import { ToolValue } from "./calculator-types";

import "./button-tool.scss";

type Props = {
  children: ReactNode;
  onClick: (value: ToolValue) => void;
  value: ToolValue;
};

export const ButtonTool = ({ children, onClick, value }: Props) => {
  const handleClick = useCallback(() => {
    onClick(value);
  }, [onClick, value]);

  return (
    <Button className="tool" onClick={handleClick}>
      {children}
    </Button>
  );
};
