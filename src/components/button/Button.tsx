import { FunctionComponent } from 'types/FunctionComponent'
import {
  css,
  jsx,
} from '@emotion/react'
import { singleChildCentered } from 'utils/styles'
import { Colors } from 'utils/Colors'


const styles = {
  button: css({
    ...singleChildCentered,
    backgroundColor: Colors.LemonGreen,
    minWidth: '200px',
    borderRadius: 0,
  }),
}

type Tag = jsx.JSX.IntrinsicElements
export type ButtonProps =
  Tag['button']
  & Required<Pick<Tag['button'], 'onClick'>>

export const Button: FunctionComponent<ButtonProps> = ({
  css,
  ...buttonProps
}) =>
  <button
    {...buttonProps}
    css={[styles.button, css]}
  />