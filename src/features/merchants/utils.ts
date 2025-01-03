import { API_URL } from '@env';

export const getMerchantLogoUrl = (logo: string | null) => {
  if (!logo) return null;
  return `${API_URL}/uploads/merchants/${logo}`;
};
