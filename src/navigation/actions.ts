import { AccountParamsList, AuthParamsList } from '@navigation/navigation';

import {
  accountRoute,
  AuthNavigation,
  bottomTabsRoute,
  categoryAddRoute,
  categoryEditRoute,
  CategoryEditRoute,
  categoryRoute,
  CategoryRoute,
  contributionsRoute,
  ContributionsRoute,
  goalRoute,
  GoalRoute,
  homeRoute,
  MainNavigation,
  privacyPolicyRoute,
  registrationRoute,
  RootNavigation,
  sendOtpRoute,
  termsAndConditionsRoute,
  verifyOtpRoute,
  VerifyOtpRoute,
} from './types';

export const toSendOtp = ({ navigate }: AuthNavigation) => {
  return navigate(sendOtpRoute);
};

export const toRegistration = ({ navigate }: AuthNavigation) => {
  return navigate(registrationRoute);
};

export const toVerifyOtp = (
  { navigate }: AuthNavigation,
  params: AuthParamsList[VerifyOtpRoute],
) => {
  return navigate(verifyOtpRoute, params);
};

export const toPrivacyPolicy = ({ navigate }: RootNavigation) => {
  return navigate(privacyPolicyRoute);
};

export const toTermsAndConditions = ({ navigate }: RootNavigation) => {
  return navigate(termsAndConditionsRoute);
};

export const toHome = ({ navigate }: MainNavigation) => {
  return navigate(accountRoute, { screen: bottomTabsRoute, params: { screen: homeRoute } });
};

export const toContributions = (
  { navigate }: MainNavigation,
  params: AccountParamsList[ContributionsRoute],
) => {
  return navigate(accountRoute, { screen: contributionsRoute, params });
};

export const toGoal = ({ navigate }: MainNavigation, params: AccountParamsList[GoalRoute]) => {
  return navigate(accountRoute, { screen: goalRoute, params });
};

export const toCategoryAdd = ({ navigate }: MainNavigation) => {
  return navigate(accountRoute, { screen: categoryAddRoute });
};

export const toCategoryEdit = (
  { navigate }: MainNavigation,
  params: AccountParamsList[CategoryEditRoute],
) => {
  return navigate(accountRoute, { screen: categoryEditRoute, params });
};

export const toCategory = (
  { navigate }: MainNavigation,
  params: AccountParamsList[CategoryRoute],
) => {
  return navigate(accountRoute, { screen: categoryRoute, params });
};
