import { LuPencilLine } from "react-icons/lu";
import { Button, Image, ImageContainer, MenuItemContainer, Overlay, OverlayContent, Title } from "./styles"
import { IoTrashSharp } from "react-icons/io5";
import { Modal } from "../../../../components/common/Modal";
import { useModal } from "../../../../hooks/useModal";


interface PromotionItemProps {
  title: string;
  id: string | number;
  urlPhoto: string;
}

export const PromotionItem = ({ title, id, urlPhoto }: PromotionItemProps) => {
  const { isOpen, openModal, closeModal } = useModal();

  function handleConfirm() {
    console.log('excluindo...')
  }
  return (
    <>
      <MenuItemContainer id={`food-${title}-${id}`}>
        <ImageContainer>
          <Image src={urlPhoto} alt={title} />
          <Overlay>
            <OverlayContent>
              <Button id={`button-edit-${title}-${id}`}>
                <LuPencilLine size={30} color="006307" />
              </Button>

              <Button onClick={openModal} id={`button-remove-${title}-${id}`}>
                <IoTrashSharp size={30} color="B70000" />
              </Button>
            </OverlayContent>
          </Overlay>
        </ImageContainer>
        <Title>{title}</Title>
      </MenuItemContainer>
      <Modal
        $isOpen={isOpen}
        $onClose={closeModal}
        $onConfirm={handleConfirm}
        $description="Você tem certeza que deseja realizar esta ação?"
      />
    </>



  )
}
