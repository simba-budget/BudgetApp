import { RootState } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectContributions = (state: RootState) => state.contributions;

export const selectContributionsLastUpdated = createSelector(
  selectContributions,
  (state) => state.lastUpdated,
);

export const selectContributionsFilter = createSelector(
  selectContributions,
  (state) => state.filter,
);

export const selectContributionsSort = createSelector(
  selectContributions,
  (state) => state.sort,
);

export const selectApiContributionsFilter = createSelector(
  selectContributionsFilter,
  selectSelectedAccountIdStrict,
  (filter, accountId) => ({ ...filter, accountId }),
);
