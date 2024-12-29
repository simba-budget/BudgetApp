import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import { AccountParamsList, accountRoute } from '../account/types';
import { OnboardingParamsList, onboardingRoute } from '../onboarding/types';

export type MainParamsList = {
  [accountsRoute]: undefined;
  [accountAddRoute]: undefined;
  [accountEditRoute]: { id: number };
  [accountRoute]: NavigatorScreenParams<AccountParamsList>;
  [onboardingRoute]: NavigatorScreenParams<OnboardingParamsList>;
};

export type MainRoute = 'Main';
export const mainRoute: MainRoute = 'Main';
export type MainNavigation = StackNavigationProp<MainParamsList>;

export type AccountsRoute = 'Accounts';
export const accountsRoute: AccountsRoute = 'Accounts';

export type AccountAddRoute = 'AccountAdd';
export const accountAddRoute: AccountAddRoute = 'AccountAdd';

export type AccountEditRoute = 'AccountEdit';
export const accountEditRoute: AccountEditRoute = 'AccountEdit';
export type AccountEditScreenProps = StackScreenProps<MainParamsList, AccountEditRoute>;
