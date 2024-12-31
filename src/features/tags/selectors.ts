import { RootState } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectTags = (state: RootState) => state.tags;
export const selectTagsLastUpdated = createSelector(
  selectTags,
  (state) => state.lastUpdated,
);
export const selectTagsFilter = createSelector(selectTags, (state) => state.filter);
export const selectTagsSort = createSelector(selectTags, (state) => state.sort);

export const selectApiTagsFilter = createSelector(
  selectTagsFilter,
  selectSelectedAccountIdStrict,
  (filter, accountId) => ({ ...filter, accountId }),
);
