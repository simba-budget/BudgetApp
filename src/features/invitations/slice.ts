import { InvitationsSort } from '@api/clients/invitations/types';
import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InvitationsFilter } from './types';

export interface InvitationsState {
  filter: InvitationsFilter;
  sort: InvitationsSort;
  lastUpdated: number;
}

const initialState: InvitationsState = {
  filter: {},
  sort: { column: 'email', direction: 'asc' },
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
    updateSort: (state, action: PayloadAction<{ sort: InvitationsSort }>) => {
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

export const { updateFilter, updateInvitations, updateKeyword, updateSort } =
  invitationsSlice.actions;

export const { reducer } = invitationsSlice;
