import { RootState } from '@core/store/store';

export const selectIsLoggedIn = (state: RootState) => {
  return !!state.auth.token;
};

export const selectIsOnboarded = (state: RootState) => {
  return state.auth.isOnboarded;
};
