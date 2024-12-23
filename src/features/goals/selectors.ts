import { RootState } from '@core/store/store';

export const selectGoalsLastUpdated = (state: RootState) => {
  return state.goals.lastUpdated;
};

export const selectGoalsFilter = (state: RootState) => {
  return state.goals.filter;
};
