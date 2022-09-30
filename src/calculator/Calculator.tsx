import React from "react";
import { NumericKeypad } from "../components/NumericKeypad";
import { Screen } from "../components/Screen/Screen";
import "./Calculator.css";

export const Calculator = () => {
  return (
    <div>
      <Screen />
      <NumericKeypad />
    </div>
  );
};
