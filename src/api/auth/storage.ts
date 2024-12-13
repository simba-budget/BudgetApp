import { readAsync, removeAsync, writeAsync } from '@utils/storage';

import { TokensResponse } from '../clients/auth/types';

const key = 'auth';

export const getTokens = () => {
  return readAsync<TokensResponse>(key);
};

export const saveTokens = (tokens: TokensResponse) => {
  return writeAsync<TokensResponse>(key, tokens);
};

export const removeTokens = () => {
  return removeAsync(key);
};
