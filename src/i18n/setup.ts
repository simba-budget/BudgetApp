import { Locale } from '@api/types';
import dayjs from 'dayjs';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { defaultLocale } from './constants';
import enDictionary from './dictionaries/en.json';

require('dayjs/locale/en');

const resources: Record<Locale, any> = {
  EN: enDictionary,
};

export const setupTranslations = () => {
  i18n.use(initReactI18next).init({
    resources,
    lng: defaultLocale,
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    compatibilityJSON: 'v4',
  });

  dayjs.locale(defaultLocale);
};
