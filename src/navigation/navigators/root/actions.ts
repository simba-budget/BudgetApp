import { bottomTabsRoute, homeRoute } from '../bottomTabs';

import { RootNavigation, RootParams } from './navigator';
import {
  accountSelectRoute,
  categoriesRoute,
  categoryAddRoute,
  categoryEditRoute,
  CategoryEditRoute,
  ContributionAddRoute,
  contributionAddRoute,
  ContributionEditRoute,
  contributionEditRoute,
  ContributionRoute,
  contributionRoute,
  ContributionsRoute,
  contributionsRoute,
  externalAccountRoute,
  ExternalAccountRoute,
  externalAccountsRoute,
  goalAddRoute,
  GoalEditRoute,
  goalEditRoute,
  invitationAddRoute,
  InvitationRoute,
  invitationRoute,
  MemberEditRoute,
  memberEditRoute,
  membersRoute,
  merchantAddRoute,
  MerchantEditRoute,
  merchantEditRoute,
  MerchantRoute,
  merchantRoute,
  merchantsRoute,
  notificationsRoute,
  subscriptionAddRoute,
  subscriptionEditRoute,
  SubscriptionEditRoute,
  tagsRoute,
  transactionAddRoute,
} from './types';

// protected
export const toNotifications = ({ navigate }: RootNavigation) => {
  return navigate(notificationsRoute);
};

export const toHome = ({ replace }: RootNavigation) => {
  return replace(bottomTabsRoute, { screen: homeRoute });
};

// account
export const toContributionAdd = (
  { navigate }: RootNavigation,
  params: RootParams[ContributionAddRoute],
) => {
  return navigate(contributionAddRoute, params);
};

export const toContributionEdit = (
  { navigate }: RootNavigation,
  params: RootParams[ContributionEditRoute],
) => {
  return navigate(contributionEditRoute, params);
};

export const toContribution = (
  { navigate }: RootNavigation,
  params: RootParams[ContributionRoute],
) => {
  return navigate(contributionRoute, params);
};

export const toContributions = (
  { navigate }: RootNavigation,
  params: RootParams[ContributionsRoute],
) => {
  return navigate(contributionsRoute, params);
};

export const toGoalAdd = ({ navigate }: RootNavigation) => {
  return navigate(goalAddRoute);
};

export const toGoalEdit = (
  { navigate }: RootNavigation,
  params: RootParams[GoalEditRoute],
) => {
  return navigate(goalEditRoute, params);
};

export const toCategories = ({ navigate }: RootNavigation) => {
  return navigate(categoriesRoute);
};

export const toCategoryAdd = ({ navigate }: RootNavigation) => {
  return navigate(categoryAddRoute);
};

export const toCategoryEdit = (
  { navigate }: RootNavigation,
  params: RootParams[CategoryEditRoute],
) => {
  return navigate(categoryEditRoute, params);
};

export const toTransactionAdd = ({ navigate }: RootNavigation) => {
  return navigate(transactionAddRoute);
};

export const toInvitationAdd = ({ navigate }: RootNavigation) => {
  return navigate(invitationAddRoute);
};

export const toInvitation = (
  { navigate }: RootNavigation,
  params: RootParams[InvitationRoute],
) => {
  return navigate(invitationRoute, params);
};

export const toMembers = ({ navigate }: RootNavigation) => {
  return navigate(membersRoute);
};

export const toMemberEdit = (
  { navigate }: RootNavigation,
  params: RootParams[MemberEditRoute],
) => {
  return navigate(memberEditRoute, params);
};

export const toTags = ({ navigate }: RootNavigation) => {
  return navigate(tagsRoute);
};

export const toSubscriptionEdit = (
  { navigate }: RootNavigation,
  params: RootParams[SubscriptionEditRoute],
) => {
  return navigate(subscriptionEditRoute, params);
};

export const toSubscriptionAdd = ({ navigate }: RootNavigation) => {
  return navigate(subscriptionAddRoute);
};

export const toMerchant = (
  { navigate }: RootNavigation,
  params: RootParams[MerchantRoute],
) => {
  return navigate(merchantRoute, params);
};

export const toMerchantEdit = (
  { navigate }: RootNavigation,
  params: RootParams[MerchantEditRoute],
) => {
  return navigate(merchantEditRoute, params);
};

export const toMerchantAdd = ({ navigate }: RootNavigation) => {
  return navigate(merchantAddRoute);
};

export const toMerchants = ({ navigate }: RootNavigation) => {
  return navigate(merchantsRoute);
};

export const toExternalAccount = (
  { navigate }: RootNavigation,
  params: RootParams[ExternalAccountRoute],
) => {
  return navigate(externalAccountRoute, params);
};

export const toExternalAccounts = ({ navigate }: RootNavigation) => {
  return navigate(externalAccountsRoute);
};

// bottom sheet
export const toAccountSelect = ({ navigate }: RootNavigation) => {
  return navigate(accountSelectRoute);
};
