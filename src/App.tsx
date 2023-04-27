import { FunctionComponentWithoutProps } from 'types/FunctionComponent'
import { BigDialogScene } from 'scenes/BigDialogScene'
import {
  useCallback,
  useState,
} from 'react'
import { SmallDialogScene } from 'scenes/SmallDialogScene'
import { singleChildCentered } from 'utils/styles'


enum SceneName {
  SmallDialog = 'small-dialog',
  BigDialog = 'big-dialog',
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
        <div
          css={[singleChildCentered, {
            height: '100%',
          }]}
        >
          <button
            onClick={onClickSelectScene(SceneName.SmallDialog)}
          >
            Dialog Pequeno
          </button>
          <button
            onClick={onClickSelectScene(SceneName.BigDialog)}
          >
            Dialog Grande
          </button>
        </div>
      )
  }
}
