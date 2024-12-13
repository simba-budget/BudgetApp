import { justifyEnd, justifyStart, rowCenter } from '@styles/common';
import {
  colors,
  fonts,
  fontSizes,
  padding,
  sizes,
  theme,
  themeTextColors,
} from '@styles/lightTheme';
import { TextStyle, ViewStyle } from 'react-native';

export const getHeaderTitleStyle = (isDark: boolean = false): TextStyle => ({
  ...fonts.spaceGrotesk.medium,
  ...fontSizes.m,
  color: themeTextColors[isDark ? 'white' : 'primary'],
});

export const headerTitleContainerStyle: ViewStyle = {
  marginLeft: 0,
  marginRight: 0,
};

export const headerLeftContainerStyle: ViewStyle = {
  ...justifyStart,
  ...rowCenter,
  ...padding('left')(theme.layout.padding),
};

export const headerRightContainerStyle: ViewStyle = {
  ...justifyEnd,
  ...rowCenter,
  ...padding('right')(theme.layout.padding),
};

export const getHeaderHeight = (top: number = 0, height: number = 40) => {
  return height + top + sizes.xs * 2;
};

export const getHeaderStyle = (
  top: number,
  isDark: boolean = false,
  height?: number,
): ViewStyle => ({
  backgroundColor: colors[isDark ? 'primary500' : 'white'],
  height: getHeaderHeight(top, height),
});
