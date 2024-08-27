import { Button } from "../../components/common/Button";
import { Modal } from "../../components/common/Modal";
import { useModal } from "../../hooks/useModal";

export const Home = () => {
    const { isOpen, openModal, closeModal } = useModal();

    const handleConfirm = () => {
        closeModal();
    };

    const handleOpenModal = () => {
        openModal();
    }
    return (
        <div>
            index
            <Button onClick={handleOpenModal}>
                MODAL
            </Button>

            <Modal
                $isOpen={isOpen}
                $onClose={closeModal}
                $onConfirm={handleConfirm}
                $description={
                    <>
                        Você tem certeza que deseja realizar <br />
                        esta ação?
                    </>
                }
            />
        </div>
    )
}
