import { FunctionComponentWithoutProps } from 'types/FunctionComponent'
import { Dialog } from 'components/dialog/Dialog'
import { useVisibility } from 'hooks/useVisibility'
import { singleChildCentered } from 'utils/styles'


export const SmallDialogScene: FunctionComponentWithoutProps = () => {
  const [isDialogVisible, dialogVisibility] = useVisibility(false)
  
  return (
    <>
      <div
        css={[singleChildCentered, {
          height: '100%', 
        }]}
      >
        <button
          onClick={dialogVisibility.show}
        >
          {'Clica vai'}
        </button>
      </div>
      <Dialog
        title={'Título Pequeno'}
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
