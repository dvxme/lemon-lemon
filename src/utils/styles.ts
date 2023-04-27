export const squareOf = (size: number) => ({
  width: size,
  height: size,
})

export const circleOf = (size: number) => ({
  ...squareOf(size),
  borderRadius: size / 2,
})

export const singleChildCentered = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}