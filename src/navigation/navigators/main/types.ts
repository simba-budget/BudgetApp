import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import { AccountParams, accountRoute } from '../account/types';
import { OnboardingParams, onboardingRoute } from '../onboarding/types';

export type MainParams = {
  [accountsRoute]: undefined;
  [accountAddRoute]: undefined;
  [accountEditRoute]: { id: number };
  [accountRoute]: NavigatorScreenParams<AccountParams>;
  [onboardingRoute]: NavigatorScreenParams<OnboardingParams>;
};

export type MainRoute = 'Main';
export const mainRoute: MainRoute = 'Main';
export type MainNavigation = StackNavigationProp<MainParams>;

export type AccountsRoute = 'Accounts';
export const accountsRoute: AccountsRoute = 'Accounts';

export type AccountAddRoute = 'AccountAdd';
export const accountAddRoute: AccountAddRoute = 'AccountAdd';

export type AccountEditRoute = 'AccountEdit';
export const accountEditRoute: AccountEditRoute = 'AccountEdit';
export type AccountEditScreenProps = StackScreenProps<MainParams, AccountEditRoute>;
