import { MerchantsSort } from '@api/clients/merchants/types';
import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MerchantsFilter } from './types';

export interface MerchantsState {
  filter: MerchantsFilter;
  sort: MerchantsSort;
  lastUpdated: number;
}

const initialState: MerchantsState = {
  filter: {},
  sort: { column: 'name', direction: 'asc' },
  lastUpdated: Date.now(),
};

const merchantsSlice = createSlice({
  name: 'merchants',
  initialState,
  reducers: {
    updateMerchants: (state) => {
      state.lastUpdated = Date.now();
    },
    updateFilter: (state, action: PayloadAction<{ filter: MerchantsFilter }>) => {
      state.filter = action.payload.filter;
    },
    updateSort: (state, action: PayloadAction<{ sort: MerchantsSort }>) => {
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

export const { updateFilter, updateMerchants, updateKeyword, updateSort } =
  merchantsSlice.actions;

export const { reducer } = merchantsSlice;
