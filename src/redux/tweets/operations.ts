import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITweetItem } from '../../shared/types/TweetItem.interface';
import { tweetsApi } from '../../api/tweetsApi';

export const getTweets = createAsyncThunk(
  'tweets/getAll',
  async (_, { rejectWithValue }) => {
    try {
      return await tweetsApi.getTweets();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const updateTweet = createAsyncThunk(
  'tweets/updateTweet',
  async (tweet: ITweetItem, { rejectWithValue }) => {
    try {
      return await tweetsApi.updateTweet(tweet);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
