import { FunctionComponentWithoutProps } from 'types/FunctionComponent'
import { BigDialogScene } from 'scenes/dialog/BigDialogScene'
import {
  useCallback,
  useState,
} from 'react'
import { SmallDialogScene } from 'scenes/dialog/SmallDialogScene'
import { Button } from 'components/button/Button'
import { css } from '@emotion/react'
import { SceneTemplate } from 'templates/scene/SceneTemplate'


enum SceneName {
  SmallDialog = 'small-dialog',
  BigDialog = 'big-dialog',
}

const styles = {
  buttonDistance: css({
    height: '16px',
  }),
}

export const HomeScene: FunctionComponentWithoutProps = () => {
  const [selectedScene, setSelectedScene] = useState<SceneName | null>(null)

  const onClickSelectScene = useCallback(
    (scene: SceneName | null) =>
      () => {
        setSelectedScene(scene)
      }
    ,
    [],
  )

  switch (selectedScene) {
    case SceneName.SmallDialog:
      return <SmallDialogScene onBackClick={onClickSelectScene(null)} />

    case SceneName.BigDialog:
      return <BigDialogScene onBackClick={onClickSelectScene(null)} />

    default:
      return (
        <SceneTemplate>
          <Button
            onClick={onClickSelectScene(SceneName.SmallDialog)}
          >
            {'Dialog Pequeno'}
          </Button>

          <div css={styles.buttonDistance} />

          <Button
            onClick={onClickSelectScene(SceneName.BigDialog)}
          >
            {'Dialog Grande'}
          </Button>
        </SceneTemplate>
      )
  }
}
