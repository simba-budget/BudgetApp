import { createSlice } from '@reduxjs/toolkit';

import { selectAccountIdAction } from './actions';

export interface AccountsState {
  selectedAccountId: number | null;
  lastUpdated: number;
}

const initialState: AccountsState = {
  selectedAccountId: null,
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
    builder.addCase(selectAccountIdAction.fulfilled, (state, action) => {
      state.selectedAccountId = action.payload;
    });
  },
});

export const { updateAccounts } = accountsSlice.actions;
export const { reducer } = accountsSlice;
