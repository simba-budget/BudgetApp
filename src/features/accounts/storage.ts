import { readAsync, removeAsync, writeAsync } from '@utils/storage';

const key = 'accountId';

export const getSelectedAccountId = () => {
  return readAsync<number | null>(key);
};

export const saveSelectedAccountId = (id: number) => {
  return writeAsync<number>(key, id);
};

export const removeSelectedAccountId = () => {
  return removeAsync(key);
};
