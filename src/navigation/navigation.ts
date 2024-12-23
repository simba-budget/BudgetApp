import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation, NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  AccountsScreen,
  CategoriesScreen,
  ContributionsScreen,
  GoalScreen,
  GoalsScreen,
  HomeScreen,
  InvitationsScreen,
  PrivacyPolicyScreen,
  RegistrationScreen,
  SendOtpScreen,
  TermsAndConditionsScreen,
  TransactionsScreen,
  VerifyOtpScreen,
  WelcomeScreen,
} from '@screens';
import { View } from 'react-native';

import { useIsAccountSelected, useIsLoggedIn, useIsLoggedOut } from './hooks';
import { headerHiddenOptions } from './options';
import {
  accountRoute,
  accountsRoute,
  authRoute,
  bottomTabsRoute,
  categoriesRoute,
  contributionsRoute,
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
  [accountRoute]: NavigatorScreenParams<AccountParamsList>;
};

export type AccountParamsList = {
  [openBankingRoute]: undefined;
  [contributionsRoute]: { goalId: number };
  [goalRoute]: { id: number };
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
    [contributionsRoute]: ContributionsScreen,
    [goalRoute]: GoalScreen,
    [bottomTabsRoute]: BottomTabs,
  },
});

const MainStack = createStackNavigator<MainParamsList>({
  initialRouteName: accountsRoute,
  screenOptions: headerHiddenOptions,
  screens: {
    [accountsRoute]: AccountsScreen,
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
