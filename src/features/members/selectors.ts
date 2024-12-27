import { RootState } from '@core/store/store';

export const selectMembersLastUpdated = (state: RootState) => {
  return state.members.lastUpdated;
};

export const selectMembersFilter = (state: RootState) => {
  return state.members.filter;
};
