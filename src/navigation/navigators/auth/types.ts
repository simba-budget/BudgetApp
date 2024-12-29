import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export type AuthParamsList = {
  [welcomeRoute]: undefined;
  [sendOtpRoute]: undefined;
  [verifyOtpRoute]: { email: string; expirationDate: string };
  [registrationRoute]: undefined;
};

export type AuthRoute = 'Auth';
export const authRoute: AuthRoute = 'Auth';
export type AuthNavigation = StackNavigationProp<AuthParamsList>;

export type WelcomeRoute = 'Welcome';
export const welcomeRoute: WelcomeRoute = 'Welcome';

export type SendOtpRoute = 'SendOtp';
export const sendOtpRoute: SendOtpRoute = 'SendOtp';

export type VerifyOtpRoute = 'VerifyOtp';
export const verifyOtpRoute: VerifyOtpRoute = 'VerifyOtp';
export type VerifyOtpScreenProps = StackScreenProps<AuthParamsList, VerifyOtpRoute>;

export type RegistrationRoute = 'Registration';
export const registrationRoute: RegistrationRoute = 'Registration';
