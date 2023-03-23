import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from './Button'

describe('<Button />', () => {
  it('renders default button', () => {
    render(<Button>C</Button>)

    const defaultButtonElement = screen.getByRole('button', { name: 'C' })

    expect(defaultButtonElement).toBeInTheDocument()
    expect(
      defaultButtonElement.className.includes('button-container button-default')
    ).toEqual(true)
  })

  it('default button is active', () => {
    render(<Button isActive>C</Button>)

    const defaultButtonElement = screen.getByRole('button', { name: 'C' })

    expect(defaultButtonElement).toBeInTheDocument()
    expect(
      defaultButtonElement.className.includes('button-default-active')
    ).toEqual(true)
  })

  it('renders number button', () => {
    render(<Button type="number">5</Button>)

    const defaultButtonElement = screen.getByRole('button', { name: '5' })

    expect(defaultButtonElement).toBeInTheDocument()
    expect(
      defaultButtonElement.className.includes('button-container button-number')
    ).toEqual(true)
  })

  it('number button is active', () => {
    render(
      <Button isActive type="number">
        5
      </Button>
    )

    const defaultButtonElement = screen.getByRole('button', { name: '5' })

    expect(defaultButtonElement).toBeInTheDocument()
    expect(
      defaultButtonElement.className.includes('button-number-active')
    ).toEqual(true)
  })

  it('renders operator button', () => {
    render(<Button type="operator">x</Button>)

    const defaultButtonElement = screen.getByRole('button', { name: 'x' })

    expect(defaultButtonElement).toBeInTheDocument()
    expect(
      defaultButtonElement.className.includes(
        'button-container button-operator'
      )
    ).toEqual(true)
  })

  it('operator button is active', () => {
    render(
      <Button isActive type="operator">
        x
      </Button>
    )

    const defaultButtonElement = screen.getByRole('button', { name: 'x' })

    expect(defaultButtonElement).toBeInTheDocument()
    expect(
      defaultButtonElement.className.includes('button-operator-active')
    ).toEqual(true)
  })
})
