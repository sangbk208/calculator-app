import React, { FC } from "react";
import { KeypadValuesDefault } from "../../constants";
import { getButtonType } from "../../helpers/mix";
import { Button } from "./Button";
import "./NumericKeypad.css";
import { INumericKeypadProps } from "./types";

export const NumericKeypad: FC<INumericKeypadProps> = React.memo(
  ({ handleOnClick, isClearAvailable, operator }) => {
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
              isActive={operator === btn}
              className={btn === "0" ? "keypad-button-0" : ""}
            >
              {!isClearAvailable && btn === "C" ? "AC" : btn}
            </Button>
          );
        })}
      </div>
    );
  }
);
