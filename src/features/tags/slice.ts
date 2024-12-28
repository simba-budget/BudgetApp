import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TagsFilter } from './types';

export interface TagsState {
  filter: TagsFilter;
  lastUpdated: number;
}

const initialState: TagsState = {
  filter: {},
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
    updateKeyword: (state, action: PayloadAction<{ keyword: string }>) => {
      state.filter.keyword = action.payload.keyword;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateFilter, updateTags, updateKeyword } = tagsSlice.actions;
export const { reducer } = tagsSlice;
