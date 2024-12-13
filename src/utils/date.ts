import dayjs, { Dayjs } from 'dayjs';
import capitalize from 'lodash/capitalize';

export const formatDate = (date?: string | number | Dayjs | Date | null) => {
  if (!date) return null;
  return formatDateStrict(date);
};

export const formatDateStrict = (date: string | number | Dayjs | Date) => {
  return dayjs(date).format('YYYY-MM-DD');
};

export const formatYearsAndMonth = (date: string) => {
  return dayjs(date).format('YYYY, MMMM');
};

export const formatMonth = (date: string) => {
  return capitalize(dayjs(date).format('MMM.'));
};

export const formatRelevantDate = (date: string) => {
  return dayjs(date).fromNow();
};

export const formatWeekday = (date: string) => {
  return dayjs(date).format('dd');
};

export const formatDay = (date: string) => {
  return dayjs(date).format('D');
};

export const getDateRange = (dateFrom: string | Dayjs, dateTo: string | Dayjs) => {
  let currentDate = dayjs(dateFrom);
  const range: string[] = [];

  while (currentDate.isBefore(dateTo) || currentDate.isSame(dateTo)) {
    range.push(formatDateStrict(currentDate));
    currentDate = currentDate.add(1, 'day');
  }

  return range;
};

export const getRemainingSeconds = (date: string) => {
  const givenDate = dayjs(date);
  const currentDate = dayjs();
  const differenceMilliseconds = givenDate.diff(currentDate);
  return Math.ceil(differenceMilliseconds / 1000);
};
