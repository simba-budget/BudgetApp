import { justifyEnd, justifyStart, rowCenter } from '@styles/common';
import { padding } from '@styles/lightTheme';
import { colors, fonts, fontSizes } from '@styles/v2/urbanistTheme';
import { TextStyle, ViewStyle } from 'react-native';

export const headerTitleContainerStyle: ViewStyle = {
  marginLeft: 0,
  marginRight: 0,
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
