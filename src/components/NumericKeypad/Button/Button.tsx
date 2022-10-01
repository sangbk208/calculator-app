import React, { FC } from "react";
import { IButtonProps } from "../types";
import "./Button.css";

export const Button: FC<IButtonProps> = ({
  className,
  children,
  isActive,
  type = "default",
  ...buttonProps
}) => {
  const setButtonType = `button-${type}`;
  const buttonClass = `button-container ${
    setButtonType + (isActive ? "-active" : "")
  } ${className}`;

  return (
    <button className={buttonClass} {...buttonProps}>
      {children}
    </button>
  );
};
