import { useState } from 'react';

interface UsePaginationProps {
    itemsPerPage: number;
    totalItems: number;
}

export const usePagination = ({ itemsPerPage, totalItems }: UsePaginationProps) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = (items: any[]) => items.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return {
        currentPage,
        totalPages,
        currentItems,
        paginate,
        setCurrentPage,
    };
};
