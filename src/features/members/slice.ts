import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MembersFilter } from './types';

export interface MembersState {
  filter: MembersFilter;
  lastUpdated: number;
}

const initialState: MembersState = {
  filter: {},
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
    updateKeyword: (state, action: PayloadAction<{ keyword: string }>) => {
      state.filter.keyword = action.payload.keyword;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateFilter, updateMembers, updateKeyword } = membersSlice.actions;
export const { reducer } = membersSlice;
