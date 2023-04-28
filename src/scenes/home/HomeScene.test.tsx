import {
  render,
  fireEvent,
  screen,
} from '@testing-library/react'
import '@testing-library/jest-dom'
import { HomeScene } from 'scenes/home/HomeScene'


const ComponentToTest = HomeScene

describe(ComponentToTest.name, () => {
  test('should start on home',  () => {
    render(<ComponentToTest />)

    expect(screen.queryByText('Dialog Pequeno'))
      .not
      .toBe(null)
    expect(screen.queryByText('Dialog Grande'))
      .not
      .toBe(null)
    expect(screen.queryByTestId('overlay'))
      .toBe(null)
    expect(screen.queryByAltText('voltar'))
      .toBe(null)
    expect(screen.queryByText('Abrir Dialog Grande'))
      .toBe(null)
    expect(screen.queryByText('Abrir Dialog Pequeno'))
      .toBe(null)
  })

  test('should navigate to SmallDialogScene',  () => {
    render(<ComponentToTest />)

    fireEvent.click(screen.getByText('Dialog Pequeno'))

    expect(screen.queryByText('Dialog Pequeno'))
      .toBe(null)
    expect(screen.queryByText('Dialog Grande'))
      .toBe(null)
    expect(screen.queryByTestId('overlay'))
      .toBe(null)
    expect(screen.queryByAltText('voltar'))
      .not
      .toBe(null)
    expect(screen.queryByText('Abrir Dialog Grande'))
      .toBe(null)
    expect(screen.queryByText('Abrir Dialog Pequeno'))
      .not
      .toBe(null)
  })

  test('should navigate to BigDialogScene',  () => {
    render(<ComponentToTest />)

    fireEvent.click(screen.getByText('Dialog Grande'))

    expect(screen.queryByText('Dialog Pequeno'))
      .toBe(null)
    expect(screen.queryByText('Dialog Grande'))
      .toBe(null)
    expect(screen.queryByTestId('overlay'))
      .toBe(null)
    expect(screen.queryByAltText('voltar'))
      .not
      .toBe(null)
    expect(screen.queryByText('Abrir Dialog Grande'))
      .not
      .toBe(null)
    expect(screen.queryByText('Abrir Dialog Pequeno'))
      .toBe(null)
  })
})

