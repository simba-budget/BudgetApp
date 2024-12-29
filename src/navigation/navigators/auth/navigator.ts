import { createStackNavigator } from '@react-navigation/stack';
import { RegistrationScreen, SendOtpScreen, VerifyOtpScreen, WelcomeScreen } from '@screens';

import {
  AuthParamsList,
  registrationRoute,
  sendOtpRoute,
  verifyOtpRoute,
  welcomeRoute,
} from './types';

const AuthStack = createStackNavigator<AuthParamsList>({
  initialRouteName: welcomeRoute,
  screens: {
    [welcomeRoute]: WelcomeScreen,
    [sendOtpRoute]: SendOtpScreen,
    [verifyOtpRoute]: VerifyOtpScreen,
    [registrationRoute]: RegistrationScreen,
  },
});

export default AuthStack;
