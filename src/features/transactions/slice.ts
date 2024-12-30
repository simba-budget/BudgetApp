import { TransactionsSort } from '@api/clients/transactions/types';
import { Paging } from '@api/types';
import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TransactionsFilter } from './types';

export interface TransactionsState {
  filter: TransactionsFilter;
  sort: TransactionsSort;
  paging: Paging;
  lastUpdated: number;
}

const initialState: TransactionsState = {
  filter: {},
  sort: { column: 'date', direction: 'desc' },
  paging: { limit: 20, offset: 0 },
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
    updatePaging: (state, action: PayloadAction<{ paging: Paging }>) => {
      state.paging = action.payload.paging;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateFilter, updateTransactions, updateSort, updatePaging } =
  transactionsSlice.actions;

export const { reducer } = transactionsSlice;
