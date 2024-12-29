import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { StackNavigationOptions } from '@react-navigation/stack';
import { colors, fonts, fontSizes } from '@styles/v2/urbanistTheme';
import { TextStyle, ViewStyle } from 'react-native';

import {
  headerLeftContainerStyle,
  headerRightContainerStyle,
  headerTitleContainerStyle,
} from './styles';

export const headerHiddenOptions = {
  headerShown: false,
};

export const headerTitleStyle: TextStyle = {
  ...fonts.urbanist.medium,
  ...fontSizes.l,
  color: colors.text.primary,
};

export const headerStyle: ViewStyle = {
  backgroundColor: colors.background.primary,
};

export const cardStyle: ViewStyle = {
  backgroundColor: colors.background.primary,
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
