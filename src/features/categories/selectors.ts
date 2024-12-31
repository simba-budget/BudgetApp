import { RootState } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectCategories = (state: RootState) => state.categories;

export const selectCategoriesLastUpdated = createSelector(
  selectCategories,
  (state) => state.lastUpdated,
);

export const selectCategoriesFilter = createSelector(
  selectCategories,
  (state) => state.filter,
);

export const selectCategoriesSort = createSelector(
  selectCategories,
  (state) => state.sort,
);

export const selectApiCategoriesFilter = createSelector(
  selectCategoriesFilter,
  selectSelectedAccountIdStrict,
  (filter, accountId) => ({ ...filter, accountId }),
);
