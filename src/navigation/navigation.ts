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
  InvitationsScreen,
  PrivacyPolicyScreen,
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
import { headerHiddenOptions } from './options';
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
  invitationsRoute,
  mainRoute,
  openBankingRoute,
  privacyPolicyRoute,
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
  [sendOtpRoute]: undefined;
  [verifyOtpRoute]: { email: string; expirationDate: string };
  [registrationRoute]: undefined;
};

export type RootParamsList = {
  [welcomeRoute]: undefined;
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
  [bottomTabsRoute]: NavigatorScreenParams<BottomTabsParamsList>;
};

export type BottomTabsParamsList = {
  [homeRoute]: undefined;
  [transactionsRoute]: undefined;
  [categoriesRoute]: undefined;
  [goalsRoute]: undefined;
  [invitationsRoute]: undefined;
};

const AuthStack = createStackNavigator<AuthParamsList>({
  initialRouteName: sendOtpRoute,
  screens: {
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
  },
});

const AccountStack = createStackNavigator<AccountParamsList>({
  initialRouteName: bottomTabsRoute,
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
    [bottomTabsRoute]: BottomTabs,
  },
});

const MainStack = createStackNavigator<MainParamsList>({
  initialRouteName: accountsRoute,
  screens: {
    [accountsRoute]: AccountsScreen,
    [accountAddRoute]: AccountAddScreen,
    [accountEditRoute]: AccountEditScreen,
    [accountRoute]: { if: useIsAccountSelected, screen: AccountStack },
  },
});

const RootStack = createStackNavigator<RootParamsList>({
  initialRouteName: mainRoute,
  screenOptions: headerHiddenOptions,
  screens: {
    [welcomeRoute]: WelcomeScreen,
    [privacyPolicyRoute]: PrivacyPolicyScreen,
    [termsAndConditionsRoute]: TermsAndConditionsScreen,
    [authRoute]: { if: useIsLoggedOut, screen: AuthStack },
    [mainRoute]: { if: useIsLoggedIn, screen: MainStack },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
