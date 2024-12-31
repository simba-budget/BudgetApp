import { logoutAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialBalanceFormData, NameFormData } from './types';

export interface OnboardingState {
  nameFormData: NameFormData;
  initialBalanceFormData: InitialBalanceFormData;
}

const initialState: OnboardingState = {
  nameFormData: { name: '' },
  initialBalanceFormData: { initialBalance: 0, currency: 'EUR' },
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    updateNameFormData: (state, action: PayloadAction<NameFormData>) => {
      state.nameFormData = action.payload;
    },
    updateInitialBalanceFormData: (
      state,
      action: PayloadAction<InitialBalanceFormData>,
    ) => {
      state.initialBalanceFormData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, () => initialState);
  },
});

export const { updateNameFormData, updateInitialBalanceFormData } =
  onboardingSlice.actions;
export const { reducer } = onboardingSlice;
