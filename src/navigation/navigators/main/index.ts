import { AccountsActions } from '@features/accounts/containers';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { AccountAddScreen, AccountEditScreen, AccountsScreen } from '@screens';

import { useIsNotOnboarded } from '../../hooks';
import { headerHiddenOptions, stackOptions } from '../../options';
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

const accountsOptions: StackNavigationOptions = {
  headerRight: AccountsActions,
};

const MainStack = createStackNavigator<MainParams>({
  screenOptions: stackOptions,
  screens: {
    [onboardingRoute]: { if: useIsNotOnboarded, screen: OnboardingStack },
    [accountsRoute]: { screen: AccountsScreen, options: accountsOptions },
    [accountRoute]: { screen: AccountStack, options: headerHiddenOptions },
    [accountAddRoute]: AccountAddScreen,
    [accountEditRoute]: AccountEditScreen,
  },
});

export { type MainParams, type AccountEditScreenProps, type MainNavigation, mainRoute };
export * from './actions';
export default MainStack;
