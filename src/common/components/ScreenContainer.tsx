import React, { FC, ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import View from './View';

export interface ScreenContainerProps {
  style?: StyleProp<ViewStyle>;
  isDark?: boolean;
  children: ReactNode;
}

const ScreenContainer: FC<ScreenContainerProps> = (props) => {
  const { children, style, isDark = false } = props;

  return (
    <View flex1 bgColor={isDark ? 'primary500' : 'white'} style={style}>
      {children}
    </View>
  );
};

export default ScreenContainer;
