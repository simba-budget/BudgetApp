import { colors } from '@styles/v2/urbanistTheme';
import { FlexStyle, ViewStyle } from 'react-native';

export const fullWidth: FlexStyle = {
  width: '100%',
};

export const flex1: FlexStyle = {
  flex: 1,
};

export const row: FlexStyle = {
  flexDirection: 'row',
};

export const rowCenter: FlexStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};

export const center: FlexStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const alignStart: FlexStyle = {
  alignItems: 'flex-start',
};

export const alignEnd: FlexStyle = {
  alignItems: 'flex-end',
};

export const alignCenter: FlexStyle = {
  alignItems: 'center',
};

export const justifyEnd: FlexStyle = {
  justifyContent: 'flex-end',
};

export const justifyCenter: FlexStyle = {
  justifyContent: 'center',
};

export const selfCenter: FlexStyle = {
  alignSelf: 'center',
};

export const selfStart: FlexStyle = {
  alignSelf: 'flex-start',
};

export const justifyStart: FlexStyle = {
  justifyContent: 'flex-start',
};

export const justifyBetween: FlexStyle = {
  justifyContent: 'space-between',
};

export const relative: FlexStyle = {
  position: 'relative',
};

export const shadow: ViewStyle = {
  shadowColor: colors.common.black,
  shadowOffset: { width: 0, height: 0 },
  shadowRadius: 4,
  shadowOpacity: 0.1,
  zIndex: 2,
};
