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

import { headerHiddenOptions } from './options';
import {
  authRoute,
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
};

const AuthStack = createStackNavigator<AuthParamsList>({
  initialRouteName: sendOtpRoute,
  screens: {
    [sendOtpRoute]: SendOtpScreen,
    [verifyOtpRoute]: VerifyOtpScreen,
    [registrationRoute]: RegistrationScreen,
  },
});

const RootStack = createStackNavigator<RootParamsList>({
  initialRouteName: welcomeRoute,
  screenOptions: headerHiddenOptions,
  screens: {
    [welcomeRoute]: WelcomeScreen,
    [privacyPolicyRoute]: PrivacyPolicyScreen,
    [termsAndConditionsRoute]: TermsAndConditionsScreen,
    [authRoute]: AuthStack,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
