import { Account } from '@api/clients/accounts/types';
import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { selectAccountIdAction } from './actions';

export interface AccountsState {
  selectedAccountId: number | null;
  selectedAccount: Account | null;
  lastUpdated: number;
}

const initialState: AccountsState = {
  selectedAccountId: null,
  lastUpdated: Date.now(),
  selectedAccount: null,
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    updateAccounts: (state) => {
      state.lastUpdated = Date.now();
    },
    selectAccount: (state, action: PayloadAction<{ account: Account | null }>) => {
      state.selectedAccount = action.payload.account;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(selectAccountIdAction.fulfilled, (state, action) => {
      state.selectedAccountId = action.payload;
    });
    builder.addCase(logoutAction.fulfilled, (state) => {
      state.selectedAccount = null;
    });
  },
});

export const { updateAccounts, selectAccount } = accountsSlice.actions;
export const { reducer } = accountsSlice;
