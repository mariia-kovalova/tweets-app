import { useState, useEffect } from 'react';

interface PaginationProps<T> {
  initialPage: number;
  perPage: number;
  data: T[];
}

interface PaginationResult<T> {
  shownData: T[];
  loadMore: () => void;
  hasMore: boolean;
}

export function usePagination<T>({
  initialPage,
  perPage,
  data,
}: PaginationProps<T>): PaginationResult<T> {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [shownData, setShownData] = useState<T[]>([]);

  useEffect(() => {
    setShownData(data.slice(0, currentPage * perPage));
  }, [data, currentPage, perPage]);

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const hasMore = currentPage * perPage < data.length;

  return { shownData, loadMore, hasMore };
}
