import { RootState } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectMembers = (state: RootState) => state.members;

export const selectMembersLastUpdated = createSelector(
  selectMembers,
  (state) => state.lastUpdated,
);

export const selectMembersFilter = createSelector(
  selectMembers,
  (state) => state.filter,
);
export const selectMembersSort = createSelector(
  selectMembers,
  (state) => state.sort,
);

export const selectApiMembersFilter = createSelector(
  selectMembersFilter,
  selectSelectedAccountIdStrict,
  (filter, accountId) => ({ ...filter, accountId }),
);
