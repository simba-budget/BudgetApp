import { GoalsSort } from '@api/clients/goals/types';
import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GoalsFilter } from './types';

export interface GoalsState {
  filter: GoalsFilter;
  sort: GoalsSort;
  lastUpdated: number;
}

const initialState: GoalsState = {
  filter: {},
  sort: { column: 'name', direction: 'asc' },
  lastUpdated: Date.now(),
};

const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    updateGoals: (state) => {
      state.lastUpdated = Date.now();
    },
    updateFilter: (state, action: PayloadAction<{ filter: GoalsFilter }>) => {
      state.filter = action.payload.filter;
    },
    updateSort: (state, action: PayloadAction<{ sort: GoalsSort }>) => {
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

export const { updateFilter, updateGoals, updateKeyword, updateSort } =
  goalsSlice.actions;
export const { reducer } = goalsSlice;
