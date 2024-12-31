import { NotificationsSort } from '@api/clients/notifications/types';
import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NotificationsFilter } from './types';

export interface NotificationsState {
  lastUpdated: number;
  filter: NotificationsFilter;
  sort: NotificationsSort;
}

const initialState: NotificationsState = {
  lastUpdated: Date.now(),
  filter: {},
  sort: { column: 'date', direction: 'desc' },
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    updateNotifications: (state) => {
      state.lastUpdated = Date.now();
    },
    updateFilter: (
      state,
      action: PayloadAction<{ filter: NotificationsFilter }>,
    ) => {
      state.filter = action.payload.filter;
    },
    updateSort: (state, action: PayloadAction<{ sort: NotificationsSort }>) => {
      state.sort = action.payload.sort;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateNotifications, updateFilter, updateSort } =
  notificationsSlice.actions;
export const { reducer } = notificationsSlice;
