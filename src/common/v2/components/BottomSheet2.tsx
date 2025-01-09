import { useIsFocused } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import { padding, sizes } from '@styles/lightTheme';
import { Colors } from '@styles/v2/types';
import { colors } from '@styles/v2/urbanistTheme';
import React, { ReactNode } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Animated, {
  KeyboardState,
  useAnimatedKeyboard,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface BottomSheet2Props {
  children: ReactNode;
  onClose: () => void;
  backgroundColor?: keyof Colors['background'];
}

const activeStates = [KeyboardState.OPEN, KeyboardState.OPENING];

const BottomSheet2 = ({
  onClose,
  children,
  backgroundColor = 'secondary',
}: BottomSheet2Props) => {
  const { bottom } = useSafeAreaInsets();
  const { height, state } = useAnimatedKeyboard();
  const isFocused = useIsFocused();

  const sheetStyle = useAnimatedStyle(() => {
    const isKeyboardActive = activeStates.includes(state.value) && isFocused;
    const paddingBottom = (isKeyboardActive ? height.value : bottom) + sizes.m;
    return { paddingBottom };
  });

  return (
    <View style={flex1}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={flex1} />
      </TouchableWithoutFeedback>
      <Animated.View
        style={[
          styles.container,
          sheetStyle,
          { backgroundColor: colors.background[backgroundColor] },
        ]}>
        <View style={styles.handle} />
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...padding('top')('s'),
    ...padding('bottom')('m'),
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 32,
    backgroundColor: colors.background.secondary,
  },
  handle: {
    alignSelf: 'center',
    width: 32,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.text.tertiary,
  },
});

export default BottomSheet2;
