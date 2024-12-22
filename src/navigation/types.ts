import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import { AuthParamsList, MainParamsList, RootParamsList } from './navigation';

export type RootNavigation = StackNavigationProp<RootParamsList>;

export type WelcomeRoute = 'Welcome';
export const welcomeRoute: WelcomeRoute = 'Welcome';

export type PrivacyPolicyRoute = 'PrivacyPolicy';
export const privacyPolicyRoute: PrivacyPolicyRoute = 'PrivacyPolicy';

export type TermsAndConditionsRoute = 'TermsAndConditions';
export const termsAndConditionsRoute: TermsAndConditionsRoute = 'TermsAndConditions';

export type AuthRoute = 'Auth';
export const authRoute: AuthRoute = 'Auth';
export type AuthNavigation = StackNavigationProp<AuthParamsList>;

export type SendOtpRoute = 'SendOtp';
export const sendOtpRoute: SendOtpRoute = 'SendOtp';

export type VerifyOtpRoute = 'VerifyOtp';
export const verifyOtpRoute: VerifyOtpRoute = 'VerifyOtp';
export type VerifyOtpScreenProps = StackScreenProps<AuthParamsList, VerifyOtpRoute>;

export type RegistrationRoute = 'Registration';
export const registrationRoute: RegistrationRoute = 'Registration';

export type MainRoute = 'Main';
export const mainRoute: MainRoute = 'Main';
export type MainNavigation = StackNavigationProp<MainParamsList>;

export type OpenBankingRoute = 'OpenBanking';
export const openBankingRoute: OpenBankingRoute = 'OpenBanking';
