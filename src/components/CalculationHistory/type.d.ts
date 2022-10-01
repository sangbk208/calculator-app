import { IOperatorProp } from "../../hooks/calculator/type";

export interface ICalculationHistory {
  className?: string;
}

export type IcalculationProp = {
  firstOperand: string;
  secondOperand: string;
  operator: IOperatorProp;
  result: string;
};
