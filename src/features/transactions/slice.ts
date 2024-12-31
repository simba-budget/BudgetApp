import { TransactionsSort } from '@api/clients/transactions/types';
import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TransactionsFilter } from './types';

export interface TransactionsState {
  filter: TransactionsFilter;
  sort: TransactionsSort;
  lastUpdated: number;
}

const initialState: TransactionsState = {
  filter: {},
  sort: { column: 'date', direction: 'desc' },
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
    updateSort: (state, action: PayloadAction<{ sort: TransactionsSort }>) => {
      state.sort = action.payload.sort;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateFilter, updateTransactions, updateSort } = transactionsSlice.actions;
export const { reducer } = transactionsSlice;
