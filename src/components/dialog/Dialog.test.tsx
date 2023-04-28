import {
  render,
  fireEvent,
  screen,
} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Dialog } from 'components/dialog/Dialog'


const ComponentToTest = Dialog

const defaultProps = {
  title: 'Teste de Titulo',
  isOpen: true,
  onClose: jest.fn(),
  closeOnOverlayClick: true,
  children: 'Corpo',
}

describe(ComponentToTest.name, () => {
  test('should not render when closed',  () => {
    render(
      <ComponentToTest
        {...defaultProps}
        isOpen={false}
      />,
    )

    expect(screen.queryByTestId('overlay'))
      .toBe(null)
    expect(screen.queryByAltText('fechar'))
      .toBe(null)
    expect(screen.queryByText(defaultProps.title))
      .toBe(null)
    expect(screen.queryByText(defaultProps.children))
      .toBe(null)
  })

  describe('should call onClose', () => {
    test('when close button is clicked', () => {
      const onClose = jest.fn()
  
      render(
        <ComponentToTest
          {...defaultProps}
          onClose={onClose}
        />,
      )
  
      fireEvent.click(screen.getByAltText('fechar'))
  
      expect(onClose)
        .toHaveBeenCalledTimes(1)
    })
    test('when overlay is clicked', () => {
      const onClose = jest.fn()
  
      render(
        <ComponentToTest
          {...defaultProps}
          onClose={onClose}
        />,
      )
  
      fireEvent.click(screen.getByTestId('overlay'))

      expect(onClose)
        .toHaveBeenCalledTimes(1)
    })
    test('when esc key is pressed', () => {
      const onClose = jest.fn()

      const {
        baseElement, 
      } = render(
        <ComponentToTest
          {...defaultProps}
          onClose={onClose}
        />,
      )

      fireEvent.keyDown(baseElement, {
        key: 'Escape',
      })

      expect(onClose)
        .toHaveBeenCalledTimes(1)
    })
  })

  describe('should NOT call onClose', () => {
    test('when overlay is not clicked', () => {
      const onClose = jest.fn()

      render(
        <ComponentToTest
          {...defaultProps}
          onClose={onClose}
        />,
      )

      fireEvent.click(screen.getByText(defaultProps.title))
      fireEvent.click(screen.getByText(defaultProps.children))

      expect(onClose)
        .toHaveBeenCalledTimes(0)
    })

    test('when overlay is clicked but closeOnOverlayClick is disabled', () => {
      const onClose = jest.fn()

      render(
        <ComponentToTest
          {...defaultProps}
          onClose={onClose}
          closeOnOverlayClick={false}
        />,
      )

      fireEvent.click(screen.getByTestId('overlay'))

      expect(onClose)
        .toHaveBeenCalledTimes(0)
    })

    test('when esc key is not pressed', () => {
      const onClose = jest.fn()

      const {
        baseElement,
      } = render(
        <ComponentToTest
          {...defaultProps}
          onClose={onClose}
        />,
      )

      fireEvent.keyDown(baseElement, {
        key: 'A',
      })
      fireEvent.keyDown(baseElement, {
        key: 'Alt',
      })

      expect(onClose)
        .toHaveBeenCalledTimes(0)
    })
  })
})

