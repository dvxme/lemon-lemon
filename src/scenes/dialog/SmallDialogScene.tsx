import { FunctionComponent } from 'types/FunctionComponent'
import { Dialog } from 'components/dialog/Dialog'
import { useVisibility } from 'hooks/useVisibility'
import { DialogSceneProps } from 'scenes/dialog/types/DialogSceneProps'
import { Button } from 'components/button/Button'
import { SceneTemplate } from 'templates/scene/SceneTemplate'


export const SmallDialogScene: FunctionComponent<DialogSceneProps> = ({
  onBackClick, 
}) => {
  const [isDialogVisible, dialogVisibility] = useVisibility(false)
  
  return (
    <>
      <SceneTemplate onBackClick={onBackClick}>
        <Button
          onClick={dialogVisibility.show}
        >
          {'Abrir Dialog Pequeno'}
        </Button>
      </SceneTemplate>

      <Dialog
        title={'Título do Pequeno'}
        closeOnOverlayClick
        isOpen={isDialogVisible}
        onClose={dialogVisibility.hide}
      >
        <p>
          {
            'Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Quem num gosta di mim que vai caçá sua turmis!'
          }
        </p>
      </Dialog>
    </>
  )
}
