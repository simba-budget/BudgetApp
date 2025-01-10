import React from 'react';
import {
  StatusBar as RNStatusBar,
  StatusBarProps as RNStatusBarProps,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type StatusBarProps = RNStatusBarProps;

const StatusBar = ({
  translucent,
  barStyle = 'light-content',
  ...rest
}: StatusBarProps) => {
  const { top } = useSafeAreaInsets();
  const height = translucent ? 0 : top;

  return (
    <View style={{ height }}>
      <RNStatusBar
        translucent
        backgroundColor="transparent"
        barStyle={barStyle}
        {...rest}
      />
    </View>
  );
};

export default StatusBar;
