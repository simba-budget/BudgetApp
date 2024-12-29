import { BaseModel } from '@api/types';

import { Member } from '../members/types';

export interface Merchant extends BaseModel {
  name: string;
  createdBy: Member;
}

export interface SaveMerchantRequest {
  name: string;
  accountId: number;
}

export interface MerchantsFilter {
  keyword?: string | null;
  accountId: number;
}
