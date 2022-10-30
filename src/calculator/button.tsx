import clsx from "clsx";
import { MouseEvent, ReactNode, useCallback } from "react";
import "./button.scss";

type Props = {
  children: ReactNode;
  className: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ children, className, onClick }: Props) => {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      onClick(event);
    },
    [onClick]
  );

  return (
    <button className={clsx("button", className)} onClick={handleClick}>
      {children}
    </button>
  );
};
