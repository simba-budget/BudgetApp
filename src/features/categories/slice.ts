import { CategoriesSort } from '@api/clients/categories/types';
import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoriesFilter } from './types';

export interface CategoriesState {
  filter: CategoriesFilter;
  sort: CategoriesSort;
  lastUpdated: number;
}

const initialState: CategoriesState = {
  filter: {},
  sort: { column: 'name', direction: 'asc' },
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
    updateSort: (state, action: PayloadAction<{ sort: CategoriesSort }>) => {
      state.sort = action.payload.sort;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateFilter, updateCategories, updateSort } =
  categoriesSlice.actions;

export const { reducer } = categoriesSlice;
