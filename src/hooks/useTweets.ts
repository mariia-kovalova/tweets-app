import { createSelector } from '@reduxjs/toolkit';
import {
  selectTweetsError,
  selectTweetsIsLoading,
  selectTweetsItems,
} from '../redux/tweets/selectors';
import { useAppSelector } from './useRedux';
import { selectStatusFilter } from '../redux/filter/selectors';
import { follow, followings, showAll } from '../shared/constants/filter';
import { selectFollowingsIds } from '../redux/followings/selectors';

export const selectTweetWithIsFollowing = createSelector(
  [selectTweetsItems, selectFollowingsIds],
  (tweets, ids) => {
    return tweets.map(tweet => ({
      ...tweet,
      isFollowing: ids.includes(tweet.id),
    }));
  }
);

const selectFilteredTweets = createSelector(
  [selectTweetWithIsFollowing, selectStatusFilter],
  (tweets, filter) => {
    switch (filter) {
      case showAll:
        return tweets;
      case follow:
        return tweets.filter(tweet => !tweet.isFollowing);
      case followings:
        return tweets.filter(tweet => tweet.isFollowing);
    }
  }
);

export const useTweets = () => {
  const isLoading = useAppSelector(selectTweetsIsLoading);
  const error = useAppSelector(selectTweetsError);
  const items = useAppSelector(selectFilteredTweets);

  return {
    isLoading,
    error,
    items,
  };
};
