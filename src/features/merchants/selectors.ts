import { RootState } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectMerchants = (state: RootState) => state.merchants;

export const selectMerchantsLastUpdated = createSelector(
  selectMerchants,
  (state) => state.lastUpdated,
);
export const selectMerchantsFilter = createSelector(
  selectMerchants,
  (state) => state.filter,
);
export const selectMerchantsSort = createSelector(
  selectMerchants,
  (state) => state.sort,
);

export const selectApiMerchantsFilter = createSelector(
  selectMerchantsFilter,
  selectSelectedAccountIdStrict,
  (filter, accountId) => ({ ...filter, accountId }),
);
