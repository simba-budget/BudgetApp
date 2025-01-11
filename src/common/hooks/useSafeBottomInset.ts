import { sizes } from '@styles/lightTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import useIsKeyboardOpen from './useIsKeyboardOpen';

const useSafeBottomInset = () => {
  const { bottom } = useSafeAreaInsets();
  const isKeyboardOpen = useIsKeyboardOpen();
  return (isKeyboardOpen ? 0 : bottom) + sizes.m;
};

export default useSafeBottomInset;
