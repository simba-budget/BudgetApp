import { removeLoggedUser, saveLoggedUser } from '@api/auth/storage';
import { LoggedUser } from '@api/clients/auth/types';
import queryClient from '@core/query/client';
import { removeAccount } from '@features/accounts/storage';
import { defaultLocale } from '@i18n/constants';
import { changeLanguage } from '@i18n/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { OneSignal } from 'react-native-onesignal';

export const logoutAction = createAsyncThunk('logout', async () => {
  queryClient.clear();

  await Promise.all([
    removeLoggedUser(),
    removeAccount(),
    queryClient.invalidateQueries(),
    changeLanguage(defaultLocale),
  ]);
});

export const loginAction = createAsyncThunk<LoggedUser, LoggedUser>(
  'login',
  async (loggedUser) => {
    await saveLoggedUser(loggedUser);
    await OneSignal.Notifications.requestPermission(true);
    OneSignal.User.addEmail(loggedUser.email);
    OneSignal.login(loggedUser.id.toString());
    return loggedUser;
  },
);
