import { FunctionComponent } from 'types/FunctionComponent'
import { css } from '@emotion/react'
import { MouseEventHandler } from 'react'
import closeSvg from 'assets/close.svg'
import {
  circleOf,
  singleChildCentered,
  squareOf,
} from 'utils/styles'


const styles = {
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
  closeIcon: css({
    ...squareOf(24),
  }),
  closeButton: css({
    ...circleOf(48),
    ...singleChildCentered,
    backgroundColor: 'transparent',
  }),
}

interface SceneHeaderProps {
  onBackClick?: MouseEventHandler
}

export const SceneHeader: FunctionComponent<SceneHeaderProps> = ({
  onBackClick,
}) =>
  <div css={styles.header}>
    <h3 css={[styles.text, styles.title]}>{'testing'}</h3>

    <button
      css={styles.closeButton}
      onClick={onBackClick}
    >
      <img
        css={styles.closeIcon}
        src={closeSvg}
        alt="fechar"
      />
    </button>
  </div>