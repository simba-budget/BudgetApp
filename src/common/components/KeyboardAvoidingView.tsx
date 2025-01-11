import { useHeaderHeight } from '@react-navigation/elements';
import { flex1 } from '@styles/common';
import React, { ReactNode } from 'react';
import {
  Platform,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface ScreenContainerProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const KeyboardAvoidingView = ({ children, style }: ScreenContainerProps) => {
  const headerHeight = useHeaderHeight();

  return (
    <RNKeyboardAvoidingView
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.select({ ios: 'padding', android: 'height' })}
      style={[flex1, style]}>
      {children}
    </RNKeyboardAvoidingView>
  );
};

export default KeyboardAvoidingView;
