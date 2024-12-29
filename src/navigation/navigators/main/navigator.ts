import { createStackNavigator } from '@react-navigation/stack';
import { AccountAddScreen, AccountEditScreen, AccountsScreen } from '@screens';

import { useInOnboarded, useIsAccountSelected, useIsNotOnboarded } from '../../hooks';
import { stackOptions } from '../../options';
import AccountStack from '../account/navigator';
import { accountRoute } from '../account/types';
import OnboardingStack from '../onboarding/navigator';
import { onboardingRoute } from '../onboarding/types';

import { accountAddRoute, accountEditRoute, accountsRoute, MainParamsList } from './types';

const MainStack = createStackNavigator<MainParamsList>({
  screenOptions: stackOptions,
  screens: {
    [accountRoute]: { if: useIsAccountSelected, screen: AccountStack },
    [onboardingRoute]: { if: useIsNotOnboarded, screen: OnboardingStack },
    [accountsRoute]: { if: useInOnboarded, screen: AccountsScreen },
    [accountAddRoute]: AccountAddScreen,
    [accountEditRoute]: AccountEditScreen,
  },
});

export default MainStack;
