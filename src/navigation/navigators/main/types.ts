import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import { AccountParams, accountRoute } from '../account/types';
import { OnboardingParams, onboardingRoute } from '../onboarding/types';

export type MainParams = {
  [accountsLoadingRoute]: undefined;
  [accountAddRoute]: undefined;
  [notificationsRoute]: undefined;
  [accountEditRoute]: { id: number };
  [accountRoute]: NavigatorScreenParams<AccountParams>;
  [onboardingRoute]: NavigatorScreenParams<OnboardingParams>;
};

export type MainRoute = 'Main';
export const mainRoute: MainRoute = 'Main';
export type MainNavigation = StackNavigationProp<MainParams>;

export type AccountsLoadingRoute = 'AccountsLoading';
export const accountsLoadingRoute: AccountsLoadingRoute = 'AccountsLoading';

export type AccountAddRoute = 'AccountAdd';
export const accountAddRoute: AccountAddRoute = 'AccountAdd';

export type NotificationsRoute = 'Notifications';
export const notificationsRoute: NotificationsRoute = 'Notifications';

export type AccountEditRoute = 'AccountEdit';
export const accountEditRoute: AccountEditRoute = 'AccountEdit';
export type AccountEditScreenProps = StackScreenProps<MainParams, AccountEditRoute>;
