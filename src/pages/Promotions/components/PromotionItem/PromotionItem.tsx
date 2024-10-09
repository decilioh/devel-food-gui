import { LuPencilLine } from "react-icons/lu";
import { Button, Image, ImageContainer, MenuItemContainer, Overlay, OverlayContent, Title } from "./styles"
import { IoTrashSharp } from "react-icons/io5";
import { Modal } from "../../../../components/common/Modal";
import { useModal } from "../../../../hooks/useModal";
import { toast } from "react-toastify";
import { apiRestaurantRegister } from "../../../../services/backend";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


interface PromotionItemProps {
  title: string;
  id: string | number;
  urlPhoto: string;
  onDelete: () => void;
}

export const PromotionItem = ({ title, id, urlPhoto, onDelete }: PromotionItemProps) => {
  const { isOpen, openModal, closeModal } = useModal();
  const [promoIdToDelete, setPromoIdToDelete] = useState<number | null>(null);
  const navigate = useNavigate()

  function handleOpenModal(PromoId: number) {
    setPromoIdToDelete(PromoId);
    openModal();
  }

  async function handleDeletePromo(id: number) {
    try {
      const response = await apiRestaurantRegister.delete(`/promotions/${id}`);
      console.log('Prato excluído com sucesso:', response.data);

    } catch (error) {
      console.error('Erro ao excluir o prato:', error);
    }
  }

  async function handleConfirm() {
    if (promoIdToDelete !== null) {
      try {
        await handleDeletePromo(promoIdToDelete);
        toast.success('Promoção deletada com sucesso');
        onDelete();
      } catch (error) {
        toast.error('Erro ao deletar a promoção');
      } finally {
        setPromoIdToDelete(null);
        closeModal();
      }
    }
  }

  function handleEditPromo() {
    navigate(`/admin/promocoes/editar/${id}`);
  }

  return (
    <>
      <MenuItemContainer id={`food-${title}-${id}`}>
        <ImageContainer>
          <Image src={urlPhoto} alt={title} />
          <Overlay>
            <OverlayContent>
              <Button onClick={handleEditPromo} id={`button-edit-${title}-${id}`}>
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
