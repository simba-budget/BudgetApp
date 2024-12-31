import { RootState } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectSubscriptions = (state: RootState) => state.subscriptions;

export const selectSubscriptionsLastUpdated = createSelector(
  selectSubscriptions,
  (state) => state.lastUpdated,
);

export const selectSubscriptionsFilter = createSelector(
  selectSubscriptions,
  (state) => state.filter,
);

export const selectSubscriptionsSort = createSelector(
  selectSubscriptions,
  (state) => state.sort,
);

export const selectApiSubscriptionsFilter = createSelector(
  selectSubscriptionsFilter,
  selectSelectedAccountIdStrict,
  (filter, accountId) => ({ ...filter, accountId }),
);
