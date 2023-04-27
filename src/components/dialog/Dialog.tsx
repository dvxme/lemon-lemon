import { VoidFunctionWithoutParam } from 'types/VoidFunction'
import { FunctionComponent } from 'types/FunctionComponent'
import { WithChildren } from 'types/WithChildren'
import { Overlay } from 'components/overlay/Overlay'
import { css } from '@emotion/react'
import {
  circleOf,
  singleChildCentered,
} from 'utils/styles'
import closeSvg from 'assets/close.svg'
import { MouseEventHandler } from 'react'


const styles = {
  content: css({
    position: 'absolute',
    bottom: 0,
    padding: '8px 32px 32px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '90%',
  }),
  header: css({
    display: 'flex',
    alignItems: 'center',
    flex: 0,
  }),
  text: css({
    color: '#333',
    textAlign: 'left',
  }),
  body: css({
    flex: 1,
    overflowY: 'scroll',
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '24px',
  }),
  title: css({
    flex: 1,
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '32px',
  }),
  closeButton: css({
    ...circleOf(48),
    ...singleChildCentered,
    backgroundColor: 'transparent',
  }),
}

interface DialogProps extends WithChildren {
  title?: string
  isOpen: boolean
  onClose: VoidFunctionWithoutParam
  closeOnOverlayClick: boolean
}

const onClickStopPropagation: MouseEventHandler = event => {
  event.stopPropagation()
}

export const Dialog: FunctionComponent<DialogProps> = ({
  title,
  isOpen,
  onClose,
  closeOnOverlayClick,
  children,
}) => {
  return isOpen
    ? (
      <Overlay
        onClick={
          closeOnOverlayClick
            ? onClose
            : onClickStopPropagation
        }
      >
        <div
          css={styles.content}
          onClick={onClickStopPropagation}
        >
          <div css={styles.header}>
            <h3 css={[styles.text, styles.title]}>{title}</h3>

            <button
              css={styles.closeButton}
              onClick={onClose}
            >
              <img
                src={closeSvg}
                alt="fechar"
              />
            </button>
          </div>

          <div css={[styles.text, styles.body]}>
            {children}
          </div>
        </div>
      </Overlay>
    )
    : null
}