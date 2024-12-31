import { createStackNavigator } from '@react-navigation/stack';
import {
  RegistrationScreen,
  SendOtpScreen,
  VerifyOtpScreen,
  WelcomeScreen,
} from '@screens';

import {
  AuthNavigation,
  AuthParams,
  authRoute,
  registrationRoute,
  sendOtpRoute,
  verifyOtpRoute,
  VerifyOtpScreenProps,
  welcomeRoute,
} from './types';

const AuthStack = createStackNavigator<AuthParams>({
  initialRouteName: welcomeRoute,
  screens: {
    [welcomeRoute]: WelcomeScreen,
    [sendOtpRoute]: SendOtpScreen,
    [verifyOtpRoute]: VerifyOtpScreen,
    [registrationRoute]: RegistrationScreen,
  },
});

export {
  type AuthParams,
  type VerifyOtpScreenProps,
  type AuthNavigation,
  authRoute,
};
export * from './actions';
export default AuthStack;
