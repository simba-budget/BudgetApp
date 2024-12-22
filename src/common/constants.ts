import { TFunction } from 'i18next';
import { Insets } from 'react-native';

import { HorizontalFilterOption } from './components/HorizontalFilter';
import { RelevantDate } from './types';

export const scrollIndicatorInsets: Insets = { right: 1 };
export const debounceTime = 300;
export const mountTime = 100;
export const defaultCurrency = 'EUR';

export const getRelevantDatesFilters = (
  t: TFunction,
): HorizontalFilterOption<RelevantDate>[] => [
  { label: t('Today'), value: 'today' },
  { label: t('Yesterday'), value: 'yesterday' },
  { label: t('This week'), value: 'thisWeek' },
  { label: t('This month'), value: 'thisMonth' },
  { label: t('This year'), value: 'thisYear' },
  { label: t('Last week'), value: 'lastWeek' },
  { label: t('Last month'), value: 'lastMonth' },
  { label: t('Last year'), value: 'lastYear' },
];
