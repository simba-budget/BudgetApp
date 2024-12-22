import { createStaticNavigation, NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  PrivacyPolicyScreen,
  RegistrationScreen,
  SendOtpScreen,
  TermsAndConditionsScreen,
  VerifyOtpScreen,
  WelcomeScreen,
} from '@screens';

import PlaidScreen from '../screens/PlaidScreen';

import { useIsLoggedIn, useIsLoggedOut } from './hooks';
import { headerHiddenOptions, stackOptions } from './options';
import {
  authRoute,
  mainRoute,
  openBankingRoute,
  privacyPolicyRoute,
  registrationRoute,
  sendOtpRoute,
  termsAndConditionsRoute,
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
  [openBankingRoute]: undefined;
};

const AuthStack = createStackNavigator<AuthParamsList>({
  initialRouteName: sendOtpRoute,
  screenOptions: stackOptions,
  screens: {
    [sendOtpRoute]: SendOtpScreen,
    [verifyOtpRoute]: VerifyOtpScreen,
    [registrationRoute]: RegistrationScreen,
  },
});

const MainStack = createStackNavigator<MainParamsList>({
  initialRouteName: openBankingRoute,
  screenOptions: stackOptions,
  screens: {
    [openBankingRoute]: PlaidScreen,
  },
});

const RootStack = createStackNavigator<RootParamsList>({
  initialRouteName: mainRoute,
  screenOptions: headerHiddenOptions,
  screens: {
    [welcomeRoute]: WelcomeScreen,
    [privacyPolicyRoute]: PrivacyPolicyScreen,
    [termsAndConditionsRoute]: TermsAndConditionsScreen,
    [authRoute]: {
      if: useIsLoggedOut,
      screen: AuthStack,
    },
    [mainRoute]: {
      if: useIsLoggedIn,
      screen: MainStack,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
