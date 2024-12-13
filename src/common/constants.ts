import { formatDateStrict } from '@utils/date';
import dayjs from 'dayjs';
import { TFunction } from 'i18next';
import { Insets } from 'react-native';

import { HorizontalFilterOption } from './components/HorizontalFilter';
import { DateRange, RelevantDate } from './types';

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

export const dateRangesMap: Record<RelevantDate, () => DateRange> = {
  today: () => {
    const today = dayjs().startOf('day');
    return { dateFrom: formatDateStrict(today), dateTo: formatDateStrict(today) };
  },
  yesterday: () => {
    const today = dayjs().startOf('day');
    const yesterday = today.subtract(1, 'day');
    return { dateFrom: formatDateStrict(yesterday), dateTo: formatDateStrict(yesterday) };
  },
  thisWeek: () => {
    const today = dayjs().startOf('day');
    const start = today.startOf('week');
    const end = today.endOf('week');
    return { dateFrom: formatDateStrict(start), dateTo: formatDateStrict(end) };
  },
  thisMonth: () => {
    const today = dayjs().startOf('day');
    const start = today.startOf('month');
    const end = today.endOf('month');
    return { dateFrom: formatDateStrict(start), dateTo: formatDateStrict(end) };
  },
  thisYear: () => {
    const today = dayjs().startOf('day');
    const start = today.startOf('year');
    const end = today.endOf('year');
    return { dateFrom: formatDateStrict(start), dateTo: formatDateStrict(end) };
  },
  lastWeek: () => {
    const today = dayjs().startOf('day');
    const start = today.subtract(1, 'week').startOf('week');
    const end = today.subtract(1, 'week').endOf('week');
    return { dateFrom: formatDateStrict(start), dateTo: formatDateStrict(end) };
  },
  lastMonth: () => {
    const today = dayjs().startOf('day');
    const start = today.subtract(1, 'month').startOf('month');
    const end = today.subtract(1, 'month').endOf('month');
    return { dateFrom: formatDateStrict(start), dateTo: formatDateStrict(end) };
  },
  lastYear: () => {
    const today = dayjs().startOf('day');
    const start = today.subtract(1, 'year').startOf('year');
    const end = today.subtract(1, 'year').endOf('year');
    return { dateFrom: formatDateStrict(start), dateTo: formatDateStrict(end) };
  },
};
