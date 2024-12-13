import { Locale } from '@api/clients/profile/types';
import { Translation } from '@api/types';

export const getTranslation = <T extends Translation>(
  translations: T[],
  locale: Locale,
): T | null => {
  if (translations.length === 0) return null;
  return translations.find((t) => t.locale === locale) ?? translations[0];
};
