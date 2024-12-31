import { RootState } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectInvitations = (state: RootState) => state.invitations;

export const selectInvitationsLastUpdated = createSelector(
  selectInvitations,
  (state) => state.lastUpdated,
);

export const selectInvitationsFilter = createSelector(
  selectInvitations,
  (state) => state.filter,
);

export const selectInvitationsSort = createSelector(
  selectInvitations,
  (state) => state.sort,
);

export const selectApiInvitationsFilter = createSelector(
  selectInvitationsFilter,
  selectSelectedAccountIdStrict,
  (filter, accountId) => ({ ...filter, accountId }),
);
