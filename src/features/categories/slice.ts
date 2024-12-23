import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoriesFilter } from './types';

export interface CategoriesState {
  filter: CategoriesFilter;
  lastUpdated: number;
}

const initialState: CategoriesState = {
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
    updateKeyword: (state, action: PayloadAction<{ keyword: string }>) => {
      state.filter.keyword = action.payload.keyword;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateFilter, updateCategories, updateKeyword } = categoriesSlice.actions;
export const { reducer } = categoriesSlice;
