import React, { FC } from "react";
import { KeypadValuesDefault } from "../../constants";
import { getButtonType } from "../../helpers";
import { Button } from "./Button";
import "./NumericKeypad.css";
import { INumericKeypadProps } from "./types";

export const NumericKeypad: FC<INumericKeypadProps> = React.memo(
  ({ handleOnClick }) => {
    return (
      <div className="keypad-wrapper">
        {KeypadValuesDefault.flat().map((btn, index) => {
          return (
            <Button
              key={index}
              type={getButtonType(btn)}
              onClick={() => {
                handleOnClick(btn);
              }}
              className={btn === "0" ? "keypad-button-0" : ""}
            >
              {btn}
            </Button>
          );
        })}
      </div>
    );
  }
);
