import { Merchant } from '@api/clients/merchants/types';

import { SaveMerchantRequest } from './types';

export const mapSaveMerchantRequest = (
  merchant?: Merchant | null,
): SaveMerchantRequest => ({
  name: merchant?.name ?? '',
  logo: merchant?.logo ?? '',
});
