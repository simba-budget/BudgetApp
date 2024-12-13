import { Locale } from '@api/types';
import dayjs from 'dayjs';
import i18n from 'i18next';

export const changeLanguage = async (locale: Locale) => {
  await i18n.changeLanguage(locale);
  dayjs.locale(locale);
};
