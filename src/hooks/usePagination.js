import { useState } from "react";

const usePagination = (totalItems, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const getPageItems = (items) => {
    const firstIndex = (currentPage - 1) * itemsPerPage;
    const lastIndex = currentPage * itemsPerPage;
    return items.slice(firstIndex, lastIndex);
  };

  return {
    currentPage,
    totalPages,
    handlePreviousPage,
    handleNextPage,
    getPageItems,
  };
};

export default usePagination;
