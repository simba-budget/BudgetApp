import { justifyEnd, justifyStart, rowCenter } from '@styles/common';
import { padding, sizes } from '@styles/lightTheme';
import { colors, fonts, fontSizes } from '@styles/v2/urbanistTheme';
import { Dimensions, TextStyle, ViewStyle } from 'react-native';

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

const tabBarRoutesCount = 5;
const width = Dimensions.get('window').width;
const tabRoutesPadding = ((tabBarRoutesCount - 1) * sizes.xxs) / 2;
const tabBarSideOffset = (width - 56 * tabBarRoutesCount) / 2 - tabRoutesPadding;

export const tabBarStyle: ViewStyle = {
  elevation: 0,
  backgroundColor: colors.background.secondary,
  borderColor: colors.border.primary,
  borderWidth: 1,
  position: 'absolute',
  bottom: 30,
  marginLeft: tabBarSideOffset,
  marginRight: tabBarSideOffset,
  height: 56,
  borderRadius: 28,
  padding: 0,
  paddingBottom: 0,
  alignItems: 'center',
  justifyContent: 'center',
};

export const tabBarIconStyle: ViewStyle = {
  width: '100%',
  height: '100%',
};
