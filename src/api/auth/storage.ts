import { readAsync, removeAsync, writeAsync } from '@utils/storage';

import { LoggedUser } from '../clients/auth/types';

const key = 'auth';

export const getLoggedUser = () => {
  return readAsync<LoggedUser>(key);
};

export const saveLoggedUser = (user: LoggedUser) => {
  return writeAsync<LoggedUser>(key, user);
};

export const removeLoggedUser = () => {
  return removeAsync(key);
};
