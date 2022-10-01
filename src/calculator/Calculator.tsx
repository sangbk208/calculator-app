import React, { useState } from "react";
import { CalculationHistory } from "../components/CalculationHistory";
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

  const [isShowHistory, setIsShowHistory] = useState(false);

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
        setIsShowHistory((prev) => !prev);
        break;
      default:
        inputNumber(key);
    }
  };

  return (
    <div className="calculator-container">
      <Screen className="calculator-screen" displayValue={displayValue} />
      <NumericKeypad
        handleOnClick={onClickKeypad}
        operator={operator}
        isClearAvailable={displayValue !== "0" || operator !== ""}
      />
      {isShowHistory && (
        <CalculationHistory className="calculation-history-class" />
      )}
    </div>
  );
};
