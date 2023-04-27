export const squareOf = (size: number) => ({
  width: `${size}px`,
  height: `${size}px`,
})

export const circleOf = (size: number) => ({
  ...squareOf(size),
  borderRadius: `${size / 2}px`,
})

export const singleChildCentered = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}