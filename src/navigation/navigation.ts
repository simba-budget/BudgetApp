import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation, NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  AccountAddScreen,
  AccountEditScreen,
  AccountsScreen,
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
  GoalsScreen,
  HomeScreen,
  InvitationAddScreen,
  InvitationScreen,
  InvitationsScreen,
  MemberEditScreen,
  MemberScreen,
  MembersScreen,
  PrivacyPolicyScreen,
  ProfileScreen,
  RegistrationScreen,
  SendOtpScreen,
  TermsAndConditionsScreen,
  TransactionAddScreen,
  TransactionEditScreen,
  TransactionScreen,
  TransactionsScreen,
  VerifyOtpScreen,
  WelcomeScreen,
} from '@screens';
import { View } from 'react-native';

import { useIsAccountSelected, useIsLoggedIn, useIsLoggedOut } from './hooks';
import { headerHiddenOptions, stackOptions } from './options';
import {
  accountAddRoute,
  accountEditRoute,
  accountRoute,
  accountsRoute,
  authRoute,
  bottomTabsRoute,
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
  goalsRoute,
  homeRoute,
  invitationAddRoute,
  invitationRoute,
  invitationsRoute,
  mainRoute,
  memberEditRoute,
  memberRoute,
  membersRoute,
  openBankingRoute,
  privacyPolicyRoute,
  profileRoute,
  registrationRoute,
  sendOtpRoute,
  termsAndConditionsRoute,
  transactionAddRoute,
  transactionEditRoute,
  transactionRoute,
  transactionsRoute,
  verifyOtpRoute,
  welcomeRoute,
} from './types';

export type AuthParamsList = {
  [welcomeRoute]: undefined;
  [sendOtpRoute]: undefined;
  [verifyOtpRoute]: { email: string; expirationDate: string };
  [registrationRoute]: undefined;
};

export type RootParamsList = {
  [privacyPolicyRoute]: undefined;
  [termsAndConditionsRoute]: undefined;
  [authRoute]: NavigatorScreenParams<AuthParamsList>;
  [mainRoute]: NavigatorScreenParams<MainParamsList>;
};

export type MainParamsList = {
  [accountsRoute]: undefined;
  [accountAddRoute]: undefined;
  [accountEditRoute]: { id: number };
  [accountRoute]: NavigatorScreenParams<AccountParamsList>;
};

export type AccountParamsList = {
  [openBankingRoute]: undefined;
  [contributionAddRoute]: { goalId: number };
  [contributionEditRoute]: { id: number };
  [contributionRoute]: { id: number };
  [contributionsRoute]: { goalId: number };
  [goalAddRoute]: undefined;
  [goalEditRoute]: { id: number };
  [goalRoute]: { id: number };
  [categoryAddRoute]: undefined;
  [categoryEditRoute]: { id: number };
  [categoryRoute]: { id: number };
  [transactionAddRoute]: undefined;
  [transactionEditRoute]: { id: number };
  [transactionRoute]: { id: number };
  [invitationAddRoute]: undefined;
  [invitationRoute]: { id: number };
  [profileRoute]: undefined;
  [memberRoute]: { id: number };
  [memberEditRoute]: { id: number };
  [bottomTabsRoute]: NavigatorScreenParams<BottomTabsParamsList>;
};

export type BottomTabsParamsList = {
  [homeRoute]: undefined;
  [transactionsRoute]: undefined;
  [categoriesRoute]: undefined;
  [goalsRoute]: undefined;
  [invitationsRoute]: undefined;
  [membersRoute]: undefined;
};

const AuthStack = createStackNavigator<AuthParamsList>({
  initialRouteName: welcomeRoute,
  screens: {
    [welcomeRoute]: WelcomeScreen,
    [sendOtpRoute]: SendOtpScreen,
    [verifyOtpRoute]: VerifyOtpScreen,
    [registrationRoute]: RegistrationScreen,
  },
});

const BottomTabs = createBottomTabNavigator<BottomTabsParamsList>({
  initialRouteName: homeRoute,
  screens: {
    [homeRoute]: HomeScreen,
    [transactionsRoute]: TransactionsScreen,
    [categoriesRoute]: CategoriesScreen,
    [goalsRoute]: GoalsScreen,
    [invitationsRoute]: InvitationsScreen,
    [membersRoute]: MembersScreen,
  },
});

const AccountStack = createStackNavigator<AccountParamsList>({
  initialRouteName: bottomTabsRoute,
  screenOptions: stackOptions,
  screens: {
    [openBankingRoute]: View,
    [contributionAddRoute]: ContributionAddScreen,
    [contributionEditRoute]: ContributionEditScreen,
    [contributionRoute]: ContributionScreen,
    [contributionsRoute]: ContributionsScreen,
    [goalAddRoute]: GoalAddScreen,
    [goalEditRoute]: GoalEditScreen,
    [goalRoute]: GoalScreen,
    [categoryAddRoute]: CategoryAddScreen,
    [categoryEditRoute]: CategoryEditScreen,
    [categoryRoute]: CategoryScreen,
    [transactionAddRoute]: TransactionAddScreen,
    [transactionEditRoute]: TransactionEditScreen,
    [transactionRoute]: TransactionScreen,
    [invitationRoute]: InvitationScreen,
    [invitationAddRoute]: InvitationAddScreen,
    [profileRoute]: ProfileScreen,
    [memberRoute]: MemberScreen,
    [memberEditRoute]: MemberEditScreen,
    [bottomTabsRoute]: BottomTabs,
  },
});

const MainStack = createStackNavigator<MainParamsList>({
  initialRouteName: accountsRoute,
  screenOptions: stackOptions,
  screens: {
    [accountsRoute]: AccountsScreen,
    [accountAddRoute]: AccountAddScreen,
    [accountEditRoute]: AccountEditScreen,
    [accountRoute]: { if: useIsAccountSelected, screen: AccountStack },
  },
});

const RootStack = createStackNavigator<RootParamsList>({
  screenOptions: headerHiddenOptions,
  screens: {
    [authRoute]: { if: useIsLoggedOut, screen: AuthStack },
    [mainRoute]: { if: useIsLoggedIn, screen: MainStack },
    [privacyPolicyRoute]: PrivacyPolicyScreen,
    [termsAndConditionsRoute]: TermsAndConditionsScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
