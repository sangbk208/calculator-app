import React, { FC } from "react";
import "./Screen.css";
import { IScreenProps } from "./type";

export const Screen: FC<IScreenProps> = ({ displayValue, className }) => {
  return (
    <div className={`screen-container ${className}`}>
      <input className="screen-input" readOnly value={displayValue} />
    </div>
  );
};
