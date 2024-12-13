import { RootState } from '@core/store/store';

export const selectNotificationsLastUpdated = (state: RootState) => {
  return state.notifications.lastUpdated;
};
