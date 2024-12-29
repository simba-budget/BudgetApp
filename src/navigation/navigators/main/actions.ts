import {
  accountAddRoute,
  AccountEditRoute,
  accountEditRoute,
  accountsRoute,
  MainNavigation,
  MainParamsList,
} from './types';

export const toAccounts = ({ navigate }: MainNavigation) => {
  return navigate(accountsRoute);
};

export const toAccountAdd = ({ navigate }: MainNavigation) => {
  return navigate(accountAddRoute);
};

export const toAccountEdit = (
  { navigate }: MainNavigation,
  params: MainParamsList[AccountEditRoute],
) => {
  return navigate(accountEditRoute, params);
};
