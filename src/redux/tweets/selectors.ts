import { RootState } from '../store';

export const selectTweetsItems = (state: RootState) => state.tweets.items;
export const selectTweetsIsLoading = (state: RootState) =>
  state.tweets.isLoading;
export const selectTweetsError = (state: RootState) => state.tweets.error;
