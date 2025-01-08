import { Account } from '@api/clients/accounts/types';
import { logoutAction } from '@features/auth/actions';
import { createSlice } from '@reduxjs/toolkit';

import { selectAccountAction } from './actions';

export interface AccountsState {
  selectedAccount: Account | null;
  lastUpdated: number;
}

const initialState: AccountsState = {
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
  },
  extraReducers: (builder) => {
    builder.addCase(selectAccountAction.fulfilled, (state, action) => {
      state.selectedAccount = action.payload;
    });
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateAccounts } = accountsSlice.actions;
export const { reducer } = accountsSlice;
