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

import { stackOptions } from '../../options';
import BottomTabs from '../bottomTabs/navigator';
import { bottomTabsRoute } from '../bottomTabs/types';

import {
  AccountParamsList,
  categoriesRoute,
  categoryAddRoute,
  categoryEditRoute,
  categoryRoute,
  contributionAddRoute,
  contributionEditRoute,
  contributionRoute,
  contributionsRoute,
  goalAddRoute,
  goalEditRoute,
  goalRoute,
  invitationAddRoute,
  invitationRoute,
  invitationsRoute,
  memberEditRoute,
  memberRoute,
  membersRoute,
  openBankingRoute,
  profileRoute,
  subscriptionAddRoute,
  subscriptionEditRoute,
  subscriptionRoute,
  tagAddRoute,
  tagEditRoute,
  tagRoute,
  tagsRoute,
  transactionAddRoute,
  transactionEditRoute,
  transactionRoute,
} from './types';

const AccountStack = createStackNavigator<AccountParamsList>({
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
    [bottomTabsRoute]: BottomTabs,
  },
});

export default AccountStack;
