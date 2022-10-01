export type IOperatorProp = "+" | "-" | "x" | "/";

export interface ICalculationStateProp {
  firstOperand: string;
  secondOperand: string;
  operator: IOperatorProp | "";
}
