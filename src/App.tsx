import { FunctionComponentWithoutProps } from 'types/FunctionComponent'
import { BigDialogScene } from 'scenes/BigDialogScene'
import {
  useCallback,
  useState,
} from 'react'
import { SmallDialogScene } from 'scenes/SmallDialogScene'
import { SceneHeader } from 'scenes/components/header/SceneHeader'
import { SceneBody } from 'scenes/components/body/SceneBody'
import { Button } from 'components/button/Button'
import { css } from '@emotion/react'


enum SceneName {
  SmallDialog = 'small-dialog',
  BigDialog = 'big-dialog',
}

const styles = {
  buttonDistance: css({
    height: '16px',
  }),
}

export const App: FunctionComponentWithoutProps = () => {
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
        <>
          <SceneHeader />

          <SceneBody>
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
          </SceneBody>
        </>
      )
  }
}
