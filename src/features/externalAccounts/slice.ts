import { ExternalAccountsSort } from '@api/clients/externalAccounts/types';
import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ExternalAccountsFilter } from './types';

export interface ExternalAccountsState {
  filter: ExternalAccountsFilter;
  sort: ExternalAccountsSort;
  lastUpdated: number;
}

const initialState: ExternalAccountsState = {
  filter: {},
  sort: { column: 'name', direction: 'asc' },
  lastUpdated: Date.now(),
};

const externalAccountsSlice = createSlice({
  name: 'externalAccounts',
  initialState,
  reducers: {
    updateExternalAccounts: (state) => {
      state.lastUpdated = Date.now();
    },
    updateFilter: (
      state,
      action: PayloadAction<{ filter: ExternalAccountsFilter }>,
    ) => {
      state.filter = action.payload.filter;
    },
    updateSort: (state, action: PayloadAction<{ sort: ExternalAccountsSort }>) => {
      state.sort = action.payload.sort;
    },
    updateKeyword: (state, action: PayloadAction<{ keyword: string }>) => {
      state.filter.keyword = action.payload.keyword;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateFilter, updateExternalAccounts, updateKeyword, updateSort } =
  externalAccountsSlice.actions;
export const { reducer } = externalAccountsSlice;
