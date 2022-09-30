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
