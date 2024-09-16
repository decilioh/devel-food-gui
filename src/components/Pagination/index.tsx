import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.25rem 0;

    button {
        border: none;
        background: none;
        cursor: pointer;
        display: flex;
        align-items: center;

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }

    span {
        margin: 0 10px;
        font-size: 1.25rem;
    }

    svg{
        color:${({ theme }) => theme.colors.textColor}
    }
`;

interface PaginationProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (pageNumber: number) => void;
}

export const Pagination = ({
    currentPage,
    totalItems,
    itemsPerPage,
    onPageChange,
}: PaginationProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <PaginationContainer>
            <button onClick={handlePrevious} disabled={currentPage === 1}>
                <IoIosArrowBack size={30} />
            </button>
            <span>{currentPage}</span>
            <button onClick={handleNext} disabled={currentPage === totalPages}>
                <IoIosArrowForward size={30} />
            </button>
        </PaginationContainer>
    );
};
