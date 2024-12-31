import { createStackNavigator } from '@react-navigation/stack';
import {
  InitialBalanceScreen,
  InitialInvitationsScreen,
  NameScreen,
} from '@screens';

import { stackOptions } from '../../options';

import {
  initialBalanceRoute,
  initialInvitationsRoute,
  nameRoute,
  OnboardingNavigation,
  OnboardingParams,
  onboardingRoute,
} from './types';

const OnboardingStack = createStackNavigator<OnboardingParams>({
  screenOptions: stackOptions,
  screens: {
    [nameRoute]: NameScreen,
    [initialBalanceRoute]: InitialBalanceScreen,
    [initialInvitationsRoute]: InitialInvitationsScreen,
  },
});

export { type OnboardingParams, type OnboardingNavigation, onboardingRoute };
export * from './actions';
export default OnboardingStack;
