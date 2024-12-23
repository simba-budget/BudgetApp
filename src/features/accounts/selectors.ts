import { RootState } from '@core/store/store';

export const selectAccountsLastUpdated = (state: RootState) => {
  return state.accounts.lastUpdated;
};

export const selectAccountsFilter = (state: RootState) => {
  return state.accounts.filter;
};

export const selectSelectedAccount = (state: RootState) => {
  return state.accounts.selectedAccount;
};

export const selectSelectedAccountId = (state: RootState) => {
  return state.accounts.selectedAccount?.id || null;
};

export const selectSelectedAccountIdStrict = (state: RootState) => {
  const accountId = selectSelectedAccountId(state);
  if (!accountId) throw new Error('Account ID is not set');
  return accountId;
};
