import { RootState } from '@core/store/store';

export const selectProfileLastUpdated = (state: RootState) => {
  return state.profile.lastUpdated;
};
