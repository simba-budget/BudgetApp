import { RootState } from '@core/store/store';

export const selectIsLoggedIn = (state: RootState) => {
  return !!state.auth.token;
};
