import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoriesFilter } from './types';

export interface CategoryState {
  filter: CategoriesFilter;
  lastUpdated: number;
}

const initialState: CategoryState = {
  filter: {},
  lastUpdated: Date.now(),
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    updateCategories: (state) => {
      state.lastUpdated = Date.now();
    },
    updateFilter: (state, action: PayloadAction<{ filter: CategoriesFilter }>) => {
      state.filter = action.payload.filter;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateFilter, updateCategories } = categoriesSlice.actions;
export const { reducer } = categoriesSlice;
