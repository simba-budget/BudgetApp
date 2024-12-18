import { RootState } from '@core/store/store';

export const selectAccountsLastUpdated = (state: RootState) => {
  return state.accounts.lastUpdated;
};

export const selectAccountsFilter = (state: RootState) => {
  return state.accounts.filter;
};
