import dayjs, { Dayjs } from 'dayjs';

export const getCurrentDate = () => {
  return formatDate(dayjs());
};

export const getCurrentFormDate = () => {
  return formatFormDate(dayjs());
};

export const formatFormDate = (date?: string | number | Dayjs | Date | null) => {
  return dayjs(date).format('YYYY-MM-DD');
};

export const formatDate = (date?: string | number | Dayjs | Date | null) => {
  return dayjs(date).format('MMM D, YYYY');
};

export const formatWeekDay = (date: string | number | Dayjs | Date) => {
  return dayjs(date).format('ddd');
};

export const formatRelevantDate = (date: string) => {
  return dayjs(date).fromNow();
};

export const getRemainingSeconds = (date: string) => {
  const givenDate = dayjs(date);
  const currentDate = dayjs();
  const differenceMilliseconds = givenDate.diff(currentDate);
  return Math.ceil(differenceMilliseconds / 1000);
};

export const getNextMonthDay = (day: number) => {
  return formatDate(dayjs().set('date', day).add(1, 'month'));
};
