import { RootState } from '@core/store/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectAccounts = (state: RootState) => {
  return state.accounts;
};

export const selectAccountsLastUpdated = createSelector(
  selectAccounts,
  (state) => state.lastUpdated,
);

export const selectIsSelectAccountVisible = createSelector(
  selectAccounts,
  (state) => state.isSelectAccountVisible,
);

export const selectSelectedAccount = createSelector(
  selectAccounts,
  (state) => state.selectedAccount,
);

export const selectSelectedAccountId = createSelector(
  selectAccounts,
  (state) => state.selectedAccount?.id || null,
);

export const selectSelectedAccountIdStrict = createSelector(
  selectAccounts,
  (state) => {
    const accountId = state.selectedAccount?.id;
    if (!accountId) throw new Error('Account ID is not set');
    return accountId;
  },
);

export const selectSelectedAccountStrict = createSelector(
  selectAccounts,
  (state) => {
    const selectedAccount = state.selectedAccount;
    if (!selectedAccount) throw new Error('Selected account is not set');
    return selectedAccount;
  },
);
