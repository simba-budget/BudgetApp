import { Merchant } from '@api/clients/merchants/types';
import { API_URL } from '@env';

export const getMerchantLogoUrl = (merchant: Merchant | null) => {
  if (!merchant) return null;
  if (merchant.externalLogoUrl) return merchant.externalLogoUrl;
  if (!merchant.logo) return;
  return `${API_URL}/uploads/merchants/${merchant.logo}`;
};
