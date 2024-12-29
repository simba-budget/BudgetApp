import { createStackNavigator } from '@react-navigation/stack';
import { PrivacyPolicyScreen, TermsAndConditionsScreen } from '@screens';

import { useIsLoggedIn, useIsLoggedOut } from '../../hooks';
import { headerHiddenOptions } from '../../options';
import AuthStack from '../auth/navigator';
import { authRoute } from '../auth/types';
import MainStack from '../main/navigator';
import { mainRoute } from '../main/types';

import { privacyPolicyRoute, RootParamsList, termsAndConditionsRoute } from './types';

const RootStack = createStackNavigator<RootParamsList>({
  screenOptions: headerHiddenOptions,
  screens: {
    [authRoute]: { if: useIsLoggedOut, screen: AuthStack },
    [mainRoute]: { if: useIsLoggedIn, screen: MainStack },
    [privacyPolicyRoute]: PrivacyPolicyScreen,
    [termsAndConditionsRoute]: TermsAndConditionsScreen,
  },
});

export default RootStack;
