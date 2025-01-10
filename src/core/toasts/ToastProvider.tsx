import { sizes } from '@styles/lightTheme';
import React, { ReactNode, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { ToastConfig } from 'react-native-toast-message/lib/src/types';

import getConfig from './getConfig';

export interface ToastProviderProps {
  children: ReactNode;
}

const ToastProvider = ({ children }: ToastProviderProps) => {
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const config = useMemo<ToastConfig>(() => getConfig(width), [width]);

  return (
    <>
      {children}
      <Toast position="top" topOffset={top + sizes.s} config={config} />
    </>
  );
};

export default ToastProvider;
