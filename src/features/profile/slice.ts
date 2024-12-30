import { logoutAction } from '@features/auth/actions';
import { createSlice } from '@reduxjs/toolkit';

export interface ProfileState {
  lastUpdated: number;
}

const initialState: ProfileState = {
  lastUpdated: Date.now(),
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state) => {
      state.lastUpdated = Date.now();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateProfile } = profileSlice.actions;
export const { reducer } = profileSlice;
