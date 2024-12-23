import { Account, AccountsFilter } from '@api/clients/accounts/types';
import { selectAccountAction } from '@features/accounts/actions';
import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AccountState {
  filter: AccountsFilter;
  selectedAccount: Account | null;
  lastUpdated: number;
}

const initialState: AccountState = {
  filter: {},
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

export const { updateAccounts, updateKeyword, updateFilter } = accountsSlice.actions;
export const { reducer } = accountsSlice;
