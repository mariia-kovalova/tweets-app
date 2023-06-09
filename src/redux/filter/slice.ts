import { createSlice } from '@reduxjs/toolkit';
import { Filter } from '../../shared/types/Filter.type';

interface IFilterState {
  status: Filter;
}

const initialState: IFilterState = {
  status: 'show all',
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStatusFilter(state, { payload }) {
      state.status = payload;
    },
  },
});

export const { setStatusFilter } = slice.actions;
export const filterReducer = slice.reducer;
