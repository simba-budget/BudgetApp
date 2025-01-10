import { createSlice } from '@reduxjs/toolkit';

import { loginAction, logoutAction } from './actions';

export interface AuthState {
  token: string | null;
  refreshToken: string | null;
  isOnboarded: boolean;
}

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  isOnboarded: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.isOnboarded = action.payload.isOnboarded;
    });
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { reducer } = authSlice;
