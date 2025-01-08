import { bottomTabsRoute, homeRoute } from '../bottomTabs';

import { RootNavigation, RootParams } from './navigator';
import {
  accountAddRoute,
  AccountEditRoute,
  accountEditRoute,
  accountSelectRoute,
  categoriesRoute,
  categoryAddRoute,
  categoryEditRoute,
  CategoryEditRoute,
  categoryRoute,
  CategoryRoute,
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
  GoalRoute,
  goalRoute,
  invitationAddRoute,
  InvitationRoute,
  invitationRoute,
  invitationsRoute,
  MemberEditRoute,
  memberEditRoute,
  MemberRoute,
  memberRoute,
  membersRoute,
  merchantAddRoute,
  MerchantEditRoute,
  merchantEditRoute,
  MerchantRoute,
  merchantRoute,
  merchantsRoute,
  notificationsRoute,
  privacyPolicyRoute,
  registrationRoute,
  sendOtpRoute,
  subscriptionAddRoute,
  subscriptionEditRoute,
  SubscriptionEditRoute,
  subscriptionRoute,
  SubscriptionRoute,
  tagAddRoute,
  TagEditRoute,
  tagEditRoute,
  TagRoute,
  tagRoute,
  tagsRoute,
  termsAndConditionsRoute,
  transactionAddRoute,
  transactionDeleteRoute,
  TransactionDeleteRoute,
  TransactionEditRoute,
  transactionEditRoute,
  transactionRoute,
  TransactionRoute,
  verifyOtpRoute,
  VerifyOtpRoute,
} from './types';

// public
export const toPrivacyPolicy = ({ navigate }: RootNavigation) => {
  return navigate(privacyPolicyRoute);
};

export const toTermsAndConditions = ({ navigate }: RootNavigation) => {
  return navigate(termsAndConditionsRoute);
};

// auth
export const toSendOtp = ({ navigate }: RootNavigation) => {
  return navigate(sendOtpRoute);
};

export const toRegistration = ({ navigate }: RootNavigation) => {
  return navigate(registrationRoute);
};

export const toVerifyOtp = (
  { navigate }: RootNavigation,
  params: RootParams[VerifyOtpRoute],
) => {
  return navigate(verifyOtpRoute, params);
};

// protected
export const toAccounts = ({ popToTop }: RootNavigation) => {
  return popToTop();
};

export const toAccountAdd = ({ navigate }: RootNavigation) => {
  return navigate(accountAddRoute);
};

export const toNotifications = ({ navigate }: RootNavigation) => {
  return navigate(notificationsRoute);
};

export const toAccountEdit = (
  { navigate }: RootNavigation,
  params: RootParams[AccountEditRoute],
) => {
  return navigate(accountEditRoute, params);
};

export const toHome = ({ navigate }: RootNavigation) => {
  return navigate(bottomTabsRoute, { screen: homeRoute });
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

export const toGoal = (
  { navigate }: RootNavigation,
  params: RootParams[GoalRoute],
) => {
  return navigate(goalRoute, params);
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

export const toCategory = (
  { navigate }: RootNavigation,
  params: RootParams[CategoryRoute],
) => {
  return navigate(categoryRoute, params);
};

export const toTransactionAdd = ({ navigate }: RootNavigation) => {
  return navigate(transactionAddRoute);
};

export const toTransactionEdit = (
  { navigate }: RootNavigation,
  params: RootParams[TransactionEditRoute],
) => {
  return navigate(transactionEditRoute, params);
};

export const toTransaction = (
  { navigate }: RootNavigation,
  params: RootParams[TransactionRoute],
) => {
  return navigate(transactionRoute, params);
};

export const toInvitations = ({ navigate }: RootNavigation) => {
  return navigate(invitationsRoute);
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

export const toMember = (
  { replace }: RootNavigation,
  params: RootParams[MemberRoute],
) => {
  return replace(memberRoute, params);
};

export const toMemberEdit = (
  { navigate }: RootNavigation,
  params: RootParams[MemberEditRoute],
) => {
  return navigate(memberEditRoute, params);
};

export const toTag = (
  { navigate }: RootNavigation,
  params: RootParams[TagRoute],
) => {
  return navigate(tagRoute, params);
};

export const toTagEdit = (
  { navigate }: RootNavigation,
  params: RootParams[TagEditRoute],
) => {
  return navigate(tagEditRoute, params);
};

export const toTagAdd = ({ navigate }: RootNavigation) => {
  return navigate(tagAddRoute);
};

export const toTags = ({ navigate }: RootNavigation) => {
  return navigate(tagsRoute);
};

export const toSubscription = (
  { navigate }: RootNavigation,
  params: RootParams[SubscriptionRoute],
) => {
  return navigate(subscriptionRoute, params);
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

export const toTransactionDelete = (
  { navigate }: RootNavigation,
  params: RootParams[TransactionDeleteRoute],
) => {
  return navigate(transactionDeleteRoute, params);
};
