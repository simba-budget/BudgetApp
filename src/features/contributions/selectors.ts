import { RootState } from '@core/store/store';

export const selectContributionsLastUpdated = (state: RootState) => {
  return state.contributions.lastUpdated;
};

export const selectContributionsFilter = (state: RootState) => {
  return state.contributions.filter;
};
