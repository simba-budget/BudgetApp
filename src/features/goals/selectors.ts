import { RootState } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';

export const selectGoalsLastUpdated = (state: RootState) => {
  return state.goals.lastUpdated;
};

export const selectGoalsFilter = (state: RootState) => {
  return state.goals.filter;
};

export const selectApiGoalsFilter = (state: RootState) => {
  const filter = selectGoalsFilter(state);
  const accountId = selectSelectedAccountIdStrict(state);
  return { ...filter, accountId };
};
