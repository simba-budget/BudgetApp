import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import { BottomTabsParamsList, bottomTabsRoute } from '../bottomTabs/types';

export type AccountParamsList = {
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

  [openBankingRoute]: undefined;
  [profileRoute]: undefined;
  [bottomTabsRoute]: NavigatorScreenParams<BottomTabsParamsList>;
};

export type AccountRoute = 'Account';
export const accountRoute: AccountRoute = 'Account';
export type AccountNavigation = StackNavigationProp<AccountParamsList>;

export type ContributionsRoute = 'Contributions';
export const contributionsRoute: ContributionsRoute = 'Contributions';
export type ContributionsScreenProps = StackScreenProps<AccountParamsList, ContributionsRoute>;

export type ContributionAddRoute = 'ContributionAdd';
export const contributionAddRoute: ContributionAddRoute = 'ContributionAdd';
export type ContributionAddScreenProps = StackScreenProps<
  AccountParamsList,
  ContributionAddRoute
>;

export type ContributionEditRoute = 'ContributionEdit';
export const contributionEditRoute: ContributionEditRoute = 'ContributionEdit';
export type ContributionEditScreenProps = StackScreenProps<
  AccountParamsList,
  ContributionEditRoute
>;

export type ContributionRoute = 'Contribution';
export const contributionRoute: ContributionRoute = 'Contribution';
export type ContributionScreenProps = StackScreenProps<AccountParamsList, ContributionRoute>;

export type GoalAddRoute = 'GoalAdd';
export const goalAddRoute: GoalAddRoute = 'GoalAdd';

export type GoalEditRoute = 'GoalEdit';
export const goalEditRoute: GoalEditRoute = 'GoalEdit';
export type GoalEditScreenProps = StackScreenProps<AccountParamsList, GoalEditRoute>;

export type GoalRoute = 'Goal';
export const goalRoute: GoalRoute = 'Goal';
export type GoalScreenProps = StackScreenProps<AccountParamsList, GoalRoute>;

export type CategoriesRoute = 'Categories';
export const categoriesRoute: CategoriesRoute = 'Categories';

export type CategoryAddRoute = 'CategoryAdd';
export const categoryAddRoute: CategoryAddRoute = 'CategoryAdd';

export type CategoryEditRoute = 'CategoryEdit';
export const categoryEditRoute: CategoryEditRoute = 'CategoryEdit';
export type CategoryEditScreenProps = StackScreenProps<AccountParamsList, CategoryEditRoute>;

export type CategoryRoute = 'Category';
export const categoryRoute: CategoryRoute = 'Category';
export type CategoryScreenProps = StackScreenProps<AccountParamsList, CategoryRoute>;

export type TransactionAddRoute = 'TransactionAdd';
export const transactionAddRoute: TransactionAddRoute = 'TransactionAdd';

export type TransactionEditRoute = 'TransactionEdit';
export const transactionEditRoute: TransactionEditRoute = 'TransactionEdit';
export type TransactionEditScreenProps = StackScreenProps<
  AccountParamsList,
  TransactionEditRoute
>;

export type TransactionRoute = 'Transaction';
export const transactionRoute: TransactionRoute = 'Transaction';
export type TransactionScreenProps = StackScreenProps<AccountParamsList, TransactionRoute>;

export type InvitationsRoute = 'Invitations';
export const invitationsRoute: InvitationsRoute = 'Invitations';

export type InvitationAddRoute = 'InvitationAdd';
export const invitationAddRoute: InvitationAddRoute = 'InvitationAdd';

export type InvitationRoute = 'Invitation';
export const invitationRoute: InvitationRoute = 'Invitation';
export type InvitationScreenProps = StackScreenProps<AccountParamsList, InvitationRoute>;

export type TagsRoute = 'Tags';
export const tagsRoute: TagsRoute = 'Tags';

export type TagAddRoute = 'TagAdd';
export const tagAddRoute: TagAddRoute = 'TagAdd';

export type TagEditRoute = 'TagEdit';
export const tagEditRoute: TagEditRoute = 'TagEdit';
export type TagEditScreenProps = StackScreenProps<AccountParamsList, TagEditRoute>;

export type TagRoute = 'Tag';
export const tagRoute: TagRoute = 'Tag';
export type TagScreenProps = StackScreenProps<AccountParamsList, TagRoute>;

export type MembersRoute = 'Members';
export const membersRoute: MembersRoute = 'Members';

export type MemberRoute = 'Member';
export const memberRoute: MemberRoute = 'Member';
export type MemberScreenProps = StackScreenProps<AccountParamsList, MemberRoute>;

export type MemberEditRoute = 'MemberEdit';
export const memberEditRoute: MemberEditRoute = 'MemberEdit';
export type MemberEditScreenProps = StackScreenProps<AccountParamsList, MemberEditRoute>;

export type SubscriptionAddRoute = 'SubscriptionAdd';
export const subscriptionAddRoute: SubscriptionAddRoute = 'SubscriptionAdd';

export type SubscriptionEditRoute = 'SubscriptionEdit';
export const subscriptionEditRoute: SubscriptionEditRoute = 'SubscriptionEdit';
export type SubscriptionEditScreenProps = StackScreenProps<
  AccountParamsList,
  SubscriptionEditRoute
>;

export type SubscriptionRoute = 'Subscription';
export const subscriptionRoute: SubscriptionRoute = 'Subscription';
export type SubscriptionScreenProps = StackScreenProps<AccountParamsList, SubscriptionRoute>;

export type OpenBankingRoute = 'OpenBanking';
export const openBankingRoute: OpenBankingRoute = 'OpenBanking';

export type ProfileRoute = 'Profile';
export const profileRoute: ProfileRoute = 'Profile';
