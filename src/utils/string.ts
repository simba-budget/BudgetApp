import map from 'lodash/map';
import take from 'lodash/take';

export const getInitials = (fullName: string) => {
  return take(
    map(fullName.split(' '), (part) => part[0].toUpperCase()),
    2,
  ).join('');
};
