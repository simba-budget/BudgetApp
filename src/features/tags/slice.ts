import { TagsSort } from '@api/clients/tags/types';
import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TagsFilter } from './types';

export interface TagsState {
  filter: TagsFilter;
  sort: TagsSort;
  lastUpdated: number;
}

const initialState: TagsState = {
  filter: {},
  sort: { column: 'name', direction: 'asc' },
  lastUpdated: Date.now(),
};

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    updateTags: (state) => {
      state.lastUpdated = Date.now();
    },
    updateFilter: (state, action: PayloadAction<{ filter: TagsFilter }>) => {
      state.filter = action.payload.filter;
    },
    updateSort: (state, action: PayloadAction<{ sort: TagsSort }>) => {
      state.sort = action.payload.sort;
    },
    updateKeyword: (state, action: PayloadAction<{ keyword: string }>) => {
      state.filter.keyword = action.payload.keyword;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateFilter, updateTags, updateKeyword, updateSort } =
  tagsSlice.actions;
export const { reducer } = tagsSlice;
