import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { ReactNode } from 'react';

export interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
);

export default RootLayout;
