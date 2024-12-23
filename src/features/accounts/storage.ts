import { Account } from '@api/clients/accounts/types';
import { readAsync, removeAsync, writeAsync } from '@utils/storage';

const key = 'account';

export const getAccount = () => {
  return readAsync<Account | null>(key);
};

export const saveAccount = (account: Account) => {
  return writeAsync<Account>(key, account);
};

export const removeAccount = () => {
  return removeAsync(key);
};
