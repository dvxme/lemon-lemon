import { FunctionComponent } from 'types/FunctionComponent'
import {
  SceneHeader,
  SceneHeaderProps,
} from 'templates/scene/components/header/SceneHeader'
import { WithChildren } from 'types/WithChildren'
import { SceneBody } from 'templates/scene/components/body/SceneBody'


export const SceneTemplate: FunctionComponent<SceneHeaderProps & WithChildren> = ({
  onBackClick,
  children,
}) =>
  <>
    <SceneHeader onBackClick={onBackClick} />
    <SceneBody children={children} />
  </>