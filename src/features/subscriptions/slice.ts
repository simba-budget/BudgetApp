import { SubscriptionsSort } from '@api/clients/subscriptions/types';
import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SubscriptionsFilter } from './types';

export interface SubscriptionsState {
  filter: SubscriptionsFilter;
  sort: SubscriptionsSort;
  lastUpdated: number;
}

const initialState: SubscriptionsState = {
  filter: {},
  sort: { column: 'name', direction: 'asc' },
  lastUpdated: Date.now(),
};

const subscriptionsSlice = createSlice({
  name: 'subscriptions',
  initialState,
  reducers: {
    updateSubscriptions: (state) => {
      state.lastUpdated = Date.now();
    },
    updateFilter: (
      state,
      action: PayloadAction<{ filter: SubscriptionsFilter }>,
    ) => {
      state.filter = action.payload.filter;
    },
    updateSort: (state, action: PayloadAction<{ sort: SubscriptionsSort }>) => {
      state.sort = action.payload.sort;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateFilter, updateSubscriptions, updateSort } =
  subscriptionsSlice.actions;

export const { reducer } = subscriptionsSlice;
