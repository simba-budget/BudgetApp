import { MerchantLogo } from '@api/clients/merchants/types';
import { API_URL } from '@env';

export const getMerchantLogoUrl = (logo: MerchantLogo | null) => {
  if (!logo) return null;
  return `${API_URL}/uploads/merchants/${logo.name}`;
};
