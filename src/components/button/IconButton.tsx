import { FunctionComponent } from 'types/FunctionComponent'
import {
  css,
  jsx,
} from '@emotion/react'
import {
  circleOf,
  singleChildCentered,
  squareOf,
} from 'utils/styles'


const styles = {
  icon: css({
    ...squareOf(24),
  }),
  button: css({
    ...circleOf(48),
    ...singleChildCentered,
    backgroundColor: 'transparent',
  }),
}

type Tag = jsx.JSX.IntrinsicElements
type IconButtonProps =
  Tag['button']
  & Required<Pick<Tag['button'], 'onClick'>>
  & Required<Pick<Tag['img'], 'src' | 'alt'>>
  & {
    imgCss?: Tag['img']['css']
  }

export const IconButton: FunctionComponent<IconButtonProps> = ({
  src,
  alt,
  css,
  imgCss,
  ...buttonProps
}) =>
  <button
    {...buttonProps}
    css={[styles.button, css]}
  >
    <img
      css={[styles.icon, imgCss]}
      src={src}
      alt={alt}
    />
  </button>