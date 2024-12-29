import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { AuthParams, authRoute } from '../auth/types';
import { MainParams, mainRoute } from '../main/types';

export type RootParams = {
  [privacyPolicyRoute]: undefined;
  [termsAndConditionsRoute]: undefined;
  [authRoute]: NavigatorScreenParams<AuthParams>;
  [mainRoute]: NavigatorScreenParams<MainParams>;
};

export type RootNavigation = StackNavigationProp<RootParams>;

export type PrivacyPolicyRoute = 'PrivacyPolicy';
export const privacyPolicyRoute: PrivacyPolicyRoute = 'PrivacyPolicy';

export type TermsAndConditionsRoute = 'TermsAndConditions';
export const termsAndConditionsRoute: TermsAndConditionsRoute = 'TermsAndConditions';
