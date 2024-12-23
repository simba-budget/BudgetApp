import { RootState } from '@core/store/store';

export const selectInvitationsLastUpdated = (state: RootState) => {
  return state.invitations.lastUpdated;
};

export const selectInvitationsFilter = (state: RootState) => {
  return state.invitations.filter;
};
