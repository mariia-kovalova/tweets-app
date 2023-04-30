import { useState, useEffect } from 'react';

interface PaginationResult<T> {
  shownData: T[];
  loadMore: () => void;
  hasMore: boolean;
}

const PER_PAGE = 3;

export function usePagination<T>(items: T[]): PaginationResult<T> {
  const [currentPage, setCurrentPage] = useState(1);
  const [shownData, setShownData] = useState<T[]>([]);

  useEffect(() => {
    setShownData(items.slice(0, currentPage * PER_PAGE));
  }, [items, currentPage]);

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const hasMore = currentPage * PER_PAGE < items.length;

  return { shownData, loadMore, hasMore };
}
