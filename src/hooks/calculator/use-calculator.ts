import { useState } from 'react'
import {
  calculatorOperations,
  updateCalculationHistory
} from '../../helpers/mix'
import { type ICalculationStateProp, type IOperatorProp } from './type'

export const initialCalculationState: ICalculationStateProp = {
  firstOperand: '0',
  secondOperand: '',
  operator: ''
}

export const useCalculator = () => {
  const [calculationState, setCalculationState] = useState(
    initialCalculationState
  )
  const { firstOperand, secondOperand, operator } = calculationState

  const getDisplayValue = () =>
    secondOperand === '' ? firstOperand : secondOperand

  const inputNumber = (key: string) => {
    if (!operator) {
      setCalculationState({
        ...calculationState,
        firstOperand: firstOperand === '0' ? key : firstOperand + key
      })
      return
    }
    setCalculationState({
      ...calculationState,
      secondOperand: secondOperand === '0' ? key : secondOperand + key
    })
  }

  const inputOperator = (key: string) => {
    if (firstOperand !== '' && secondOperand !== '') {
      const result = calculatorOperations(
        operator as IOperatorProp,
        Number(firstOperand),
        Number(secondOperand)
      )
      updateCalculationHistory({
        firstOperand,
        secondOperand,
        operator: operator as IOperatorProp,
        result: String(result)
      })

      setCalculationState({
        firstOperand: String(result),
        secondOperand: '',
        operator: key as IOperatorProp
      })
      return
    }
    setCalculationState({
      ...calculationState,
      operator: key as IOperatorProp
    })
  }

  const inputEqual = () => {
    if (operator) {
      const result = calculatorOperations(
        operator,
        Number(firstOperand),
        Number(secondOperand !== '' ? secondOperand : firstOperand)
      )
      updateCalculationHistory({
        firstOperand,
        secondOperand,
        operator,
        result: String(result)
      })

      if (secondOperand === '') {
        setCalculationState({
          ...calculationState,
          firstOperand: String(result)
        })
        return
      }
      setCalculationState({
        firstOperand: String(result),
        secondOperand: '',
        operator: ''
      })
    }
  }

  const inputDot = () => {
    if (!operator && !firstOperand.includes('.')) {
      setCalculationState({
        ...calculationState,
        firstOperand: firstOperand + '.'
      })
      return
    }

    if (!secondOperand.includes('.') && secondOperand !== '') {
      setCalculationState({
        ...calculationState,
        secondOperand: secondOperand + '.'
      })
    }
  }

  const toggleSign = () => {
    if (!operator) {
      setCalculationState({
        ...calculationState,
        firstOperand: String(Number(firstOperand) * -1)
      })
      return
    }
    setCalculationState({
      ...calculationState,
      secondOperand: String(Number([secondOperand || firstOperand]) * -1)
    })
  }

  const clear = (key: 'AC' | 'C') => {
    if (
      key === 'AC' &&
      JSON.stringify(calculationState) !==
        JSON.stringify(initialCalculationState)
    ) {
      setCalculationState(initialCalculationState)
      return
    }
    if (operator !== '' && secondOperand !== '') {
      setCalculationState({
        ...calculationState,
        secondOperand: '0'
      })
    }
  }

  const isAllClear = () => operator === '' || secondOperand === ''

  return {
    displayValue: getDisplayValue(),
    setCalculationState,
    inputEqual,
    inputNumber,
    inputOperator,
    inputDot,
    toggleSign,
    clear,
    isAllClear,
    calculationState
  }
}
