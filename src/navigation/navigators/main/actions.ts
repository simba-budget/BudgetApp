import { accountRoute } from '../account';
import { bottomTabsRoute } from '../bottomTabs';
import { homeRoute } from '../bottomTabs/types';

import {
  accountAddRoute,
  AccountEditRoute,
  accountEditRoute,
  accountsRoute,
  MainNavigation,
  MainParams,
} from './types';

export const toAccounts = ({ replace }: MainNavigation) => {
  return replace(accountsRoute);
};

export const toAccountAdd = ({ navigate }: MainNavigation) => {
  return navigate(accountAddRoute);
};

export const toAccountEdit = (
  { navigate }: MainNavigation,
  params: MainParams[AccountEditRoute],
) => {
  return navigate(accountEditRoute, params);
};

export const toHome = ({ navigate }: MainNavigation) => {
  return navigate(accountRoute, { screen: bottomTabsRoute, params: { screen: homeRoute } });
};
