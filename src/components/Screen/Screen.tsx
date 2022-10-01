import React, { FC } from "react";
import "./Screen.css";
import { IScreenProps } from "./type";

export const Screen: FC<IScreenProps> = ({ displayValue, className }) => {
  return (
    <div
      data-testid="screen-container"
      className={`screen-container ${className}`}
    >
      <input
        data-testid="screen-input"
        className="screen-input"
        readOnly
        value={displayValue}
      />
    </div>
  );
};
