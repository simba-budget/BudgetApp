import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import { BottomTabsParams, bottomTabsRoute } from '../bottomTabs/types';

export type AccountParams = {
  // Contributions
  [contributionAddRoute]: { goalId: number };
  [contributionEditRoute]: { id: number };
  [contributionRoute]: { id: number };
  [contributionsRoute]: { goalId: number };

  // Goals
  [goalAddRoute]: undefined;
  [goalEditRoute]: { id: number };
  [goalRoute]: { id: number };

  // Categories
  [categoriesRoute]: undefined;
  [categoryAddRoute]: undefined;
  [categoryEditRoute]: { id: number };
  [categoryRoute]: { id: number };

  // Transactions
  [transactionAddRoute]: undefined;
  [transactionEditRoute]: { id: number };
  [transactionRoute]: { id: number };

  // Invitations
  [invitationsRoute]: undefined;
  [invitationAddRoute]: undefined;
  [invitationRoute]: { id: number };

  // Tags
  [tagsRoute]: undefined;
  [tagRoute]: { id: number };
  [tagEditRoute]: { id: number };
  [tagAddRoute]: undefined;

  // Members
  [memberRoute]: { id: number };
  [memberEditRoute]: { id: number };
  [membersRoute]: undefined;

  // Subscriptions
  [subscriptionRoute]: { id: number };
  [subscriptionEditRoute]: { id: number };
  [subscriptionAddRoute]: undefined;

  // Merchants
  [merchantsRoute]: undefined;
  [merchantRoute]: { id: number };
  [merchantEditRoute]: { id: number };
  [merchantAddRoute]: undefined;

  // External Accounts
  [externalAccountsRoute]: undefined;
  [externalAccountRoute]: { id: number };

  [openBankingRoute]: undefined;
  [bottomTabsRoute]: NavigatorScreenParams<BottomTabsParams>;
};

export type AccountRoute = 'Account';
export const accountRoute: AccountRoute = 'Account';
export type AccountNavigation = StackNavigationProp<AccountParams>;

export type ContributionsRoute = 'Contributions';
export const contributionsRoute: ContributionsRoute = 'Contributions';
export type ContributionsScreenProps = StackScreenProps<
  AccountParams,
  ContributionsRoute
>;

export type ContributionAddRoute = 'ContributionAdd';
export const contributionAddRoute: ContributionAddRoute = 'ContributionAdd';
export type ContributionAddScreenProps = StackScreenProps<
  AccountParams,
  ContributionAddRoute
>;

export type ContributionEditRoute = 'ContributionEdit';
export const contributionEditRoute: ContributionEditRoute = 'ContributionEdit';
export type ContributionEditScreenProps = StackScreenProps<
  AccountParams,
  ContributionEditRoute
>;

export type ContributionRoute = 'Contribution';
export const contributionRoute: ContributionRoute = 'Contribution';
export type ContributionScreenProps = StackScreenProps<
  AccountParams,
  ContributionRoute
>;

export type GoalAddRoute = 'GoalAdd';
export const goalAddRoute: GoalAddRoute = 'GoalAdd';

export type GoalEditRoute = 'GoalEdit';
export const goalEditRoute: GoalEditRoute = 'GoalEdit';
export type GoalEditScreenProps = StackScreenProps<AccountParams, GoalEditRoute>;

export type GoalRoute = 'Goal';
export const goalRoute: GoalRoute = 'Goal';
export type GoalScreenProps = StackScreenProps<AccountParams, GoalRoute>;

export type CategoriesRoute = 'Categories';
export const categoriesRoute: CategoriesRoute = 'Categories';

export type CategoryAddRoute = 'CategoryAdd';
export const categoryAddRoute: CategoryAddRoute = 'CategoryAdd';

export type CategoryEditRoute = 'CategoryEdit';
export const categoryEditRoute: CategoryEditRoute = 'CategoryEdit';
export type CategoryEditScreenProps = StackScreenProps<
  AccountParams,
  CategoryEditRoute
>;

export type CategoryRoute = 'Category';
export const categoryRoute: CategoryRoute = 'Category';
export type CategoryScreenProps = StackScreenProps<AccountParams, CategoryRoute>;

export type TransactionAddRoute = 'TransactionAdd';
export const transactionAddRoute: TransactionAddRoute = 'TransactionAdd';

export type TransactionEditRoute = 'TransactionEdit';
export const transactionEditRoute: TransactionEditRoute = 'TransactionEdit';
export type TransactionEditScreenProps = StackScreenProps<
  AccountParams,
  TransactionEditRoute
>;

export type TransactionRoute = 'Transaction';
export const transactionRoute: TransactionRoute = 'Transaction';
export type TransactionScreenProps = StackScreenProps<
  AccountParams,
  TransactionRoute
>;

export type InvitationsRoute = 'Invitations';
export const invitationsRoute: InvitationsRoute = 'Invitations';

export type InvitationAddRoute = 'InvitationAdd';
export const invitationAddRoute: InvitationAddRoute = 'InvitationAdd';

export type InvitationRoute = 'Invitation';
export const invitationRoute: InvitationRoute = 'Invitation';
export type InvitationScreenProps = StackScreenProps<AccountParams, InvitationRoute>;

export type TagsRoute = 'Tags';
export const tagsRoute: TagsRoute = 'Tags';

export type TagAddRoute = 'TagAdd';
export const tagAddRoute: TagAddRoute = 'TagAdd';

export type TagEditRoute = 'TagEdit';
export const tagEditRoute: TagEditRoute = 'TagEdit';
export type TagEditScreenProps = StackScreenProps<AccountParams, TagEditRoute>;

export type TagRoute = 'Tag';
export const tagRoute: TagRoute = 'Tag';
export type TagScreenProps = StackScreenProps<AccountParams, TagRoute>;

export type MembersRoute = 'Members';
export const membersRoute: MembersRoute = 'Members';

export type MemberRoute = 'Member';
export const memberRoute: MemberRoute = 'Member';
export type MemberScreenProps = StackScreenProps<AccountParams, MemberRoute>;

export type MemberEditRoute = 'MemberEdit';
export const memberEditRoute: MemberEditRoute = 'MemberEdit';
export type MemberEditScreenProps = StackScreenProps<AccountParams, MemberEditRoute>;

export type SubscriptionAddRoute = 'SubscriptionAdd';
export const subscriptionAddRoute: SubscriptionAddRoute = 'SubscriptionAdd';

export type SubscriptionEditRoute = 'SubscriptionEdit';
export const subscriptionEditRoute: SubscriptionEditRoute = 'SubscriptionEdit';
export type SubscriptionEditScreenProps = StackScreenProps<
  AccountParams,
  SubscriptionEditRoute
>;

export type SubscriptionRoute = 'Subscription';
export const subscriptionRoute: SubscriptionRoute = 'Subscription';
export type SubscriptionScreenProps = StackScreenProps<
  AccountParams,
  SubscriptionRoute
>;

export type MerchantsRoute = 'Merchants';
export const merchantsRoute: MerchantsRoute = 'Merchants';

export type MerchantAddRoute = 'MerchantAdd';
export const merchantAddRoute: MerchantAddRoute = 'MerchantAdd';

export type MerchantEditRoute = 'MerchantEdit';
export const merchantEditRoute: MerchantEditRoute = 'MerchantEdit';
export type MerchantEditScreenProps = StackScreenProps<
  AccountParams,
  MerchantEditRoute
>;

export type MerchantRoute = 'Merchant';
export const merchantRoute: MerchantRoute = 'Merchant';
export type MerchantScreenProps = StackScreenProps<AccountParams, MerchantRoute>;

export type ExternalAccountsRoute = 'ExternalAccounts';
export const externalAccountsRoute: ExternalAccountsRoute = 'ExternalAccounts';

export type ExternalAccountRoute = 'ExternalAccount';
export const externalAccountRoute: ExternalAccountRoute = 'ExternalAccount';
export type ExternalAccountScreenProps = StackScreenProps<
  AccountParams,
  ExternalAccountRoute
>;

export type OpenBankingRoute = 'OpenBanking';
export const openBankingRoute: OpenBankingRoute = 'OpenBanking';
