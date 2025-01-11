import { Theme } from '@react-navigation/native';
import { justifyEnd, justifyStart, rowCenter } from '@styles/common';
import { padding, sizes } from '@styles/lightTheme';
import { colors, fonts, fontSizes } from '@styles/v2/urbanistTheme';
import { TextStyle, ViewStyle } from 'react-native';

export const theme: Theme = {
  dark: true,
  colors: {
    background: colors.background.primary,
    card: colors.background.primary,
    primary: colors.background.accent,
    text: colors.text.primary,
    border: colors.border.primary,
    notification: colors.background.accent,
  },
  fonts: {
    regular: {
      fontFamily: fonts.urbanist.regular.fontFamily,
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: fonts.urbanist.medium.fontFamily,
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: fonts.urbanist.bold.fontFamily,
      fontWeight: 'normal',
    },
    heavy: {
      fontFamily: fonts.urbanist.black.fontFamily,
      fontWeight: 'normal',
    },
  },
};

export const headerTitleContainerStyle: ViewStyle = {
  marginLeft: 0,
  marginRight: 0,
  paddingBottom: sizes.xxxs,
};

export const headerLeftContainerStyle: ViewStyle = {
  ...justifyStart,
  ...rowCenter,
  ...padding('left')('m'),
};

export const headerRightContainerStyle: ViewStyle = {
  ...justifyEnd,
  ...rowCenter,
  ...padding('right')('m'),
};

export const headerTitleStyle: TextStyle = {
  ...fonts.urbanist.semiBold,
  ...fontSizes.l,
  color: colors.text.primary,
};

export const tabBarStyle: ViewStyle = {
  elevation: 0,
  backgroundColor: colors.background.secondary,
  borderTopColor: colors.border.primary,
  borderTopWidth: 1,
};

export const tabBarLabelStyle: TextStyle = {
  fontFamily: fonts.urbanist.medium.fontFamily,
  fontSize: fontSizes.xxs.fontSize,
};
