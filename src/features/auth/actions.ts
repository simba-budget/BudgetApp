import { removeTokens, saveTokens } from '@api/auth/storage';
import { TokensResponse } from '@api/clients/auth/types';
import queryClient from '@core/query/client';
import { defaultLocale } from '@i18n/constants';
import { changeLanguage } from '@i18n/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const logoutAction = createAsyncThunk('logout', async () => {
  queryClient.clear();

  await Promise.all([
    removeTokens(),
    queryClient.invalidateQueries(),
    changeLanguage(defaultLocale),
  ]);
});

export const setTokensAction = createAsyncThunk<TokensResponse, TokensResponse>(
  'setTokens',
  async (tokens: TokensResponse) => {
    await saveTokens(tokens);
    return tokens;
  },
);
