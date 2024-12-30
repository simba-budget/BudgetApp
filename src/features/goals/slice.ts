import { Paging } from '@api/types';
import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GoalsFilter } from './types';

export interface GoalsState {
  filter: GoalsFilter;
  paging: Paging;
  lastUpdated: number;
}

const initialState: GoalsState = {
  filter: {},
  paging: { limit: 20, offset: 0 },
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
    updatePaging: (state, action: PayloadAction<{ paging: Paging }>) => {
      state.paging = action.payload.paging;
    },
    updateKeyword: (state, action: PayloadAction<{ keyword: string }>) => {
      state.filter.keyword = action.payload.keyword;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateFilter, updateGoals, updateKeyword, updatePaging } = goalsSlice.actions;
export const { reducer } = goalsSlice;
