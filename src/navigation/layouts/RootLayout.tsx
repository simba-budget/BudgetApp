import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { PickerProvider } from '@libs/picker';
import React, { ReactNode } from 'react';

export interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <BottomSheetModalProvider>
    <PickerProvider>{children}</PickerProvider>
  </BottomSheetModalProvider>
);

export default RootLayout;
