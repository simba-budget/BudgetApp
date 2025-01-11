import { sizes } from '@styles/lightTheme';
import {
  KeyboardState,
  useAnimatedKeyboard,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const activeStates = [KeyboardState.OPEN, KeyboardState.OPENING];

export interface Options {
  isTabsScreen?: boolean;
  additionalPadding?: number;
}

const useSafeBottomStyle = ({
  isTabsScreen,
  additionalPadding = sizes.m,
}: Options = {}) => {
  const { bottom } = useSafeAreaInsets();
  const { state, height } = useAnimatedKeyboard();

  return useAnimatedStyle(() => {
    const safeBottom = isTabsScreen ? 0 : bottom;
    const isKeyboardActive = activeStates.includes(state.value);
    const paddingBottom =
      (isKeyboardActive ? height.value : safeBottom) + additionalPadding;
    return { paddingBottom };
  });
};

export default useSafeBottomStyle;
