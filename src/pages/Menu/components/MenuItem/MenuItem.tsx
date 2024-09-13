import { LuPencilLine } from "react-icons/lu";
import { Button, Image, ImageContainer, MenuItemContainer, Overlay, OverlayContent, Title } from "./styles"
import thumbnail from '../../../../assets/images/strogonoff.png'
import { IoTrashSharp } from "react-icons/io5";
import { Modal } from "../../../../components/common/Modal";
import { useModal } from "../../../../hooks/useModal";
import { useState } from "react";
import { mockDish } from "../../../../mocks/dishMock";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


interface MenuItemProps {
  title: string;
  id: string;
}

export const MenuItem = ({ title, id }: MenuItemProps) => {
  const { isOpen, openModal, closeModal } = useModal();

  function handleConfirm() {
    console.log('excluindo...')
  }
  return (
    <>
      <MenuItemContainer id={`food-${title}-${id}`}>
        <ImageContainer>
          <Image src={thumbnail} alt={title} />
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
