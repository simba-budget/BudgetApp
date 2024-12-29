import { createStackNavigator } from '@react-navigation/stack';
import {
  CategoriesScreen,
  CategoryAddScreen,
  CategoryEditScreen,
  CategoryScreen,
  ContributionAddScreen,
  ContributionEditScreen,
  ContributionScreen,
  ContributionsScreen,
  GoalAddScreen,
  GoalEditScreen,
  GoalScreen,
  InvitationAddScreen,
  InvitationScreen,
  InvitationsScreen,
  MemberEditScreen,
  MemberScreen,
  MembersScreen,
  ProfileScreen,
  SubscriptionAddScreen,
  SubscriptionEditScreen,
  SubscriptionScreen,
  TagAddScreen,
  TagEditScreen,
  TagsScreen,
  TransactionAddScreen,
  TransactionEditScreen,
  TransactionScreen,
} from '@screens';
import { View } from 'react-native';

import { headerHiddenOptions, stackOptions } from '../../options';
import BottomTabs, { bottomTabsRoute } from '../bottomTabs';

import {
  AccountNavigation,
  AccountParams,
  accountRoute,
  categoriesRoute,
  categoryAddRoute,
  categoryEditRoute,
  CategoryEditScreenProps,
  categoryRoute,
  CategoryScreenProps,
  contributionAddRoute,
  ContributionAddScreenProps,
  contributionEditRoute,
  ContributionEditScreenProps,
  contributionRoute,
  ContributionScreenProps,
  contributionsRoute,
  ContributionsScreenProps,
  goalAddRoute,
  goalEditRoute,
  GoalEditScreenProps,
  goalRoute,
  GoalScreenProps,
  invitationAddRoute,
  invitationRoute,
  InvitationScreenProps,
  invitationsRoute,
  memberEditRoute,
  MemberEditScreenProps,
  memberRoute,
  MemberScreenProps,
  membersRoute,
  openBankingRoute,
  profileRoute,
  subscriptionAddRoute,
  subscriptionEditRoute,
  SubscriptionEditScreenProps,
  subscriptionRoute,
  SubscriptionScreenProps,
  tagAddRoute,
  tagEditRoute,
  TagEditScreenProps,
  tagRoute,
  TagScreenProps,
  tagsRoute,
  transactionAddRoute,
  transactionEditRoute,
  TransactionEditScreenProps,
  transactionRoute,
  TransactionScreenProps,
} from './types';

const AccountStack = createStackNavigator<AccountParams>({
  initialRouteName: bottomTabsRoute,
  screenOptions: stackOptions,
  screens: {
    // Contributions
    [contributionAddRoute]: ContributionAddScreen,
    [contributionEditRoute]: ContributionEditScreen,
    [contributionRoute]: ContributionScreen,
    [contributionsRoute]: ContributionsScreen,

    // Goals
    [goalAddRoute]: GoalAddScreen,
    [goalEditRoute]: GoalEditScreen,
    [goalRoute]: GoalScreen,

    // Categories
    [categoriesRoute]: CategoriesScreen,
    [categoryAddRoute]: CategoryAddScreen,
    [categoryEditRoute]: CategoryEditScreen,
    [categoryRoute]: CategoryScreen,

    // Transactions
    [transactionAddRoute]: TransactionAddScreen,
    [transactionEditRoute]: TransactionEditScreen,
    [transactionRoute]: TransactionScreen,

    // Invitations
    [invitationsRoute]: InvitationsScreen,
    [invitationRoute]: InvitationScreen,
    [invitationAddRoute]: InvitationAddScreen,

    // Tags
    [tagsRoute]: TagsScreen,
    [tagAddRoute]: TagAddScreen,
    [tagEditRoute]: TagEditScreen,
    [tagRoute]: TagsScreen,

    // Members
    [membersRoute]: MembersScreen,
    [memberRoute]: MemberScreen,
    [memberEditRoute]: MemberEditScreen,

    // Subscriptions
    [subscriptionAddRoute]: SubscriptionAddScreen,
    [subscriptionEditRoute]: SubscriptionEditScreen,
    [subscriptionRoute]: SubscriptionScreen,

    [openBankingRoute]: View,
    [profileRoute]: ProfileScreen,
    [bottomTabsRoute]: { screen: BottomTabs, options: headerHiddenOptions },
  },
});

export {
  type AccountNavigation,
  type AccountParams,
  type TransactionScreenProps,
  type SubscriptionEditScreenProps,
  type CategoryEditScreenProps,
  type TransactionEditScreenProps,
  type TagScreenProps,
  type TagEditScreenProps,
  type ContributionsScreenProps,
  type ContributionAddScreenProps,
  type ContributionEditScreenProps,
  type ContributionScreenProps,
  type GoalEditScreenProps,
  type GoalScreenProps,
  type CategoryScreenProps,
  type InvitationScreenProps,
  type MemberScreenProps,
  type MemberEditScreenProps,
  type SubscriptionScreenProps,
  accountRoute,
};

export * from './actions';
export default AccountStack;
