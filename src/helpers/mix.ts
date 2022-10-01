import { IOperatorProp } from "../hooks/calculator/type";
import { getLocalStorage, setLocalStorage } from "./localStorage";

export const getButtonType = (value: string) => {
  if (["+", "-", "x", "/", "="].includes(value)) {
    return "operator";
  }

  if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."].includes(value)) {
    return "number";
  }

  return "default";
};

export const calculatorOperations = (
  operation: "+" | "-" | "x" | "/",
  firstOperand: number,
  secondOperand: number
) => {
  switch (operation) {
    case "+":
      return firstOperand + secondOperand;
    case "-":
      return firstOperand - secondOperand;
    case "x":
      return firstOperand * secondOperand;
    default:
      return firstOperand / secondOperand;
  }
};

export const updateCalculationHistory = (calculation: {
  firstOperand: string;
  secondOperand: string;
  operator: IOperatorProp;
  result: string;
}) => {
  const values = getLocalStorage("calculation-history") as string[];

  if (!values) {
    setLocalStorage("calculation-history", [calculation]);
    return;
  }

  if (values.length < 10) {
    setLocalStorage("calculation-history", [calculation, ...values]);
  } else {
    const newValue = [...values];
    newValue.pop();
    setLocalStorage("calculation-history", [calculation, ...newValue]);
  }
};
