import { render, screen, fireEvent } from '@testing-library/react'
import { KeypadValuesDefault } from '../constants'
import { Calculator } from './Calculator'

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']

const buttonElement = (name: string) => screen.getByRole('button', { name })

describe('<Calculator />', () => {
  it('renders correctly', () => {
    render(<Calculator />)

    const inputElement = screen.getByTestId('screen-input')

    expect(inputElement).toHaveValue('0')
    KeypadValuesDefault.flat().forEach((element) => {
      expect(screen.getByText(element)).toBeInTheDocument()
    })
  })

  describe('onclick keypad', () => {
    it('onclick number', () => {
      render(<Calculator />)

      const inputElement = screen.getByTestId('screen-input')

      numbers.forEach((element) => {
        fireEvent.click(buttonElement(element))
      })
      expect(inputElement).toHaveValue('1,234,567,890.')
    })

    it('onclick all clear: AC', () => {
      render(<Calculator />)

      const inputElement = screen.getByTestId('screen-input')

      numbers.forEach((element) => {
        fireEvent.click(buttonElement(element))
      })
      expect(inputElement).toHaveValue('1,234,567,890.')
      fireEvent.click(buttonElement('AC'))
      expect(inputElement).toHaveValue('0')
    })

    it('onclick clear: C', () => {
      render(<Calculator />)

      const inputElement = screen.getByTestId('screen-input')

      fireEvent.click(buttonElement('3'))
      fireEvent.click(buttonElement('x'))
      fireEvent.click(buttonElement('8'))
      fireEvent.click(buttonElement('='))
      expect(inputElement).toHaveValue('24')

      fireEvent.click(buttonElement('AC'))
      fireEvent.click(buttonElement('3'))
      fireEvent.click(buttonElement('x'))
      fireEvent.click(buttonElement('8'))
      fireEvent.click(buttonElement('C'))
      fireEvent.click(buttonElement('6'))
      fireEvent.click(buttonElement('='))
      expect(inputElement).toHaveValue('18')
    })

    it('toggle sign', () => {
      render(<Calculator />)

      const inputElement = screen.getByTestId('screen-input')
      const toggleSignElement = screen.getByRole('button', { name: '±' })

      fireEvent.click(buttonElement('9'))
      fireEvent.click(toggleSignElement)
      expect(inputElement).toHaveValue('-9')
      fireEvent.click(buttonElement('x'))
      fireEvent.click(buttonElement('2'))
      fireEvent.click(buttonElement('='))
      fireEvent.click(toggleSignElement)
      expect(inputElement).toHaveValue('18')
    })

    it('onclick dot', () => {
      render(<Calculator />)

      const inputElement = screen.getByTestId('screen-input')

      fireEvent.click(buttonElement('.'))
      expect(inputElement).toHaveValue('0.')
      fireEvent.click(buttonElement('9'))
      fireEvent.click(buttonElement('x'))
      fireEvent.click(buttonElement('2'))
      fireEvent.click(buttonElement('='))
      expect(inputElement).toHaveValue('1.8')
      fireEvent.click(buttonElement('.'))
      expect(inputElement).toHaveValue('1.8')
    })

    it('show the calculation history', () => {
      render(<Calculator />)

      const historybuttonElement = screen.getByRole('button', { name: 'H' })

      fireEvent.click(historybuttonElement)
      expect(screen.getByText('History')).toBeInTheDocument()
      fireEvent.click(historybuttonElement)
      expect(screen.queryByText('History')).not.toBeInTheDocument()
    })
  })

  describe('perform calculations', () => {
    it('+ operator', () => {
      render(<Calculator />)

      const inputElement = screen.getByTestId('screen-input')

      // 9+6=15+15=30
      fireEvent.click(buttonElement('9'))
      fireEvent.click(buttonElement('+'))
      fireEvent.click(buttonElement('6'))
      fireEvent.click(buttonElement('='))
      expect(inputElement).toHaveValue('15')

      fireEvent.click(buttonElement('+'))
      fireEvent.click(buttonElement('='))
      expect(inputElement).toHaveValue('30')
    })

    it('- operator', () => {
      render(<Calculator />)

      const inputElement = screen.getByTestId('screen-input')

      // 9-6=3-3=0
      fireEvent.click(buttonElement('9'))
      fireEvent.click(buttonElement('-'))
      fireEvent.click(buttonElement('6'))
      fireEvent.click(buttonElement('='))
      expect(inputElement).toHaveValue('3')

      fireEvent.click(buttonElement('-'))
      fireEvent.click(buttonElement('='))
      expect(inputElement).toHaveValue('0')
    })

    it('x operator', () => {
      render(<Calculator />)

      const inputElement = screen.getByTestId('screen-input')

      // 9x6=54x54=2916
      fireEvent.click(buttonElement('9'))
      fireEvent.click(buttonElement('x'))
      fireEvent.click(buttonElement('6'))
      fireEvent.click(buttonElement('='))
      expect(inputElement).toHaveValue('54')

      fireEvent.click(buttonElement('x'))
      fireEvent.click(buttonElement('='))
      expect(inputElement).toHaveValue('2,916')
    })

    it('/ operator', () => {
      render(<Calculator />)

      const inputElement = screen.getByTestId('screen-input')

      // 9/6=1.5/1.5=1
      fireEvent.click(buttonElement('9'))
      fireEvent.click(buttonElement('/'))
      fireEvent.click(buttonElement('6'))
      fireEvent.click(buttonElement('='))
      expect(inputElement).toHaveValue('1.5')

      fireEvent.click(buttonElement('/'))
      fireEvent.click(buttonElement('='))
      expect(inputElement).toHaveValue('1')
    })

    it('calculations', () => {
      render(<Calculator />)

      const inputElement = screen.getByTestId('screen-input')

      fireEvent.click(buttonElement('9'))
      fireEvent.click(buttonElement('9'))
      fireEvent.click(buttonElement('/'))
      fireEvent.click(buttonElement('3'))
      fireEvent.click(buttonElement('/'))
      fireEvent.click(buttonElement('2'))
      fireEvent.click(buttonElement('x'))
      fireEvent.click(buttonElement('8'))
      fireEvent.click(buttonElement('5'))
      fireEvent.click(buttonElement('+'))
      fireEvent.click(buttonElement('6'))
      fireEvent.click(buttonElement('='))
      expect(inputElement).toHaveValue('1,408.5')
    })
  })
})
