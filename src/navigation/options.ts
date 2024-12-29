import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { StackNavigationOptions } from '@react-navigation/stack';

import {
  cardStyle,
  headerLeftContainerStyle,
  headerRightContainerStyle,
  headerStyle,
  headerTitleContainerStyle,
  headerTitleStyle,
} from './styles';

export const headerHiddenOptions = {
  headerShown: false,
};

export const stackOptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerShadowVisible: false,
  headerTitleContainerStyle,
  headerLeftContainerStyle,
  headerRightContainerStyle,
  headerTitleStyle,
  headerStyle,
  cardStyle,
};

export const bottomTabsOptions: BottomTabNavigationOptions = {
  headerTitleAlign: 'center',
  headerShadowVisible: false,
  headerTitleContainerStyle,
  headerLeftContainerStyle,
  headerRightContainerStyle,
  headerTitleStyle,
  headerStyle,
};
