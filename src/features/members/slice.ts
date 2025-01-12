import { MembersSort } from '@api/clients/members/types';
import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MembersFilter } from './types';

export interface MembersState {
  filter: MembersFilter;
  sort: MembersSort;
  lastUpdated: number;
}

const initialState: MembersState = {
  filter: {},
  sort: { column: 'createdAt', direction: 'asc' },
  lastUpdated: Date.now(),
};

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    updateMembers: (state) => {
      state.lastUpdated = Date.now();
    },
    updateFilter: (state, action: PayloadAction<{ filter: MembersFilter }>) => {
      state.filter = action.payload.filter;
    },
    updateSort: (state, action: PayloadAction<{ sort: MembersSort }>) => {
      state.sort = action.payload.sort;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateFilter, updateMembers, updateSort } = membersSlice.actions;
export const { reducer } = membersSlice;
