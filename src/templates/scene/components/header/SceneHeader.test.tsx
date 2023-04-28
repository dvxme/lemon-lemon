import {
  render,
  fireEvent,
  screen,
} from '@testing-library/react'
import '@testing-library/jest-dom'
import { SceneHeader } from 'templates/scene/components/header/SceneHeader'


const ComponentToTest = SceneHeader

describe(ComponentToTest.name, () => {
  test('should not display back button if no onBackClick is given',  () => {
    render(<ComponentToTest />)
  
    expect(screen.queryByAltText('voltar'))
      .toBe(null)
  })

  test('should call onBackClick when back button is pressed', () => {
    const onBackClick = jest.fn()

    render(<ComponentToTest onBackClick={onBackClick} />)

    fireEvent.click(screen.getByAltText('voltar'))

    expect(onBackClick)
      .toHaveBeenCalledTimes(1)
  })
})

