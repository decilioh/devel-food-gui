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
                <ModalDescription>{$description}</ModalDescription>
                <ButtonGroup>
                    <Button onClick={$onConfirm}>Sim</Button>
                    <Button onClick={$onClose}>Não</Button>
                </ButtonGroup>
            </ModalContainer>
        </ModalOverlay>
    );
};