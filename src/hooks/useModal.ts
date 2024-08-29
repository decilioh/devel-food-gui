import { useState } from "react";

interface UseModalReturn {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

export const useModal = (): UseModalReturn => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return { isOpen, openModal, closeModal };
};