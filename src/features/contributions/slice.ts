import { ContributionsSort } from '@api/clients/contributions/types';
import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ContributionsFilter } from './types';

export interface ContributionsState {
  filter: ContributionsFilter;
  sort: ContributionsSort;
  lastUpdated: number;
}

const initialState: ContributionsState = {
  filter: {},
  sort: { column: 'date', direction: 'desc' },
  lastUpdated: Date.now(),
};

const contributionsSlice = createSlice({
  name: 'contributions',
  initialState,
  reducers: {
    updateContributions: (state) => {
      state.lastUpdated = Date.now();
    },
    updateFilter: (
      state,
      action: PayloadAction<{ filter: ContributionsFilter }>,
    ) => {
      state.filter = action.payload.filter;
    },
    updateSort: (state, action: PayloadAction<{ sort: ContributionsSort }>) => {
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

export const { updateFilter, updateContributions, updateKeyword, updateSort } =
  contributionsSlice.actions;

export const { reducer } = contributionsSlice;
