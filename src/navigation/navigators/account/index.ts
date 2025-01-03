import { CategoriesActions } from '@features/categories/containers';
import { MerchantsActions } from '@features/merchants/containers';
import { TagsActions } from '@features/tags/containers';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {
  CategoriesScreen,
  CategoryAddScreen,
  CategoryEditScreen,
  CategoryScreen,
  ContributionAddScreen,
  ContributionEditScreen,
  ContributionScreen,
  ContributionsScreen,
  ExternalAccountScreen,
  ExternalAccountsScreen,
  GoalAddScreen,
  GoalEditScreen,
  GoalScreen,
  InvitationAddScreen,
  InvitationScreen,
  InvitationsScreen,
  MemberEditScreen,
  MemberScreen,
  MembersScreen,
  MerchantAddScreen,
  MerchantEditScreen,
  MerchantScreen,
  MerchantsScreen,
  SubscriptionAddScreen,
  SubscriptionEditScreen,
  SubscriptionScreen,
  TagAddScreen,
  TagEditScreen,
  TagScreen,
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
  externalAccountRoute,
  ExternalAccountScreenProps,
  externalAccountsRoute,
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
  merchantAddRoute,
  merchantEditRoute,
  MerchantEditScreenProps,
  merchantRoute,
  MerchantScreenProps,
  merchantsRoute,
  openBankingRoute,
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

const categoriesOptions: StackNavigationOptions = {
  headerRight: CategoriesActions,
};

const tagsOptions: StackNavigationOptions = {
  headerRight: TagsActions,
};

const merchantsOptions: StackNavigationOptions = {
  headerRight: MerchantsActions,
};

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
    [categoriesRoute]: { screen: CategoriesScreen, options: categoriesOptions },
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
    [tagsRoute]: { screen: TagsScreen, options: tagsOptions },
    [tagAddRoute]: TagAddScreen,
    [tagEditRoute]: TagEditScreen,
    [tagRoute]: TagScreen,

    // Members
    [membersRoute]: MembersScreen,
    [memberRoute]: MemberScreen,
    [memberEditRoute]: MemberEditScreen,

    // Subscriptions
    [subscriptionAddRoute]: SubscriptionAddScreen,
    [subscriptionEditRoute]: SubscriptionEditScreen,
    [subscriptionRoute]: SubscriptionScreen,

    // Tags
    [merchantsRoute]: { screen: MerchantsScreen, options: merchantsOptions },
    [merchantAddRoute]: MerchantAddScreen,
    [merchantEditRoute]: MerchantEditScreen,
    [merchantRoute]: MerchantScreen,

    // External Accounts
    [externalAccountsRoute]: ExternalAccountsScreen,
    [externalAccountRoute]: ExternalAccountScreen,

    [openBankingRoute]: View,
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
  type MerchantEditScreenProps,
  type MerchantScreenProps,
  type ExternalAccountScreenProps,
  accountRoute,
};

export * from './actions';
export default AccountStack;
