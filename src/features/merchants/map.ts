import { Merchant } from '@api/clients/merchants/types';
import { SelectOption } from '@common/components/Select';

import { SaveMerchantRequest } from './types';

export const mapSaveMerchantRequest = (
  merchant?: Merchant | null,
): SaveMerchantRequest => ({
  name: merchant?.name ?? '',
  logo: merchant?.logo ?? '',
});

export const mapMerchantToOption = (merchant: Merchant): SelectOption<number> => ({
  key: merchant.id.toString(),
  value: merchant.id,
  label: merchant.name,
  iconName: 'card',
});
