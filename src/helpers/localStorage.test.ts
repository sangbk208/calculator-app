import { getLocalStorage, setLocalStorage } from './localStorage'

describe('Helpers local storage', () => {
  it('Set local storage', () => {
    const calculation = {
      firstOperand: '2',
      secondOperand: '3',
      operator: 'x',
      result: '6'
    }

    setLocalStorage('calculator', calculation)

    expect(localStorage.getItem('calculator') ?? '').toEqual(
      JSON.stringify(calculation)
    )
  })

  it('Set local storage', () => {
    const calculation = {
      firstOperand: '2',
      secondOperand: '3',
      operator: 'x',
      result: '6'
    }

    localStorage.setItem('calculator', JSON.stringify(calculation))

    expect(getLocalStorage('calculator')).toEqual(calculation)
  })
})
