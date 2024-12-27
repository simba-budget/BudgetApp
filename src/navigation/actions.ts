import { AccountParamsList, AuthParamsList, MainParamsList } from '@navigation/navigation';

import {
  accountAddRoute,
  accountEditRoute,
  AccountEditRoute,
  accountRoute,
  AuthNavigation,
  bottomTabsRoute,
  categoryAddRoute,
  categoryEditRoute,
  CategoryEditRoute,
  categoryRoute,
  CategoryRoute,
  ContributionAddRoute,
  contributionAddRoute,
  contributionEditRoute,
  ContributionEditRoute,
  contributionRoute,
  ContributionRoute,
  contributionsRoute,
  ContributionsRoute,
  goalAddRoute,
  goalEditRoute,
  GoalEditRoute,
  goalRoute,
  GoalRoute,
  homeRoute,
  invitationAddRoute,
  invitationRoute,
  InvitationRoute,
  MainNavigation,
  privacyPolicyRoute,
  profileRoute,
  registrationRoute,
  RootNavigation,
  sendOtpRoute,
  termsAndConditionsRoute,
  transactionAddRoute,
  transactionEditRoute,
  transactionRoute,
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

export const toContributionAdd = (
  { navigate }: MainNavigation,
  params: AccountParamsList[ContributionAddRoute],
) => {
  return navigate(accountRoute, { screen: contributionAddRoute, params });
};

export const toContributionEdit = (
  { navigate }: MainNavigation,
  params: AccountParamsList[ContributionEditRoute],
) => {
  return navigate(accountRoute, { screen: contributionEditRoute, params });
};

export const toContribution = (
  { navigate }: MainNavigation,
  params: AccountParamsList[ContributionRoute],
) => {
  return navigate(accountRoute, { screen: contributionRoute, params });
};

export const toContributions = (
  { navigate }: MainNavigation,
  params: AccountParamsList[ContributionsRoute],
) => {
  return navigate(accountRoute, { screen: contributionsRoute, params });
};

export const toGoalAdd = ({ navigate }: MainNavigation) => {
  return navigate(accountRoute, { screen: goalAddRoute });
};

export const toGoalEdit = (
  { navigate }: MainNavigation,
  params: AccountParamsList[GoalEditRoute],
) => {
  return navigate(accountRoute, { screen: goalEditRoute, params });
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

export const toTransactionAdd = ({ navigate }: MainNavigation) => {
  return navigate(accountRoute, { screen: transactionAddRoute });
};

export const toTransactionEdit = (
  { navigate }: MainNavigation,
  params: AccountParamsList[CategoryEditRoute],
) => {
  return navigate(accountRoute, { screen: transactionEditRoute, params });
};

export const toTransaction = (
  { navigate }: MainNavigation,
  params: AccountParamsList[CategoryRoute],
) => {
  return navigate(accountRoute, { screen: transactionRoute, params });
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

export const toInvitationAdd = ({ navigate }: MainNavigation) => {
  return navigate(accountRoute, { screen: invitationAddRoute });
};

export const toInvitation = (
  { navigate }: MainNavigation,
  params: AccountParamsList[InvitationRoute],
) => {
  return navigate(accountRoute, { screen: invitationRoute, params });
};

export const toProfile = ({ navigate }: MainNavigation) => {
  return navigate(accountRoute, { screen: profileRoute });
};
