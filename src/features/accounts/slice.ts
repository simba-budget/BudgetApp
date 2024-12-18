import { AccountsFilter } from '@api/clients/accounts/types';
import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AccountState {
  filter: AccountsFilter;
  lastUpdated: number;
}

const initialState: AccountState = {
  filter: {},
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
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateFilter, updateAccounts } = accountsSlice.actions;
export const { reducer } = accountsSlice;
