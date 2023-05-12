import { useState, useEffect } from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { TweetsWithIsFollowing } from '../shared/types/TweetItem.interface';
import { getTweets } from '../redux/tweets/operations';
import { useAppDispatch, useAppSelector } from './useRedux';
import { useTweets } from './useTweets';
import { selectStatusFilter } from '../redux/filter/selectors';
import { selectFollowingsIds } from '../redux/followings/selectors';
import { follow, followings, showAll } from '../shared/constants/filter';

interface PaginationResult {
  items: TweetsWithIsFollowing[];
  loadMore: () => void;
  hasMore: boolean;
  isLoading: boolean;
  error: null | SerializedError;
}

const TOTAL_ITEMS = 12;
const LIMIT = 3;

export function usePagination(): PaginationResult {
  const [page, setPage] = useState(1);
  const filter = useAppSelector(selectStatusFilter);
  const ids = useAppSelector(selectFollowingsIds);
  const { items = [], isLoading, error } = useTweets();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTweets({ page, limit: LIMIT }));
  }, [dispatch, page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const currentTotalItems = (): number => {
    switch (filter) {
      case showAll:
        return TOTAL_ITEMS;
      case follow:
        return TOTAL_ITEMS - ids.length;
      case followings:
        return ids.length;
      default:
        return TOTAL_ITEMS;
    }
  };

  const hasMore = currentTotalItems() > items.length;

  useEffect(() => {
    if (filter !== showAll && hasMore && items.length < LIMIT) {
      setPage(page + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return { items, loadMore, hasMore, isLoading, error };
}
