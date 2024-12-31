import { RootState } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectNotifications = (state: RootState) => state.notifications;

export const selectNotificationsLastUpdated = createSelector(
  selectNotifications,
  (state) => state.lastUpdated,
);

export const selectNotificationsFilter = createSelector(
  selectNotifications,
  (state) => state.filter,
);

export const selectNotificationsSort = createSelector(
  selectNotifications,
  (state) => state.sort,
);

export const selectApiNotificationsFilter = createSelector(
  selectNotifications,
  selectSelectedAccountIdStrict,
  (filter, accountId) => ({ ...filter, accountId }),
);
