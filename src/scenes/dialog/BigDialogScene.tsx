import { FunctionComponent } from 'types/FunctionComponent'
import { Dialog } from 'components/dialog/Dialog'
import { useVisibility } from 'hooks/useVisibility'
import bigImage from 'assets/big.jpg'
import { css } from '@emotion/react'
import { DialogSceneProps } from 'scenes/dialog/types/DialogSceneProps'
import { Button } from 'components/button/Button'
import { SceneTemplate } from 'templates/scene/SceneTemplate'


const styles = {
  bigImage: css({
    width: '100%',
  }),
}

export const BigDialogScene: FunctionComponent<DialogSceneProps> = ({
  onBackClick, 
}) => {
  const [isDialogVisible, dialogVisibility] = useVisibility(false)
  
  return (
    <>
      <SceneTemplate onBackClick={onBackClick}>
        <Button
          onClick={dialogVisibility.show}
        >
          {'Abrir Dialog Grande'}
        </Button>
      </SceneTemplate>

      <Dialog
        title={'Título do Grande'}
        closeOnOverlayClick
        isOpen={isDialogVisible}
        onClose={dialogVisibility.hide}
      >
        <p>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus. Nisl tincidunt eget nullam non nisi. Condimentum vitae sapien pellentesque habitant. Eu facilisis sed odio morbi. Molestie ac feugiat sed lectus vestibulum mattis. Amet consectetur adipiscing elit pellentesque habitant. Duis convallis convallis tellus id interdum velit laoreet id. Feugiat in fermentum posuere urna nec tincidunt praesent. Consequat interdum varius sit amet. Ut consequat semper viverra nam libero justo laoreet sit.\n'
            + 'Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Aliquam ultrices sagittis orci a scelerisque purus. Lacus sed viverra tellus in. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Vivamus at augue eget arcu dictum varius duis. Amet est placerat in egestas erat imperdiet. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Augue ut lectus arcu bibendum at varius vel pharetra. Quisque egestas diam in arcu cursus euismod quis. Quis vel eros donec ac odio tempor. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Ridiculus mus mauris vitae ultricies leo integer malesuada. Urna condimentum mattis pellentesque id. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Amet consectetur adipiscing elit ut aliquam purus. Proin sed libero enim sed faucibus turpis. Neque ornare aenean euismod elementum. Viverra vitae congue eu consequat ac felis donec et odio.\n'
            + 'Magna etiam tempor orci eu lobortis. Ut pharetra sit amet aliquam. Integer vitae justo eget magna fermentum iaculis. Sit amet cursus sit amet dictum. Ipsum dolor sit amet consectetur adipiscing. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Cursus mattis molestie a iaculis. Ultricies mi quis hendrerit dolor. Faucibus scelerisque eleifend donec pretium vulputate sapien. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Quam quisque id diam vel quam elementum pulvinar. At elementum eu facilisis sed odio. Ultrices eros in cursus turpis massa tincidunt dui ut. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Massa tincidunt nunc pulvinar sapien et ligula. Auctor elit sed vulputate mi sit amet mauris. Venenatis urna cursus eget nunc scelerisque viverra. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Urna nunc id cursus metus aliquam eleifend. Etiam erat velit scelerisque in dictum non consectetur.\n'
            + 'Viverra aliquet eget sit amet. Interdum posuere lorem ipsum dolor sit amet. Feugiat scelerisque varius morbi enim nunc faucibus. Lorem donec massa sapien faucibus et molestie ac. Eget velit aliquet sagittis id. Aliquam malesuada bibendum arcu vitae elementum curabitur. Est ante in nibh mauris cursus. Lobortis feugiat vivamus at augue eget. In ornare quam viverra orci sagittis. Massa enim nec dui nunc mattis enim ut tellus. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Dui ut ornare lectus sit amet est placerat. Eu ultrices vitae auctor eu. Donec massa sapien faucibus et molestie. Arcu bibendum at varius vel pharetra vel. Dictum sit amet justo donec enim diam vulputate ut. Diam maecenas ultricies mi eget mauris pharetra et ultrices.\n'
          }
        </p>
        <img
          src={bigImage}
          css={styles.bigImage}
        />
      </Dialog>
    </>
  )
}
