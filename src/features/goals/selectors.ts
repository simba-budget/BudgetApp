import { RootState } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectGoals = (state: RootState) => state.goals;

export const selectGoalsLastUpdated = createSelector(
  selectGoals,
  (state) => state.lastUpdated,
);

export const selectGoalsFilter = createSelector(
  selectGoals,
  (state) => state.filter,
);
export const selectGoalsSort = createSelector(selectGoals, (state) => state.sort);

export const selectApiGoalsFilter = createSelector(
  selectGoalsFilter,
  selectSelectedAccountIdStrict,
  (filter, accountId) => ({ ...filter, accountId }),
);
