import { RootState } from '@core/store/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectAccounts = (state: RootState) => {
  return state.accounts;
};

export const selectAccountsLastUpdated = createSelector(
  selectAccounts,
  (state) => state.lastUpdated,
);

export const selectAccountsFilter = createSelector(selectAccounts, (state) => state.filter);

export const selectAccountsSort = createSelector(selectAccounts, (state) => state.sort);

export const selectSelectedAccount = createSelector(
  selectAccounts,
  (state) => state.selectedAccount,
);

export const selectSelectedAccountId = createSelector(
  selectAccounts,
  (state) => state.selectedAccount?.id || null,
);

export const selectSelectedAccountIdStrict = createSelector(selectAccounts, (state) => {
  const accountId = state.selectedAccount?.id;
  if (!accountId) throw new Error('Account ID is not set');
  return accountId;
});
