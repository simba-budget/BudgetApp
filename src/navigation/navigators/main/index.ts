import { createStackNavigator } from '@react-navigation/stack';
import { AccountAddScreen, AccountEditScreen, AccountsScreen } from '@screens';

import { useInOnboarded, useIsAccountSelected, useIsNotOnboarded } from '../../hooks';
import { stackOptions } from '../../options';
import AccountStack, { accountRoute } from '../account';
import OnboardingStack, { onboardingRoute } from '../onboarding';

import {
  accountAddRoute,
  accountEditRoute,
  AccountEditScreenProps,
  accountsRoute,
  MainNavigation,
  MainParams,
  mainRoute,
} from './types';

const MainStack = createStackNavigator<MainParams>({
  screenOptions: stackOptions,
  screens: {
    [accountRoute]: { if: useIsAccountSelected, screen: AccountStack },
    [onboardingRoute]: { if: useIsNotOnboarded, screen: OnboardingStack },
    [accountsRoute]: { if: useInOnboarded, screen: AccountsScreen },
    [accountAddRoute]: AccountAddScreen,
    [accountEditRoute]: AccountEditScreen,
  },
});

export { type MainParams, type AccountEditScreenProps, type MainNavigation, mainRoute };
export * from './actions';
export default MainStack;
