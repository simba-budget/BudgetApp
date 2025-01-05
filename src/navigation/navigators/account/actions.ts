import {
  AccountNavigation,
  AccountParams,
  categoriesRoute,
  categoryAddRoute,
  CategoryEditRoute,
  categoryEditRoute,
  CategoryRoute,
  categoryRoute,
  contributionAddRoute,
  ContributionAddRoute,
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
  merchantEditRoute,
  MerchantEditRoute,
  merchantRoute,
  MerchantRoute,
  merchantsRoute,
  subscriptionAddRoute,
  SubscriptionEditRoute,
  subscriptionEditRoute,
  SubscriptionRoute,
  subscriptionRoute,
  tagAddRoute,
  TagEditRoute,
  tagEditRoute,
  TagRoute,
  tagRoute,
  tagsRoute,
  transactionAddRoute,
  transactionEditRoute,
} from './types';

export const toContributionAdd = (
  { navigate }: AccountNavigation,
  params: AccountParams[ContributionAddRoute],
) => {
  return navigate(contributionAddRoute, params);
};

export const toContributionEdit = (
  { navigate }: AccountNavigation,
  params: AccountParams[ContributionEditRoute],
) => {
  return navigate(contributionEditRoute, params);
};

export const toContribution = (
  { navigate }: AccountNavigation,
  params: AccountParams[ContributionRoute],
) => {
  return navigate(contributionRoute, params);
};

export const toContributions = (
  { navigate }: AccountNavigation,
  params: AccountParams[ContributionsRoute],
) => {
  return navigate(contributionsRoute, params);
};

export const toGoalAdd = ({ navigate }: AccountNavigation) => {
  return navigate(goalAddRoute);
};

export const toGoalEdit = (
  { navigate }: AccountNavigation,
  params: AccountParams[GoalEditRoute],
) => {
  return navigate(goalEditRoute, params);
};

export const toGoal = (
  { navigate }: AccountNavigation,
  params: AccountParams[GoalRoute],
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
  params: AccountParams[CategoryEditRoute],
) => {
  return navigate(categoryEditRoute, params);
};

export const toCategory = (
  { navigate }: AccountNavigation,
  params: AccountParams[CategoryRoute],
) => {
  return navigate(categoryRoute, params);
};

export const toTransactionAdd = ({ navigate }: AccountNavigation) => {
  return navigate(transactionAddRoute);
};

export const toTransactionEdit = (
  { navigate }: AccountNavigation,
  params: AccountParams[CategoryEditRoute],
) => {
  return navigate(transactionEditRoute, params);
};

export const toInvitations = ({ navigate }: AccountNavigation) => {
  return navigate(invitationsRoute);
};

export const toInvitationAdd = ({ navigate }: AccountNavigation) => {
  return navigate(invitationAddRoute);
};

export const toInvitation = (
  { navigate }: AccountNavigation,
  params: AccountParams[InvitationRoute],
) => {
  return navigate(invitationRoute, params);
};

export const toMembers = ({ navigate }: AccountNavigation) => {
  return navigate(membersRoute);
};

export const toMember = (
  { navigate }: AccountNavigation,
  params: AccountParams[MemberRoute],
) => {
  return navigate(memberRoute, params);
};

export const toMemberEdit = (
  { navigate }: AccountNavigation,
  params: AccountParams[MemberEditRoute],
) => {
  return navigate(memberEditRoute, params);
};

export const toTag = (
  { navigate }: AccountNavigation,
  params: AccountParams[TagRoute],
) => {
  return navigate(tagRoute, params);
};

export const toTagEdit = (
  { navigate }: AccountNavigation,
  params: AccountParams[TagEditRoute],
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
  params: AccountParams[SubscriptionRoute],
) => {
  return navigate(subscriptionRoute, params);
};

export const toSubscriptionEdit = (
  { navigate }: AccountNavigation,
  params: AccountParams[SubscriptionEditRoute],
) => {
  return navigate(subscriptionEditRoute, params);
};

export const toSubscriptionAdd = ({ navigate }: AccountNavigation) => {
  return navigate(subscriptionAddRoute);
};

export const toMerchant = (
  { navigate }: AccountNavigation,
  params: AccountParams[MerchantRoute],
) => {
  return navigate(merchantRoute, params);
};

export const toMerchantEdit = (
  { navigate }: AccountNavigation,
  params: AccountParams[MerchantEditRoute],
) => {
  return navigate(merchantEditRoute, params);
};

export const toMerchantAdd = ({ navigate }: AccountNavigation) => {
  return navigate(merchantAddRoute);
};

export const toMerchants = ({ navigate }: AccountNavigation) => {
  return navigate(merchantsRoute);
};

export const toExternalAccount = (
  { navigate }: AccountNavigation,
  params: AccountParams[ExternalAccountRoute],
) => {
  return navigate(externalAccountRoute, params);
};

export const toExternalAccounts = ({ navigate }: AccountNavigation) => {
  return navigate(externalAccountsRoute);
};
