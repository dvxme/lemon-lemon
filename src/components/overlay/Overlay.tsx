import { VoidFunctionWithoutParam } from 'types/VoidFunction'
import { FunctionComponent } from 'types/FunctionComponent'
import { WithChildren } from 'types/WithChildren'
import { css } from '@emotion/react'


const styles = {
  overlay: css({
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: 'rgba(0, 0, 0, .85)',
  }),
}

interface OverlayProps extends WithChildren {
  onClick: VoidFunctionWithoutParam
}

export const Overlay: FunctionComponent<OverlayProps> = ({
  onClick,
  children,
}) => {
  return (
    <div
      onClick={onClick}
      css={styles.overlay}
    >
      {children}
    </div>
  )
}