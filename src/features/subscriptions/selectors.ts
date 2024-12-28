import { RootState } from '@core/store/store';

export const selectSubscriptionsLastUpdated = (state: RootState) => {
  return state.subscriptions.lastUpdated;
};

export const selectSubscriptionsFilter = (state: RootState) => {
  return state.subscriptions.filter;
};
