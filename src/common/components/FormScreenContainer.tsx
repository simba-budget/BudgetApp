import { flex1 } from '@styles/common';
import { sizes } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  KeyboardState,
  useAnimatedKeyboard,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface FormScreenContainerProps {
  children: ReactNode;
}

const FormScreenContainer = ({ children }: FormScreenContainerProps) => {
  const { bottom } = useSafeAreaInsets();
  const { state, height } = useAnimatedKeyboard();

  const containerStyle = useAnimatedStyle(() => {
    const isKeyboardActive = activeStates.includes(state.value);
    const paddingBottom = (isKeyboardActive ? height.value : bottom) + sizes.m;
    return { paddingBottom };
  });

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      {children}
    </Animated.View>
  );
};

const activeStates = [KeyboardState.OPEN, KeyboardState.OPENING];

const styles = StyleSheet.create({
  container: {
    ...flex1,
    backgroundColor: colors.background.primary,
  },
});

export default FormScreenContainer;
