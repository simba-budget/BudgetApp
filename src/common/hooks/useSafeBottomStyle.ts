import {
  KeyboardState,
  useAnimatedKeyboard,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const activeStates = [KeyboardState.OPEN, KeyboardState.OPENING];

export interface Options {
  additionalPadding?: number;
}

const useSafeBottomStyle = () => {
  const { bottom } = useSafeAreaInsets();
  const { state, height } = useAnimatedKeyboard();

  return useAnimatedStyle(() => {
    const isKeyboardActive = activeStates.includes(state.value);
    const paddingBottom = isKeyboardActive ? height.value : bottom;
    return { paddingBottom };
  });
};

export default useSafeBottomStyle;
