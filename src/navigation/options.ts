import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { StackNavigationOptions } from '@react-navigation/stack';
import { colors } from '@styles/v2/urbanistTheme';

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

export const headerHiddenOptions = {
  headerShown: false,
};

export const stackOptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
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
