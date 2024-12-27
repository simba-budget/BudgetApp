import React, { FC } from 'react';
import { StatusBar as RNStatusBar, View } from 'react-native';
import { StatusBarProps as RNStatusBarProps } from 'react-native/Libraries/Components/StatusBar/StatusBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type StatusBarProps = RNStatusBarProps;

const StatusBar: FC<StatusBarProps> = (props) => {
  const { translucent, ...rest } = props;
  const { top } = useSafeAreaInsets();
  const height = translucent ? 0 : top;

  return (
    <View style={{ height }}>
      <RNStatusBar translucent backgroundColor="transparent" {...rest} />
    </View>
  );
};

export default StatusBar;
