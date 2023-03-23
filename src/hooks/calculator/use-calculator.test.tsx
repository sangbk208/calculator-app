import { useCalculator } from './use-calculator'
import React, { type FC } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { type IOperatorProp } from './type'

const getNewCalculationState = (
  firstOperand: string,
  operator: IOperatorProp | '',
  secondOperand: string
) => {
  return {
    firstOperand,
    secondOperand,
    operator
  }
}

const testCases = [
  {
    describe: 'firstOperand equal 0, secondOperand and operator empty',
    newCalcState: getNewCalculationState('0', '', '')
  },
  {
    describe: 'firstOperand not equal 0, secondOperand and operator empty',
    newCalcState: getNewCalculationState('8', '', '')
  },
  {
    describe: 'secondOperand equal 0 and secondOperand not empty',
    newCalcState: getNewCalculationState('2', 'x', '0')
  },
  {
    describe: 'secondOperand not equal 0 and operator not empty',
    newCalcState: getNewCalculationState('3', '-', '8')
  }
]

const elements = {
  inputNumberButton: 'test-input-number',
  firstOperandValue: 'first-operand-value',
  secondOperandValue: 'second-operand-value',
  operatorValue: 'operator-value'
}

const TestComponent: FC<{ keyValue: string }> = ({ keyValue }) => {
  const { inputNumber, calculationState, setCalculationState } =
    useCalculator()
  const { firstOperand, secondOperand, operator } = calculationState

  const renderActionButtons = () => {
    return (
      <>
        {testCases.map((element, index) => (
          <button
            key={index}
            data-testid={`test-id-${index}`}
            onClick={() => {
              setCalculationState({
                ...element.newCalcState
              })
            }}
          ></button>
        ))}
      </>
    )
  }

  return (
    <>
      {renderActionButtons()}
      <button
        data-testid="test-input-number"
        onClick={() => { inputNumber(keyValue) }}
      ></button>
      <p data-testid="first-operand-value">{firstOperand}</p>
      <p data-testid="second-operand-value">{secondOperand}</p>
      <p data-testid="operator-value">{operator}</p>
    </>
  )
}

describe('useCalculator', () => {
  describe('inputNumber', () => {
    it(`input number equal 7, ${testCases[0].describe}`, () => {
      render(<TestComponent keyValue="7" />)

      fireEvent.click(screen.getByTestId(elements.inputNumberButton))
      expect(screen.getByTestId(elements.firstOperandValue)).toHaveTextContent(
        '7'
      )
      expect(screen.getByTestId(elements.operatorValue)).toHaveTextContent('')
      expect(screen.getByTestId(elements.secondOperandValue)).toHaveTextContent(
        ''
      )
    })

    it(`input number equal 7, ${testCases[1].describe}`, () => {
      render(<TestComponent keyValue="7" />)

      fireEvent.click(screen.getByTestId('test-id-1'))
      fireEvent.click(screen.getByTestId(elements.inputNumberButton))
      expect(screen.getByTestId(elements.firstOperandValue)).toHaveTextContent(
        '87'
      )
      expect(screen.getByTestId(elements.operatorValue)).toHaveTextContent('')
      expect(screen.getByTestId(elements.secondOperandValue)).toHaveTextContent(
        ''
      )
    })

    it(`input number equal 7, ${testCases[2].describe}`, () => {
      render(<TestComponent keyValue="7" />)

      fireEvent.click(screen.getByTestId('test-id-2'))
      fireEvent.click(screen.getByTestId(elements.inputNumberButton))
      expect(screen.getByTestId(elements.firstOperandValue)).toHaveTextContent(
        '2'
      )
      expect(screen.getByTestId(elements.operatorValue)).toHaveTextContent('x')
      expect(screen.getByTestId(elements.secondOperandValue)).toHaveTextContent(
        '7'
      )
    })

    it(`input number equal 7, ${testCases[3].describe}`, () => {
      render(<TestComponent keyValue="7" />)

      fireEvent.click(screen.getByTestId('test-id-3'))
      fireEvent.click(screen.getByTestId(elements.inputNumberButton))
      expect(screen.getByTestId(elements.firstOperandValue)).toHaveTextContent(
        '3'
      )
      expect(screen.getByTestId(elements.operatorValue)).toHaveTextContent('-')
      expect(screen.getByTestId(elements.secondOperandValue)).toHaveTextContent(
        '87'
      )
    })
  })
})
