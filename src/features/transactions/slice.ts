import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TransactionsFilter } from './types';

export interface TransactionsState {
  filter: TransactionsFilter;
  lastUpdated: number;
}

const initialState: TransactionsState = {
  filter: {},
  lastUpdated: Date.now(),
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    updateTransactions: (state) => {
      state.lastUpdated = Date.now();
    },
    updateFilter: (state, action: PayloadAction<{ filter: TransactionsFilter }>) => {
      state.filter = action.payload.filter;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateFilter, updateTransactions } = transactionsSlice.actions;
export const { reducer } = transactionsSlice;
