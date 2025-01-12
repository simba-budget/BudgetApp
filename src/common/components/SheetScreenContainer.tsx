import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

import BottomSheet2 from './BottomSheet2';
import KeyboardAvoidingView from './KeyboardAvoidingView';

export interface SheetScreenContainerProps {
  children: ReactNode;
  isBottomSafe?: boolean;
  minHeight?: ViewStyle['minHeight'];
}

const SheetScreenContainer = ({
  children,
  isBottomSafe,
  minHeight,
}: SheetScreenContainerProps) => {
  const navigation = useNavigation<RootNavigation>();

  return (
    <KeyboardAvoidingView>
      <BottomSheet2
        minHeight={minHeight}
        isBottomSafe={isBottomSafe}
        onClose={navigation.goBack}>
        {children}
      </BottomSheet2>
    </KeyboardAvoidingView>
  );
};

export default SheetScreenContainer;
