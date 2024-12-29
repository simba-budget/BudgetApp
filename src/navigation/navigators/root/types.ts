import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { AuthParamsList, authRoute } from '../auth/types';
import { MainParamsList, mainRoute } from '../main/types';

export type RootParamsList = {
  [privacyPolicyRoute]: undefined;
  [termsAndConditionsRoute]: undefined;
  [authRoute]: NavigatorScreenParams<AuthParamsList>;
  [mainRoute]: NavigatorScreenParams<MainParamsList>;
};

export type RootNavigation = StackNavigationProp<RootParamsList>;

export type PrivacyPolicyRoute = 'PrivacyPolicy';
export const privacyPolicyRoute: PrivacyPolicyRoute = 'PrivacyPolicy';

export type TermsAndConditionsRoute = 'TermsAndConditions';
export const termsAndConditionsRoute: TermsAndConditionsRoute = 'TermsAndConditions';
