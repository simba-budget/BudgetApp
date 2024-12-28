import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SubscriptionsFilter } from './types';

export interface SubscriptionsState {
  filter: SubscriptionsFilter;
  lastUpdated: number;
}

const initialState: SubscriptionsState = {
  filter: {},
  lastUpdated: Date.now(),
};

const subscriptionsSlice = createSlice({
  name: 'subscriptions',
  initialState,
  reducers: {
    updateSubscriptions: (state) => {
      state.lastUpdated = Date.now();
    },
    updateFilter: (state, action: PayloadAction<{ filter: SubscriptionsFilter }>) => {
      state.filter = action.payload.filter;
    },
    updateKeyword: (state, action: PayloadAction<{ keyword: string }>) => {
      state.filter.keyword = action.payload.keyword;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateFilter, updateSubscriptions, updateKeyword } = subscriptionsSlice.actions;
export const { reducer } = subscriptionsSlice;
