import { FunctionComponent } from 'types/FunctionComponent'
import { css } from '@emotion/react'
import { WithChildren } from 'types/WithChildren'


const styles = {
  body: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    margin: '24px 0 0',
  }),
}

export const SceneBody: FunctionComponent<WithChildren> = ({
  children,
}) =>
  <div css={styles.body}>
    {children}
  </div>