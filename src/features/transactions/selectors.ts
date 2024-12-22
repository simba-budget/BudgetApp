import { RootState } from '@core/store/store';

export const selectTransactionsLastUpdated = (state: RootState) => {
  return state.transactions.lastUpdated;
};

export const selectTransactionsFilter = (state: RootState) => {
  return state.transactions.filter;
};
