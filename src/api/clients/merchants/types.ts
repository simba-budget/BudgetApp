import { BaseModel, ListRequest, Sort } from '@api/types';

export interface Merchant extends BaseModel {
  name: string;
  logo: string | null;
  externalLogoUrl: string | null;
}

export interface SaveMerchantRequest {
  name: string;
  logo: string | null;
  accountId: number;
}

export interface MerchantsFilter {
  keyword?: string | null;
  accountId: number;
}

export type MerchantsSort = Sort<'name'>;
export type ListMerchantsRequest = ListRequest<MerchantsFilter, MerchantsSort>;
