import { RootState } from '@core/store/store';

export const selectTagsLastUpdated = (state: RootState) => {
  return state.tags.lastUpdated;
};

export const selectTagsFilter = (state: RootState) => {
  return state.tags.filter;
};
