import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InvitationsFilter } from './types';

export interface InvitationsState {
  filter: InvitationsFilter;
  lastUpdated: number;
}

const initialState: InvitationsState = {
  filter: {},
  lastUpdated: Date.now(),
};

const invitationsSlice = createSlice({
  name: 'invitations',
  initialState,
  reducers: {
    updateInvitations: (state) => {
      state.lastUpdated = Date.now();
    },
    updateFilter: (state, action: PayloadAction<{ filter: InvitationsFilter }>) => {
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

export const { updateFilter, updateInvitations, updateKeyword } = invitationsSlice.actions;
export const { reducer } = invitationsSlice;
