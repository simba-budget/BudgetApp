import {
  MerchantsFilter as ApiMerchantsFilter,
  SaveMerchantRequest as ApiSaveMerchantRequest,
} from '@api/clients/merchants/types';

export type MerchantsFilter = Omit<ApiMerchantsFilter, 'accountId'>;
export type SaveMerchantRequest = Omit<ApiSaveMerchantRequest, 'accountId'>;
