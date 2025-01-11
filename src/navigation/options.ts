import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { StackNavigationOptions } from '@react-navigation/stack';
import { colors } from '@styles/v2/urbanistTheme';
import { Easing } from 'react-native-reanimated';

import { CardOverlay, StackHeaderLeft } from './components';
import {
  headerLeftContainerStyle,
  headerRightContainerStyle,
  headerTitleContainerStyle,
  headerTitleStyle,
  tabBarLabelStyle,
  tabBarStyle,
} from './styles';

export const hiddenOptions: StackNavigationOptions = {
  headerShown: false,
};

export const bottomSheetOptions: StackNavigationOptions = {
  gestureEnabled: false,
  presentation: 'transparentModal',
  detachPreviousScreen: false,
  cardOverlay: CardOverlay,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: { duration: 500, easing: Easing.inOut(Easing.ease) },
    },
    close: {
      animation: 'timing',
      config: { duration: 500, easing: Easing.inOut(Easing.ease) },
    },
  },
};

export const stackOptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerMode: 'screen',
  headerShown: true,
  headerShadowVisible: false,
  headerLeft: StackHeaderLeft,
  headerTitleContainerStyle,
  headerLeftContainerStyle,
  headerRightContainerStyle,
  headerTitleStyle,
};

export const bottomTabsOptions: BottomTabNavigationOptions = {
  headerTitleAlign: 'center',
  animation: 'shift',
  headerShadowVisible: false,
  headerTitleContainerStyle,
  headerLeftContainerStyle,
  headerRightContainerStyle,
  headerTitleStyle,
  tabBarStyle,
  tabBarLabelStyle,
  tabBarActiveTintColor: colors.text.accent,
  tabBarInactiveTintColor: colors.text.tertiary,
  tabBarHideOnKeyboard: true,
};
