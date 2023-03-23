import { type IcalculationProp } from '../components/CalculationHistory/type'
import { CALCULATION_HISTORY_KEY } from '../constants'
import { getLocalStorage, setLocalStorage } from './localStorage'

export const getButtonType = (value: string) => {
  if (['+', '-', 'x', '/', '='].includes(value)) {
    return 'operator'
  }

  if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].includes(value)) {
    return 'number'
  }

  return 'default'
}

export const calculatorOperations = (
  operation: '+' | '-' | 'x' | '/',
  firstOperand: number,
  secondOperand: number
) => {
  switch (operation) {
    case '+':
      return firstOperand + secondOperand
    case '-':
      return firstOperand - secondOperand
    case 'x':
      return firstOperand * secondOperand
    default:
      return firstOperand / secondOperand
  }
}

export const updateCalculationHistory = (calculation: IcalculationProp) => {
  const values = getLocalStorage(CALCULATION_HISTORY_KEY) as string[]

  if (!values) {
    setLocalStorage(CALCULATION_HISTORY_KEY, [calculation])
    return
  }

  if (values.length < 20) {
    setLocalStorage(CALCULATION_HISTORY_KEY, [calculation, ...values])
  } else {
    const newValue = [...values]
    newValue.pop()
    setLocalStorage(CALCULATION_HISTORY_KEY, [calculation, ...newValue])
  }
}

export const formatCalculation = (calculation: IcalculationProp) =>
  `${calculation.firstOperand} ${calculation.operator} ${calculation.secondOperand} = ${calculation.result}`

export const formattedValue = (value: string) => {
  let formattedValue = parseFloat(value).toLocaleString('en-US', {
    useGrouping: true,
    maximumFractionDigits: 8
  })
  const match = value.match(/\.\d*?(0*)$/)

  if (match != null) formattedValue += /[1-9]/.test(match[0]) ? match[1] : match[0]

  return formattedValue
}
