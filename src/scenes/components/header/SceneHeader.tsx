import { FunctionComponent } from 'types/FunctionComponent'
import { css } from '@emotion/react'
import { MouseEventHandler } from 'react'
import backSvg from 'assets/back.svg'
import logoSvg from 'assets/logo.svg'
import { IconButton } from 'components/button/IconButton'


const styles = {
  header: css({
    padding: '8px 24px',
    display: 'flex',
    alignItems: 'center',
    flex: 0,
  }),
  logo: css({
    margin: '16px 0',
    height: '32px',
  }),
  emptySpace: css({
    flex: 1,
  }),
}

interface SceneHeaderProps {
  onBackClick?: MouseEventHandler
}

export const SceneHeader: FunctionComponent<SceneHeaderProps> = ({
  onBackClick,
}) =>
  <div css={styles.header}>
    {
      onBackClick
        ? (
          <IconButton
            src={backSvg}
            alt="voltar"
            onClick={onBackClick}
          />
        )
        : null
    }

    <div css={styles.emptySpace} />

    <img
      css={styles.logo}
      src={logoSvg}
      alt="lemon"
    />
  </div>