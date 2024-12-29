import { bottomTabsRoute, homeRoute } from '../bottomTabs/types';

import {
  AccountNavigation,
  AccountParamsList,
  categoriesRoute,
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
  invitationAddRoute,
  invitationRoute,
  InvitationRoute,
  invitationsRoute,
  memberEditRoute,
  MemberEditRoute,
  memberRoute,
  MemberRoute,
  membersRoute,
  profileRoute,
  subscriptionAddRoute,
  subscriptionEditRoute,
  SubscriptionEditRoute,
  subscriptionRoute,
  SubscriptionRoute,
  tagAddRoute,
  tagEditRoute,
  TagEditRoute,
  tagRoute,
  TagRoute,
  tagsRoute,
  transactionAddRoute,
  transactionEditRoute,
  transactionRoute,
} from './types';

export const toHome = ({ navigate }: AccountNavigation) => {
  return navigate(bottomTabsRoute, { screen: homeRoute });
};

export const toContributionAdd = (
  { navigate }: AccountNavigation,
  params: AccountParamsList[ContributionAddRoute],
) => {
  return navigate(contributionAddRoute, params);
};

export const toContributionEdit = (
  { navigate }: AccountNavigation,
  params: AccountParamsList[ContributionEditRoute],
) => {
  return navigate(contributionEditRoute, params);
};

export const toContribution = (
  { navigate }: AccountNavigation,
  params: AccountParamsList[ContributionRoute],
) => {
  return navigate(contributionRoute, params);
};

export const toContributions = (
  { navigate }: AccountNavigation,
  params: AccountParamsList[ContributionsRoute],
) => {
  return navigate(contributionsRoute, params);
};

export const toGoalAdd = ({ navigate }: AccountNavigation) => {
  return navigate(goalAddRoute);
};

export const toGoalEdit = (
  { navigate }: AccountNavigation,
  params: AccountParamsList[GoalEditRoute],
) => {
  return navigate(goalEditRoute, params);
};

export const toGoal = (
  { navigate }: AccountNavigation,
  params: AccountParamsList[GoalRoute],
) => {
  return navigate(goalRoute, params);
};

export const toCategories = ({ navigate }: AccountNavigation) => {
  return navigate(categoriesRoute);
};

export const toCategoryAdd = ({ navigate }: AccountNavigation) => {
  return navigate(categoryAddRoute);
};

export const toCategoryEdit = (
  { navigate }: AccountNavigation,
  params: AccountParamsList[CategoryEditRoute],
) => {
  return navigate(categoryEditRoute, params);
};

export const toCategory = (
  { navigate }: AccountNavigation,
  params: AccountParamsList[CategoryRoute],
) => {
  return navigate(categoryRoute, params);
};

export const toTransactionAdd = ({ navigate }: AccountNavigation) => {
  return navigate(transactionAddRoute);
};

export const toTransactionEdit = (
  { navigate }: AccountNavigation,
  params: AccountParamsList[CategoryEditRoute],
) => {
  return navigate(transactionEditRoute, params);
};

export const toTransaction = (
  { navigate }: AccountNavigation,
  params: AccountParamsList[CategoryRoute],
) => {
  return navigate(transactionRoute, params);
};

export const toInvitations = ({ navigate }: AccountNavigation) => {
  return navigate(invitationsRoute);
};

export const toInvitationAdd = ({ navigate }: AccountNavigation) => {
  return navigate(invitationAddRoute);
};

export const toInvitation = (
  { navigate }: AccountNavigation,
  params: AccountParamsList[InvitationRoute],
) => {
  return navigate(invitationRoute, params);
};

export const toProfile = ({ navigate }: AccountNavigation) => {
  return navigate(profileRoute);
};

export const toMembers = ({ navigate }: AccountNavigation) => {
  return navigate(membersRoute);
};

export const toMember = (
  { navigate }: AccountNavigation,
  params: AccountParamsList[MemberRoute],
) => {
  return navigate(memberRoute, params);
};

export const toMemberEdit = (
  { navigate }: AccountNavigation,
  params: AccountParamsList[MemberEditRoute],
) => {
  return navigate(memberEditRoute, params);
};

export const toTag = (
  { navigate }: AccountNavigation,
  params: AccountParamsList[TagRoute],
) => {
  return navigate(tagRoute, params);
};

export const toTagEdit = (
  { navigate }: AccountNavigation,
  params: AccountParamsList[TagEditRoute],
) => {
  return navigate(tagEditRoute, params);
};

export const toTagAdd = ({ navigate }: AccountNavigation) => {
  return navigate(tagAddRoute);
};

export const toTags = ({ navigate }: AccountNavigation) => {
  return navigate(tagsRoute);
};

export const toSubscription = (
  { navigate }: AccountNavigation,
  params: AccountParamsList[SubscriptionRoute],
) => {
  return navigate(subscriptionRoute, params);
};

export const toSubscriptionEdit = (
  { navigate }: AccountNavigation,
  params: AccountParamsList[SubscriptionEditRoute],
) => {
  return navigate(subscriptionEditRoute, params);
};

export const toSubscriptionAdd = ({ navigate }: AccountNavigation) => {
  return navigate(subscriptionAddRoute);
};
