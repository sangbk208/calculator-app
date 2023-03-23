import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CalculationHistory } from './CalculationHistory'
import { updateCalculationHistory } from '../../helpers/mix'

describe('<CalculationHistory />', () => {
  it('renders correctly, calculation history is empty', () => {
    render(<CalculationHistory />)

    expect(screen.getByText('History')).toBeInTheDocument()
    expect(
      screen.getByText('Calculation history is empty')
    ).toBeInTheDocument()
  })

  it('calculation history is not empty', () => {
    updateCalculationHistory({
      firstOperand: '2',
      secondOperand: '3',
      operator: 'x',
      result: '6'
    })
    render(<CalculationHistory />)

    expect(screen.getByText('History')).toBeInTheDocument()
    expect(screen.getByText('2 x 3 = 6')).toBeInTheDocument()
  })
})
