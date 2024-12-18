import { RootState } from '@core/store/store';

export const selectCategoriesLastUpdated = (state: RootState) => {
  return state.categories.lastUpdated;
};

export const selectCategoriesFilter = (state: RootState) => {
  return state.categories.filter;
};
