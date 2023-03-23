import { type IOperatorProp } from '../../hooks/calculator/type'

export interface ICalculationHistory {
  className?: string
}

export interface IcalculationProp {
  firstOperand: string
  secondOperand: string
  operator: IOperatorProp
  result: string
}
