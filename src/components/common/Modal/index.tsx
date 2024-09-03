import { ReactNode } from "react";
import { Button, ButtonGroup, ModalContainer, ModalDescription, ModalOverlay } from "./styles";

interface ModalProps {
    $isOpen: boolean;
    $onClose: () => void;
    $onConfirm: () => void;
    $description: ReactNode;
}

export const Modal = ({ $isOpen, $onClose, $onConfirm, $description }: ModalProps) => {
    if (!$isOpen) return null;

    return (
        <ModalOverlay $isOpen={$isOpen}>
            <ModalContainer>
                <ModalDescription id="modal-description">{$description}</ModalDescription>
                <ButtonGroup>
                    <Button onClick={$onConfirm} id="button-confirm-modal">Sim</Button>
                    <Button onClick={$onClose} id='button-not-confirm-modal'>Não</Button>
                </ButtonGroup>
            </ModalContainer>
        </ModalOverlay>
    );
};