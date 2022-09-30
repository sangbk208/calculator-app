import React from "react";
import { NumericKeypad } from "../components/NumericKeypad";
import { Screen } from "../components/Screen/Screen";
import { useCalculator } from "../hooks/calculator";
import "./Calculator.css";

export const Calculator = () => {
  const {
    operator,
    displayValue,
    inputEqual,
    inputNumber,
    inputOperator,
    inputDot,
    toggleSign,
    clearAll,
  } = useCalculator();

  const onClickKeypad = (key: string) => {
    switch (key) {
      case "C":
        clearAll();
        break;
      case "=":
        inputEqual();
        break;
      case "+":
      case "-":
      case "x":
      case "/":
        inputOperator(key);
        break;
      case "±":
        toggleSign();
        break;
      case ".":
        inputDot();
        break;
      case "H":
        break;
      default:
        inputNumber(key);
    }
  };

  return (
    <div>
      <Screen className="calculator-screen" displayValue={displayValue} />
      <NumericKeypad
        handleOnClick={onClickKeypad}
        operator={operator}
        isClearAvailable={displayValue !== "0" || operator !== ""}
      />
    </div>
  );
};
