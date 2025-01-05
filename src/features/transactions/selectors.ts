import { RootState } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectTransactions = (state: RootState) => state.transactions;

export const selectTransactionsLastUpdated = createSelector(
  selectTransactions,
  (state) => state.lastUpdated,
);

export const selectTransaction = createSelector(
  selectTransactions,
  (state) => state.transaction,
);

export const selectTransactionsFilter = createSelector(
  selectTransactions,
  (state) => state.filter,
);

export const selectTransactionsSort = createSelector(
  selectTransactions,
  (state) => state.sort,
);

export const selectApiTransactionsFilter = createSelector(
  selectTransactionsFilter,
  selectSelectedAccountIdStrict,
  (filter, accountId) => ({ ...filter, accountId }),
);
