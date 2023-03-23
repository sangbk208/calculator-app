import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Screen } from './Screen'

describe('<Screen />', () => {
  it('renders correctly', () => {
    render(<Screen displayValue="1998" />)

    const inputElement = screen.getByTestId('screen-input')

    expect(screen.getByTestId('screen-container')).toBeInTheDocument()
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveValue('1998')
  })
})
