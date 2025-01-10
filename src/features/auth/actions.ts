import { removeLoggedUser, saveLoggedUser } from '@api/auth/storage';
import { LoggedUser } from '@api/clients/auth/types';
import queryClient from '@core/query/client';
import { removeSelectedAccountId } from '@features/accounts/storage';
import { defaultLocale } from '@i18n/constants';
import { changeLanguage } from '@i18n/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Sentry from '@sentry/react-native';
import { OneSignal } from 'react-native-onesignal';

export const logoutAction = createAsyncThunk('logout', async () => {
  queryClient.clear();
  Sentry.setUser(null);

  await Promise.all([
    removeLoggedUser(),
    removeSelectedAccountId(),
    queryClient.invalidateQueries(),
    changeLanguage(defaultLocale),
  ]);
});

export const loginAction = createAsyncThunk<LoggedUser, LoggedUser>(
  'login',
  async (loggedUser) => {
    await saveLoggedUser(loggedUser);
    await OneSignal.Notifications.requestPermission(true);
    Sentry.setUser({ id: loggedUser.id, email: loggedUser.email });
    OneSignal.User.addEmail(loggedUser.email);
    OneSignal.login(loggedUser.id.toString());
    return loggedUser;
  },
);
