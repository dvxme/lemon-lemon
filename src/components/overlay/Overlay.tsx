import { FunctionComponent } from 'types/FunctionComponent'
import { WithChildren } from 'types/WithChildren'
import { css } from '@emotion/react'
import { MouseEventHandler } from 'react'
import { Colors } from 'utils/Colors'


const styles = {
  overlay: css({
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: Colors.OverlayBackground,
  }),
}

interface OverlayProps extends WithChildren {
  onClick: MouseEventHandler
}

export const Overlay: FunctionComponent<OverlayProps> = ({
  onClick,
  children,
}) =>
  <div
    onClick={onClick}
    css={styles.overlay}
    data-testid="overlay"
  >
    {children}
  </div>