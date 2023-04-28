import {
  render,
  fireEvent,
  screen,
} from '@testing-library/react'
import '@testing-library/jest-dom'
import { SmallDialogScene } from 'scenes/dialog/SmallDialogScene'


const ComponentToTest = SmallDialogScene

const defaultProps = {
  onBackClick: jest.fn(),
}

describe(ComponentToTest.name, () => {
  test('should trigger onBackClick when back button is clicked',  () => {
    const onBackClick = jest.fn()

    render(
      <ComponentToTest
        {...defaultProps}
        onBackClick={onBackClick}
      />,
    )

    fireEvent.click(screen.getByAltText('voltar'))

    expect(onBackClick)
      .toHaveBeenCalledTimes(1)
  })

  test('should not render dialog when opened',  () => {
    render(
      <ComponentToTest
        {...defaultProps}
      />,
    )

    expect(screen.queryByTestId('overlay'))
      .toBe(null)
    expect(screen.queryByAltText('fechar'))
      .toBe(null)
    expect(screen.queryByText('Título do Grande'))
      .toBe(null)
    expect(screen.queryByText('Lorem ipsum'))
      .toBe(null)
  })

  test('should open and close dialog',  () => {
    render(
      <ComponentToTest
        {...defaultProps}
      />,
    )

    fireEvent.click(screen.getByText('Abrir Dialog Pequeno'))

    expect(screen.queryByText('Título do Pequeno'))
      .not
      .toBe(null)
    expect(screen.queryByText('Mussum Ipsum', {
      exact: false,
    }))
      .not
      .toBe(null)

    fireEvent.click(screen.getByAltText('fechar'))

    expect(screen.queryByText('Título do Pequeno'))
      .toBe(null)
    expect(screen.queryByText('Mussum Ipsum', {
      exact: false,
    }))
      .toBe(null)
  })
})

