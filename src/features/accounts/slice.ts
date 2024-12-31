import { Account, AccountsFilter, AccountsSort } from '@api/clients/accounts/types';
import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { selectAccountAction } from './actions';

export interface AccountsState {
  filter: AccountsFilter;
  sort: AccountsSort;
  selectedAccount: Account | null;
  lastUpdated: number;
}

const initialState: AccountsState = {
  filter: {},
  sort: { direction: 'asc', column: 'name' },
  selectedAccount: null,
  lastUpdated: Date.now(),
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    updateAccounts: (state) => {
      state.lastUpdated = Date.now();
    },
    updateFilter: (state, action: PayloadAction<{ filter: AccountsFilter }>) => {
      state.filter = action.payload.filter;
    },
    updateSort: (state, action: PayloadAction<{ sort: AccountsSort }>) => {
      state.sort = action.payload.sort;
    },
    updateKeyword: (state, action: PayloadAction<{ keyword: string }>) => {
      state.filter.keyword = action.payload.keyword;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(selectAccountAction.fulfilled, (state, action) => {
      state.selectedAccount = action.payload;
    });
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateAccounts, updateKeyword, updateFilter, updateSort } =
  accountsSlice.actions;

export const { reducer } = accountsSlice;
