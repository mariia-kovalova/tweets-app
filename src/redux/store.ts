import { configureStore } from '@reduxjs/toolkit';
import { tweetsReducer } from './tweets/slice';
import { filterReducer } from './filter/slice';

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
