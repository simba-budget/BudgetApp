import { logoutAction } from '@features/auth/actions';
import { createSlice } from '@reduxjs/toolkit';

export interface NotificationsState {
  lastUpdated: number;
}

const initialState: NotificationsState = {
  lastUpdated: Date.now(),
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    updateNotifications: (state) => {
      state.lastUpdated = Date.now();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateNotifications } = notificationsSlice.actions;
export const { reducer } = notificationsSlice;
