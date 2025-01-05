import { Transaction, TransactionsSort } from '@api/clients/transactions/types';
import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TransactionsFilter } from './types';

export interface TransactionsState {
  filter: TransactionsFilter;
  sort: TransactionsSort;
  lastUpdated: number;
  transaction: Transaction | null;
}

const initialState: TransactionsState = {
  filter: {},
  sort: { column: 'date', direction: 'desc' },
  lastUpdated: Date.now(),
  transaction: null,
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
    setTransaction: (
      state,
      action: PayloadAction<{ transaction: Transaction | null }>,
    ) => {
      state.transaction = action.payload.transaction;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateFilter, updateTransactions, updateSort, setTransaction } =
  transactionsSlice.actions;

export const { reducer } = transactionsSlice;
