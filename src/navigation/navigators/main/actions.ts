import {
  accountAddRoute,
  AccountEditRoute,
  accountEditRoute,
  accountsRoute,
  MainNavigation,
  MainParams,
} from './types';

export const toAccounts = ({ navigate }: MainNavigation) => {
  return navigate(accountsRoute);
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
