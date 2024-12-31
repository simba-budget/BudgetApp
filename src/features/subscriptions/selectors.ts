import { RootState } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';

export const selectSubscriptionsLastUpdated = (state: RootState) => {
  return state.subscriptions.lastUpdated;
};

export const selectSubscriptionsFilter = (state: RootState) => {
  return state.subscriptions.filter;
};

export const selectApiSubscriptionsFilter = (state: RootState) => {
  const filter = selectSubscriptionsFilter(state);
  const accountId = selectSelectedAccountIdStrict(state);
  return { ...filter, accountId };
};
