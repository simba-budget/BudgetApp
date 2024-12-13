import every from 'lodash/every';

export const isAllEmpty = (object: object) => {
  return every(object, (value) => !value);
};
