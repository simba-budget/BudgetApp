import { createStackNavigator } from '@react-navigation/stack';
import { InitialBalanceScreen, InitialInvitationsScreen, NameScreen } from '@screens';

import { stackOptions } from '../../options';

import {
  initialBalanceRoute,
  initialInvitationsRoute,
  nameRoute,
  OnboardingParamsList,
} from './types';

const OnboardingStack = createStackNavigator<OnboardingParamsList>({
  screenOptions: stackOptions,
  screens: {
    [nameRoute]: NameScreen,
    [initialBalanceRoute]: InitialBalanceScreen,
    [initialInvitationsRoute]: InitialInvitationsScreen,
  },
});

export default OnboardingStack;
