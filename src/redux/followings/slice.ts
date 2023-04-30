import { createSlice } from '@reduxjs/toolkit';

interface IFollowingsState {
  ids: string[];
}

const initialState: IFollowingsState = {
  ids: [],
};

export const slice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    addFollowing(state, { payload }) {
      state.ids.push(payload);
    },
    removeFollowing(state, { payload }) {
      state.ids = state.ids.filter(id => id !== payload);
    },
  },
});

export const { addFollowing, removeFollowing } = slice.actions;
export const followingsReducer = slice.reducer;
