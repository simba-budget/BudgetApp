import { RootState } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectExternalAccounts = (state: RootState) => state.externalAccounts;

export const selectExternalAccountsLastUpdated = createSelector(
  selectExternalAccounts,
  (state) => state.lastUpdated,
);

export const selectExternalAccountsFilter = createSelector(
  selectExternalAccounts,
  (state) => state.filter,
);
export const selectExternalAccountsSort = createSelector(
  selectExternalAccounts,
  (state) => state.sort,
);

export const selectApiExternalAccountsFilter = createSelector(
  selectExternalAccountsFilter,
  selectSelectedAccountIdStrict,
  (filter, accountId) => ({ ...filter, accountId }),
);
