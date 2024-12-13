import { StackNavigationOptions } from '@react-navigation/stack';
import { fonts, fontSizes, themeTextColors } from '@styles/lightTheme';
import { TextStyle } from 'react-native';

import { StackHeaderLeft } from './components';
import {
  headerLeftContainerStyle,
  headerRightContainerStyle,
  headerTitleContainerStyle,
} from './styles';

export const headerHiddenOptions = {
  headerShown: false,
};

export const headerTitleStyle: TextStyle = {
  ...fonts.spaceGrotesk.medium,
  ...fontSizes.m,
  color: themeTextColors.primary,
};

export const stackOptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTitle: '',
  headerShadowVisible: false,
  headerTitleContainerStyle,
  headerLeftContainerStyle,
  headerRightContainerStyle,
  headerLeft: StackHeaderLeft,
  headerTitleStyle,
};
