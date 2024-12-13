import numeral from 'numeral';

export const formatShortNumber = (value: number) => {
  return numeral(value).format('0 a');
};
