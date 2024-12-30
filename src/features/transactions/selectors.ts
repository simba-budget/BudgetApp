import { RootState } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';

export const selectTransactionsLastUpdated = (state: RootState) => {
  return state.transactions.lastUpdated;
};

export const selectTransactionsFilter = (state: RootState) => {
  return state.transactions.filter;
};

export const selectTransactionsSort = (state: RootState) => {
  return state.transactions.sort;
};

export const selectTransactionsPaging = (state: RootState) => {
  return state.transactions.paging;
};

export const selectApiTransactionsFilter = (state: RootState) => {
  const filter = selectTransactionsFilter(state);
  const accountId = selectSelectedAccountIdStrict(state);
  return { ...filter, accountId };
};
