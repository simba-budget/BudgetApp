import { createStackNavigator } from '@react-navigation/stack';
import { PrivacyPolicyScreen, TermsAndConditionsScreen } from '@screens';

import { useIsLoggedIn, useIsLoggedOut } from '../../hooks';
import { hiddenOptions } from '../../options';
import AuthStack, { authRoute } from '../auth';
import MainStack, { mainRoute } from '../main';

import {
  privacyPolicyRoute,
  RootNavigation,
  RootParams,
  termsAndConditionsRoute,
} from './types';

const RootStack = createStackNavigator<RootParams>({
  screenOptions: hiddenOptions,
  screens: {
    [authRoute]: { if: useIsLoggedOut, screen: AuthStack },
    [mainRoute]: { if: useIsLoggedIn, screen: MainStack },
    [privacyPolicyRoute]: PrivacyPolicyScreen,
    [termsAndConditionsRoute]: TermsAndConditionsScreen,
  },
});

export { type RootParams, type RootNavigation };
export * from './actions';
export default RootStack;
