import { RootState } from '@core/store/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectAccounts = (state: RootState) => {
  return state.accounts;
};

export const selectAccountsLastUpdated = createSelector(
  selectAccounts,
  (state) => state.lastUpdated,
);

export const selectSelectedAccountId = createSelector(
  selectAccounts,
  (state) => state.selectedAccountId,
);

export const selectSelectedAccountIdStrict = createSelector(
  selectAccounts,
  (state) => {
    const accountId = state.selectedAccountId;
    if (!accountId) throw new Error('Account ID is not set');
    return accountId;
  },
);
