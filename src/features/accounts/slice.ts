import { Account } from '@api/clients/accounts/types';
import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { selectAccountAction } from './actions';

export interface AccountsState {
  selectedAccount: Account | null;
  lastUpdated: number;
  isSelectAccountVisible: boolean;
}

const initialState: AccountsState = {
  selectedAccount: null,
  lastUpdated: Date.now(),
  isSelectAccountVisible: false,
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    updateAccounts: (state) => {
      state.lastUpdated = Date.now();
    },
    setIsSelectAccountVisible: (
      state,
      action: PayloadAction<{ isSelectAccountVisible: boolean }>,
    ) => {
      state.isSelectAccountVisible = action.payload.isSelectAccountVisible;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(selectAccountAction.fulfilled, (state, action) => {
      state.selectedAccount = action.payload;
    });
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateAccounts, setIsSelectAccountVisible } = accountsSlice.actions;
export const { reducer } = accountsSlice;
