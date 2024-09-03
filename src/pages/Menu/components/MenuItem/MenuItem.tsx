import { LuPencilLine } from "react-icons/lu";
import { Button, Image, ImageContainer, MenuItemContainer, Overlay, OverlayContent, Title } from "./styles"
import thumbnail from '../../../../assets/images/strogonoff.png'
import { IoTrashSharp } from "react-icons/io5";
import { Modal } from "../../../../components/common/Modal";
import { useModal } from "../../../../hooks/useModal";


interface MenuItemProps {
  title: string;
}

export const MenuItem = ({ title }: MenuItemProps) => {
  const { isOpen, openModal, closeModal } = useModal();

  function handleConfirm() {
    console.log('excluindo...')
  }
  return (
    <MenuItemContainer>
      <ImageContainer>
        <Image src={thumbnail} alt={title} />
        <Overlay>
          <OverlayContent>
            <Button>
              <LuPencilLine size={30} color="006307" />
            </Button>

            <Button onClick={openModal}>
              <IoTrashSharp size={30} color="B70000" />
            </Button>
          </OverlayContent>
        </Overlay>
      </ImageContainer>
      <Title>{title}</Title>

      <Modal
        $isOpen={isOpen}
        $onClose={closeModal}
        $onConfirm={handleConfirm}
        $description="Você tem certeza que deseja realizar esta ação?"
      />

    </MenuItemContainer>
  )
}
