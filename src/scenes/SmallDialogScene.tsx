import { FunctionComponent } from 'types/FunctionComponent'
import { Dialog } from 'components/dialog/Dialog'
import { useVisibility } from 'hooks/useVisibility'
import { SceneHeader } from 'scenes/components/header/SceneHeader'
import { DialogSceneProps } from 'scenes/types/DialogSceneProps'
import { SceneBody } from 'scenes/components/body/SceneBody'
import { Button } from 'components/button/Button'


export const SmallDialogScene: FunctionComponent<DialogSceneProps> = ({
  onBackClick, 
}) => {
  const [isDialogVisible, dialogVisibility] = useVisibility(false)
  
  return (
    <>
      <SceneHeader onBackClick={onBackClick} />

      <SceneBody>
        <Button
          onClick={dialogVisibility.show}
        >
          {'Abrir Dialog Pequeno'}
        </Button>
      </SceneBody>

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
