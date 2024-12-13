import { justifyEnd, justifyStart, rowCenter } from '@styles/common';
import { padding } from '@styles/lightTheme';
import { ViewStyle } from 'react-native';

export const headerTitleContainerStyle: ViewStyle = {
  marginLeft: 0,
  marginRight: 0,
};

export const headerLeftContainerStyle: ViewStyle = {
  ...justifyStart,
  ...rowCenter,
  ...padding('left')('l'),
};

export const headerRightContainerStyle: ViewStyle = {
  ...justifyEnd,
  ...rowCenter,
  ...padding('right')('l'),
};
