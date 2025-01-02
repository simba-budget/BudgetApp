import { BaseModel, ListRequest, Sort } from '@api/types';

import { Member } from '../members/types';

export interface MerchantLogo extends BaseModel {
  name: string;
  size: number;
}

export interface Merchant extends BaseModel {
  name: string;
  logo: MerchantLogo | null;
  createdBy: Member;
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
