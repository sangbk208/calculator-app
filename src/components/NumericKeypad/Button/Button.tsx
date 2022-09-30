import React, { FC } from "react";
import { IButtonProps } from "../types";
import "./Button.css";

export const Button: FC<IButtonProps> = ({
  className,
  children,
  type = "default",
  ...buttonProps
}) => {
  const setButtonType = `button-${type}`;

  return (
    <button
      className={`button-container ${setButtonType} ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
