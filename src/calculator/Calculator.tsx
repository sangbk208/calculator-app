import React, { useState } from 'react'
import { CalculationHistory } from '../components/CalculationHistory'
import { NumericKeypad } from '../components/NumericKeypad'
import { Screen } from '../components/Screen/Screen'
import { formattedValue } from '../helpers/mix'
import { useCalculator } from '../hooks/calculator'
import './Calculator.css'

export const Calculator = () => {
  const {
    calculationState,
    displayValue,
    inputEqual,
    inputNumber,
    inputOperator,
    inputDot,
    toggleSign,
    clear,
    isAllClear
  } = useCalculator()

  const [isShowHistory, setIsShowHistory] = useState(false)

  const onClickKeypad = (key: string) => {
    switch (key) {
      case 'C':
      case 'AC':
        clear(key)
        break
      case '=':
        inputEqual()
        break
      case '+':
      case '-':
      case 'x':
      case '/':
        inputOperator(key)
        break
      case '±':
        toggleSign()
        break
      case '.':
        inputDot()
        break
      case 'H':
        setIsShowHistory((prev) => !prev)
        break
      default:
        inputNumber(key)
    }
  }

  return (
    <div className="calculator-container">
      <Screen
        className="calculator-screen"
        displayValue={formattedValue(displayValue)}
      />
      <NumericKeypad
        handleOnClick={onClickKeypad}
        operator={calculationState.operator}
        isAllClear={isAllClear()}
      />
      {isShowHistory && (
        <CalculationHistory className="calculation-history-class" />
      )}
    </div>
  )
}
