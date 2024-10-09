import { LuPencilLine } from "react-icons/lu";
import { Button, Image, ImageContainer, MenuItemContainer, Overlay, OverlayContent, Title } from "./styles"
import { IoTrashSharp } from "react-icons/io5";
import { useModal } from "../../../../hooks/useModal";
import { apiRestaurantRegister } from "../../../../services/backend";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../../../components/common/Modal";

interface MenuItemProps {
  title: string;
  id: string;
  photo: string;
  onDelete: () => void;
}

export const MenuItem = ({ title, id, photo, onDelete }: MenuItemProps) => {
  const { isOpen, openModal, closeModal } = useModal();
  const [dishIdToDelete, setDishIdToDelete] = useState<number | null>(null);
  const navigate = useNavigate();

  function handleOpenModal(dishId: number) {
    setDishIdToDelete(dishId);
    openModal();
  }

  async function handleDeleteDish(id: number) {
    try {
      const response = await apiRestaurantRegister.delete(`/dish/${id}`);
      console.log('Prato excluído com sucesso:', response.data);

    } catch (error) {
      console.error('Erro ao excluir o prato:', error);
    }
  }

  function handleConfirm() {
    if (dishIdToDelete !== null) {
      handleDeleteDish(dishIdToDelete);
      setDishIdToDelete(null);
      onDelete();
      toast.success('Prato deletado com sucesso')
    }
    closeModal();
  }

  function handleEditDish() {
    navigate(`/admin/menu/prato/${id}`);
  }

  return (
    <>
      <MenuItemContainer id={`food-${title}-${id}`}>
        <ImageContainer>
          <Image src={photo} alt={title} />
          <Overlay>
            <OverlayContent>
              <Button onClick={handleEditDish} id={`button-edit-${title}-${id}`}>
                <LuPencilLine size={30} color="006307" />
              </Button>

              <Button onClick={() => handleOpenModal(Number(id))} id={`button-remove-${title}-${id}`}>
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
