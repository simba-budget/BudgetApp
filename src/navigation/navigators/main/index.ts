import { createStackNavigator } from '@react-navigation/stack';
import {
  AccountAddScreen,
  AccountEditScreen,
  AccountsLoadingScreen,
  NotificationsScreen,
} from '@screens';

import { useIsNotOnboarded } from '../../hooks';
import { hiddenOptions, stackOptions } from '../../options';
import AccountStack, { accountRoute } from '../account';
import OnboardingStack, { onboardingRoute } from '../onboarding';

import {
  accountAddRoute,
  accountEditRoute,
  AccountEditScreenProps,
  accountsLoadingRoute,
  MainNavigation,
  MainParams,
  mainRoute,
  notificationsRoute,
} from './types';

const MainStack = createStackNavigator<MainParams>({
  screenOptions: stackOptions,
  screens: {
    [onboardingRoute]: { if: useIsNotOnboarded, screen: OnboardingStack },
    [accountsLoadingRoute]: {
      screen: AccountsLoadingScreen,
      options: hiddenOptions,
    },
    [accountRoute]: { screen: AccountStack, options: hiddenOptions },
    [accountAddRoute]: AccountAddScreen,
    [accountEditRoute]: AccountEditScreen,
    [notificationsRoute]: NotificationsScreen,
  },
});

export {
  type MainParams,
  type AccountEditScreenProps,
  type MainNavigation,
  mainRoute,
};
export * from './actions';
export default MainStack;
