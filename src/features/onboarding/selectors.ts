import { RootState } from '@core/store/store';

export const selectNameFormData = (state: RootState) => {
  return state.onboarding.nameFormData;
};

export const selectInitialBalanceFormData = (state: RootState) => {
  return state.onboarding.initialBalanceFormData;
};
