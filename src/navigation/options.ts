import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { StackNavigationOptions } from '@react-navigation/stack';
import { colors } from '@styles/v2/urbanistTheme';
import { Easing } from 'react-native-reanimated';

import { StackHeaderLeft } from './components';
import {
  cardStyle,
  headerLeftContainerStyle,
  headerRightContainerStyle,
  headerStyle,
  headerTitleContainerStyle,
  headerTitleStyle,
  sceneStyle,
  tabBarLabelStyle,
  tabBarStyle,
} from './styles';

export const hiddenOptions = {
  headerShown: false,
};

export const bottomSheetOptions: StackNavigationOptions = {
  gestureEnabled: false,
  presentation: 'transparentModal',
  detachPreviousScreen: false,
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
  headerStyle,
  cardStyle,
};

export const bottomTabsOptions: BottomTabNavigationOptions = {
  headerTitleAlign: 'left',
  headerShadowVisible: false,
  headerTitleContainerStyle,
  headerLeftContainerStyle,
  headerRightContainerStyle,
  headerTitleStyle,
  headerStyle,
  sceneStyle,
  tabBarStyle,
  tabBarLabelStyle,
  tabBarActiveTintColor: colors.text.accent,
  tabBarInactiveTintColor: colors.text.tertiary,
};
