import { SerializedError, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { ITweetItem } from '../../shared/types/TweetItem.interface';
import { getTweets, updateTweet } from './operations';

interface ITweetsState {
  items: ITweetItem[];
  isLoading: boolean;
  error: null | SerializedError;
}

const initialState: ITweetsState = {
  items: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getTweets.fulfilled, (state, { payload }) => {
        state.items = [...state.items, ...payload];
      })
      .addCase(updateTweet.fulfilled, (state, { payload }) => {
        state.items = state.items.map(item =>
          item.id === payload.id ? payload : item
        );
      })

      .addMatcher(isAnyOf(getTweets.pending, updateTweet.pending), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(getTweets.fulfilled, updateTweet.fulfilled),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(getTweets.rejected, updateTweet.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          if (payload) state.error = payload;
        }
      ),
});

export const tweetsReducer = slice.reducer;
